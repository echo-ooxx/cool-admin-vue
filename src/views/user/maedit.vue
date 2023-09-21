<template>
	<el-container class="page-container">
		<el-main>
			<el-form :model="form" :rules="formRules" label-width="120px" ref="refForm">
				<el-form-item label="联系人称呼" prop="name">
					<el-input name="cn" v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="联系人职位" prop="title">
					<el-input name="en" v-model="form.title"></el-input>
				</el-form-item>
				<el-form-item label="联系人电话" prop="tel">
					<el-input name="cn" v-model="form.tel"></el-input>
				</el-form-item>
				<el-form-item label="联系人邮箱" prop="email">
					<el-input name="cn" v-model="form.email"></el-input>
				</el-form-item>
				<el-form-item label="联系人头像" prop="avatar">
					<cl-upload v-model="form.avatar"></cl-upload>
				</el-form-item>
				<el-form-item label="名片背景图" prop="bg">
					<cl-upload v-model="form.bg"></cl-upload>
				</el-form-item>
				<el-form-item label="当前状态" prop="status">
					<el-switch
						v-model="form.status"
						:active-value="Status.normal"
						:inactive-value="Status.delete"
						active-text="启用"
						inactive-text="停用"
					/>
				</el-form-item>
				<el-form-item label="关联用户">
					<div class="item__inner">
						<div class="keyword__container">
							<el-input
								placeholder="输入要绑定的用户昵称"
								v-model="keyword"
								@keyup.enter="onSearch"
							>
								<template #append>
									<el-button
										:icon="Search"
										@click="onSearch"
										:loading="loading"
									></el-button>
								</template>
							</el-input>
						</div>
						<div class="result__container">
							<el-checkbox-group v-model="checkedUID" :max="1">
								<div class="checkbox__inner">
									<div class="fixed" v-if="form.user">
										<el-checkbox
											:key="-1"
											:label="form.user.id"
											class="result__radio"
											border
										>
											<div class="radio__inner">
												<img :src="form.user.avatar_url" alt="" />
												<p>{{ form.user.nickname }}</p>
											</div>
										</el-checkbox>
									</div>
									<div class="selections">
										<el-checkbox
											v-for="item in result"
											:key="item.id"
											:label="item.id"
											class="result__radio"
											border
										>
											<div class="radio__inner">
												<img :src="item.avatar_url" alt="" />
												<p>{{ item.nickname }}</p>
											</div>
										</el-checkbox>
									</div>
								</div>
							</el-checkbox-group>
						</div>
					</div>
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
import { reactive, ref, computed, onMounted, watch, toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { service } from "/@/cool";
import { ruleVaidete, validatePhoneNumberMix, validateEmail } from "/@/cool/utils/validations";
import { Status } from "/@/common/symbol";

const route = useRoute();
const router = useRouter();

const onSearch = async () => {
	if (keyword.value) {
		const res = await service.backend.user.search.get()({ keyword: keyword.value });
		result.value = res;
	}
};

const onFormSubmit = async () => {
	const _service = service.backend.manager;
	refForm.value?.validate(async (valid) => {
		if (valid) {
			loading.value = true;
			const _postData = toRaw(form);
			_postData.uid = checkedUID.value.length > 0 ? checkedUID.value["0"] : 0;
			const res =
				id.value > 0
					? await _service.patch({ id: id.value, data: _postData })
					: await _service.post(form);
			loading.value = false;
			if (id.value === 0) {
				goBack();
			} else {
				Object.assign(_postData, res);
			}
			ElMessage.success("操作成功");
		}
	});
};
const goBack = () => {
	router.back();
};

const getData = async () => {
	return await service.backend.manager.get(id.value)();
};

const loading = ref(false);
const refForm = ref<FormInstance>();
const form = reactive<{
	[key: string]: any;
}>({
	name: "",
	title: "",
	email: "",
	tel: "",
	avatar: "",
	status: 0,
	bg: "",
	uid: ""
});
const formRules = reactive<FormRules>({
	name: [
		{
			required: true,
			message: "请填写联系人称呼"
		}
	],
	title: [
		{
			required: true,
			message: "请填写联系人职位"
		}
	],
	tel: [
		{
			required: true,
			message: "请填写联系人电话"
		},
		{
			validator: ruleVaidete(validatePhoneNumberMix, "请输入正确的手机号码或座机")
		}
	],
	email: [
		{
			required: true,
			message: "请填写联系人邮箱"
		},
		{
			validator: ruleVaidete(validateEmail, "请输入正确的邮箱")
		}
	]
});
const keyword = ref<string>("");
const result = ref<Api.user[]>([]);
const id = computed(() => +(route.query.id || 0));
const submitBtText = computed(() => (id.value > 0 ? "编辑" : "创建"));
const checkedUID = ref<number[]>([]);

onMounted(async () => {
	if (id.value > 0) {
		const res = await getData();
		Object.assign(form, res);
	}
});

watch(form, (val) => {
	checkedUID.value = val.uid === 0 ? [] : [val.uid];
});
</script>
<style lang="scss" scoped>
.item__inner {
}

.keyword__container {
}

.result__container {
	margin-top: 19px;
}

.result__radio {
	height: auto;
	padding: 7px;

	.radio__inner {
		display: flex;
		align-items: center;

		img {
			width: 32px;
			height: 32px;
		}

		p {
			margin-left: 13px;
		}
	}
}

.checkbox__inner {
	display: flex;
	align-items: center;

	.fixed {
		padding: 13px;
		border: 1px dashed darkgray;

		p {
			font-size: 12px;
		}

		margin-right: 13px;
	}

	.selections {
	}
}
</style>
