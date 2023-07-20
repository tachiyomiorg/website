---
title: Neko
description: LongDesc

layout: home
pageClass: page-neko

hero:
  name: Neko
  text: For MangaDex
  tagline: LongDesc
  image: /forks/forks_logo-neko.png
  actions:
    - theme: brand
      text: Download
      link: https://github.com/CarlosEsco/Neko/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/CarlosEsco/Neko

features:
  - title: Feature 1
    details: Describe Feature here.
    icon: <img src="https://mangadex.org/img/brand/mangadex-logo.svg">
  - title: Feature 2
    details: Describe Feature here.
    icon: <img src="https://mangadex.org/img/brand/mangadex-logo.svg">
  - title: Feature 3
    details: Describe Feature here.
    icon: <img src="https://mangadex.org/img/brand/mangadex-logo.svg">

theme: "#FD6684"
image: /forks/forks_logo-neko.png
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/CarlosEsco.png",
    name: "CarlosEsco",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/CarlosEsco" }
    ]
  },
  {
    avatar: "https://www.github.com/Jays2Kings.png",
    name: "Jays2Kings",
    title: "Fork base",
    links: [
      { icon: "github", link: "https://github.com/Jays2Kings" }
    ]
  }
]
</script>

<style>
	@import "../.vitepress/theme/styles/forks/neko.css"
</style>
