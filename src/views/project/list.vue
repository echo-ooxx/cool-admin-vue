<template>
	<el-container class="page-container">
		<el-header>
			<el-button type="success"
				><router-link to="/project/detail">新增</router-link></el-button
			>
		</el-header>
		<el-main>
			<ex-table btn :header="header" :data="data" :btn-width="400" is-index>
				<template #name="{ data: { name } }">
					<p>{{ name.cn }}</p>
				</template>
				<template #cover="{ data: { cover } }">
					<el-image :src="cover.horizontal" style="width: 100px"></el-image>
				</template>
				<template #type="{ data: { type } }">
					<p>{{ type.name.cn }}</p>
				</template>
				<template #btn="{ data: { id } }">
					<div class="btinner">
						<el-button>
							<router-link :to="`/project/detail?id=${id}`">编辑</router-link>
						</el-button>
						<el-button>
							<router-link :to="`/project/content?id=${id}`">详情编辑</router-link>
						</el-button>
						<el-button>
							<router-link :to="`/project/param?id=${id}`">参数编辑</router-link>
						</el-button>
						<el-button>删除</el-button>
					</div>
				</template>
			</ex-table>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { service } from "/@/cool";

const header: Table.IHeader[] = [
	{
		prop: "name",
		label: "案例名称",
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

const data = ref<Api.projects[]>([]);

const getData = async () => {
	const { list } = await service.backend.project.get()();
	data.value = list;
};

getData();
</script>
<style lang="scss" scoped>
.btinner {
	width: 100%;
	display: flex;
	justify-content: center;
}
</style>
