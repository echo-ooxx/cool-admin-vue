import { Config } from "/@/cool/types";

type muenItems = Config["app"]["menu"]["list"];

// const samples = ref<muenItems>([
// 	{
// 		name: "示例",
// 		type: 0,
// 		path: "/sample",
// 		children: [
// 			{
// 				name: "列表",
// 				type: 1,
// 				path: "/list",
// 				component: import("/@/views/sample/simple-list.vue")
// 			}
// 		]
// 	}
// ]);

const samples: muenItems = [
	{
		name: "示例",
		type: 0,
		path: "/sample",
		children: [
			{
				name: "列表",
				type: 1,
				path: "/list",
				component: import("/@/views/sample/simple-list.vue")
			}
		]
	},
	{
		name: "示例2",
		type: 0,
		path: "/sample2",
		children: [
			{
				name: "列表",
				type: 1,
				path: "/list",
				component: import("/@/views/sample/simple-list.vue")
			}
		]
	}
];

export default samples!;
