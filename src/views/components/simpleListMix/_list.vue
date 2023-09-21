<template>
	<simpleLayout>
		<template #header v-if="props?.header.length > 0">
			<el-button>新增</el-button>
		</template>
		<ex-table></ex-table>
	</simpleLayout>
</template>
<script lang="ts" setup name="simple-list">
import simpleLayout from "./_layout.vue";
import { BaseService } from "/@/cool";

type Header = {
	type: "btn" | "search-form";
	text: string;
	func: () => {};
};

type SimpleListProps = {
	header?: Header[];
	service: BaseService;
};

const props = withDefaults(defineProps<SimpleListProps>(), {
	header: () => []
});
</script>
