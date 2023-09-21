<template>
	<el-container>
		<el-header>
			<el-button @click="onSubmit" :loading="loading">发布</el-button>
			<el-button @click="onDraft" :loading="loading">草稿箱</el-button>
			<slot name="btn"></slot>
		</el-header>
		<el-main
			class="main"
			:class="{
				create: modelValueEmpty
			}"
		>
			<action-group
				v-if="modelValueEmpty"
				@clicked="onActionClicked"
				:insert-config="{
					location: 'back',
					queue: 0
				}"
				:title="title"
			></action-group>
			<div v-else class="content__main-container">
				<rich-item
					v-for="(item, index) in innerModelValue"
					:item="item"
					:queue="index"
					:key="index"
				>
					<template #insert="{ data }">
						<action-group
							@clicked="onActionClicked"
							theme="small"
							:insert-config="(data as RichFormInput.insertConfig)"
						></action-group>
					</template>
				</rich-item>
			</div>
		</el-main>
		<!-- 上传弹窗 -->
		<uploader-modal ref="uploadModal"></uploader-modal>
		<!-- 文案弹窗 -->
		<el-dialog v-model="itemComment.modalSwitch" title="图片标注">
			<el-form>
				<el-form-item>
					<el-input v-model="itemComment.text" placeholder="输入标注"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
				<el-button @click="textModalSwitch">取消</el-button>
				<el-button @click="commetSubmit">确定</el-button>
			</template>
		</el-dialog>
		<!-- 排序 -->
		<resort></resort>
	</el-container>
</template>
<script lang="ts" setup>
import ActionGroup from "./ActionGroup.vue";
import UploaderModal from "./UploaderModal.vue";
import RichItem from "./Item.vue";
import Resort from "./Sort.vue";
import { computed, ref, watch, provide, reactive, toRef, toRefs } from "vue";

interface TProps {
	modelValue: RichFormInput.contentItem[];
	loading: boolean;
	title: string;
}

const emits = defineEmits(["update:modelValue", "submit", "draft"]);

const onSubmit = () => {
	emits("submit");
};
const onDraft = () => {
	emits("draft");
};

const onActionClicked: RichFormInput.insertAction = (
	act: "upload" | "textarea",
	insertConfig: RichFormInput.insertConfig
) => {
	switch (act) {
		case "upload":
			uploadModal.value.switchControl(insertConfig);
			break;
		case "textarea":
			// 根据insertConfig 插入富文本编辑器
			const temp: RichFormInput.contentItem = {
				type: "textarea",
				value: "",
				comment: "",
				cover: ""
			};
			const { queue, location } = insertConfig;
			onSplice(queue, location, [temp]);
			break;
		default:
			break;
	}
};

// 替换item 图片
const replaceImgs: RichFormInput.replaceImgs = (urls, queue) => {
	const uploadURLs = urls.map((url, index) => {
		return url || innerModelValue.value[queue].value[index];
	});
	innerModelValue.value[queue].value = uploadURLs;
};
// 替换当前备注
const replaceTag: RichFormInput.replaceTag = (q) => {
	currentItemIndex.value = q;
	textModalSwitch();
};
// 替换 item textarea 的值
const replaceTextarea: RichFormInput.replaceTextarea = (q, html) => {
	innerModelValue.value[q].value = html;
};
const commetSubmit = () => {
	innerModelValue.value[currentItemIndex.value].comment = itemComment.text;
	textModalSwitch();
};
// 删除当前item
const remove: RichFormInput.remove = (queue) => {
	innerModelValue.value.splice(queue, 1);
};

const onSplice: RichFormInput.splice = (index, direction, data) => {
	if (direction === "front") {
		// 再最前面插入
		innerModelValue.value.splice(index, 0, ...data);
	} else if (direction === "back") {
		const pos = index + 1;
		if (innerModelValue.value.length === pos) {
			// 在最后插入
			innerModelValue.value.push(...data);
		} else {
			innerModelValue.value.splice(pos, 0, ...data);
		}
	}
};

const textModalSwitch = () => {
	itemComment.modalSwitch = !itemComment.modalSwitch;
	if (!itemComment.modalSwitch) {
		currentItemIndex.value = -1;
	}
};

const props = withDefaults(defineProps<TProps>(), {
	modelValue: () => [],
	loading: false,
	title: "插入内容"
});
// 上传组件
const uploadModal = ref();
const innerModelValue = toRef<TProps, "modelValue">(props, "modelValue");
const { loading, title } = toRefs(props);
const modelValueEmpty = computed(() => {
	return Object.keys(props.modelValue).length === 0;
});
// 图片标注
const itemComment = reactive<{
	modalSwitch: boolean;
	text: string;
}>({
	modalSwitch: false,
	text: ""
});
// 当前变化的item index
const currentItemIndex = ref(-1);

watch(
	innerModelValue,
	(data) => {
		emits("update:modelValue", data);
	},
	{
		deep: true
	}
);

provide<RichFormInput.ProvideKey>("RichFormInputProvideKey", {
	insert: onActionClicked,
	update: {
		replaceImgs,
		replaceTag,
		replaceTextarea,
		splice: onSplice
	},
	remove
});
</script>
<style lang="scss" scoped>
.main {
	background-color: #fff;
	min-height: 73vh;
	border-radius: 5px;
	border: 1px solid #dcdfe6;
	display: flex;
	flex-direction: column;

	&.create {
		padding-top: 80px;
	}
}

.content__main-container {
}
</style>
