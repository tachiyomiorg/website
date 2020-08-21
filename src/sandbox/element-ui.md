---
title: Element-UI
description: Demonstrations of different Element-UI features.
lang: en-US
sitemap:
  exclude: true
---

# Element-UI
View more by pressing the headers for the specified item.

## [Button](https://element.eleme.io/#/en-US/component/button)
<el-row>
  <el-button plain>Plain</el-button>
  <el-button type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
</el-row>

## [Link](https://element.eleme.io/#/en-US/component/link)
<div>
  <el-link href="https://element.eleme.io" target="_blank">default</el-link>
  <el-link type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>

## [Tag](https://element.eleme.io/#/en-US/component/tag)
<el-tag>Neutral</el-tag>
<el-tag type="success">Success</el-tag>
<el-tag type="info">Info</el-tag>
<el-tag type="warning">Warning</el-tag>
<el-tag type="danger">Danger</el-tag>

## [Alert](https://element.eleme.io/#/en-US/component/alert)

<el-alert title="success alert" type="success"></el-alert>
<el-alert title="info alert" type="info" :closable="false"></el-alert>
<el-alert title="warning alert" type="warning"></el-alert>
<el-alert title="error alert" type="error" :closable="false"></el-alert>
<el-alert title="success alert" type="success" description="more text description" show-icon></el-alert>
<el-alert title="info alert" type="info" description="more text description" :closable="false" show-icon></el-alert>
<el-alert title="warning alert" type="warning" description="more text description" show-icon></el-alert>
<el-alert title="error alert" type="error" description="more text description" :closable="false" show-icon></el-alert>

## [Tabs](https://element.eleme.io/#/en-US/component/tabs)
:::: el-tabs
::: el-tab-pane label=Google
**Google Search**, or simply **Google**, is a web search engine developed by **Google LLC**.
:::
::: el-tab-pane label=Bing
**Bing** is a web search engine owned and operated by **Microsoft**.
:::
::::

## [Collapse](https://element.eleme.io/#/en-US/component/collapse)
:::: el-collapse
::: el-collapse-item title="Google"
**Google Search**, or simply **Google**, is a web search engine developed by **Google LLC**.
:::
::: el-collapse-item title="Bing"
**Bing** is a web search engine owned and operated by **Microsoft**.
:::
::::

## [Tooltip](https://element.eleme.io/#/en-US/component/tooltip)
### Text
<el-tooltip placement="top">
  <div slot="content">First line<br/>Second line</div>
  <span>Try hovering me!</span>
</el-tooltip>

### Button
<el-tooltip placement="top">
  <div slot="content">First line<br/>Second line</div>
  <el-button type="primary" plain>Hover me!</el-button>
</el-tooltip>

## [Divider](https://element.eleme.io/#/en-US/component/divider)
### Custom
<template>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
    <el-divider content-position="right">Rabindranath Tagore</el-divider>
  </div>
</template>

### Vertical
<template>
  <div>
    <span>Rain</span>
    <el-divider direction="vertical"></el-divider>
    <span>Home</span>
    <el-divider direction="vertical"></el-divider>
    <span>Grass</span>
  </div>
</template>

## [Steps](https://element.eleme.io/#/en-US/component/steps)

### Step bar with icon
<el-steps :active="1">
  <el-step title="Step 1" icon="el-icon-edit"></el-step>
  <el-step title="Step 2" icon="el-icon-upload"></el-step>
  <el-step title="Step 3" icon="el-icon-picture"></el-step>
</el-steps>

### Step bar with description
<el-steps :active="2" finish-status="success">
  <el-step title="Step 1" description="Some description"></el-step>
  <el-step title="Step 2" description="Some description"></el-step>
  <el-step title="Step 3" description="Some description"></el-step>
</el-steps>
