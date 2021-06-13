<template>
	<div v-if="loading" v-loading.lock="loading" style="min-height: 200px"></div>
	<div v-else>
		<filters v-bind:extensions="extensions" @filters="filters = $event" />
		<extension-list v-bind:extensions="filteredExtensions" />
	</div>
</template>
<script>
import axios from "axios";
import groupBy from "lodash.groupby";
import { simpleLangName } from "../scripts/languages";
import { GITHUB_EXTENSION_JSON } from "../constants";
import ExtensionList from "./ExtensionList.vue";
import Filters from "./Filters.vue";

export default {
	components: { ExtensionList, Filters },
	data() {
		return {
			extensions: [],
			filters: {
				search: "",
				lang: [],
				nsfw: "Don't care",
				sort: "Ascending",
			},
			loading: true,
			observer: null,
		};
	},
	computed: {
		filteredExtensions() {
			const { extensions, filters } = this;

			const filtered = [];

			for (const group of extensions) {
				let filteredGroup = filters.lang.length ? (filters.lang.includes(group[0].lang) ? group : []) : group;

				if (filters.search) {
					filteredGroup = filteredGroup.filter((ext) =>
						ext.name.toLowerCase().includes(filters.search.toLowerCase())
					);
				}

				filteredGroup = filteredGroup.filter((ext) =>
					filters.nsfw === "Don't care" ? true : ext.nsfw === (filters.nsfw === "Yes" ? 1 : 0)
				);

				if (filters.sort && filters.sort === "Descending") {
					filteredGroup = filteredGroup.reverse();
				}

				if (filteredGroup.length) {
					filtered.push(filteredGroup);
				}
			}

			return filtered;
		},
	},
	async beforeMount() {
		const { data } = await axios.get(GITHUB_EXTENSION_JSON);
		const values = Object.values(groupBy(data, "lang"));
		values.sort((a, b) => {
			const langA = simpleLangName(a[0].lang);
			const langB = simpleLangName(b[0].lang);
			if (langA === "All" && langB === "English") {
				return -1;
			}
			if (langA === "English" && langB === "All") {
				return 1;
			}
			if (langA === "English") {
				return -1;
			}
			if (langB === "English") {
				return 1;
			}
			if (langA < langB) {
				return -1;
			}
			if (langA > langB) {
				return 1;
			}
			return 0;
		});
		this.$data.extensions = values;

		this.$nextTick(() => {
			this.loading = false;
		});
	},
	updated() {
		if (window.location.hash) {
			window.location.replace(window.location.hash);
		}
	},
};
</script>
<style lang="stylus">
.extension-list
	h3
		padding-bottom 0.75em
		border-bottom 1px solid $borderColor
	> div
		&:not(:first-of-type)
			.extensions-total
				display none

.extensions-total
	float right
	&-sum
		color $accentColor

.anchor
	margin-top -3.9em
	padding-bottom 0.2em
	padding-top 4.5em
	.extension
		align-items center
		display flex
		padding 0.4em 1.5em
		.header-anchor
			padding-left 0.2em
			padding-right 0.2em
			font-size 1.4em
			opacity 0
		&:hover .header-anchor
			opacity 1
		.extension-icon
			margin-right 0.5em
		.extension-text
			flex 1
			.upper
				.badge
					margin-left 8px
			.down
				color #6c757d
				font-family monospace
				font-size 0.9rem
		.extension-download
			margin-right 0.5em
			padding-left 1rem
			padding-right 1rem
			padding-top .5rem
			padding-bottom .5rem
			font-weight 700
			border-radius 4px
			color white
			background-color $accentColor
			border 1px solid $accentColor
			.material-icons
				color white
				max-width 18px
			&:hover
				background-color white
				color $accentColor
				text-decoration none
				.material-icons
					color $accentColor
		@media (max-width 767px)
			padding 0.4em 0em
			.extension-text .down,
			.extension-download span
				display none
	@media (max-width 767px)
		.extension
			border 1px solid $borderColor
			border-radius 8px

			.extension-download
				background-color $accentColor
	&:target
		.extension
			background-color $containerBackground
			border-radius 8px
			transition 500ms background-color
	&:first-child
		border-top 1px solid $borderColor
</style>
