<template>
	<span>
		<div class="mangaPage">
			<Backup-MangaCover :src="manga.cover" />

			<div class="block info">
				<p class="title">
					<b>{{ manga.titles[0] }}</b><span v-for="title in manga.titles.slice(1)" :key="title">, {{ title }}</span>
				</p>
				<p v-if="manga.author" class="author">
					<span class="light">Author:</span>
					{{ manga.author }}
				</p>
				<p v-if="manga.artist" class="artist">
					<span class="light">Artist:</span>
					{{ manga.artist }}
				</p>
				<div v-if="manga.hentai" class="hentai">
					<el-tag size="mini" type="danger">18+ title</el-tag>
					<el-tooltip placement="right">
						<template #content>
							<div>
								By default 18+ titles are not shown in the library.
								<br />
								Adjust Paperback content settings to change this behaviour.
							</div>
						</template>
						<i class="el-icon-info"></i>
					</el-tooltip>
				</div>
			</div>

			<div v-if="manga.description" class="block desc">
				<p class="light">Description:</p>
				{{ manga.description }}
			</div>

			<div v-if="manga.tabsIds.length" class="block libraryTabs">
				<p class="light">Library tabs:</p>
				<el-tag v-for="tabId in manga.tabsIds" :key="tabId" class="tab" size="medium" type="info" effect="plain"> {{ tabs[tabId] }} </el-tag>
			</div>
			<div v-if="manga.sourcesIds.length" class="block sources">
				<p class="light">Available in sources: </p>
				<el-tag v-for="sourceId in manga.sourcesIds" :key="sourceId" class="tab" size="medium" type="info" effect="plain"> {{ sources[sourceId] ? sources[sourceId] : 'id: ' + sourceId }} </el-tag>
			</div>
		</div>
	</span>
</template>

<script>

export default {
	props: {
		// A LightRepresentation.Title object
		manga: {
			required: true,
			type: Object,
		},
		// The content of backup.tabs, an object {tabId: tabName} elements
		tabs: {
			required: true,
			type: Object,
		},
		// The content of backup.sources, an object {sourceId: sourceName} elements
		sources: {
			required: true,
			type: Object,
		}
	},
}

</script>

<style scoped lang="stylus">
.mangaPage
	display grid
	grid-template-columns 100px auto
	grid-template-rows auto auto auto
	grid-gap 10px
	/* By default el-dialog use word-break: break-all; */
	overflow-wrap break-word
	word-break initial

.block p
	margin 0

.cover
	grid-column 1
	grid-row 1

.info
	grid-row 1
	grid-column 2

.desc
	grid-column-start 1
	grid-column-end 3
	grid-row 2

.libraryTabs
	grid-column-start 1
	grid-column-end 3
	grid-row 3
	.tab
		margin-right 5px

.sources
	grid-column-start 1
	grid-column-end 3
	grid-row 4
	.tab
		margin-right 5px

.light
	font-weight lighter
</style>
