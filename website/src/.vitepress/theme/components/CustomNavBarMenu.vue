<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'

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
  <nav v-if="nav" aria-labelledby="main-nav-aria-label" class="VPNavBarMenu">
    <span id="main-nav-aria-label" class="visually-hidden">Main navigation</span>
    <template v-for="item in nav" :key="item.text">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <VPNavBarMenuGroup v-else :item="item" />
    </template>
  </nav>
</template>

<style lang="stylus" scoped>
.VPNavBarMenu {
  display: none
}

@media (min-width 768px) {
  .VPNavBarMenu {
    display: flex
  }
}
</style>
