<script setup lang="ts">
import { computed, toRefs } from "vue";
import MarkdownIt from "markdown-it";
import useReleaseQuery from "../queries/useReleaseQuery";
import type { ReleaseType } from "../queries/useReleaseQuery";

const props = defineProps<{ type: ReleaseType }>();
const { type } = toRefs(props);

const {	data: release, isLoading, isError, error } = useReleaseQuery(type);

const md = new MarkdownIt();

const whatsNew = computed(() => {
	const flavoredString = (release.value?.body ?? "")
		.replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g, "[@$2](https://github.com/$2)")

	return md.render(flavoredString);
})
</script>

<template>
	<div v-if="isLoading">
		This is the fancy loading indicator
	</div>
	<div v-else-if="isError">
		This is the error message: {{ error }}
	</div>
	<div v-else>
		<h2>What's new</h2>
		<div v-html="whatsNew"></div>
		<div>
			<p>
				View the full release
				<a href="https://github.com/tachiyomiorg/tachiyomi/releases/latest" target="_blank" rel="noopener">
					here
				</a>
			</p>
		</div>
	</div>
</template>

<style lang="stylus">
.buttons-wrapper
	display: flex
	gap: 2rem

	& > a
		display: flex
		flex-direction: column
		align-items: center
</style>
