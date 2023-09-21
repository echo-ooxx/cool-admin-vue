<template>
	<el-container>
		<el-header>
			<slot name="header"></slot>
		</el-header>
		<el-main>
			<slot></slot>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>
<script lang="ts" setup name="simple-layout">
const getData = async (service: { get: () => {} }) => {
	return await service.get();
};

defineExpose({
	getData
});
</script>
