import { Config } from "/@/cool/types";

const project: Config["app"]["menu"]["list"] = [
	{
		name: "项目",
		type: 0,
		path: "/project",
		children: [
			{
				name: "类别",
				type: 1,
				path: "/types",
				component: () => import("/@/views/types/list.vue")
			},
			{
				name: "类别-编辑",
				type: 1,
				path: "/types/edit",
				component: () => import("/@/views/types/edit.vue"),
				isShow: false,
				meta: {
					parentActivePath: "/project/types"
				}
			},
			{
				name: "管理",
				type: 1,
				path: "/list",
				component: () => import("/@/views/project/list.vue")
			},
			{
				name: "案例-编辑",
				type: 1,
				path: "/detail",
				component: () => import("/@/views/project/edit.vue"),
				isShow: false,
				meta: {
					parentActivePath: "/project/list"
				}
			},
			{
				name: "详情-编辑",
				type: 1,
				path: "/content",
				component: () => import("/@/views/project/content.vue"),
				isShow: false,
				meta: {
					parentActivePath: "/project/list"
				}
			},
			{
				name: "参数-编辑",
				type: 1,
				path: "/param",
				component: () => import("/@/views/project/param.vue"),
				isShow: false,
				meta: {
					parentActivePath: "/project/list"
				}
			}
		]
	}
];

export { project };
