<template>
	<el-container>
		<el-main>
			<media-textarea
				v-model="content"
				:loading="loading"
				:title="title"
				@submit="onCURD('submit')"
				@draft="onCURD('draft')"
			>
				<template #btn>
					<el-button @click="goback">返回</el-button>
				</template>
			</media-textarea>
		</el-main>
	</el-container>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { service } from "/@/cool";
import { useRoute, useRouter } from "vue-router";
import { Status } from "/@/common/symbol";

import MediaTextarea from "/@/views/components/mediaTextarea/index.vue";
import { ElMessage } from "element-plus";

const route = useRoute();
const router = useRouter();

const goback = () => {
	router.go(-1);
};

const getData = async () => {
	return service.backend.project.get(id.value)();
};

const onCURD = async (action: string) => {
	loading.value = true;
	await service.backend.project.patch({
		id: id.value,
		data: {
			content: content.value,
			status: action === "submit" ? Status.normal : Status.draft
		}
	});
	loading.value = false;
	ElMessage.success({
		message: "操作成功"
	});
};

const test = () => {
	alert("test");
};

const content = ref<RichFormInput.contentItem[]>();
const title = ref("");
const loading = ref(false);
const id = computed(() => {
	return +(route.query.id || 0);
});

onMounted(async () => {
	const data = await getData();
	content.value = data.content;
	title.value = data.name.cn;
});
</script>
