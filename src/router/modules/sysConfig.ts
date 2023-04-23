import { Config } from "/@/cool/types";

const sysConfig: Config["app"]["menu"]["list"] = [
	{
		name: "系统配置",
		type: 0,
		path: "/sys-config",
		children: [
			{
				name: "系统信息",
				type: 1,
				path: "/info",
				component: import("/@/views/sysConfig/index.vue")
			},
			{
				name: "系统设定",
				type: 1,
				path: "/setup",
				component: import("/@/views/sysConfig/index.vue")
			},
			{
				name: "系统操作",
				type: 1,
				path: "/operate",
				component: import("/@/views/sysConfig/index.vue")
			},
			{
				name: "系统升级",
				type: 1,
				path: "/upgrade",
				component: import("/@/views/sysConfig/index.vue")
			},
			{
				name: "许可证",
				type: 1,
				path: "/licence",
				component: import("/@/views/sysConfig/index.vue")
			},
			{
				name: "高可用性",
				type: 1,
				path: "/high-performance",
				component: import("/@/views/sysConfig/index.vue")
			}
		]
	}
];

export { sysConfig };
