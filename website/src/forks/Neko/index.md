---
title: Neko
description: Features specific to MangaDex with the featureset of TachiyomiJ2K

layout: home
pageClass: page-neko

hero:
  name: Neko
  text: For MangaDex
  tagline: Features specific to MangaDex with the featureset of TachiyomiJ2K
  image: /forks/logo-neko.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/CarlosEsco/Neko/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/CarlosEsco/Neko

customMetaTitle: Neko

features:
  - title: MangaDex
    details: Native login with support for MDList as a tracker, and syncing the MangaDex follows list.
    icon: <img src="https://mangadex.org/img/brand/mangadex-logo.svg" alt="MangaDex Logo" height="32" width="32">
  - title: Similiar Series
    details: Recommendation system
    icon: 📚
  - title: Merging missing chapters
    details: If anything is missing on MangaDex you can attempt to merge them with another source.
    icon: ❔

theme: "#FD6684"
image: /forks/logo-neko.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/neko.styl"
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
