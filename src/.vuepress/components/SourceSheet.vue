<template>
	<div id="SourceSheet">
		<VueGoodTable
			:columns="columns"
			:rows="items"
			:sort-options="{ enabled: true }"
			:search-options="{ enabled: true, placeholder: 'Search for extensions or sources' }"
		>
			<template slot="table-row" slot-scope="props">
				<span v-if="props.column.field == 'Extension Name'">
					<img :src="props.row['Extension Icon']" />
					{{ props.row["Extension Name"] }}
				</span>
				<span v-else-if="props.column.field == 'Source Name'">
					<a :href="'https://' + props.row['Source Website']">{{ props.row["Source Name"] }}</a>
				</span>
				<span v-else-if="props.column.field == 'Notes'">
					{{ props.row.Notes.replace("N/A", "") }}
				</span>
				<span v-else>
					{{ props.formattedRow[props.column.field] }}
				</span>
			</template>
		</VueGoodTable>
	</div>
</template>

<script>
import { vueGsheets } from "vue-gsheets";
import { VueGoodTable } from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";

export default {
	components: {
		VueGoodTable,
	},
	mixins: [vueGsheets],
	data: () => ({
		COLUMNS: 8,
		sheetPageNumber: 1,
		SHEETID: "1e4a9pTdLUmjzFvpfFr5QvGhhe_nRl3FI2kGt8ytFS0I",
		columns: [
			{
				label: "ID",
				field: "ID",
				type: "number",
				hidden: true,
				globalSearchDisabled: true,
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
				globalSearchDisabled: true,
			},
			{
				label: "Notes",
				field: "Notes",
				width: "6rem",
				sortable: false,
				globalSearchDisabled: true,
			},
		],
	}),
};
</script>

<style lang="stylus">
#SourceSheet
	table
		td
			&.extension
				span
					font-weight bold
					display inline-block
					img
						height 30px
						vertical-align middle
	.vgt-global-search
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
		border none
		thead
			border 1px solid $borderColor
			tr
				border none
				th
					border none
					color white
					background #362F4B !important
		tbody
			border 1px solid $borderColor
			tr
				border none
				td
					border none
				&:nth-child(1n)
					background-color $backgroundColor
				&:nth-child(2n)
					background-color darken($backgroundColor, 4%)
</style>
