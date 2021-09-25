<template>
	<span class="mangaTile">
		<Backup-MangaCover :src="manga.cover"/>
		<p class="title">{{ manga.titles[0] }}</p>
	</span>
</template>

<script> 
export default {
    props: {
		manga: {
			// A LightRepresentation.Title object
			required: true,
		},
	},
}
</script>

<style scoped lang="stylus">
.title
	margin 0
	font-weight bold
	white-space nowrap
	overflow hidden
	text-overflow ellipsis

.mangaTile
	width 100px
	cursor pointer
	margin-bottom 0.5em
</style>
