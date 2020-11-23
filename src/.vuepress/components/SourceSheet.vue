<template>
	<div class="sourceSheet">
		<table>
			<thead>
				<tr>
					<th class="ssExtension">Extension</th>
					<th class="ssSource">Source</th>
					<th class="ssLanguages">Languages</th>
					<th class="ssNotes">Notes</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in items" :key="item.ID">
					<td class="ssExtension">
						<img
							src="https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/icon/tachiyomi-all.madara-v1.2.150.png"
						/>
						<div>
							{{ item.Extension }}
						</div>
					</td>
					<td class="ssSource">
						<div>
							<a :href="'https://' + item['Source Website']">{{ item["Source Name"] }}</a>
						</div>
					</td>
					<td class="ssLanguages">
						<div>
							{{ item.Languages }}
						</div>
					</td>
					<td class="ssNotes">
						<div>
							{{ item.Notes.replace("N/A", "") }}
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { vueGsheets } from "vue-gsheets";

export default {
	mixins: [vueGsheets],
	data: () => ({
		COLUMNS: 7,
		sheetPageNumber: 1,
		SHEETID: "1e4a9pTdLUmjzFvpfFr5QvGhhe_nRl3FI2kGt8ytFS0I",
	}),
};
</script>

<style lang="stylus" scoped>
table
	border-radius $containerBorderRadius
	width 100%
	thead
		tr
			background-color #e4e4e4
			th
				font-weight 500
	tbody
		tr
			&:nth-child(odd)
				background-color darken($backgroundColor, 1%)
			&:nth-child(even)
				background-color darken($backgroundColor, 2%)
			td
				padding 8px
				border-left none
				border-right none
				&:first-child
					border-left 1px solid #dfe2e5
				&:last-child
					border-right 1px solid #dfe2e5
.ssExtension
	font-weight 500
	div
		display inline-block
	img
		width 24px
		height 24px
</style>
