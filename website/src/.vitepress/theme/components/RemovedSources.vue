<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

const removedSources = ref('')
let markdownText = ''

async function fetchMarkdown() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/master/REMOVED_SOURCES.md',
    )
    markdownText = await response.text()
    markdownText = markdownText
      .replace(
        /[\s\S]*?## Removed sources/g,
        '',
      )
      .replace(
        /http.*\/(issues|pull)\/((\d+).*)/g,
        '[#$3](https://github.com/tachiyomiorg/tachiyomi-extensions/$1/$2)',
      )

    removedSources.value = md.render(markdownText)
  }
  catch (error) {
    markdownText = `Error fetching or rendering markdown: ${error}`
  }
}

onMounted(fetchMarkdown)
</script>

<template>
  <div class="removedSources">
    <header>
      <IconPlaylistRemove />
      <h2>List of removed sources</h2>
    </header>
    <div v-html="removedSources" />
  </div>
  <div class="fullRemovedSources">
    <p>
      View the original list
      <a
        href="https://github.com/tachiyomiorg/tachiyomi-extensions/blob/master/REMOVED_SOURCES.md"
        target="_blank"
        rel="noopener"
      >
        here
      </a>
    </p>
  </div>
</template>

<style lang="stylus">
.removedSources {
  display: block
  border: 1px solid var(--vp-c-bg-soft)
  border-radius: 12px
  background-color: var(--vp-c-bg-soft)
  transition: border-color 0.25s, background-color 0.25s
  padding: 24px
  height: 100%
  margin: 1.5em auto 0.5em

  header {
    display: flex
    justify-content: center
    align-items: baseline
    margin: 0 0 1rem
  }

  svg {
    font-size: 1.2em
    margin-right: 0.5rem
    vertical-align: middle
  }

  h2 {
    font-size: 1.5rem
    margin: 0
    padding: 0
    color: var(--vp-c-text-1)
    border: none
  }

  div > p {
    margin: 0 0 1rem
    color: var(--vp-c-text-2)
    font-size: 0.9rem
  }

  table {
    border-radius: 8px
    border-collapse: collapse
    border: 1px solid var(--vp-c-divider)

    tr,
    th,
    td {
      border: none
      width: 100%
    }

    tbody tr {
      border-top: 1px solid var(--vp-c-divider)
    }

    tr > td {
      &:first-child {
        color: var(--vp-c-text-2)
      }

      &:last-child {
        font-family: var(--vp-font-family-mono)
        font-size: var(--vp-code-font-size)
      }
    }
  }
}

.fullRemovedSources {
  margin: 0 0 1rem
  color: var(--vp-c-text-2)
  font-size: 0.9rem
}
</style>
