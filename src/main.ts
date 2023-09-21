import { createApp } from "vue";
import App from "./App.vue";
import { config } from "./cool/config/index";
import { bootstrap } from "./cool";

import TMap from "@map-component/vue-tmap";

const app = createApp(App);

// 启动
bootstrap(app)
	.then(() => {
		app.use(TMap);
		app.mount("#app");
	})
	.catch((err) => {
		console.error(`${config.app.name} 启动失败`, err);
	});
