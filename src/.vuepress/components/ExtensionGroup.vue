<script>
import { langName, simpleLangName } from "../scripts/languages";
import ExtensionItem from "./ExtensionItem.vue";

export default {
	components: { ExtensionItem },
	props: ["list", "totalCount"],
	computed: {
		groupName: function () {
			const firstItem = this.list[0];
			return firstItem.lang === "en" ? simpleLangName(firstItem.lang) : langName(firstItem.lang);
		},
	},
	methods: {
		simpleLangName,
		langName,
	},
};
</script>
<template>
	<div class="extension-group">
		<h3>
			{{ groupName }}

			<span class="extensions-total">
				Total:
				<span class="extensions-total-sum">
					{{ totalCount }}
				</span>
			</span>
		</h3>
		<div
			v-for="extension in list"
			:id="extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')"
			:key="extension.apk"
			class="anchor"
		>
			<ExtensionItem :item="extension" />
		</div>
	</div>
</template>
<style lang="stylus">
.extensions-total
	float right
	&-sum
		color $accentColor

.anchor
	margin-top -3.9em
	padding-bottom 0.2em
	padding-top 4.5em

	&:first-child
		border-top 1px solid $borderColor
</style>
