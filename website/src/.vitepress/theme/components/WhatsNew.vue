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
	<div class="whatsNew" v-else>
		<header>
			<IconNewReleases />
			<h2>What's new</h2>
		</header>
		<div v-html="whatsNew">
		</div>
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
.whatsNew {
	display: block
	border: 1px solid var(--vp-c-bg-soft)
	border-radius: 12px
	background-color: var(--vp-c-bg-soft)
	transition: border-color 0.25s, background-color 0.25s
	padding: 24px
	height: 100%
	margin: 2em auto

	header {
		display: flex
		justify-content: center
		align-items: baseline
		margin: 0 0 1rem
	}

	svg {
		font-size: 1.2em
		margin-right: 0.5rem
		vertical-align: middle
	}

	h2 {
		font-size: 1.5rem
		margin: 0
		padding: 0
		color: var(--vp-c-text-1)
		border: none
	}

	div > p {
		margin: 0 0 1rem
		color: var(--vp-c-text-2)
		font-size: 0.9rem
	}

	table {
		border-radius: 8px
		border-collapse: collapse
		border: 1px solid var(--vp-c-divider)

		tr,
		th,
		td {
			border: none
			width: 100%
		}

		tbody tr {
			border-top: 1px solid var(--vp-c-divider)
		}

		tr > td {
			&:first-child {
				color: var(--vp-c-text-2)
			}

			&:last-child {
				font-family: var(--vp-font-family-mono)
				font-size: var(--vp-code-font-size)
			}
		}
	}
}
</style>
