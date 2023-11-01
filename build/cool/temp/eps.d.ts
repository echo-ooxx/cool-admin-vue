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
		 * captcha
		 */
		captcha(data?: any): Promise<any>;
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
			captcha: string;
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
			captcha: boolean;
			token: boolean;
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
		 * captcha
		 */
		captcha(data?: any): Promise<any>;
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
			captcha: string;
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
			captcha: boolean;
			token: boolean;
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
		 * captcha
		 */
		captcha(data?: any): Promise<any>;
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
			captcha: string;
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
			captcha: boolean;
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenUpload {
		/**
		 * UploadController_upload
		 */
		UploadController_upload(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			UploadController_upload: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			UploadController_upload: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendLogin {
		/**
		 * LoginController_loginByPassword
		 */
		LoginController_loginByPassword(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			LoginController_loginByPassword: string;
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
			token: string;
			refreshToken: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			LoginController_loginByPassword: boolean;
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
			token: boolean;
			refreshToken: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendUserSearch {
		/**
		 * UserController_getUserByNicknam
		 */
		UserController_getUserByNicknam(data: { keyword: string }): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			UserController_getUserByNicknam: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			UserController_getUserByNicknam: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendSysUser {
		/**
		 * AdminController_create
		 */
		AdminController_create(data?: any): Promise<any>;
		/**
		 * AdminController_getAdmin
		 */
		AdminController_getAdmin(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			AdminController_create: string;
			AdminController_getAdmin: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			AdminController_create: boolean;
			AdminController_getAdmin: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendProject {
		/**
		 * ProjectController_getProducts
		 */
		ProjectController_getProducts(data: { id: number }): Promise<any>;
		/**
		 * ProjectController_patchData
		 */
		ProjectController_patchData(data: { id: number }): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * flush
		 */
		flush(data?: any): Promise<any>;
		/**
		 * params
		 */
		params(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			ProjectController_getProducts: string;
			ProjectController_patchData: string;
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
			token: string;
			flush: string;
			params: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			ProjectController_getProducts: boolean;
			ProjectController_patchData: boolean;
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
			token: boolean;
			flush: boolean;
			params: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendType {
		/**
		 * TypeController_getType
		 */
		TypeController_getType(data: { id: number }): Promise<any>;
		/**
		 * TypeController_updateType
		 */
		TypeController_updateType(data: { id: number }): Promise<any>;
		/**
		 * TypeController_delete
		 */
		TypeController_delete(data: { id: number }): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			TypeController_getType: string;
			TypeController_updateType: string;
			TypeController_delete: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			TypeController_getType: boolean;
			TypeController_updateType: boolean;
			TypeController_delete: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapSearch {
		/**
		 * MapController_search
		 */
		MapController_search(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			MapController_search: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			MapController_search: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapSuggestion {
		/**
		 * MapController_suggestion
		 */
		MapController_suggestion(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			MapController_suggestion: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			MapController_suggestion: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapIp {
		/**
		 * MapController_locatedByIP
		 */
		MapController_locatedByIP(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			MapController_locatedByIP: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			MapController_locatedByIP: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendMapList {
		/**
		 * MapController_list
		 */
		MapController_list(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			MapController_list: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			MapController_list: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendManager {
		/**
		 * ManagerController_create
		 */
		ManagerController_create(data?: any): Promise<any>;
		/**
		 * ManagerController_findAll
		 */
		ManagerController_findAll(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			ManagerController_create: string;
			ManagerController_findAll: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			ManagerController_create: boolean;
			ManagerController_findAll: boolean;
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
			token: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BackendNews {
		/**
		 * NewsController_create
		 */
		NewsController_create(data?: any): Promise<any>;
		/**
		 * NewsController_findAll
		 */
		NewsController_findAll(data?: any): Promise<any>;
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
		 * token
		 */
		token(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			NewsController_create: string;
			NewsController_findAll: string;
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
			token: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			NewsController_create: boolean;
			NewsController_findAll: boolean;
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
			token: boolean;
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
	};
}
