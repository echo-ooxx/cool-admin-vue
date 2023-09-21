<template>
	<div class="editor-uploader__container">
		<el-dialog
			v-model="visible"
			height="650px"
			width="1070px"
			keep-alive
			append-to-body
			custom-class="editor-upload__dialog"
			:close-on-click-modal="false"
			:close-on-press-escape="false"
			:title="props.title"
		>
			<div class="editor-uploader__inner" @dragover="onDragover" @drop="onDrop">
				<div class="editor-uploader__main-body">
					<div>
						<cl-upload
							:ref="setRefs('upload')"
							:limit="limit"
							:limit-upload="false"
							:show-file-list="false"
							:accept="accept"
							type="file"
							multiple
							@success="onSuccess"
						>
							<div class="empty">
								<el-icon class="el-icon--upload">
									<upload-filled />
								</el-icon>
								<p>将文件拖到此处，或点击按钮上传</p>
							</div>
						</cl-upload>
					</div>
					<div class="preview-list">
						<!-- 预览 -->
						<div class="file-item" v-for="(item, index) in list" :key="item">
							<div class="item-viewer">
								<el-image fit="contain" :src="item.url" lazy>
									<template #error>
										<div class="image-error">
											<span>{{ item.url }}</span>
										</div>
									</template>
								</el-image>
							</div>
							<el-button class="item-bt" @click="onRemove(index)">
								<el-icon>
									<delete></delete>
								</el-icon>
							</el-button>
						</div>
					</div>
				</div>
			</div>
			<template #footer>
				<el-button @click="close">取消</el-button>
				<el-button type="success" @click="confirm()"> 选择 </el-button>
			</template>
		</el-dialog>
	</div>
</template>
<script lang="ts" setup name="editor-uploader">
import { computed, ref } from "vue";
import { UploadFilled, Delete } from "@element-plus/icons-vue";
import { useCool } from "/@/cool";

const { refs, setRefs } = useCool();

const props = defineProps({
	title: {
		type: String,
		default: "图片上传"
	},
	accept: {
		type: String,
		default: "image/*"
	},
	// 显示按钮
	showBtn: {
		type: Boolean,
		default: true
	},
	limit: {
		type: Number,
		default: 9
	}
});

const emits = defineEmits(["confirm"]);

const list = ref<any[]>([]);

const visible = ref(false);

const imgs = computed(() => {
	return {
		urls: list.value.map((item) => item.url)
	};
});

// 拖拽
function onDragover(e: any) {
	e.preventDefault();
}

// 放下
function onDrop(e: any) {
	e.preventDefault();
	e.dataTransfer.files.forEach((f: File, i: number) => {
		setTimeout(() => {
			refs.upload.upload(f);
		}, i * 10);
	});
}

const onSuccess = (data: any) => {
	list.value.push(data);
};

const onRemove = (index: number) => {
	list.value.splice(index, 1);
};

const open = () => {
	visible.value = true;
};

const close = () => {
	visible.value = false;
};

const confirm = () => {
	console.log(imgs.value.urls);
	emits("confirm", imgs.value.urls);
	close();
};

defineExpose({
	open,
	close
});
</script>

<style lang="scss" scoped>
.editor-uploader__container {
}

.cl-upload-space__dialog {
	.el-dialog__footer {
		border-top: 1px solid #f7f7f7;
	}
}

.editor-uploader__main-body {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.preview-list {
	display: flex;
	width: 100%;
	margin: 13px 0;
	flex-wrap: wrap;
}

.file-item {
	flex: 0 0 100px;
	height: 100px;
	display: flex;
	border: 1px dashed #c0c4cc;
	margin-right: 13px;
	margin-bottom: 13px;
	position: relative;

	.item-bt {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0;
		width: 32px;
	}

	.item-viewer {
		width: 100%;
		height: 100%;
	}

	.el-image {
		padding: 6px;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	// position: absolute;
	// top: 0;
	// left: 0;
	// right: 0;
	// bottom: 0;
	margin: auto;
	height: 180px;
	width: 360px;
	max-width: 80%;
	border-radius: 5px;
	border: 1px dashed var(--el-border-color);
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		border-color: var(--color-primary);
	}

	i {
		font-size: 67px;
		color: #c0c4cc;
	}

	p {
		font-size: 14px;
		margin-top: 15px;
		color: #999;
	}
}
</style>
