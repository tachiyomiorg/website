---
title: TachiyomiAZ
description: LongDesc

layout: home

hero:
  name: TachiyomiAZ
  text: ShortDesc
  tagline: LongDesc
  image: https://tachiyomi-v3-gridsome.netlify.app/assets/forks_logo-az.png
  actions:
    - theme: brand
      text: Download
      link: https://github.com/az4521/TachiyomiAZ/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/az4521/tachiyomiAZ

features:
  - title: Feature 1
    details: Describe Feature here.
    icon: <img src="https://tachiyomi-v3-gridsome.netlify.app/assets/forks_logo-az.png" height="32px" width="32px">
  - title: Feature 2
    details: Describe Feature here.
    icon: <img src="https://tachiyomi-v3-gridsome.netlify.app/assets/forks_logo-az.png" height="32px" width="32px">
  - title: Feature 3
    details: Describe Feature here.
    icon: <img src="https://tachiyomi-v3-gridsome.netlify.app/assets/forks_logo-az.png" height="32px" width="32px">

head:
  - - meta
    - property: og:image
      content: /forks/forks_logo-az.png
  - - meta
    - name: theme-color
      content: "#FFCC4D"
  - - meta
    - name: msapplication-TileColor
      content: "#FFCC4D"
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

<style>
	@import "../.vitepress/theme/forks/tachiyomiaz.css"
</style>
