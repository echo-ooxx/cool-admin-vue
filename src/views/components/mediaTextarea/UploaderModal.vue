<template>
	<el-dialog v-model="modalSwitch">
		<el-container>
			<el-header height="auto">
				<h2 class="title" style="padding: 5px 0">素材上传</h2>
				<el-alert :title="hint" type="warning" :closable="false" />
			</el-header>
			<el-main>
				<div class="upload-opts">
					<div class="opt-item">
						<div class="c-title">
							<h4>素材类别</h4>
						</div>
						<el-radio-group v-model="uploadFileType">
							<el-radio :label="fileType.img">图片</el-radio>
							<el-radio :label="fileType.video">视频</el-radio>
						</el-radio-group>
					</div>
					<div class="opt-item" v-if="uploadFileType === fileType.img">
						<div class="c-title">
							<h4>素材显示类别</h4>
							<el-tag class="ml-2" type="info">仅针对本批一次生效</el-tag>
						</div>
						<el-radio-group v-model="fileRenderType">
							<el-radio
								v-for="(radio, index) in fileRenderTypeOpts"
								:key="index"
								:label="radio.value"
								>{{ radio.text }}</el-radio
							>
						</el-radio-group>
					</div>
				</div>
				<el-divider />
				<div class="clUploadContainer">
					<div class="uplodItem" v-if="uploadFileType === fileType.video">
						<cl-upload
							ref="clUploader4Cover"
							type="file"
							:accept="fileLimitExt[fileType.img].join(',')"
							:limit="uploadConfig.limit"
							:limitSize="uploadConfig.limitSize"
							v-model="cover"
							custom-class="file-uploader"
						>
							<div class="file-inner">
								<el-button class="cus-button">视频封面</el-button>
							</div>
						</cl-upload>
					</div>
					<div class="uplodItem">
						<cl-upload
							v-model="urls"
							type="file"
							multiple
							custom-class="file-uploader"
							v-bind="uploadConfig"
							ref="clUploader"
						>
							<div class="file-inner">
								<el-button class="cus-button">{{
									uploadFileType === fileType.img ? "本地上传" : "视频上传"
								}}</el-button>
								<el-divider />
								<div v-if="urls">
									{{ uploadFileType === fileType.img ? "素材" : "视频" }}：
								</div>
							</div>
							<template #item="{ item, index }">
								<div class="file-item">
									<div>
										<div class="filename">
											<p>{{ item.originName }}</p>
											<cl-svg
												name="icon-delete"
												@click.stop="onRemoveFile(index)"
											></cl-svg>
										</div>
										<div
											class="progress"
											v-if="item.progress > 0 && item.progress < 100"
										>
											<el-progress
												:percentage="item.progress"
												:show-text="false"
											/>
										</div>
									</div>
								</div>
							</template>
						</cl-upload>
					</div>
				</div>
			</el-main>
			<el-footer>
				<el-button @click="onCancel">取消</el-button>
				<el-button @click="onSubmit">确定</el-button>
			</el-footer>
		</el-container>
	</el-dialog>
</template>
<script lang="ts" setup name="layout__uploader-modal">
import { computed, ref, watch, inject } from "vue";
import { ElMessage } from "element-plus";

interface TEmits {
	(e: "update:modelValue", item: RichFormInput.contentItem[]): void;
	(e: "upload", item: RichFormInput.contentItem[]): void;
}

const _injectData = inject<RichFormInput.ProvideKey>("RichFormInputProvideKey");

const enum fileType {
	img = 1,
	video = 2
}

const enum renderType {
	oneLineOnePic = 1,
	oneLineMultiPics = 2
}

const emits = defineEmits<TEmits>();

const switchControl = (insertConf: null | RichFormInput.insertConfig = null) => {
	modalSwitch.value = !modalSwitch.value;
	insertConfig.value = insertConf;
};

const onRemoveFile = (index: number) => {
	clUploader.value.remove(index);
};

