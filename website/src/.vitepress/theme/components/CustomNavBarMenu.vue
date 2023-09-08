<script setup lang="ts">
import { computed } from "vue"
import { type DefaultTheme, useData } from "vitepress"

import { data as release } from "../data/release.data"

import VPNavBarMenuLink from "vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue"
import VPNavBarMenuGroup from "vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue"

const { theme } = useData<DefaultTheme.Config>()

/**
 * Workaround to use the release data directly while the sidebar
 * and navbar doesn't support using the VitePress data loading.
 */
const nav = computed(() => {
	return theme.value.nav?.map((item) => {
		if (item.text !== "{app_version}") {
			return item
		}

		const appVersion = release.stable.tag_name.substring(1)

		return <DefaultTheme.NavItemWithChildren> {
			...item,
			text: item.text === "{app_version}"	? appVersion : item.text,
			items: (item as DefaultTheme.NavItemWithChildren).items.map((child) => {
				if (!("link" in child)) {
					return child
				}

				return <DefaultTheme.NavItemWithLink> {
					...child,
					link: child.link.replace("{app_version}", appVersion),
				}
			}),
		}
	})
})
</script>

<template>
	<nav v-if="nav" aria-labelledby="main-nav-aria-label" class="VPNavBarMenu">
		<span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>
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

@media (min-width: 768px) {
	.VPNavBarMenu {
		display: flex
	}
}
</style>
