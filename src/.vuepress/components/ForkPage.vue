<template>
	<Layout :class="$frontmatter.title">
		<main class="page">
			<slot name="top" />

			<Content class="theme-default-content" />
			<PageEdit />

			<slot name="bottom" />
		</main>
	</Layout>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import Layout from "@theme/layouts/Layout.vue";

export default {
	components: { PageEdit, Layout },
};
</script>

<style lang="stylus">
.page
	padding-bottom 2rem
	display block
</style>
