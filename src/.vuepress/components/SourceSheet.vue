<template>
	<div class="sourceSheet">
		<tr v-for="item in items" :key="item.Id">
			<td>{{ item.Extension }}</td>
			<td>{{ item.Source }}</td>
			<td>
				<a :href="'https://' + item.Website">{{ item.Website }}</a>
			</td>
			<td>{{ item.Languages }}</td>
			<td>{{ item.Notes }}</td>
		</tr>
	</div>
</template>

<script>
import { vueGsheets } from "vue-gsheets";

export default {
	mixins: [vueGsheets],
	date: () => ({
		COLUMNS: 7,
		sheetPageNumber: 1,
		SHEETID: "1e4a9pTdLUmjzFvpfFr5QvGhhe_nRl3FI2kGt8ytFS0I",
	}),
}
</script>
