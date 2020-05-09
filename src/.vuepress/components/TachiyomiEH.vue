<template>
	<Layout class="tachiyomieh">
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
.theme-default-content:not(.custom)
	max-width $contentWidth
	margin 0 auto
	padding 2rem 2.5rem
	@media (max-width: $MQNarrow)
		padding 2rem
	@media (max-width: $MQMobileNarrow)
		padding 1.5rem

.page
	padding-bottom 2rem
	display block

</style>
