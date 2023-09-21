<template>
	<el-container class="page-container">
		<el-main>
			<div class="params-container">
				<el-row class="action-area__container" justify="space-between">
					<div class="impor__container">
						<el-button type="primary" @click="onAdd" :loading="loading">新增</el-button>
						<el-button type="success" @click="onSave" :loading="loading"
							>保存</el-button
						>
						<el-button type="info" @click="goBack">返回</el-button>
					</div>
					<div class="impor__container">
						<p>支持模版批量导入参数</p>
						<el-button :loading="loading">下载模版</el-button>
						<el-button :loading="loading">一键导入</el-button>
					</div>
				</el-row>
				<div class="forms__container" v-if="params.length > 0">
					<draggable
						item-key="id"
						v-model="params"
						handle=".handle"
						v-bind="dragConfig"
						tag="transition-group"
						:component-data="componentData"
					>
						<template #item="{ element, index }">
							<li>
								<el-form class="item">
									<el-row justify="space-between">
										<el-col :span="1">
											<div class="icon__inner handle">
												<el-icon>
													<sort />
												</el-icon>
											</div>
										</el-col>
										<el-col :span="20">
											<el-row justify="space-between">
												<el-col :span="11">
													<el-form-item label="参数标题">
														<el-input v-model="element.key"></el-input>
													</el-form-item>
												</el-col>
												<el-col :span="11">
													<el-form-item label="参数内容">
														<el-input
															v-model="element.value"
														></el-input>
													</el-form-item>
												</el-col>
											</el-row>
										</el-col>
										<el-col :span="2">
											<el-button
												type="warning"
												:data-index="index"
												:loading="loading"
												@click="onDel"
												>删除</el-button
											>
										</el-col>
									</el-row>
								</el-form>
							</li>
						</template>
					</draggable>
				</div>
				<p class="no-data" v-else>暂无参数</p>
			</div>
		</el-main>
	</el-container>
</template>
<script lang="ts" setup>
import { Sort } from "@element-plus/icons-vue";
import { computed, onMounted, ref, watch } from "vue";
import { whenErrorBack } from "/@/common/utlis";
import { service } from "/@/cool";
import { useRoute, useRouter } from "vue-router";
import draggable from "vuedraggable";
import { ElMessage } from "element-plus";

const route = useRoute();
const router = useRouter();

const loadData = async () => {
	const res = await service.backend.project.get(id.value)();
	return res.param;
};

const goBack = () => {
	router.go(-1);
};

const onAdd = () => {
	params.value.push({
		key: "",
		value: ""
	});
};

const onDel = (e: MouseEvent) => {
	const { currentTarget } = e;
	const {
		dataset: { index }
	} = currentTarget as HTMLElement;

	params.value.splice(+index!, 1);
};

const onSave = async () => {
	if (params.value.length > 0) {
		loading.value = true;
		await service.backend.project.patch({
			id: id.value,
			data: {
				param: params.value
			}
		});
		loading.value = false;
		ElMessage.success("操作成功");
	}
};

const loading = ref(false);
const dragConfig = {
	animation: 200,
	group: "description",
	disabled: false,
	ghostClass: "ghost"
};
const componentData = {
	tag: "ul",
	name: "flip-list",
	type: "transition"
};
const params = ref<unknown[]>([]);
const _forms = ref();
const id = computed(() => {
	return +(route.query.id || 0);
});

onMounted(async () => {
	try {
		await whenErrorBack(() => {
			return id.value === 0;
		}, "参数错误");

		const projectParams = await loadData();

		params.value = projectParams ? projectParams : [];
	} catch (err) {
		console.log(err);
	}
});

watch(_forms, (val) => {
	console.log(val);
});
</script>

<style lang="scss" scoped>
.params-container {
	width: 100%;
}

.action-area__container {
	.impor__container {
		display: flex;
		align-items: center;

		p {
			font-size: 12px;
			margin-right: 10px;
			color: red;
		}
	}
}

.forms__container {
	margin-top: 20px;

	.icon__inner {
		cursor: move;
		text-align: center;
		padding-top: 7px;
	}
}

.flip-list-move {
	transition: transform 0.5s;
}

.no-move {
	transition: transform 0s;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}

.no-data {
	font-size: 12px;
	padding: 37px 13px 13px 13px;
	text-align: center;
}
</style>
