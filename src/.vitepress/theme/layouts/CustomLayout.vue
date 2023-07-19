<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
	<div :class="frontmatter.pageClass">
		<DefaultTheme.Layout />
	</div>
</template>
