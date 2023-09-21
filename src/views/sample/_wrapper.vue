<template>
	<div>
		<el-button @click="random">test</el-button>
		<p>{{ istring }}</p>
		<p>{{ getCity }}</p>
		<p>{{ getText }}</p>
	</div>
</template>
<script lang="ts" setup name="test-wrapper">
import { computed, toRef, isRef, ref, watch } from "vue";
// import Item from "./_item.vue";
// import Action from "./_action.vue";

const emit = defineEmits(["update:modelValue"]);

interface TProps {
	modelValue: {
		lng: string;
		lat: string;
	} | null;
	city: string;
	text: string;
}

const randData = () => {
	// return {
	// 	id: Math.floor(Math.random() * 1001)
	// };
	return Math.floor(Math.random() * 1001);
};

const random = () => {
	const _data = {
		lat: randData().toString(),
		lng: randData().toString()
	};
	Object.assign(innerModelValue, _data);
	emit("update:modelValue", _data);
};

const props = withDefaults(defineProps<TProps>(), {
	modelValue: null,
	city: "",
	text: ""
});

const innerModelValue = toRef(() => props.modelValue);

const istring = computed(() => {
	return innerModelValue.value ? Object.values(innerModelValue.value).join(",") : "";
});
</script>
