import { Config } from "/@/cool/types";

type muenItems = Config["app"]["menu"]["list"];

const user: muenItems = [
	{
		name: "用户管理",
		type: 0,
		path: "/user",
		children: [
			// {
			// 	name: "注册用户",
			// 	type: 1,
			// 	path: "/list",
			// 	component: () => import("/@/views/user/list.vue")
			// },
			{
				name: "商务经理",
				type: 1,
				path: "/managers",
				component: () => import("/@/views/user/manager.vue")
			},
			{
				name: "经历-编辑",
				type: 1,
				path: "/ma-edit",
				component: () => import("/@/views/user/maedit.vue"),
				isShow: false,
				meta: {
					parentActivePath: "/user/managers"
				}
			}
		]
	}
];

export { user };
