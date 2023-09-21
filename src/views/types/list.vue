<template>
	<el-container class="page-container">
		<el-header>
			<el-button type="success">新增</el-button>
		</el-header>
		<el-main>
			<ex-table :header="header" :data="data" btn>
				<template #name="{ data: { name } }">
					<p>{{ name.cn }}</p>
				</template>
				<template #btn="{ data: { id } }">
					<el-button>
						<router-link :to="`/project/types/edit?id=${id}`">编辑</router-link>
					</el-button>
					<el-button @click="onDelete(id)">删除</el-button>
				</template>
			</ex-table>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>
<script lang="ts" setup>
import { service } from "/@/cool";
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

const header: Table.IHeader[] = [
	{
		prop: "name",
		label: "类别",
		slot: true
	},
	{
		prop: "sort",
		label: "排序"
	}
];

const data = ref<Api.types[]>([]);

const getData = async () => {
	const { list } = await service.backend.type.get()();
	data.value = list;
};

const refresh = async () => {
	const { list } = await service.backend.type.get()();
	data.value = list;
};

const onDelete = async (id: number) => {
	try {
		ElMessageBox.confirm("确认删除此条信息", "提示", {
			type: "warning"
		})
			.then(async () => {
				await service.backend.type.delete(id);
				ElMessage.success("删除成功");
				refresh();
			})
			.catch(() => {
				console.log("用户取消");
			});
	} catch (e) {
		ElMessage.error("请重试");
	}
};

onMounted(() => {
	getData();
});
</script>
