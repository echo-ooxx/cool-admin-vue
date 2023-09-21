<template>
	<div>
		<el-button @click="test">test</el-button>
	</div>
</template>
<script lang="ts" setup name="test-action">
import { ref } from "vue";
interface TProps {
	modelValue: {
		id: number;
		arr: number[];
	}[];
}

const props = defineProps<TProps>();

const innerModelValue = ref(props.modelValue);

const test = () => {
	const insertData: {
		id: number;
		arr: number[];
	}[] = [
		{
			id: 3,
			arr: [3, 2, 3]
		},
		{
			id: 4,
			arr: [4, 2, 3]
		}
	];

	innerModelValue.value.splice(0, 0, ...insertData);
};
</script>
