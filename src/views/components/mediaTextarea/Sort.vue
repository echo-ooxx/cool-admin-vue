<template>
	<div>
		<draggable v-model="list" item-key="id" v-bind="config">
			<template #item="{ element }">
				<li class="list-group-item">
					<i
						:class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
						@click="element.fixed = !element.fixed"
						aria-hidden="true"
					></i>
					{{ element.text }}
				</li>
			</template>
		</draggable>
	</div>
</template>
<script lang="ts" setup name="layout__media-resort">
import { computed, reactive, ref } from "vue";
import draggable from "vuedraggable";

const list = computed(() => {
	const xx = [];

	for (let i = 0; i < 10; i++) {
		xx.push({
			id: i,
			text: `${i}${i}${i}`
		});
	}
	return xx;
});

const config = reactive({
	animation: 0,
	group: "description",
	disabled: false,
	ghostClass: "ghost"
});

const drag = ref(false);
</script>
<style lang="scss" scoped>
.button {
	margin-top: 35px;
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

.list-group {
	min-height: 20px;
}

.list-group-item {
	cursor: move;
}

.list-group-item i {
	cursor: pointer;
}
</style>
