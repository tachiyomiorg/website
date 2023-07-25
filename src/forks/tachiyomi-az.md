---
title: TachiyomiAZ
description: Hentai-focused with legacy features

layout: home
pageClass: page-tachiyomi-az

hero:
  name: TachiyomiAZ
  text: Hentai-focused
  tagline: Recommendation system, a hamburger menu, and loads of hentai
  image: https://tachiyomi-v3-gridsome.netlify.app/assets/forks_logo-az.png
  actions:
    - theme: brand
      text: Download
      link: https://github.com/az4521/TachiyomiAZ/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/az4521/tachiyomiAZ

features:
  - title: Hentai-focused
    details: Adds several features to enhance your Hentai experience.
    icon: 🔞
  - title: Manga recommendations
    details: Get recommendations from MyAnimeList and AniDB.
    icon: 📚
  - title: Legacy design
    details: Keeps the old design of Tachiyomi with hamburger menu.
    icon: 👵

theme: "#FFCC4D"
image: /forks/forks_logo-az.png
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/az4521.png",
    name: "az4521",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/az4521" }
    ]
  },
  {
    avatar: "https://www.github.com/jobobby04.png",
    name: "jobobby04",
    title: "Former Maintainer",
    links: [
      { icon: "github", link: "https://github.com/jobobby04" }
    ]
  },
  {
    avatar: "https://www.github.com/NerdNumber9.png",
    name: "NerdNumber9",
    title: "Original EH Fork",
    links: [
      { icon: "github", link: "https://github.com/NerdNumber9" }
    ]
  }
]
</script>

<br>

<div class="azContainer">
  <div class="azMarquee">
    <div class="azWiggleText">
      <span class="azText"><i>The BEST fork</i> --az4521</span>
    </div>
  </div>
</div>

<style scoped>
	@import "../.vitepress/theme/styles/forks/tachiyomi-az.styl"
</style>
