<template>
	<div class="map-container">
		<el-input readonly :value="modelValueToString"></el-input>
		<div class="map-wrapper">
			<tmap-map
				map-key="U55BZ-DKM6U-ABIVH-GNPZC-RH4T3-SMFLX"
				:double-click-zoom="mapConfig.doubleClickZoom"
				:control="mapConfig.control"
				:center="currentLocation.location"
			>
				<tmap-multi-marker
					id="result-marker"
					:styles="markerStyles"
					:geometries="geometries"
					@click="onClickMarker"
				></tmap-multi-marker>
			</tmap-map>
			<div class="getpoint-container">
				<div class="getpoint-search">
					<el-autocomplete
						v-model="keyword"
						placeholder="输入坐标/地点"
						class="getpoint-autocomplete"
						clearable
						:fetch-suggestions="getSuggestion"
						@select="onAutoCompleteSelect"
						ref="autoComplete"
					>
						<template #default="{ item }">
							<div class="auto-complete-item">
								<p>{{ item.title }}</p>
								<p class="address">{{ item.address }}</p>
							</div>
						</template>
						<template #suffix>
							<div class="getpoint-suffix" @click.stop="onPointKeywordSearch">
								<cl-svg name="icon-search"></cl-svg>
							</div>
						</template>
					</el-autocomplete>
					<ul
						class="result-container"
						v-if="searchResults.length > 0"
						@click="onClickResult"
					>
						<li
							v-for="(item, index) in searchResults"
							:key="item.id"
							:data-id="item.id"
							:class="{
								actived: mapLocationInput && mapLocationInput.id === item.id
							}"
						>
							<div class="inner">
								<div class="sort">{{ index + 1 }}</div>
								<div class="info">
									<p>{{ item.title }}</p>
									<p>{{ item.address }}</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="getpoint-city">
					<el-select
						popper-class="range-popper"
						v-model="currentLocation.id"
						placement="bottom-end"
					>
						<el-option-group
							v-for="(group, index) in optionsGroup"
							:key="index"
							:label="group.label"
						>
							<template v-if="index === 0">
								<el-option
									v-for="(opt, o) in group.options"
									:key="o"
									:value="opt.id"
									:label="opt.fullname"
								></el-option>
							</template>
							<template v-else>
								<el-option-group
									v-for="(g, o) in group.options"
									:key="o"
									:label="g.fullname"
								>
									<el-option
										v-for="(opt, oo) in g.cities"
										:key="oo"
										:value="opt.id"
										:label="opt.fullname"
									>
										<div>{{ opt.fullname }}</div>
									</el-option>
								</el-option-group>
							</template>
						</el-option-group>
					</el-select>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup name="form-item-map">
import { reactive, onMounted, computed, ref, watch, toRaw, toRef } from "vue";
import { storeToRefs } from "pinia";
import { useMapStore, rangeItem, currentInfo } from "./store.map";
import { service } from "/@/cool";
import { findParent } from "/@/cool/utils";

interface AutoCompleteItem {
	id: string;
	title: string;
	address: string;
	location: rangeItem["location"];
}

interface Geometry {
	id: string;
	title: string;
	address: string;
	location: rangeItem["location"];
	[K: string]: any;
}

/**
 * @description 远程补全地点搜索关键字
 * @param queryString
 * @param cb
 */
const getSuggestion = (queryString: string, cb: (arg: any) => void) => {
	if (queryString) {
		const req = service.backend.map.suggestion.get();
		req({
			keyword: queryString,
			region: currentLocation.city
		}).then((res) => {
			const { data } = res;
			cb(
				data.map((item: AutoCompleteItem) => ({
					id: item.id,
					title: item.title,
					address: item.address,
					location: item.location
				}))
			);
		});
	} else {
		return [];
	}
};
/**
 * @description 搜索关键字
 */
const onPointKeywordSearch = async () => {
	// 关闭建议列表
	autoComplete.value.close();
	const { location } = currentLocation;
	if (keyword.value && location) {
		const pre = service.backend.map.search.get();
		const { data, count } = await pre({
			keyword: keyword.value,
			...location
		});
		if (count > 0) searchResults.value = data;
	}
};

/**
 * @description 根据id 查找具体的经纬度
 * @param id
 */
