<template>
	<el-table
		:data="data"
		style="width: 100%"
		:border="border"
		:header-cell-style="headerCellStyle"
		:cell-style="cellStyle"
		@selection-change="selectionChange"
	>
		<el-table-column
			v-if="isSelection"
			width="55"
			align="center"
			type="selection"
		></el-table-column>
		<el-table-column v-if="isIndex" label="#" align="center" type="index" width="50" />
		<template v-if="header">
			<template v-for="item in header">
				<el-table-column
					v-if="item.slot == true"
					align="center"
					:key="item.prop"
					:type="item.type"
					:label="item.label"
					:width="item.width"
					:fixed="item.fixed"
					:show-overflow-tooltip="item.showOverTip"
				>
					<template #default="scope" v-if="item.slot">
						<slot :name="item.prop" :data="scope.row" :index="scope.$index"></slot>
					</template>
				</el-table-column>
				<el-table-column
					v-else
					align="center"
					:key="item.prop + 'else'"
					:type="item.type"
					:prop="item.prop"
					:label="item.label"
					:width="item.width"
					:fixed="item.fixed"
					show-overflow-tooltip
				></el-table-column>
			</template>
		</template>

		<el-table-column v-if="btn" label="操作" align="center" :width="btnWidth" fixed="right">
			<template #default="scope">
				<slot name="btn" :data="scope.row"></slot>
			</template>
		</el-table-column>
	</el-table>
</template>

<script lang="tsx" name="ex-table" setup>
import { toRef } from "vue";
interface IProps {
	data: Array<any>;
	header: Table.IHeader[];
	btn?: boolean;
	btnWidth?: string;
	isSelection?: boolean;
	border?: boolean;
	isIndex?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
	data: () => [],
	header: () => [],
	btn: false,
	btnWidth: "160",
	isSelection: false,
	border: true,
	isIndex: false
});

const header = toRef(props, "header");
const data = toRef(props, "data");
//:header-cell-style
const headerCellStyle = function (row: any, col: any) {
	return { color: "#333", fontSize: "12px", fontWeight: "bold", backgroundColor: "#f5f7fa" };
};
const cellStyle = function (row: any, col: any) {
	return { color: "#666666", fontSize: "12px" };
};
/**
 * 选中实际
 */
const selectionChange = function (data: any) {
	emit("SelectChamge", data);
};
const emit = defineEmits(["SelectChamge"]);
</script>

<style lang="scss" scoped></style>
