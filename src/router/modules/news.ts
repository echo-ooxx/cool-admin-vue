import { Config } from "/@/cool/types";

const news: Config["app"]["menu"]["list"] = [
	{
		name: "新闻",
		type: 0,
		path: "/news",
		children: [
			{
				name: "管理",
				type: 1,
				path: "/list",
				component: () => import("/@/views/news/list.vue")
			},
			{
				name: "新闻-编辑",
				type: 1,
				path: "/edit",
				component: () => import("/@/views/news/edit.vue"),
				isShow: false,
				meta: {
					parentActivePath: "/news/list"
				}
			}
		]
	}
];

export { news };
