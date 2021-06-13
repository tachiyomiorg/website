<template>
	<span class="filters-list">
		<ElInput v-model="filters.search" placeholder="Search extensions by name..." clearable />

		<ElSelect v-model="filters.lang" placeholder="Show specific languages..." multiple clearable>
			<ElOption
				v-for="[group] in extensions"
				:key="group.lang"
				:label="group.lang === 'en' ? simpleLangName(group.lang) : langName(group.lang)"
				:value="group.lang"
			/>
		</ElSelect>

		<div>
			Sort by
			<ElRadioGroup v-model="filters.sort">
				<ElRadioButton label="Ascending"></ElRadioButton>
				<ElRadioButton label="Descending"></ElRadioButton>
			</ElRadioGroup>
		</div>

		<div>
			Display extensions with NSFW content?
			<ElRadioGroup v-model="filters.nsfw">
				<ElRadioButton label="Yes"></ElRadioButton>
				<ElRadioButton label="No"></ElRadioButton>
				<ElRadioButton label="Don't care"></ElRadioButton>
			</ElRadioGroup>
		</div>
	</span>
</template>
<script>
import ISO6391 from "iso-639-1";

export default {
	props: ["extensions"],
	data() {
		return {
			filters: {
				search: "",
				lang: [],
				nsfw: "Don't care",
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
		simpleLangName: (code) => (code === "all" ? "All" : ISO6391.getName(code)),
		langName: (code) => (code === "all" ? "All" : `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`),
	},
};
</script>
<style lang="stylus">
.filters-list
	display flex
	flex-direction column
	row-gap 1rem
</style>
