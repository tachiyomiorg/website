<template>
	<span class="filters-list">
		<ElInput v-model="filters.search" placeholder="Search extensions by name or ID..." clearable />

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
import { simpleLangName, langName } from "../scripts/languages";

export default {
	props: ["extensions"],
	emits: ["filters"],
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
		simpleLangName,
		langName,
	},
};
</script>
<style lang="stylus">
.filters-list
	display flex
	flex-direction column
	row-gap 1rem
</style>
