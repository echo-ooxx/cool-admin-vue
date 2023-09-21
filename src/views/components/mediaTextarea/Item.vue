<template>
	<div class="layout__insert-item" style="position: relative">
		<div class="inner">
			<div class="main-body">
				<div class="insert-action-container" v-if="queue === 0">
					<div class="insert__border"></div>
					<div class="insert__container">
						<slot
							name="insert"
							:data="{
								location: 'front',
								queue
							}"
						></slot>
					</div>
				</div>
				<div class="item-container">
					<div class="item" :class="[item.type]">
						<template v-if="['img', 'imgs'].indexOf(item.type) >= 0">
							<p class="item__hint" v-if="item.comment">{{ item.comment }}</p>
							<div class="img-box">
								<div
									class="box-child"
									v-for="(url, index) in item.value"
									:key="index"
								>
									<div class="child__inner">
										<cl-upload
											v-model="uploadURL[index]"
											type="image"
											:key="index"
										>
											<img :src="url" alt="" />
											<template #item="{ item }">
												<img :src="item.preload" alt="" />
												<div
													class="item-upload-progress"
													v-if="item.progress > 0 && item.progress < 100"
												>
													<el-progress
														:percentage="item.progress"
														:show-text="false"
													/>
												</div>
											</template>
										</cl-upload>
									</div>
								</div>
							</div>
						</template>
						<template v-else-if="item.type === 'video'">
							<div class="video-box__inner">
								<div class="box-child cover">
									<p class="title">封面</p>
									<div>
										<img :src="coverVal" alt="" />
									</div>
								</div>
								<div class="box-child">
									<p class="title">视频</p>
									<div>
										<video :src="item.value['0']" controls></video>
									</div>
								</div>
							</div>
						</template>
						<template v-else>
							<div class="content-render">
								<cl-editor
									v-if="textareaVisible"
									name="cl-editor-wang"
									mode="simple"
									v-model="textVal"
								></cl-editor>
								<div v-else class="html-container" v-html="textVal"></div>
							</div>
						</template>
					</div>
					<div class="item-operation-container">
						<el-tooltip
							effect="dark"
							:content="bt.text"
							placement="top"
							v-for="(bt, index) in innerActions"
							:key="index"
						>
							<el-button v-if="bt.scope.indexOf(item.type) >= 0" @click="bt.fn">
								<cl-svg :name="bt.icon"></cl-svg>
							</el-button>
							<div v-else style="display: none"></div>
						</el-tooltip>
					</div>
				</div>
				<div class="insert-action-container">
					<div class="insert__border"></div>
					<div class="insert__container">
						<slot
							name="insert"
							:data="{
								location: 'back',
								queue
							}"
						></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup name="layout__insert-item">
import { ref, watch, inject, onMounted, toRefs } from "vue";

const _injectData = inject<RichFormInput.ProvideKey>("RichFormInputProvideKey");

interface TItemProps {
	item: RichFormInput.contentItem;
	queue: number;
}

const resort = () => {};
const remove = () => {
	itemActions("remove");
};
const createTag = () => {
	itemActions("tag");
};

const onEditorSwitch = () => {
	textareaVisible.value = !textareaVisible.value;
};
const onEditorClose = () => {
	textareaVisible.value = false;
};

const onEditSubmit = () => {
	onEditorSwitch();
	if (_injectData) {
		const html = textVal.value as string;
		const realStr = new DOMParser().parseFromString(html, "text/html");
		if (realStr) {
			_injectData.update.replaceTextarea(queue.value, html);
		} else {
			remove();
		}
	}
};

const itemActions = (actionName: "resort" | "remove" | "tag") => {
	if (_injectData) {
		switch (actionName) {
			case "resort":
				break;
			case "remove":
				_injectData.remove(queue.value);
				break;
			case "tag":
				_injectData.update.replaceTag(queue.value);
				break;
		}
	}
};

const props = defineProps<TItemProps>();

const { item, queue } = toRefs(props);

const uploadURL = ref<string[]>(new Array(item.value.value.length).fill(""));
const textVal = ref(item.value.value);
const coverVal = ref(item.value.cover);

