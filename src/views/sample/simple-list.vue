<template>
	<div v-loading="loading">
		<wrapper v-model="form.location" :city="form.city" :text="text"></wrapper>
		<el-button @click="parent">parent</el-button>
		<str-child v-model="text"></str-child>
	</div>
</template>
<script lang="ts" setup name="sample-list">
import { reactive, onMounted, ref, watch } from "vue";
import Wrapper from "./_wrapper.vue";
import StrChild from "./_str-child.vue";

const loading = ref(false);

const form = reactive<{
	location: {
		lat: string;
		lng: string;
	} | null;
	[key: string]: any;
}>({
	id: 0,
	location: null,
	city: ""
});

const text = ref("sogioajweiog");

onMounted(async () => {
	loading.value = true;
	const p = new Promise<void>((resolve) => {
		setTimeout(() => {
			const _data = {
				lat: Date.now().toString(),
				lng: Date.now().toString()
			};
			form.id = 1;
			form.location = _data;
			form.city = "常州";
			loading.value = false;
			resolve();
		}, 5000);
	});
	await p;
});

watch(text, () => {
	console.log(text.value);
});

const parent = () => {
	text.value = Date.now().toString();
};
</script>
