<template>
	<el-container class="page-container">
		<el-main>
			<el-form :model="form" :rules="formRules" label-width="120px" ref="refForm">
				<el-form-item label="中文名称" prop="cn">
					<el-input v-model="form.cn"></el-input>
				</el-form-item>
				<el-form-item label="英文名称" prop="en">
					<el-input name="en" v-model="form.en"></el-input>
				</el-form-item>
				<el-form-item label="排序" prop="sort">
					<el-input name="sort" v-model="form.sort"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" :loading="loading" @click="onFormSubmit">{{
						submitBtText
					}}</el-button>
					<el-button type="primary" :loading="loading">草稿箱</el-button>
					<el-button type="info" @click="goBack" :loading="loading">返回</el-button>
				</el-form-item>
			</el-form>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>
<script lang="ts" setup>
import { reactive, computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";

import { service } from "/@/cool";

const getData = async (id: number) => {
	console.log(id);
	const p = new Promise((resolve) => {
		setTimeout(() => {
			console.log(111);
		}, 1000);
	});
	return await p;
};

const saveData = async (formData) => {
	const _s = service.backend.type;

	try {
		const result =
			id.value === 0
				? await _s.post(formData)
				: await _s.patch({ id: id.value, data: formData });
		ElMessage.success({
			message: "操作成功"
		});
		console.log(result);
		goBack();
	} catch (e: unknown) {
		ElMessage.error({
			message: e.message
		});
	}
};

const onFormSubmit = () => {
	if (refForm.value) {
		loading.value = true;
		refForm.value.validate(async (valid) => {
			if (valid) {
				await saveData(form);
				loading.value = false;
			}
		});
	}
};

const goBack = () => {
	router.back();
};

const loading = ref(false);

const router = useRouter();
const route = useRoute();

const refForm = ref<FormInstance>();

const form = reactive({
	cn: "",
	en: "",
	sort: 99
});

const formRules = reactive<FormRules>({
	cn: [
		{
			required: true,
			message: "请填写中文名称"
		}
	],
	en: [
		{
			required: true,
			message: "请填写英文名称"
		}
	]
});

const id = computed(() => +(route.query.id || 0));
const submitBtText = computed(() => (id.value > 0 ? "编辑" : "创建"));

onMounted(async () => {
	const data = await service.backend.type.get(id.value)();

	Object.assign(form, {
		cn: data.name.cn,
		en: data.name.en,
		sort: data.sort
	});
});
</script>
