import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export const whenErrorBack = async (
	expect: () => boolean | Promise<boolean>,
	message?: string,
	url?: string
): void => {
	const router = useRouter();
	const result = await expect();
	if (result) {
		if (message) {
			ElMessage.error({
				message: message || "发生错误",
				onClose: () =>
					url
						? router.replace({
								url
						  })
						: router.go(-1)
			});
		}
		throw new Error("function cause back");
	}
};
