---
title: TachiyomiJ2K
description: LongDesc

layout: home

hero:
  name: TachiyomiJ2K
  text: ShortDesc
  tagline: LongDesc
  image: /forks/forks_logo-j2k.png
  actions:
    - theme: brand
      text: Download
      link: https://github.com/Jays2Kings/tachiyomiJ2K/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/Jays2Kings/tachiyomiJ2K

features:
  - title: Feature 1
    details: Describe Feature here.
    icon: <img src="/forks/forks_logo-j2k.png" height="32px" width="32px">
  - title: Feature 2
    details: Describe Feature here.
    icon: <img src="/forks/forks_logo-j2k.png" height="32px" width="32px">
  - title: Feature 3
    details: Describe Feature here.
    icon: <img src="/forks/forks_logo-j2k.png" height="32px" width="32px">
  - title: Feature 4
    details: Describe Feature here.
    icon: 👑
  - title: Feature 5
    details: Describe Feature here.
    icon: 👑
  - title: Feature 6
    details: Describe Feature here.
    icon: 👑

head:
  - - meta
    - property: og:image
      content: /forks/forks_logo-j2k.png
  - - meta
    - name: theme-color
      content: "#0952AF"
  - - meta
    - name: msapplication-TileColor
      content: "#0952AF"
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
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

<style>
	@import "../.vitepress/theme/forks/tachiyomij2k.css"
</style>
