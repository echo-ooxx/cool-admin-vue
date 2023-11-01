import { isDev, config } from "../config";
import { BaseService, service } from "../service";
import { toCamel } from "../utils";
import { hmr } from "../hook";
import { isArray, isEmpty, isObject } from "lodash-es";

// 获取标签名
function getNames(v: any) {
	return [...Object.getOwnPropertyNames(v.constructor.prototype), ...Object.keys(v)].filter(
		(e) => !["namespace", "constructor", "request", "permission"].includes(e)
	);
}

// 标签名
const names = getNames(new BaseService());

// swagger 地址列表
type SwaggerReturn = {
	openapi: string;
	paths: Record<string, any>;
	info: Record<string, any>;
	tags: {
		name?: string;
		description?: string;
	}[];
	servers: string[];
	components: Record<string, any>;
};
// baseservice api
type ApiItem = {
	name: string;
	api: {
		method: string;
		path: string;
	}[];
	prefix: string;
};

// 创建
export async function createEps() {
	// 创建描述文件
	function createDts(list: any[]) {
		if (!isDev) {
			return false;
		}

		function deep(v: any) {
			for (const i in v) {
				if (v[i].namespace) {
					v[i].namespace = v[i].namespace;

					// 模块
					const item: any = list.find((e: any) => e.prefix.includes(v[i].namespace));

					// 接口
					const api: any[] = item ? item.api : [];

					// 获取方法集合
					[...names, ...getNames(v[i])].forEach((e) => {
						if (!api.find((a) => a.path.includes(e))) {
							api.push({
								path: `/${e}`
							});
						}
					});

					if (item) {
						item.api = api;
					} else {
						list.push({
							prefix: `/${v[i].namespace}`,
							api
						});
					}
				} else {
					deep(v[i]);
				}
			}
		}

		deep(service);

		// 本地服务
		return service.request({
			url: "/__cool_eps",
			method: "POST",
			proxy: false,
			data: {
				service,
				list
			}
		});
	}

	// 设置
	async function set(d?: any) {
		const list: any[] = [];

		if (isArray(d)) {
			d = { d };
		}

		for (const i in d) {
			if (isArray(d[i])) {
				d[i].forEach((e: any) => {
					// 分隔路径
					const arr = e.prefix
						.replace(/\//, "")
						.replace("admin", "")
						.split("/")
						.filter(Boolean)
						.map(toCamel);

					// 遍历
					function deep(d: any, i: number) {
						const k = arr[i];

						if (k) {
							// 是否最后一个
							if (arr[i + 1]) {
								if (!d[k]) {
									d[k] = {};
								}

								deep(d[k], i + 1);
							} else {
								// 本地不存在则创建实例
								if (!d[k]) {
									d[k] = new BaseService({
										namespace: e.prefix.substr(1, e.prefix.length - 1)
									});
								}

								// 创建方法
								e.api.forEach((a: any) => {
									// 方法名
									const n = a.path.replace("/", "");

									// 过滤
									if (!names.includes(n)) {
										// 本地不存在则创建
										if (!d[k][n]) {
											if (n && !/[-:]/g.test(n)) {
												d[k][n] = function (data: any) {
													return this.request({
														url: a.path,
														method: a.method,
														[a.method.toLocaleLowerCase() == "post"
															? "data"
															: "params"]: data
													});
												};
											}
										}
									}
								});

								// 创建权限
								if (!d[k].permission) {
									d[k].permission = {};
									const ks = Array.from(new Set([...names, ...getNames(d[k])]));
									ks.forEach((e) => {
										d[k].permission[e] = `${(d[k] && d[k].namespace
											? d[k].namespace
											: ""
										).replace("admin/", "")}/${e}`.replace(/\//g, ":");
									});
								}
								list.push(e);
							}
						}
					}
					deep(service, 0);
				});
			}
		}

		// 缓存数据
		hmr.setData("service", service);

		createDts(list);
	}

	// 获取
	async function getEps() {
		try {
			// 本地数据
			let list = JSON.parse(__EPS__ || "[]").map(([prefix, name, api]: any[]) => {
				return {
					prefix,
					name,
					api: api.map(([path, method]: string[]) => {
						return {
							method,
							path
						};
					})
				};
			});

			// 接口数据
			if (isDev && config.test.eps) {
				await service
					.request({
						// url: "/admin/base/open/eps"
						url: "/swagger-json"
					})
					.then((res: SwaggerReturn) => {
						if (!isEmpty(res) && isObject(res)) {
							list = formatApis(res);
						}
					});
			}

			if (list) {
				set(list);
			}
		} catch (err) {
			console.error("[Eps] 获取失败！", err);
		}
	}

	// 格式化swagger接口列表

	function formatApis(data: SwaggerReturn): ApiItem[] {
		const { paths } = data;
		const whitelist = ["open", "backend"];
		const reg = /\/{[^}]+}/g;
		const group = Object.keys(paths);

		const _format = group
			.filter((k) => whitelist.indexOf(k.substring(1).split("/")["0"]) >= 0)
			.map((item) => {
				const prefix = item.replace(reg, "");
				const path = "";
				const api = Object.keys(paths[item]).map((method: string) => {
					const _v = paths[item][method];
					return {
						name: _v.operationId,
						dts: {
							parameters: _v.parameters
						},
						method,
						path,
						prefix: "",
						summary: "",
						tag: ""
					};
				});
				return {
					name: "",
					prefix,
					api: api
				};
			});

		return _format;
	}

	await getEps();
}
