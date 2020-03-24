<template lang="html">
	<details class="tableMultiSource">
		<summary
			data-open="Click to hide table"
			data-close="Click to display table"
		></summary>
		<table>
			<thead>
				<th></th>
				<th>Source & Extension</th>
				<th>Notes</th>
			</thead>
			<tr v-for="i in tableMultiSource">
				<td>
					<img
						class="extensionLogo"
						:src="'/assets/extensions/' + i['Extension'] + '.png'"
					/>
				</td>
				<td>
					<a target="_blank" :href="'//' + i['Source Website']">{{
						i["Source Name"]
					}}</a>
					<p class="extensionName">{{ i["Extension"] }}</p>
				</td>
				<td>{{ i["Notes"] }}</td>
			</tr>
		</table>
	</details>
</template>

<script>
if (
	jQuery("details.tableMultiSource")
		.click()
		.attr("open")
) {
	jQuery("summary.tableMultiSource").text("Close");
} else if (
	jQuery("details.tableMultiSource")
		.click()
		.attr("")
) {
	jQuery("summary.tableMultiSource").text("Show");
}

import tableMultiSource from "../public/xlsx_data/Multi-source, multi-language.json";
import tableWebtoons from "../public/xlsx_data/Manhwamanhuawebtoons.json";
import tableWesternComics from "../public/xlsx_data/Western comics.json";
import tableInfo from "../public/xlsx_data/Info.json";

export default {
	data() {
		return {
			tableMultiSource: tableMultiSource,
			tableWebtoons: tableWebtoons,
			tableWesternComics: tableWesternComics,
			tableInfo: tableInfo
		};
	}
};
</script>

<style lang="stylus">

img.extensionLogo
	height 42px
	width 42px
	max-width 42px !important

p.extensionName
	color #6c757d
	font-family monospace
	font-size 0.8rem

details
	&.tableMultiSource[open]
		summary
			background-color $containerBackgroundColor
			border-radius $containerBorderRadius
			font-weight 500
			padding 1rem
			margin-bottom 1rem
			&::after
				content attr(data-open)
	&.tableMultiSource
		padding-top 1rem
		&:not([open])
			summary
				background-color $containerBackgroundColor
				border-radius $containerBorderRadius
				font-weight 500
				padding 1rem
				&::after
					content attr(data-close)

table
	display inline
thead th
	border none
	&:first-child
		border-top-left-radius $containerBorderRadius
	&:last-child
		border-top-right-radius $containerBorderRadius

tr
	background white
	&:nth-child(2n)
		background white

td
	border none

details > summary
	padding 2px 6px
	width 15em
	border none
	cursor pointer

@media (hover: hover)
	tr:hover
		background-color #f5f5f5

@media screen and (max-width: $MQMobile), (min-device-width: 768px) and (max-device-width: 1024px)
	table
	thead
	tbody
	th
	td
	tr
		display block

	thead
		display none
		tr
			position absolute
			top -9999px
			left -9999px

	td
		border none
		position relative
		padding-left 30%
		&:before
			position absolute
			top 6px
			left 6px
			width 45%
			padding-right 10px
			white-space nowrap
		&:nth-of-type(1):before
			content "Logo"
			font-weight 500
			margin-top 15px
		&:nth-of-type(2):before
			content "Source"
			font-weight 500
			margin-top 2px
		&:nth-of-type(3):before
			content "Notes"
			font-weight 500
			margin-top 2px
		&:nth-of-type(3)
			padding-bottom 2rem
</style>
