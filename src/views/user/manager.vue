<template>
	<el-container class="page-container">
		<el-header>
			<el-button type="success"><router-link to="/user/ma-edit">新增</router-link></el-button>
		</el-header>
		<el-main>
			<ex-table btn :header="header" :data="data" :btn-width="400" is-index>
				<template #name="{ data: { name } }">
					<p>{{ name }}</p>
				</template>
				<template #title="{ data: { title } }">
					<p>{{ title }}</p>
				</template>
				<template #status="{ data: { status } }">
					<p>{{ status === Status.normal ? "启用" : "停用" }}</p>
				</template>
				<template #btn="{ data: { id } }">
					<div class="btinner">
						<el-button>
							<router-link :to="`/user/ma-edit?id=${id}`">编辑</router-link>
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
import { Status } from "/@/common/symbol";

const header: Table.IHeader[] = [
	{
		prop: "name",
		label: "名字",
		slot: true
	},
	{
		prop: "title",
		label: "职位",
		slot: true
	},
	{
		prop: "status",
		label: "当前状态",
		slot: true
	}
];

const data = ref<Api.manager[]>([]);

const getData = async () => {
	const { list } = await service.backend.manager.get()();
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
