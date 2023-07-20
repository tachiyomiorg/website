---
title: TachiyomiSY
description: LongDesc

layout: home
pageClass: page-tachiyomisy

hero:
  name: TachiyomiSY
  text: ShortDesc
  tagline: LongDesc
  image: /forks/forks_logo-sy.png
  actions:
    - theme: brand
      text: Download
      link: https://github.com/jobobby04/TachiyomiSY/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/jobobby04/TachiyomiSY

features:
  - title: Feature 1
    details: Describe Feature here.
    icon: <img src="/forks/forks_logo-sy.png" height="32px" width="32px">
  - title: Feature 2
    details: Describe Feature here.
    icon: <img src="/forks/forks_logo-sy.png" height="32px" width="32px">
  - title: Feature 3
    details: Describe Feature here.
    icon: <img src="/forks/forks_logo-sy.png" height="32px" width="32px">
  - title: Feature 4
    details: Describe Feature here.
    icon: 🐍
  - title: Feature 5
    details: Describe Feature here.
    icon: 🐍
  - title: Feature 6
    details: Describe Feature here.
    icon: 🐍

theme: "#CE2828"
image: /forks/forks_logo-sy.png
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
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

<style>
	@import "../.vitepress/theme/styles/forks/tachiyomisy.css"
</style>
