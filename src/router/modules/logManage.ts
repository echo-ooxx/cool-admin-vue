import { Config } from "/@/cool/types";

const logManage: Config["app"]["menu"]["list"] = [
	{
		name: "日志管理",
		path: "/warning",
		type: 0,
		children: [
			{
				name: "白名单告警",
				type: 1,
				path: "/white-list",
				component: import("/@/views/logMange/index.vue")
			},
			{
				name: "ip/mac告警",
				type: 1,
				path: "/ip-mac",
				component: import("/@/views/logMange/index.vue")
			},
			{
				name: "关键事件告警",
				type: 1,
				path: "/key-point",
				component: import("/@/views/logMange/index.vue")
			},
			{
				name: "会话策略告警",
				type: 1,
				path: "/strategy",
				component: import("/@/views/logMange/index.vue")
			},
			{
				name: "抗渗透告警",
				type: 1,
				path: "/resist-infiltrate",
				component: import("/@/views/logMange/index.vue")
			},
			{
				name: "协议规约告警",
				type: 1,
				path: "/protocol",
				component: import("/@/views/logMange/index.vue")
			},
			{
				name: "无流量告警",
				type: 1,
				path: "/no-rating",
				component: import("/@/views/logMange/index.vue")
			},
			{
				name: "黑名单告警",
				type: 1,
				path: "/black-bill",
				component: import("/@/views/logMange/index.vue")
			}
		]
	}
];

export { logManage };
