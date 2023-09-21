<template>
	<el-container class="page-container">
		<el-main>
			<el-form :model="form" :rules="formRules" label-width="120px" ref="refForm">
				<el-form-item label="案例中文" prop="cn">
					<el-input name="cn" v-model="form.cn"></el-input>
				</el-form-item>
				<el-form-item label="案例英文" prop="en">
					<el-input name="en" v-model="form.en"></el-input>
				</el-form-item>
				<el-form-item label="所属分类" prop="typeID" v-if="typeOptions.length > 0">
					<el-select v-model="form.typeID">
						<el-option
							v-for="item in typeOptions"
							:key="item.key"
							:value="item.value"
							:label="item.label"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="横向封面" prop="horizontal">
					<cl-upload v-model="form.horizontal"></cl-upload>
				</el-form-item>
				<el-form-item label="竖向封面" prop="vertical">
					<cl-upload v-model="form.vertical"></cl-upload>
				</el-form-item>
				<el-form-item label="推荐" prop="recommend">
					<el-switch
						v-model="form.recommend"
						inline-prompt
						:active-value="1"
						:inactive-value="0"
						active-text="是"
						inactive-text="否"
					/>
				</el-form-item>
				<el-form-item label="排序" prop="sort">
					<el-input name="sort" v-model="form.sort"></el-input>
				</el-form-item>
				<el-form-item label="定位" prop="location">
					<search-map
						v-model="form.location"
						@located="onGetLocatedInfo"
						:province="form.province"
						:city="form.city"
					></search-map>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="onFormSubmit" :loading="loading">{{
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
<script setup lang="ts">
import { reactive, ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { service } from "/@/cool";

import SearchMap from "/@/views/components/formItemMap/index.vue";
import { rangeItem } from "../components/formItemMap/store.map";

const route = useRoute();
const router = useRouter();
const loading = ref(false);

const onFormSubmit = () => {
	refForm.value?.validate(async (valid) => {
		if (valid) {
			const _service = service.backend.project;
			loading.value = true;
			try {
				const result = await (id.value > 0
					? _service.patch({
							id: id.value,
							data: form
					  })
					: _service.post(form));
				ElMessage.success("操作成功");
				goBack();
			} catch (e: unknown) {
				ElMessage.error(e.message);
			}
			loading.value = false;
		}
	});
};
const goBack = () => {
	router.back();
};
const getTypes = async () => {
	return await service.backend.type.get()({
		limit: 99
	});
};

const getData = async () => {
	return await service.backend.project.get(id.value)();
};

const onGetLocatedInfo = (info) => {
	form.address = info.address;
	form.province = info.province;
	form.city = info.city;
};

const id = computed(() => +(route.query.id || 0));
const typeOptions = ref([]);
const submitBtText = computed(() => (id.value > 0 ? "编辑" : "创建"));
const refForm = ref<FormInstance>();
const form = reactive<{
	location: null | rangeItem["location"];
	[key: string]: any;
}>({
	cn: "",
	en: "",
	horizontal: "",
	vertical: "",
	typeID: "",
	location: null,
	country: "中国",
	province: "",
	city: "",
	address: "",
	recommend: 0,
	sort: 99
});
const formRules = reactive<FormRules>({
	cn: [
		{
			required: true,
			message: "请填写中文名"
		}
	],
	en: [
		{
			required: true,
			message: "请填写英文名"
		}
	],
	horizontal: [
		{
			required: true,
			message: "上传横图"
		}
	],
	vertical: [
		{
			required: true,
			message: "上传竖图"
		}
	],
	typeID: [
		{
			required: true,
			message: "选择所属类别"
		}
	],
	location: [
		{
			required: true,
			message: "请选择地域"
		}
	]
});

onMounted(async () => {
	const _types = await getTypes();
	typeOptions.value = _types.list.map((item) => ({
		key: item.id,
		value: item.id,
		label: item.name.cn
	}));
	if (id.value > 0) {
		const _data = await getData();
		form.cn = _data.name.cn;
		form.en = _data.name.en;
		form.vertical = _data.cover.vertical;
		form.horizontal = _data.cover.horizontal;
		form.typeID = _data.type.id;
		form.sort = _data.sort;
		form.location = _data.geometry;
		form.city = _data.city;
		form.province = _data.province;
		form.address = _data.address;
		form.recommend = _data.recommend;
	}
});
</script>
