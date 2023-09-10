---
title: TachiyomiJ2K
titleTemplate: false
description: New design approach along with several other enhancements

layout: home
pageClass: page-tachiyomi-j2k

hero:
  name: TachiyomiJ2K
  text: Redesigned
  tagline: New design approach along with several other enhancements
  image: /forks/logo-j2k.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/Jays2Kings/tachiyomiJ2K/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/Jays2Kings/tachiyomiJ2K

customMetaTitle: TachiyomiJ2K

features:
  - title: Redesigned UI
    details: Entirely different design from regular Tachiyomi, with exciting new features.
    icon: 👑
  - title: Double-page for Tablets
    details: Combine 2 pages while reading into a single one for a better tablet experience.
    icon: 📖
  - title: Dynamic categories
    details: Group your library automatically by the tags, tracking status, source, and more.
    icon: 🔖

theme: "#0952AF"
image: /forks/logo-j2k.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/tachiyomi-j2k.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/Jays2Kings.png",
    name: "Jays2Kings",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/Jays2Kings" }
    ]
  }
]
</script>