const innerActions = ref([
	{
		name: "resort",
		text: "排序",
		icon: "icon-sort",
		fn: resort,
		scope: ["img", "imgs", "video", "textarea"]
	},
	{
		name: "comment",
		text: "标注",
		icon: "icon-tag",
		fn: createTag,
		scope: ["img", "imgs"]
	},
	{
		name: "edit",
		text: "编辑",
		icon: "icon-edit",
		fn: onEditorSwitch,
		scope: ["textarea"]
	},
	{
		name: "edit-submit",
		text: "确定",
		icon: "icon-submit",
		fn: onEditSubmit,
		scope: ["textarea"]
	},
	{
		name: "remove",
		text: "删除",
		icon: "icon-delete",
		fn: remove,
		scope: ["img", "imgs", "video", "textarea"]
	}
]);

const textareaVisible = ref(false);

onMounted(() => {
	if (textVal.value === "") {
		onEditorSwitch();
	}
});

watch(uploadURL.value, () => {
	// 更改图片
	if (_injectData) {
		_injectData.update.replaceImgs(uploadURL.value, queue.value);
	}
});

watch(
	() => item.value,
	(val) => {
		onEditorClose();

		uploadURL.value = new Array(val.value.length).fill("");
		textVal.value = val.value;
		coverVal.value = val.cover;

		if (val.type === "textarea" && val.value === "") {
			onEditorSwitch();
		}
	}
);
</script>

<style lang="scss" scoped>
.layout__insert-item {
	.inner {
	}

	.main-body {
	}

	.item-container {
		position: relative;

		&:hover {
			.item-operation-container {
				display: block;
			}

			.item {
				border-color: red;
				background-color: #f6fff8;
			}
		}

		.item {
			border: 1px dashed transparent;

			position: relative;

			.item__hint {
				position: absolute;
				top: 13px;
				left: 13px;
				z-index: 1;
				color: #fff;

				&::before {
					content: "标注：";
					color: #fff;
					font-weight: 500;
				}

				background-color: #a1a1a1;
				padding: 3px 11px;
				border: 1px dashed #313030;
				border-radius: 99px;
			}

			&.img {
			}

			&.imgs {
			}

			.img-box {
				display: flex;
				justify-content: center;
				padding: 13px 0;

				.box-child {
					flex: 1;
					min-width: 100px;

					.child__inner {
						display: flex;
						justify-content: center;
						position: relative;
						padding: 0 13px;
					}

					.item-upload-progress {
						position: absolute;
						width: 100%;
						max-width: 150px;
						top: 10px;
						left: 50%;
						transform: translateX(-50%);
					}

					img {
						max-width: 100%;
					}
				}
			}

			.content-render {
				padding: 13px;

				:deep(.html-container) {
					text-align: center;

					p {
						font-size: 14px;
						margin-top: 7px;

						&:first-child {
							margin-top: 0;
						}
					}
				}
			}

			.video-box__inner {
				padding: 13px;
				display: flex;

				.box-child {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;

					p {
						font-size: 500;
						padding-bottom: 13px;
					}

					img,
					video {
						width: 100%;
					}
				}
			}
		}

		.item-operation-container {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			background-color: #313030;
			padding: 7px;
			border-radius: 5px;
			z-index: 9;

			display: none;

			.el-button {
				padding: 0;
				width: 30px;
				height: 30px;
				line-height: 30px;
				background-color: transparent;
				color: #fff;
				border-color: transparent;

				&:hover {
					border-color: #fff;
				}
			}
		}
	}

	.insert-action-container {
		padding: 15px 0;
		position: relative;
		z-index: 3;

		&:hover {
			.insert__border,
			.insert__container {
				visibility: visible;
			}
		}

		.insert__border,
		.insert__container {
			visibility: hidden;
		}

		.insert__border {
			width: 100%;
			height: 30px;
			border-bottom: 1px dashed red;
			top: 50%;
			transform: translateY(-50%);
			left: 0;

			&::before,
			&::after {
				content: "";
				width: 2px;
				height: 100%;
				position: absolute;
				transform: translateY(50%);
				background-color: red;
			}

			&::before {
				left: 15px;
			}

			&::after {
				right: 15px;
			}
		}

		.insert__container {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 3px;
			overflow: hidden;
			width: 30vw;
		}
	}
}
</style>
