import { defineStore } from "pinia";
import { service } from "/@/cool";
import { computed, reactive, ref } from "vue";

export type rangeItem = {
	id: string;
	fullname: string;
	name: string;
	pinyin: string[];
	location: {
		lat: string | number;
		lng: string | number;
	};
	cidx?: number[];
	cities?: rangeItem[];
};

export type currentInfo = {
	id: string;
	location: rangeItem["location"];
	city: string;
	province?: string;
	address?: string;
};

export const useMapStore = defineStore("map", () => {
	const ranges = ref<rangeItem[]>([]);

	const hotCities = computed(() => {
		return ranges.value.filter((item) => item.cities?.length === 0);
	});

	const provinces = computed(() => {
		return ranges.value.filter((item) => item.cities && item.cities.length > 0);
	});

	const currentLocation = reactive<currentInfo>({
		id: "",
		location: {
			lat: "",
			lng: ""
		},
		city: "",
		province: ""
	});

	async function getRanges() {
		if (ranges.value.length > 0) {
			return ranges;
		} else {
			const data = await service.backend.map.list.get()();
			ranges.value = data;
		}
	}

	async function getCurrentLocation() {
		if (currentLocation.id === "") {
			const { result } = await service.backend.map.ip.get()();
			currentLocation.id = `${result.ad_info.adcode.toString().substring(0, 4)}00`;
			currentLocation.location = result.location;
			currentLocation.city = result.ad_info.city;
		}
		return currentLocation;
	}

	function searchCityInfoByPC(province = "", city = "") {
		if (ranges.value.length > 0 && province && city) {
			const _p = ranges.value
				?.find((item) => item.fullname === province)
				?.cities?.find((item) => item.name === city);

			return _p
				? {
						id: _p.id,
						location: _p.location,
						city: city
				  }
				: null;
		}
		return null;
	}

	return {
		ranges,
		currentLocation,
		hotCities,
		provinces,
		getRanges,
		getCurrentLocation,
		searchCityInfoByPC
	};
});
