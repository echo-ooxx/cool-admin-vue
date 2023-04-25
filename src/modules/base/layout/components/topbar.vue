<template>
	<a-menu v-if="app.info.menu.isGroup" />

	<div class="app-topbar">
		<!-- industry减去 -->
		<!-- <div
			class="app-topbar__collapse"
			:class="{
				unfold: !app.isFold
			}"
			@click="app.fold()"
		>
			<i class="cl-iconfont cl-icon-fold"></i>
		</div> -->

		<!-- 路由导航 -->
		<!-- industry减去 -->
		<!-- <route-nav /> -->

		<div class="flex1">
			<p class="title">工业网络设计系统 V1.0</p>
			<p>All Rights Reserved.</p>
		</div>

		<!-- 工具栏 -->
		<!-- industry减去 -->
		<!-- <ul class="app-topbar__tools">
			<auto-menu-btn />

			<li>
				<cl-chat />
			</li>

			<li>
				<cl-theme />
			</li>
		</ul> -->

		<!-- 用户信息 -->
		<div class="app-topbar__user" v-if="user.info">
			<el-dropdown trigger="click" hide-on-click @command="onCommand">
				<span class="el-dropdown-link">
					<span class="name">{{ user.info.nickName }}</span>
					<el-icon :size="12"><arrow-down-bold /></el-icon>
					<!-- industry减去 -->
					<!-- <cl-avatar :size="32" :src="user.info.headImg" /> -->
				</span>

				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="my">
							<i class="cl-iconfont cl-icon-user"></i>
							<span>个人中心</span>
						</el-dropdown-item>
						<el-dropdown-item command="exit">
							<i class="cl-iconfont cl-icon-exit"></i>
							<span>退出</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
		<!-- industry新增 快捷按钮 -->
		<div class="app-topbar__quick-tools">
			<div class="tool__item" v-for="(tool, index) in tempTools" :key="index">
				<cl-svg class="icon" :name="tool.icon"></cl-svg>
				<p>{{ tool.text }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" name="app-topbar" setup>
import { useBase } from "/$/base";
import { useCool } from "/@/cool";
import { ArrowDownBold } from "@element-plus/icons-vue";
import AMenu from "./amenu.vue";
// import RouteNav from "./route-nav.vue";
// import AutoMenuBtn from "/$/magic/components/auto-menu/btn.vue";

const { router, service } = useCool();
const { user, app } = useBase();

const tempTools = [
	{
		text: "审计报表",
		icon: "icon-document"
	},
	{
		text: "快速指南",
		icon: "icon-collection"
	},
	{
		text: "清缓存",
		icon: "icon-broom"
	},
	{
		text: "锁屏",
		icon: "icon-lock"
	}
];

async function onCommand(name: string) {
	switch (name) {
		case "my":
			router.push("/my/info");
			break;
		case "exit":
			await service.base.comm.logout();
			user.logout();
			break;
	}
}
</script>

<style lang="scss" scoped>
.app-topbar {
	display: flex;
	align-items: center;
	height: 50px;
	padding: 0 10px;
	background-color: #fff;
	margin-bottom: 10px;

	&__collapse {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 40px;
		cursor: pointer;
		transform: rotateY(180deg);

		&.unfold {
			transform: rotateY(0);
		}

		i {
			font-size: 20px;
		}
	}

	.flex1 {
		flex: 1;
	}

	&__tools {
		display: flex;
		margin-right: 20px;

		& > li {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			height: 45px;
			min-width: 45px;
			border-radius: 3px;
			cursor: pointer;
			margin-left: 10px;
		}
	}

	&__user {
		margin-right: 10px;
		cursor: pointer;

		.el-dropdown-link {
			display: flex;
			align-items: center;
		}

		.name {
			white-space: nowrap;
			margin-right: 15px;
		}

		.el-icon-arrow-down {
			margin-left: 10px;
		}
	}
}
</style>
