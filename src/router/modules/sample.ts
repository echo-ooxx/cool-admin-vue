import { Config } from "/@/cool/types";

type muenItems = Config["app"]["menu"]["list"];

const sample: muenItems = [
	{
		name: "示例",
		type: 0,
		path: "/sample",
		children: [
			{
				name: "列表",
				type: 1,
				path: "/list",
				component: () => import("/@/views/sample/simple-list.vue")
			}
		]
	}
];

export { sample };
