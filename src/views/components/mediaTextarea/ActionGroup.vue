<template>
	<div class="action-group">
		<div class="inerst-box" :class="[theme]">
			<p class="title">{{ title }}</p>
			<div class="btn-container">
				<div class="button-item">
					<el-button class="circle-button" circle @click="onClick('upload')">
						<cl-svg class="button-icon" name="icon-img"></cl-svg>
						<p>新增图片/视频</p>
					</el-button>
				</div>
				<div class="button-item">
					<el-button class="circle-button" circle @click="onClick('textarea')">
						<cl-svg class="button-icon" name="icon-text"></cl-svg>
						<p>新增文字</p>
					</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup name="layout__action-group">
import { inject, toRefs } from "vue";

const injectData = inject<RichFormInput.ProvideKey>("RichFormInputProvideKey");

interface TProps {
	insertConfig: RichFormInput.insertConfig;
	theme?: string;
	title?: string;
}

const props = withDefaults(defineProps<TProps>(), {
	theme: "big",
	title: "插入内容"
});

const { title } = toRefs(props);

const onClick = (act: "upload" | "textarea") => {
	if (injectData) {
		injectData.insert(act, props.insertConfig);
	}
};
</script>
<style lang="scss" scoped>
.action-group {
	color: #2f2f2f;
}

.inerst-box {
	&.big {
		.title {
			font-size: 36px;
			text-align: center;
			font-weight: bold;
		}

		.btn-container {
			display: flex;
			justify-content: space-around;
			margin-top: 27px;

			.button-item {
				text-align: center;
				position: relative;

				p {
					font-size: 12px;
					margin-top: 10px;
					position: absolute;
					left: 50%;
					top: 100%;
					transform: translate(-50%);
				}

				.circle-button {
					font-size: 70px;
					height: auto;
					padding: 30px;
				}

				.button-icon {
				}
			}
		}
	}

	&.small {
		width: 100%;
		background-color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ccc;
		font-size: 16px;

		.title {
			font-size: 12px;
			font-weight: bold;
			color: #fff;
			white-space: nowrap;
		}

		.btn-container {
			display: flex;
			margin-left: 4vw;

			.button-item {
				display: flex;
				align-items: center;
				margin-left: 23px;

				&:hover {
					.el-button {
						color: #fff;
					}
				}

				&:first-child {
					margin-left: 0;
				}

				.el-button {
					background-color: transparent;
					border: none;
					color: #ccc;
				}

				p {
					margin-left: 11px;
				}
			}
		}
	}
}
</style>