const searchLocationByID = (id: string) => {
	const provinceCode = `${id.substring(0, 2)}0000`;
	const province = mapStore.ranges.find((item) => {
		return item.id === provinceCode;
	});
	const city = province
		? province.cities && province.cities.length > 0
			? province.cities.find((item) => item.id === id)
			: province
		: null;
	if (city) {
		city["provinceName"] = province!.fullname;
	}
	return city;
};
/**
 * @description 选中地点搜索关键字补全信息
 * @param item
 */
const onAutoCompleteSelect = (item: AutoCompleteItem) => {
	keyword.value = item.title;
	onPointKeywordSearch();
};
/**
 * 在地图上渲染点位
 */
const renderMark = () => {
	geometries.value =
		searchResults.value.length > 0
			? searchResults.value.map((geometry, index) => ({
					id: geometry.id,
					position: toRaw(geometry.location),
					content: `${index + 1}`
			  }))
			: [];
	// 默认选中第一个
	const first = searchResults.value.length > 0 ? searchResults.value["0"] : null;
	mapLocationInput.value = first
		? {
				id: first.id,
				location: first.location,
				address: first.address
		  }
		: null;
};
/**
 * 在适应marker点位
 */
const fitMarkers = () => {};
/**
 * @description 选择搜索结果点
 * @param e
 */
const onClickResult = (e: MouseEvent) => {
	const li = findParent(e.target as HTMLElement, "li");
	const { id } = li.dataset;
	mapLocationInput.value = searchResults.value.find((item) => item.id === id);
};
/**
 * 点击marker
 */
const onClickMarker = (e: any) => {
	const {
		id,
		position: { lat, lng }
	} = e.geometry;

	const _c =
		searchResults.value.length > 0 ? searchResults.value.find((item) => item.id === id) : null;
	mapLocationInput.value = {
		id: e.geometry.id,
		location: {
			lat,
			lng
		},
		address: _c ? _c.address : ""
	};
};

interface TProps {
	modelValue: rangeItem["location"] | null;
	city: string;
	province: string;
}

const emit = defineEmits<{
	(e: "update:modelValue", value: rangeItem["location"] | null): void;
	(e: "located", value: Omit<currentInfo, "id">): void;
}>();

const props = withDefaults(defineProps<TProps>(), {
	modelValue: null,
	city: ""
});

const innerModelValue = toRef(() => props.modelValue);
const getCity = toRef(() => props.city);
const getProvince = toRef(() => props.province);
const mapStore = useMapStore();
const { hotCities, provinces } = storeToRefs(mapStore);

const mapConfig = reactive({
	control: {},
	doubleClickZoom: false
});

// 地点搜索关键字
const keyword = ref("");
// autoComplete 控件
const autoComplete = ref();
// 当前定位点
const currentLocation = reactive(mapStore.currentLocation);
// 搜索结果
const searchResults = ref<Geometry[]>([]);
const mapLocationInput = ref<Partial<Geometry> | "" | null | undefined>("");
// 搜索结果定位点
const geometries = ref<Partial<Geometry>[]>([]);

const markerStyles = ref({
	default: {
		width: 40,
		height: 40,
		anchor: {
			x: 20,
			y: 20
		},
		src: "https://storage.gooob.cn/tmp/located-ex.png",
		color: "#fff",
		size: 18,
		offset: { x: 0, y: -3 }
	},
	actived: {
		width: 40,
		height: 40,
		anchor: {
			x: 20,
			y: 20
		},
		src: "https://storage.gooob.cn/tmp/located-actived.png",
		color: "#fff",
		size: 0,
		offset: { x: 0, y: -3 }
	}
});

const optionsGroup = computed(() => {
	if (hotCities.value.length > 0 && provinces.value.length > 0) {
		return [
			{
				label: "热门城市",
				options: hotCities.value
			},
			{
				label: "",
				options: provinces.value
			}
		];
	} else {
		return [];
	}
});

const modelValueToString = computed(() => {
	return innerModelValue.value ? Object.values(innerModelValue.value).join(",") : "";
});

