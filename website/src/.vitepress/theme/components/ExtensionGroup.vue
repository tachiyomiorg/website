<script>
import { langName, simpleLangName } from "../../config/scripts/languages";
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
		<h2>
			{{ groupName }}

			<span class="extensions-total">
				Total:
				<span class="extensions-total-sum">
					{{ totalCount }}
				</span>
			</span>
		</h2>
		<div
			v-for="extension in list"
			:id="extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')"
			:key="extension.apk"
			class="extension"
		>
			<ExtensionItem :item="extension" />
		</div>
	</div>
</template>

<style lang="stylus">
.extensions-total {
	float: right

	&-sum {
		color: var(--vp-c-brand)
	}
}
</style>
