export const proxy = {
	"/dev/": {
		target: "http://127.0.0.1:3000",
		// target: "http://124.221.121.107:25491/",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},

	"/prod/": {
		target: "https://show.cool-admin.com",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "/api")
	}
};
