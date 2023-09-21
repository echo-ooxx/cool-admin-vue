<template>
	<div>
		<el-button @click="xxs">str-child</el-button>
		<p>{{ innerModelValue }}</p>
		<p>{{ xx }}</p>
	</div>
</template>
<script lang="ts" setup name="sample-str-child">
import { computed, isRef, onMounted, ref, toRef, watch } from "vue";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
	modelValue: {
		type: String,
		default: ""
	}
});

const innerModelValue = ref(props.modelValue);

const xxs = () => {
	const xx = Date.now().toString();
	innerModelValue.value = xx;
	console.log(isRef(xx));
	emits("update:modelValue", xx);
};
</script>
