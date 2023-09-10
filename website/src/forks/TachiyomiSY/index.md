---
title: TachiyomiSY
titleTemplate: false
description: Keeping up-to-date with Tachiyomi while also adding exclusive features

layout: home
pageClass: page-tachiyomi-sy

hero:
  name: TachiyomiSY
  text: Hentai-focused
  tagline: Keeping up-to-date with Tachiyomi while also adding exclusive features
  image: /forks/logo-sy.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/jobobby04/TachiyomiSY/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/jobobby04/TachiyomiSY

customMetaTitle: TachiyomiSY

features:
  - title: Hentai-focused
    details: Adds several features to enhance your Hentai experience.
    icon: 🔞
  - title: Series recommendations
    details: Get recommendations from MyAnimeList and AniDB.
    icon: 📚
  - title: Autoscroll
    details: Allows you to read without any extra interaction.
    icon: 📜

theme: "#CE2828"
image: /forks/logo-sy.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/tachiyomi-sy.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/jobobby04.png",
    name: "jobobby04",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/jobobby04" }
    ]
  },
  {
    avatar: "https://www.github.com/she11sh0cked.png",
    name: "she11sh0cked",
    title: "Extra tracking, filter, recommendations, and more",
    links: [
      { icon: "github", link: "https://github.com/she11sh0cked" }
    ]
  },
  {
    avatar: "https://www.github.com/az4521.png",
    name: "az4521",
    title: "Base recommendations and AZ",
    links: [
      { icon: "github", link: "https://github.com/az4521" }
    ]
  }
]
</script>
