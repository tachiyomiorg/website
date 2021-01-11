<template>
	<div id="SourceSheet">
		<VueGoodTable
			:columns="columns"
			:rows="items"
			:sort-options="{ enabled: true }"
			:search-options="{
				enabled: true,
				skipDiacritics: true,
				placeholder: 'Search for extensions or sources',
			}"
		>
			<template #table-row="props">
				<div v-if="props.column.field == 'Extension Name'" class="container">
					<img :src="props.row['Extension Icon']" width="42" height="42" />
					<div class="extension-text">
						<div class="upper">
							<span class="bold">{{ props.row["Extension Name"] }}</span>
						</div>
						<div class="down">
							{{ props.row["Extension ID"] }}
						</div>
					</div>
				</div>
				<span v-else-if="props.column.field == 'Source Name'">
					<a :href="props.row['Source Website'].replace('N/A', 'javascript:void(0);')">
						{{ props.row["Source Name"] }}
					</a>
				</span>
				<template v-else-if="props.column.field == 'Notes'">
					<span v-if="props.row.Notes == 'N/A'"></span>
					<strong v-else-if="props.row.Notes.startsWith('w-')" style="color: red">
						{{ props.row.Notes.replace("w-", "") }}
					</strong>
					<span v-else>{{ props.row.Notes }}</span>
				</template>
				<span v-else>
					{{ props.formattedRow[props.column.field] }}
				</span>
			</template>
		</VueGoodTable>
	</div>
</template>

<script>
import { vueGsheets } from "vue-gsheets";

export default {
	mixins: [vueGsheets],
	data: () => ({
		COLUMNS: 9,
		sheetPageNumber: 1,
		SHEETID: "1Kh_O8VyPKTdrcIsso0zz5gD3A9aw_9v2Ygnmr13RuOU",
		columns: [
			{
				label: "ID",
				field: "ID",
				type: "number",
				hidden: true,
				globalSearchDisabled: true,
			},
			{
				label: "Extension ID",
				field: "Extension ID",
				hidden: true,
			},
			{
				label: "Extension",
				field: "Extension Name",
				tdClass: "extension",
			},
			{
				label: "Icon",
				field: "Extension Icon",
				sortable: false,
				hidden: true,
				globalSearchDisabled: true,
			},
			{
				label: "Source",
				field: "Source Name",
			},
			{
				label: "Website",
				field: "Source Website",
				sortable: false,
				hidden: true,
				globalSearchDisabled: true,
			},
			{
				label: "Languages",
				field: "Languages",
				width: "4rem",
				sortable: false,
			},
			{
				label: "Notes",
				field: "Notes",
				width: "6rem",
				tdClass: "notes",
				sortable: false,
			},
		],
	}),
};
</script>

<style lang="stylus">
#SourceSheet
	.vgt-global-search
		padding-top 2rem
		background transparent
		border none
		.magnifying-glass
			border-color #adb5bf
			&::before
				background #adb5bf
		.vgt-input
			border 1px solid #cfd4db
			&:focus
				border-color $accentColor
			&::placeholder
				opacity 0.75
	.vgt-table
		background-color transparent
		border-collapse separate
		border-spacing 0px
		border none
		thead
			tr
				border none
				th
					background transparent !important
					border none
					color $textColor
					&.sortable:hover
						color $accentColor
		tbody
			tr
				background-color $backgroundColorSecondary
				td
					border none
					border-bottom 1px solid $borderColor !important
					&:first-child
						border-left 1px solid $borderColor !important
					&:last-child
						border-right 1px solid $borderColor !important
					&.extension
						.container
							align-items center
							display flex
							img
								margin-right 0.5em
							.extension-text
								flex 1
								.upper
									.bold
										color $textColor
								.down
									color #6c757d
									font-family monospace
									font-size 0.8rem
							&:target
								.extension
									background #f1f8ff
							@media (max-width: 767px)
								.extension-text .down
									display none
					&.notes
						color $textColor
					.vgt-text-disabled
						color $textColor
				&:first-child
					td
						border-top 1px solid $borderColor !important
						&:first-child
							border-top-left-radius 0.6rem
						&:last-child
							border-top-right-radius 0.6rem
				&:last-child
					td
						&:first-child
							border-bottom-left-radius 0.6rem
						&:last-child
							border-bottom-right-radius 0.6rem
</style>
