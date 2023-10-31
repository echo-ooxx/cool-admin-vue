<template>
	<el-container class="page-container">
		<el-main>
			<el-form :model="form" :rules="formRules" label-width="120px" ref="refForm">
				<el-form-item label="案例中文" prop="title.cn">
					<el-input v-model="form.title.cn"></el-input>
				</el-form-item>
				<el-form-item label="案例英文" prop="title.en">
					<el-input v-model="form.title.en"></el-input>
				</el-form-item>
				<el-form-item label="超链接" prop="link">
					<el-input v-model="form.link"></el-input>
				</el-form-item>
				<el-form-item label="所属分类" prop="typeID">
					<el-select v-model="form.typeID">
						<el-option
							v-for="item in typeOptions"
							:key="item.key"
							:value="item.value"
							:label="item.label"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="横向封面" prop="cover">
					<cl-upload v-model="form.cover"></cl-upload>
				</el-form-item>
				<el-form-item label="排序" prop="sort">
					<el-input name="sort" v-model="form.sort"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="onFormSubmit" :loading="loading">{{
						submitBtText
					}}</el-button>
					<el-button type="primary" :loading="loading" @click="onDraft">草稿箱</el-button>
					<el-button type="info" @click="goBack" :loading="loading">返回</el-button>
				</el-form-item>
			</el-form>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { service } from "/@/cool";
import { Status } from "/@/common/symbol";

const onDraft = () => {
	form.status = Status.draft;
	onFormSubmit();
};

const onFormSubmit = () => {
	console.log(form);
	refForm.value?.validate(async (valid) => {
		if (valid) {
			loading.value = true;
			try {
				const res = await (id.value > 0
					? service.backend.news.patch({
							id: id.value,
							data: form
					  })
					: service.backend.news.post(form));
				console.log(res);
			} catch (err) {
				ElMessage.error(err.message);
			}
		}
		loading.value = false;
	});
};
const goBack = () => {
	router.back();
};

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const id = computed(() => {
	return +route.query.id || 0;
});
const submitBtText = computed(() => (id.value > 0 ? "编辑" : "创建"));
const typeOptions = ref([
	{
		value: 1,
		label: "飞视新闻",
		key: 1
	},
	{
		value: 2,
		label: "飞视荣誉",
		key: 2
	}
]);
const refForm = ref<FormInstance>();
const form = reactive<{
	[key: string]: any;
}>({
	title: {
		en: "",
		cn: ""
	},
	cover: "",
	link: "",
	typeID: "",
	sort: 99,
	status: Status.normal
});

const formRules = reactive<FormRules>({
	"title.cn": [
		{
			required: true,
			message: "请填写中文名"
		}
	],
	"title.en": [
		{
			required: true,
			message: "请填写英文名"
		}
	],
	link: [
		{
			required: true,
			message: "超链接"
		}
	],
	cover: [
		{
			required: true,
			message: "上传封面"
		}
	],
	typeID: [
		{
			required: true,
			message: "选择所属类别"
		}
	]
});

onMounted(async () => {
	if (id.value > 0) {
		const res = await service.backend.news.get(id.value)();
		Object.assign(form, res);
	}
});
</script>
