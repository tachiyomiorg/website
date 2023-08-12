<script>
import { langName, simpleLangName } from "../../config/scripts/languages";

export default {
	props: ["extensions"],
	emits: ["filters"],
	data() {
		return {
			filters: {
				search: "",
				lang: [],
				nsfw: "Show all",
				sort: "Ascending",
			},
		};
	},
	watch: {
		filters: {
			handler(value) {
				this.$emit("filters", this.filters);
			},
			deep: true,
		},
	},
	methods: {
		simpleLangName,
		langName,
	},
};
</script>
<template>
	<span class="filters-list">
		<el-input v-model="filters.search" placeholder="Search extensions by name or ID..." clearable />

		<el-select v-model="filters.lang" placeholder="Show specific languages..." multiple clearable>
			<el-option
				v-for="[group] in extensions"
				:key="group.lang"
				:label="group.lang === 'en' ? simpleLangName(group.lang) : langName(group.lang)"
				:value="group.lang"
			/>
		</el-select>

		<div>
			Sort by<br>
			<el-radio-group v-model="filters.sort">
				<el-radio label="Ascending"></el-radio>
				<el-radio label="Descending"></el-radio>
			</el-radio-group>
		</div>

		<div>
			Display mode<br>
			<el-radio-group v-model="filters.nsfw">
				<el-radio label="NSFW"></el-radio>
				<el-radio label="SFW"></el-radio>
				<el-radio label="Show all"></el-radio>
			</el-radio-group>
		</div>
	</span>
</template>

<style lang="stylus">
.filters-list {
	display: flex
	flex-direction: column
	row-gap: 1rem
}
</style>
