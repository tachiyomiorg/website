<template>
	<Layout :class="$frontmatter.title">
		<main class="page">
				<slot name="top" />

				<Content class="theme-default-content" />
				<PageEdit />

				<PageNav v-bind="{ sidebarItems }" />

				<slot name="bottom" />
		</main>
	</Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout.vue'
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
	components: { PageEdit, PageNav, Layout },
	props: ['sidebarItems']
}
</script>

<style lang="stylus">
.page
	padding-bottom 2rem
	display block
</style>
