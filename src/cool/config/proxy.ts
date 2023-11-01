export const proxy = {
	"/dev/": {
		target: "http://127.0.0.1:3000",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},
	"/prod/": {
		target: "https://business.api.gooob.cn",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "")
	}
};