const onSubmit = () => {
	if (urls.value === "" || (uploadFileType.value === fileType.video && cover.value === "")) {
		ElMessage.error("请上传素材");
	} else {
		const _data: RichFormInput.contentItem[] = [];

		const _urls = urls.value.split(",");

		let temp: RichFormInput.contentItem[];

		if (uploadFileType.value === fileType.img) {
			temp =
				fileRenderType.value === renderType.oneLineMultiPics
					? [
							{
								type: "imgs",
								value: _urls,
								comment: "",
								cover: ""
							}
					  ]
					: _urls.map((item) => ({
							type: "img",
							value: [item],
							comment: "",
							cover: ""
					  }));
		} else {
			temp = [
				{
					type: "video",
					value: _urls,
					comment: "",
					cover: cover.value
				}
			];
		}

		_data.push(...temp);

		// 插入位置处理
		const { location, queue } = insertConfig.value!;

		if (_injectData) {
			_injectData.update.splice(queue, location, _data);
		}

		// if (location === "front") {
		// 	// 再最前面插入
		// 	innerModelValue.value.splice(queue, 0, ..._data);
		// } else if (location === "back") {
		// 	const pos = queue + 1;
		// 	if (innerModelValue.value.length === pos) {
		// 		// 在最后插入
		// 		innerModelValue.value.push(..._data);
		// 	} else {
		// 		innerModelValue.value.splice(pos, 0, ..._data);
		// 	}
		// }

		// emits("update:modelValue", innerModelValue.value);
		emits("upload", _data);
		switchControl();
	}
};

const onCancel = () => {
	urls.value = "";
	switchControl();
};

const onBeforeUpload = () => {
	if (insertConfig.value === null) {
		ElMessage.error("参数错误，刷新重试");
	}
	if (!clUploader.value.isAdd) {
		ElMessage.error("数量超过限制");
	}
	return clUploader.value.isAdd && insertConfig.value !== null;
};

const onClear = () => {
	// 清空/初始化
	if (clUploader.value) clUploader.value.clear();
	if (clUploader4Cover.value) clUploader4Cover.value.clear();
};

const fileRenderTypeOpts = [
	{
		value: renderType.oneLineOnePic,
		text: "一行单图"
	},
	{
		value: renderType.oneLineMultiPics,
		text: "一行多图"
	}
];

const fileRenderType = ref(renderType.oneLineOnePic);
// 上传控件instance
const clUploader = ref();
const clUploader4Cover = ref();
// 上传地址
const urls = ref("");
// 视频封面
const cover = ref("");
// 素材类型
const uploadFileType = ref(fileType.img);
// 弹窗开闭
const modalSwitch = ref(false);
//
const insertConfig = ref<null | RichFormInput.insertConfig>();

const fileLimitExt: Record<string, string[]> = {
	[fileType.img]: ["image/png", "image/jpeg", "image/gif"],
	[fileType.video]: ["video/mp4"]
};

const uploadConfig = computed(() => {
	return {
		limit: uploadFileType.value === fileType.img ? 30 : 1,
		limitSize: 10, // m,
		accept: fileLimitExt[uploadFileType.value].join(","),
		beforeUpload: onBeforeUpload
	};
});

const hint = computed(() => {
	return `${
		uploadFileType.value === fileType.img ? "图片" : "视频"
	}素材支持${uploadConfig.value.accept
		.split(",")
		.map((item) => item.substring(item.lastIndexOf("/") + 1))
		.join("/")}格式，单文件不超过${uploadConfig.value.limitSize}M，支持批量上传，每次最多${
		uploadConfig.value.limit
	}个。`;
});

watch(uploadFileType, () => {
	// 清空
	onClear();
});

watch(modalSwitch, () => {
	if (!modalSwitch.value) {
		onClear();
		uploadFileType.value = fileType.img;
		fileRenderType.value = renderType.oneLineOnePic;
	}
});

defineExpose({
	switchControl
});
</script>
<style lang="scss" scoped>
.clUploadContainer {
	display: flex;

	.uplodItem {
		flex: 1;
	}
}

.c-title {
	display: flex;
	align-items: center;
	padding-bottom: 10px;

	h4 {
		padding-right: 10px;
	}
}

.upload-opts {
	.opt-item {
		margin-top: 13px;

		&:first-child {
			margin-top: 0;
		}
	}
}

.file-uploader {
	.file-inner {
		width: 100%;
	}

	.cus-button {
		width: 100%;
		border-style: dashed;
		padding: 30px 0;
	}

	.el-upload--text {
		width: 100%;
	}

	.file-item {
		display: flex;

		.filename {
			width: 300px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.progress {
			width: 150px;
			margin-top: 10px;
		}
	}
}
</style>
<style lang="scss">
.file-uploader {
	.el-upload {
		width: 100%;
	}

	.cl-upload__list {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
