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

```html
<el-row>
  <el-button plain>Plain</el-button>
  <el-button type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
</el-row>
```

## [Link](https://element.eleme.io/#/en-US/component/link)
<div>
  <el-link href="/sandbox/" target="_blank">default</el-link>
  <el-link href="/download/" type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>

```html
<div>
  <el-link href="/sandbox/" target="_blank">default</el-link>
  <el-link href="/download/" type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>
```

## [Tag](https://element.eleme.io/#/en-US/component/tag)
<el-tag>Neutral</el-tag>
<el-tag type="success">Success</el-tag>
<el-tag type="info">Info</el-tag>
<el-tag type="warning">Warning</el-tag>
<el-tag type="danger">Danger</el-tag>

```html
<el-tag>Neutral</el-tag>
<el-tag type="success">Success</el-tag>
<el-tag type="info">Info</el-tag>
<el-tag type="warning">Warning</el-tag>
<el-tag type="danger">Danger</el-tag>
```

## [Alert](https://element.eleme.io/#/en-US/component/alert)
<el-alert type="success" title="Success alert!" :closable="false"></el-alert>
<el-alert type="info" title="Info alert!" :closable="false"></el-alert>
<el-alert type="warning" title="Warning alert!" :closable="false"></el-alert>
<el-alert type="error" title="Error alert!" :closable="false"></el-alert>
<el-alert type="success" title="Success alert!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." show-icon :closable="false"></el-alert>
<el-alert type="info" title="Info alert!" description="Magna fringilla urna porttitor rhoncus dolor purus non." show-icon :closable="false"></el-alert>
<el-alert type="warning" title="Warning alert!" description="Non consectetur a erat nam at." show-icon :closable="false"></el-alert>
<el-alert type="error" title="Error alert!" description="Pellentesque habitant morbi tristique senectus et netus." show-icon :closable="false"></el-alert>

```html
<el-alert type="success" title="Success alert!" :closable="false"></el-alert>
<el-alert type="info" title="Info alert!" :closable="false"></el-alert>
<el-alert type="warning" title="Warning alert!" :closable="false"></el-alert>
<el-alert type="error" title="Error alert!" :closable="false"></el-alert>
<el-alert type="success" title="Success alert!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." show-icon :closable="false"></el-alert>
<el-alert type="info" title="Info alert!" description="Magna fringilla urna porttitor rhoncus dolor purus non." show-icon :closable="false"></el-alert>
<el-alert type="warning" title="Warning alert!" description="Non consectetur a erat nam at." show-icon :closable="false"></el-alert>
<el-alert type="error" title="Error alert!" description="Pellentesque habitant morbi tristique senectus et netus." show-icon :closable="false"></el-alert>
```

## [Tabs](https://element.eleme.io/#/en-US/component/tabs)
:::: el-tabs
::: el-tab-pane label="Lorem ipsum"
**Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
:::
::: el-tab-pane label="Pellentesque"
**Pellentesque** _habitant_ morbi tristique **senectus** et netus.
:::
::::

```
:::: el-tabs
::: el-tab-pane label="Lorem ipsum"
**Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
:::
::: el-tab-pane label="Pellentesque"
**Pellentesque** _habitant_ morbi tristique **senectus** et netus.
:::
::::
```

## [Collapse](https://element.eleme.io/#/en-US/component/collapse)
:::: el-collapse
::: el-collapse-item title="Lorem ipsum"
**Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
:::
::: el-collapse-item title="Pellentesque"
**Pellentesque** _habitant_ morbi tristique **senectus** et netus.
:::
::::

```
:::: el-collapse
::: el-collapse-item title="Lorem ipsum"
**Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
:::
::: el-collapse-item title="Pellentesque"
**Pellentesque** _habitant_ morbi tristique **senectus** et netus.
:::
::::
```

## [Tooltip](https://element.eleme.io/#/en-US/component/tooltip)
### Text
<el-tooltip placement="top">
  <div slot="content">First line<br/>Second line</div>
  <span>Try hovering me!</span>
</el-tooltip>

```html
<el-tooltip placement="top">
  <div slot="content">First line<br/>Second line</div>
  <span>Try hovering me!</span>
</el-tooltip>
```

### Button
<el-tooltip placement="top">
  <div slot="content">First line<br/>Second line</div>
  <el-button type="primary" plain>Hover me!</el-button>
</el-tooltip>

```html
<el-tooltip placement="top">
  <div slot="content">First line<br/>Second line</div>
  <el-button type="primary" plain>Hover me!</el-button>
</el-tooltip>
```

## [Steps](https://element.eleme.io/#/en-US/component/steps)

### Step bar with icon
:::: el-steps :active="1"
::: el-step title="Step 1" icon="el-icon-edit"
:::
::: el-step title="Step 2" icon="el-icon-upload"
:::
::: el-step title="Step 3" icon="el-icon-picture"
:::
::::

```
:::: el-steps :active="1"
::: el-step title="Step 1" icon="el-icon-edit"
:::
::: el-step title="Step 2" icon="el-icon-upload"
:::
::: el-step title="Step 3" icon="el-icon-picture"
:::
::::
```

### Step bar with description
:::: el-steps :active="2" finish-status="success"
::: el-step title="Step 1" description="First you do this"
:::
::: el-step title="Step 2" description="Then you do this"
:::
::: el-step title="Step 3" description="Then you do that"
:::
::::

```
:::: el-steps :active="2" finish-status="success"
::: el-step title="Step 1" description="First you do this"
:::
::: el-step title="Step 2" description="Then you do this"
:::
::: el-step title="Step 3" description="Then you do that"
:::
::::
```
