<template>
	<div class="extension-group">
		<h3>
			<span>
				{{ list[0].lang === "en" ? simpleLangName(list[0].lang) : langName(list[0].lang) }}
			</span>

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
<script>
import { simpleLangName, langName } from "../scripts/languages";
import ExtensionItem from "./ExtensionItem.vue";

export default {
	components: { ExtensionItem },
	props: ["list", "totalCount"],
	methods: {
		simpleLangName,
		langName,
	},
};
</script>
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
