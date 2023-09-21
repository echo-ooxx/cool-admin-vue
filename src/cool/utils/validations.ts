//判断是否为数字
export function validIsNumber(value: string) {
	const reg = /^[0-9]*$/;
	return reg.test(value);
}
//正负整数
export function validateNum(value: string) {
	const regex = /^-?\d+$/;
	return regex.test(value);
}
//数字
export function validateFloat(value: string) {
	const regex = /^-?\d*\.?\d+$/;
	return regex.test(value);
}
//ip地址 正则验证
export function validateIP(ip: string) {
	const reg =
		/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	return reg.test(ip);
}
//子网掩码正则验证
export function validateSubnetMask(mask: string) {
	const subnetMaskRegex =
		/^((255|254|252|248|240|224|192|128)\.){3}(255|254|252|248|240|224|192|128)$/;
	return subnetMaskRegex.test(mask);
}
//mac地址正则验证
export function validateMAC(mac: string) {
	const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
	return macAddressRegex.test(mac);
}
let lat = "";
function insertStr(source: string, start: number, newStr: string) {
	return source.slice(0, start) + newStr + source.slice(start);
}
//mac地址加:处理
export function formatMac(mac: string) {
	//替换中文
	mac = mac.replace(/[\u4e00-\u9fa5]+/g, "");
	//截取长度
	mac = mac.slice(0, 17);
	if (mac.length > 2) {
		//拆分字符串
		for (let index = 0; index < mac.length; index++) {
			if ((index + 1) % 3 == 0 && mac.charAt(index) != ":") {
				mac = insertStr(mac, index, ":");
				console.log(mac.charAt(index));
			}
		}
		mac = mac.slice(0, 17);
	}
	//删除时 移除:
	if (mac.length < lat.length) {
		lat = mac;
		if (mac.length > 2 && mac.charAt(mac.length - 1) == ":") {
			return mac.slice(0, mac.length - 1);
		}
		return mac;
	}
	//末尾加上:
	if (mac.length <= 14 && (mac.length + 1) % 3 == 0) {
		//代表需要加:
		lat = mac + ":";
		return mac + ":";
	}
	//其他情况正常返回
	lat = mac;
	return mac;
}
// 端口正则验证
export function validatePORT(port: string) {
	const portRegex = /^(0|[1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
	return portRegex.test(port);
}
//指定端口5000或5000:5050
export function validatePORTCustom(port: string) {
	if (port == "5000" || port == "5000:5050") return true;
	return false;
}
//数字长度范围验证
export function validateCustomLength(min: number, max: number, message?: string) {
	return function vaiddete(rule: any, value: any, callback: any) {
		if (value) {
			if (!validateNum(value) || value > max || value < min) {
				const _message = message ? message : `请输入${min}到${max}之间的数`;
				callback(new Error(_message));
			} else {
				callback();
			}
		} else {
			callback();
		}
	};
}
//表单验证方法
export function ruleVaidete(func: Function, message: string) {
	return function vaiddete(rule: any, value: any, callback: any) {
		if (!func(value)) {
			callback(new Error(message));
		} else {
			callback();
		}
	};
}
//字母数字下划线
export function validateField(port: string) {
	const portRegex = /^[0-9a-zA-Z_]{1,}$/;
	return portRegex.test(port);
}

// 手机号码
export function validateMobile(phone: string) {
	const reg = /^1[3456789]\d{9}$/;
	return reg.test(phone);
}

// 电话号码
export function validatePhone(phone: string) {
	const reg = /\d{3}-\d{8}|\d{4}-\{7,8}/;
	return reg.test(phone);
}

// 号码
export function validatePhoneNumberMix(phone: string) {
	return validateMobile(phone) || validatePhone(phone);
}

export function validateEmail(mail: string) {
	const reg =
		/[\w!#$%&'*+/=?^_{|}~-]+(?:.[\w!#$%&'*+/=?^_{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
	return reg.test(mail);
}
