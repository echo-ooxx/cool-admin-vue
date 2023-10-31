declare namespace Eps {
	interface ChatMessage {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface ChatSession {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface Test {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenUpload {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendLogin {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;
		/**
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;
		/**
		 * getphone
		 */
		getphone(data?: any): Promise<any>;
		/**
		 * accesstoken
		 */
		accesstoken(data?: any): Promise<any>;
		/**
		 * test
		 */
		test(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
			captcha: string;
			refreshToken: string;
			getphone: string;
			accesstoken: string;
			test: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
			captcha: boolean;
			refreshToken: boolean;
			getphone: boolean;
			accesstoken: boolean;
			test: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendUserSearch {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * manager
		 */
		manager(data?: any): Promise<any>;
		/**
		 * managers
		 */
		managers(data?: any): Promise<any>;
		/**
		 * collections
		 */
		collections(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
			manager: string;
			managers: string;
			collections: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
			manager: boolean;
			managers: boolean;
			collections: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendSysUser {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendProject {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * flush
		 */
		flush(data?: any): Promise<any>;
		/**
		 * params
		 */
		params(data?: any): Promise<any>;
		/**
		 * types
		 */
		types(data?: any): Promise<any>;
		/**
		 * recommend
		 */
		recommend(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
			flush: string;
			params: string;
			types: string;
			recommend: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
			flush: boolean;
			params: boolean;
			types: boolean;
			recommend: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendType {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapSearch {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapSuggestion {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapIp {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapList {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendManager {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendNews {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface Login {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;
		/**
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;
		/**
		 * getphone
		 */
		getphone(data?: any): Promise<any>;
		/**
		 * accesstoken
		 */
		accesstoken(data?: any): Promise<any>;
		/**
		 * test
		 */
		test(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
			captcha: string;
			refreshToken: string;
			getphone: string;
			accesstoken: string;
			test: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
			captcha: boolean;
			refreshToken: boolean;
			getphone: boolean;
			accesstoken: boolean;
			test: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface Collects {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface Project {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * flush
		 */
		flush(data?: any): Promise<any>;
		/**
		 * params
		 */
		params(data?: any): Promise<any>;
		/**
		 * types
		 */
		types(data?: any): Promise<any>;
		/**
		 * recommend
		 */
		recommend(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
			flush: string;
			params: string;
			types: string;
			recommend: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
			flush: boolean;
			params: boolean;
			types: boolean;
			recommend: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppManagers {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppManager {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppViewManager {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppNews {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppLogtest {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface User {
		/**
		 * list
		 */
		list(data?: any): Promise<any[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number };
			list: any[];
			[key: string]: any;
		}>;
		/**
		 * info
		 */
		info(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): (params?: any) => Promise<any>;
		/**
		 * post
		 */
		post(data?: any): Promise<any>;
		/**
		 * patch
		 */
		patch(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * manager
		 */
		manager(data?: any): Promise<any>;
		/**
		 * managers
		 */
		managers(data?: any): Promise<any>;
		/**
		 * collections
		 */
		collections(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			info: string;
			update: string;
			add: string;
			get: string;
			post: string;
			patch: string;
			delete: string;
			manager: string;
			managers: string;
			collections: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			get: boolean;
			post: boolean;
			patch: boolean;
			delete: boolean;
			manager: boolean;
			managers: boolean;
			collections: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	type Service = {
		request(options?: {
			url: string;
			method?: "POST" | "GET" | string;
			data?: any;
			params?: any;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;
		chat: { message: ChatMessage; session: ChatSession };
		test: Test;
		open: { upload: OpenUpload };
		backend: {
			login: BackendLogin;
			user: { search: BackendUserSearch };
			sysUser: BackendSysUser;
			project: BackendProject;
			type: BackendType;
			map: {
				search: BackendMapSearch;
				suggestion: BackendMapSuggestion;
				ip: BackendMapIp;
				list: BackendMapList;
			};
			manager: BackendManager;
			news: BackendNews;
		};
		login: Login;
		collects: Collects;
		project: Project;
		app: {
			managers: AppManagers;
			manager: AppManager;
			view: { manager: AppViewManager };
			news: AppNews;
			logtest: AppLogtest;
		};
		user: User;
	};
}
