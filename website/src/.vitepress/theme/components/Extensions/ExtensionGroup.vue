<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { langName, simpleLangName } from '../../../config/scripts/languages'
import type { Extension } from '../../queries/useExtensionsRepositoryQuery'
import ExtensionItem from './ExtensionItem.vue'

const props = defineProps<{ list: Extension[], totalCount: number }>()
const { list } = toRefs(props)

const groupName = computed(() => {
  const firstItem = list.value[0]

  return firstItem.lang === 'en'
    ? simpleLangName(firstItem.lang)
    : langName(firstItem.lang)
})
</script>

<template>
  <div class="extension-group">
    <h2>
      <span>{{ groupName }}</span>

      <span class="extensions-total">
        Total:
        <span class="extensions-total-sum">
          {{ totalCount }}
        </span>
      </span>
    </h2>

    <ExtensionItem
      v-for="extension in list"
      :id="extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')"
      :key="extension.apk"
      :item="extension"
    />
  </div>
</template>

<style lang="stylus">
.extension-group h2 {
  display: flex
  align-items: center
  justify-content: space-between

  .extensions-total-sum {
    color: var(--vp-c-brand)
  }
}
</style>
