---
layout: ForkPage
title: TachiyomiAZ
metaTitle: TachiyomiAZ
description: This hentai focused fork is based off of TachiyomiEH, it has most features and fixes from Tachiyomi, as well as features from TachiyomiJ2K.
lang: en-US
meta:
  - property: og:image
    content: /assets/forks_logo-az.png
  - name: theme-color
    content: "#FFCC4D"
  - name: msapplication-TileColor
    content: "#FFCC4D"
sidebar: false
---
<style lang="css">
@font-face {font-family: "Comic Sans MS"; src: url("//db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.eot"); src: url("//db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.woff") format("woff"), url("//db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/7cc6719bd5f0310be3150ba33418e72e.svg#Comic Sans MS") format("svg"); }

.seizureText {
  animation: rainbowTextAnim .5s linear infinite, upAndDownAnim 2s infinite;
}
.textWiggle {
  padding: 2em;
  width: fit-content;
  animation: wiggleAnim 1s ease-out infinite;
}
.textWiggle:hover {
  animation: doABarrelRoll .6s;
}
.bigText {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 2em;
  display: inline-block;
  -webkit-text-stroke: 1px black;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.textLoop {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: customMarquee 10s linear infinite;
  padding-left: 100%;
}
.overflowContainer {
	width:100%;
	overflow:hidden;
}
@keyframes customMarquee {
  0% {transform: translate(0, 0);}
  100% {transform: translate(-100%, 0);}
}
@keyframes doABarrelRoll {
  from {transform:rotate(0deg)}
  to {transform:rotate(360deg)}
}
@keyframes wiggleAnim {
  0%   {transform: rotate(0deg)}
  25%  {transform: rotate(-15deg)}
  50%  {transform: rotate(0deg)}
  75%  {transform: rotate(15deg)}
  100% {transform: rotate(0deg)}
}
@keyframes upAndDownAnim {
  0% {transform: scaleX(.5) scaleY(.5)}
  50% {transform: scaleX(1) scaleY(1)}
  100% {transform: scaleX(.5) scaleY(.5)}
}
@keyframes rainbowTextAnim {
  0%   {color: hsl(0, 100%, 50%)}
  10%  {color: hsl(36, 100%, 50%)}
  20%  {color: hsl(72, 100%, 50%)}
  30%  {color: hsl(108, 100%, 50%)}
  40%  {color: hsl(144, 100%, 50%)}
  50%  {color: hsl(180, 100%, 50%)}
  60%  {color: hsl(216, 100%, 50%)}
  70%  {color: hsl(252, 100%, 50%)}
  80%  {color: hsl(288, 100%, 50%)}
  90%  {color: hsl(324, 100%, 50%)}
  100% {color: hsl(360, 100%, 50%)}
}
</style>

# <img class="headerLogo" :src="$withBase('/assets/forks_logo-az.png')"> TachiyomiAZ

<ForkButtons forkName="TachiyomiAZ" downloadForkLink="https://api.github.com/repos/az4521/TachiyomiAZ/releases/latest" downloadForkStyle="background-color:#FFCC4D;color:#000000;" githubForkLink="window.open('https://github.com/az4521/TachiyomiAZ')"/>
<div class="overflowContainer">
  <div class="textLoop">
    <div class="textWiggle">
      <span class="seizureText bigText"><i>The BEST fork</i> --az4521</span>
    </div>
  </div>
</div>

## Introduction
**TachiyomiAZ** is maintained by **[az4521](https://github.com/az4521)** and [Syer10](https://github.com/jobobby04).

This hentai focused fork is based off of **[TachiyomiEH](/forks/TachiyomiEH)**, it has most features and fixes from **Tachiyomi**, as well as features from **[TachiyomiJ2K](/forks/TachiyomiJ2K)**. It has decided to keep the hamburger menu style of navigation, compared to the other forks that are moving to the new bottom navigation style.

## Features
**Special Sources** (integrated plus added features)
- E-Hentai/ExHentai
- nHentai
- Hitomi.la
- 8Muses
- HBrowse
- Perv Eden

**Delegated Sources** (Sources with added features if installed)
- Puruin
- Tsumino
- HentaiCafe (Foolside)

**From EH:**
- Save Searches for use later
- AutoScroll
- Boost Page (force redownload page)
- Page download thread customization
- Predownload the whole chapter while reading (Optional)
- Retry immidently instead of wating for the rest of the preloaded pages to finish downloading
- Customize image cache size (how much space Tachiyomi has available to store future pages)
- Sync your favorites with your EHentai/ExHentai account
- Batch import E-Hentai/ExHentai URLs (import single URLs by pasting them into the source search box)
- Automatic CAPTCHA solving

**From EH and fixed/changed:**
- Auto Migration (Originally from EH, it was then improved in J2k, and we have reintegrated the J2k version)
- Merged Sources (Merge 2 or more versions of a manga to get chapters from all of them)
- App and notification lock with fingerprint and PIN unlock
- Restoring backups in the background
- Fixed Tsumino and Hitomi
- Language filtering search options for nHentai
- Tri-state filter when filtering in library
- Random bugfixes

**Original AZ Features:**
- Maintained hamburger navigation
- Grid view corner rounding configuration
- Manga recommendations

<img class="zoomable" :src="$withBase('/assets/forks_gunz-az.png')">
