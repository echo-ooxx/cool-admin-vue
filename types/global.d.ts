//自定义表格的声明文件
declare namespace Table {
	interface IHeader {
		label: string;
		prop: string;
		width?: string;
		fixed?: boolean;
		type?: string;
		slot?: boolean;
		showOverTip?: boolean;
	}
}
declare namespace ReturnObject {
	interface pagination<T = any> {
		list: T[];
		meta: {
			page: number;
			limit: number;
			totalPage: number;
		};
	}
}

declare namespace Api {
	interface types {
		id: number;
		name: {
			cn: string;
			en: string;
		};
		sort: number;
	}

	interface projects {
		id: number;
		name: {
			cn: string;
			en: string;
		};
		cover: {
			horizontal: string;
			vertical: string;
		};
		sort: number;
		[K: string]: any;
	}

	interface user {
		id: number;
		avatar_url: string;
		mobile: string;
		nickname: string;
		company: string;
		title: string;
		[K: string]: any;
	}

	interface manager {
		id: number;
		name: string;
		title: string;
		tel: string;
		email: string;
		[K: string]: any;
	}
}

declare namespace RichFormInput {
	interface contentItem {
		type: "textarea" | "img" | "imgs" | "video";
		value: string | string[];
		comment: string;
		cover: string;
	}

	interface insertConfig {
		location: "back" | "front";
		queue: number;
	}

	type insertAction = (act: "upload" | "textarea", insertConfig: insertConfig) => void;

	type resort = () => void;
	type remove = (queue: number) => void;
	type replaceTag = (queue: number) => void;
	type replaceImgs = (urls: string[], queue: number) => void;
	type replaceTextarea = (queue: number, text: string) => void;
	type splice = (index: number, direction: "back" | "front", data: contentItem[]) => void;

	interface ProvideKey {
		insert: insertAction;
		update: {
			replaceImgs: replaceImgs;
			replaceTag: replaceTag;
			replaceTextarea: replaceTextarea;
			splice: splice;
		};
		remove: remove;
	}
}
