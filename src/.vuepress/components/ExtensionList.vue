<template>
	<div class="extension-list">
		<div v-for="group in extensions" :key="group[0].lang">
			<ExtensionGroup :list="group" :total-count="totalCount" />
		</div>
	</div>
</template>
<script>
import ExtensionGroup from "./ExtensionGroup.vue";

export default {
	components: { ExtensionGroup },
	props: ["extensions"],
	computed: {
		totalCount() {
			return this.extensions.reduce((sum, item) => sum + item.length, 0);
		},
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
</style>
