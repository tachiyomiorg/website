<script setup lang="ts">
import { computed, toRefs } from "vue";
import moment from "moment";
import { data as release, type AppRelease } from "../data/release.data";

const props = defineProps<{ type: keyof AppRelease }>();
const { type } = toRefs(props);

const momentInfo = computed(() => ({
	relative: moment(release[type.value].published_at).fromNow(),
	exact: moment(release[type.value].published_at).format("dddd, MMMM Do YYYY [at] HH:mm"),
	iso: release[type.value].published_at,
}))
</script>

<template>
	<time :datetime="momentInfo.iso" :title="momentInfo.exact">
		{{ momentInfo.relative }}
	</time>
</template>
