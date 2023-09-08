<script setup lang="ts">
import { toRefs } from "vue";
import { langName, simpleLangName } from "../../../config/scripts/languages";
import type { Extension } from "../../queries/useExtensionsRepositoryQuery";

import {
	ElForm,
	ElFormItem,
	ElInput,
	ElSelect,
	ElOption,
	ElRadioGroup,
	ElRadio,
} from "element-plus";

export type Nsfw = "Show all" | "NSFW" | "SFW";
export type Sort = "Ascending" | "Descending";

const props = defineProps<{
	extensions: Extension[][];
	search: string;
	lang: string[];
	nsfw: Nsfw;
	sort: Sort;
}>();

const { extensions } = toRefs(props);

defineEmits<{
	(e: 'update:search', search: string): void;
	(e: 'update:lang', lang: string[]): void,
	(e: 'update:nsfw', nsfw: Nsfw): void,
	(e: 'update:sort', sort: Sort): void,
}>();
</script>

<template>
	<div class="filters-list">
		<el-form label-width="120px">
			<el-form-item label="Search:">
				<el-input
					:model-value="search"
					placeholder="Search extensions by name or ID..."
					clearable
					@update:model-value="$emit('update:search', $event)"
				/>
			</el-form-item>
			<el-form-item label="Languages:">
				<el-select
					:model-value="lang"
					placeholder="Show specific languages..."
					multiple
					clearable
					@update:model-value="$emit('update:lang', $event)"
				>
					<el-option
						v-for="[group] in extensions"
						:key="group.lang"
						:label="group.lang === 'en' ? simpleLangName(group.lang) : langName(group.lang)"
						:value="group.lang"
					/>
				</el-select>
			</el-form-item>
			<el-form-item label="Sort by:">
				<el-radio-group
					:model-value="sort"
					@update:model-value="$emit('update:sort', $event)"
				>
					<el-radio label="Ascending"></el-radio>
					<el-radio label="Descending"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="Display mode:">
				<el-radio-group
					:model-value="nsfw"
					@update:model-value="$emit('update:nsfw', $event)"
				>
					<el-radio label="NSFW"></el-radio>
					<el-radio label="SFW"></el-radio>
					<el-radio label="Show all"></el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
	</div>
</template>

<style lang="stylus">
.filters-list {
	display: flex
	flex-direction: column
	row-gap: 1rem
}

.el-select {
	width: 100%
}
</style>
