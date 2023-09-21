<template>
	<div>
		<div>
			<el-button @click="test">test inner</el-button>
		</div>
		<div>
			<label for="">id:</label>
			<span>{{ item.id }}</span>
			<div>
				<span>dataset</span>
				<div>
					<span v-for="p in item.arr" :key="p">{{ p }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup name="test-item">
import { ref } from "vue";
interface TProps {
	item: {
		id: number;
		arr: number[];
	};
	modelValue: {
		id: number;
		arr: number[];
	}[];
	queue: number;
}

const props = defineProps<TProps>();

const innerModelValue = ref(props.modelValue);

const test = () => {
	innerModelValue.value[props.queue].arr = [Math.floor(Math.random() * 10)];
};
</script>