onMounted(async () => {
	await mapStore.getRanges();
	await mapStore.getCurrentLocation();
	console.log(getCity.value, getProvince.value);
	// @deprecated
	// renderMark();
});
// 监听当前定位
watch(
	() => currentLocation.id,
	() => {
		// 获取中心点
		const result = searchLocationByID(currentLocation.id);
		if (result) {
			currentLocation.city = result.name;
			currentLocation.location = result.location;
			currentLocation.province = result.provinceName;
		}
		// 清空keyword
		keyword.value = "";
	}
);
// 监听搜索结果
watch(searchResults, () => {
	renderMark();
	// fitMarkers();
});
// 监听选择地点
watch(mapLocationInput, () => {
	if (mapLocationInput.value) {
		// 选中之后，改变marker央视
		geometries.value = geometries.value.map((item) => {
			if (item.id === mapLocationInput.value!.id) {
				item.styleId = "actived";
			} else {
				item.styleId = "default";
			}
			return item;
		});
		// 移动 视野
		currentLocation.location = mapLocationInput.value!.location as NonNullable<
			Geometry["location"]
		>;

		const located: Omit<currentInfo, "id"> = {
			location: currentLocation.location,
			city: currentLocation.city,
			province: currentLocation.province ?? "",
			address: mapLocationInput.value ? mapLocationInput.value.address : ""
		};
		emit("update:modelValue", mapLocationInput.value ? currentLocation.location : null);
		emit("located", located);
	}
});
// 监听搜索关键字 keyword
watch(keyword, () => {
	if (keyword.value === "") {
		searchResults.value = [];
	}
});
</script>

<style lang="scss" scoped>
.map-container {
	width: 100%;
	position: relative;
}

.map-wrapper {
	width: 100%;
	height: 600px;
	position: relative;
}

.getpoint-container {
	padding: 10px 10px 0 10px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	box-sizing: border-box;
	align-items: flex-start;
}

.getpoint-search {
	width: 360px;
	z-index: 1109;
	position: relative;

	.el-autocomplete {
		width: 100%;
	}
}

.result-container {
	max-height: 500px;
	width: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	position: relative;
	z-index: 1110;
	background-color: #fff;
	box-sizing: border-box;
	border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
	box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
	margin-top: -1px;
	padding-top: 1px;

	li {
		width: 100%;
		cursor: pointer;
		padding: 0 10px;
		box-sizing: border-box;
		margin-left: 1px;

		&.actived {
			background-color: rgba(0, 98, 255, 0.1);
			color: rgba(0, 98, 255);
		}

		&:hover {
			background-color: rgba(0, 98, 255, 0.03);
		}

		.inner {
			display: flex;
			align-items: center;
			padding: 25px 0;
			border-bottom: 1px solid rgba(27, 32, 44, 0.05);
		}

		.sort {
			font-size: 14px;
			flex: 0 0 36px;
			height: 36px;
			background-color: #d6d6d6;
			border-radius: 50%;
			color: #fff;
			font-weight: 500;
			line-height: 36px;
			text-align: center;
		}

		.info {
			padding: 0 0 0 13px;
			flex: 1;
			line-height: 1;
			overflow: hidden;

			p {
				font-size: 14px;

				&:nth-child(1) {
					font-size: 16px;
					font-weight: 500;
				}

				&:nth-child(2) {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					margin-top: 6px;
				}

				letter-spacing: 1px;
			}
		}
	}
}

.getpoint-city {
	margin-left: 10px;
	position: relative;
	z-index: 1109;
}

.el-select-group__wrap {
	:deep(.el-select-group__title) {
		color: #606266;
		font-size: 16px;
	}

	:deep(.el-select-group) {
		display: flex;
		flex-wrap: wrap;

		.el-select-dropdown__item {
			font-size: 12px;
			padding: 0;
			padding: 0 10px;
		}
	}

	:deep(.el-select-group__wrap) {
		.el-select-group {
			padding: 0 10px;
		}
	}
}

.auto-complete-item {
	display: flex;
	font-size: 14px;
	align-items: flex-end;
	line-height: 1;
	padding: 10px 0;

	.address {
		font-size: 12px;
		color: darkgray;
		padding-left: 5px;
	}
}
</style>
<style lang="scss">
.range-popper {
	width: 360px;
}

.getpoint-autocomplete {
	width: 100%;

	.el-input {
		.el-input__wrapper {
			padding-right: 36px;
		}
	}

	.getpoint-suffix {
		margin: 0;
		width: 36px;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
	}
}
</style>
