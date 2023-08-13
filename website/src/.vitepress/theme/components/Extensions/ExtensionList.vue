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
<template>
	<div class="extension-list">
		<ExtensionGroup v-for="group in extensions" :key="group[0].lang" :list="group" :class="group[0].lang" :total-count="totalCount" />
	</div>
</template>
<style lang="stylus">
.extension-list {
	> div {
		&:not(:first-of-type) {
			.extensions-total {
				display: none
			}
		}
	}
}
</style>
