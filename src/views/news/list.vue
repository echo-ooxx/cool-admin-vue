<template>
	<el-container class="page-container">
		<el-header>
			<el-col>
				<el-button type="success">
					<router-link to="/news/edit">新增</router-link>
				</el-button>
				<el-select>
					<el-option>飞视新闻</el-option>
					<el-option>飞视荣誉</el-option>
				</el-select>
			</el-col>
		</el-header>
		<el-main>
			<ex-table btn :header="header" :data="data" :btn-width="400" is-index>
				<template #name="{ data: { title } }">
					<p>{{ title.cn }}</p>
				</template>
				<template #cover="{ data: { cover } }">
					<el-image :src="cover" style="width: 100px"></el-image>
				</template>
				<template #type="{ data: { typeID } }">
					<p>{{ typeID }}</p>
				</template>
				<template #btn="{ data: { id } }">
					<div class="btinner">
						<el-button>
							<router-link :to="`/news/edit?id=${id}`">编辑</router-link>
						</el-button>
						<el-button @click="onRemove(id)">删除</el-button>
					</div>
				</template>
			</ex-table>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { service } from "/@/cool";
import { ElMessage } from "element-plus";
const getData = async () => {
	const { list } = await service.backend.news.get()();
	data.value = list;
};

const onRemove = async (id) => {
	try {
		await service.backend.news.delete(id);
		ElMessage.success("操作成功");
		data.value = data.value.filter((item) => +item.id !== id);
	} catch (err) {
		ElMessage.error(err.message);
	}
};

const data = ref<Api.news[]>([]);
const header: Table.IHeader[] = [
	{
		prop: "name",
		label: "新闻名称",
		slot: true
	},
	{
		prop: "cover",
		label: "封面",
		slot: true
	},
	{
		prop: "type",
		label: "所属类别",
		slot: true
	}
];

onMounted(async () => {
	getData();
});
</script>
