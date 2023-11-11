<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from 'vue'
import moment from 'moment'
import { type AppRelease, data as release } from '../data/release.data'

const props = defineProps<{ type: keyof AppRelease }>()
const { type } = toRefs(props)

const momentInfo = computed(() => ({
  relative: moment(release[type.value].published_at).fromNow(),
  exact: moment(release[type.value].published_at).format('dddd, MMMM Do YYYY [at] HH:mm'),
  iso: release[type.value].published_at ?? undefined,
}))

// Mimic the <ClientOnly /> behavior to show custom text while rendering.
const show = ref(false)

onMounted(() => {
  show.value = true
})
</script>

<template>
  <time v-if="show" :datetime="momentInfo.iso" :title="momentInfo.exact">
    {{ momentInfo.relative }}
  </time>
  <time v-else :datetime="momentInfo.iso">
    {{ momentInfo.exact }}
  </time>
</template>
