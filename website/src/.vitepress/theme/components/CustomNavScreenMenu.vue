<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { type DefaultTheme, useData } from 'vitepress'

import VPNavScreenMenuLink from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue'
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue'

import { data as release } from '../data/release.data'

const { theme } = useData<DefaultTheme.Config>()

// Used to avoid hydration issues.
const replace = ref(false)

onMounted(() => {
  replace.value = true
})

/**
 * Workaround to use the release data directly while the sidebar
 * and navbar doesn't support using the VitePress data loading.
 */
const nav = computed(() => {
  if (!replace.value)
    return theme.value.nav

  return theme.value.nav?.map((item) => {
    if (!item.text.includes('{app_version}'))
      return item

    const appVersion = release.stable.tag_name.substring(1)

    return {
      ...item,
      text: item.text.replace('{app_version}', appVersion),
    } satisfies DefaultTheme.NavItem
  })
})
</script>

<template>
  <nav v-if="nav" class="VPNavScreenMenu">
    <template v-for="item in nav" :key="item.text">
      <VPNavScreenMenuLink
        v-if="'link' in item"
        :item="item"
      />
      <VPNavScreenMenuGroup
        v-else
        :text="item.text || ''"
        :items="item.items"
      />
    </template>
  </nav>
</template>
