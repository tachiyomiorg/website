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
<ElRow>
  <ElButton plain>Plain</ElButton>
  <ElButton type="primary" plain>Primary</ElButton>
  <ElButton type="success" plain>Success</ElButton>
  <ElButton type="info" plain>Info</ElButton>
  <ElButton type="warning" plain>Warning</ElButton>
  <ElButton type="danger" plain>Danger</ElButton>
</ElRow>

```html
<ElRow>
  <ElButton plain>Plain</ElButton>
  <ElButton type="primary" plain>Primary</ElButton>
  <ElButton type="success" plain>Success</ElButton>
  <ElButton type="info" plain>Info</ElButton>
  <ElButton type="warning" plain>Warning</ElButton>
  <ElButton type="danger" plain>Danger</ElButton>
</ElRow>
```

## [Link](https://element.eleme.io/#/en-US/component/link)
<div>
  <ElLink href="/sandbox/" target="_blank">default</ElLink>
  <ElLink href="/download/" type="primary">primary</ElLink>
  <ElLink type="success">success</ElLink>
  <ElLink type="warning">warning</ElLink>
  <ElLink type="danger">danger</ElLink>
  <ElLink type="info">info</ElLink>
</div>

```html
<div>
  <ElLink href="/sandbox/" target="_blank">default</ElLink>
  <ElLink href="/download/" type="primary">primary</ElLink>
  <ElLink type="success">success</ElLink>
  <ElLink type="warning">warning</ElLink>
  <ElLink type="danger">danger</ElLink>
  <ElLink type="info">info</ElLink>
</div>
```

## [Tag](https://element.eleme.io/#/en-US/component/tag)
<ElTag>Neutral</ElTag>
<ElTag type="success">Success</ElTag>
<ElTag type="info">Info</ElTag>
<ElTag type="warning">Warning</ElTag>
<ElTag type="danger">Danger</ElTag>

```html
<ElTag>Neutral</ElTag>
<ElTag type="success">Success</ElTag>
<ElTag type="info">Info</ElTag>
<ElTag type="warning">Warning</ElTag>
<ElTag type="danger">Danger</ElTag>
```

## [Alert](https://element.eleme.io/#/en-US/component/alert)
<ElAlert type="success" title="Success alert!" :closable="false"></ElAlert>
<ElAlert type="info" title="Info alert!" :closable="false"></ElAlert>
<ElAlert type="warning" title="Warning alert!" :closable="false"></ElAlert>
<ElAlert type="error" title="Error alert!" :closable="false"></ElAlert>
<ElAlert type="success" title="Success alert!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." show-icon :closable="false"></ElAlert>
<ElAlert type="info" title="Info alert!" description="Magna fringilla urna porttitor rhoncus dolor purus non." show-icon :closable="false"></ElAlert>
<ElAlert type="warning" title="Warning alert!" description="Non consectetur a erat nam at." show-icon :closable="false"></ElAlert>
<ElAlert type="error" title="Error alert!" description="Pellentesque habitant morbi tristique senectus et netus." show-icon :closable="false"></ElAlert>

```html
<ElAlert type="success" title="Success alert!" :closable="false"></ElAlert>
<ElAlert type="info" title="Info alert!" :closable="false"></ElAlert>
<ElAlert type="warning" title="Warning alert!" :closable="false"></ElAlert>
<ElAlert type="error" title="Error alert!" :closable="false"></ElAlert>
<ElAlert type="success" title="Success alert!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." show-icon :closable="false"></ElAlert>
<ElAlert type="info" title="Info alert!" description="Magna fringilla urna porttitor rhoncus dolor purus non." show-icon :closable="false"></ElAlert>
<ElAlert type="warning" title="Warning alert!" description="Non consectetur a erat nam at." show-icon :closable="false"></ElAlert>
<ElAlert type="error" title="Error alert!" description="Pellentesque habitant morbi tristique senectus et netus." show-icon :closable="false"></ElAlert>
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

#### Single-line
<ElTooltip content="Tooltip content." placement="top"><span>Try hovering me!</span></ElTooltip>

```html
<ElTooltip content="Tooltip content." placement="top"><span>Try hovering me!</span></ElTooltip>
```

#### Multi-line
<ElTooltip placement="top"><template #content><div>Tooltip<br/>content.</div></template><span>Try hovering me too!</span></ElTooltip>

```html
<ElTooltip placement="top"><template #content><div>Tooltip<br/>content.</div></template><span>Try hovering me too!</span></ElTooltip>
```

### Button

#### Single-line
<ElTooltip content="Tooltip content." placement="top"><ElButton type="primary" plain>Hover me!</ElButton></ElTooltip>

```html
<ElTooltip content="Tooltip content." placement="top"><ElButton type="primary" plain>Hover me!</ElButton></ElTooltip>
```

#### Multi-line
<ElTooltip placement="top"><template #content><div>Tooltip<br/>content.</div></template><ElButton type="info" plain>Hover me too!</ElButton></ElTooltip>

```html
<ElTooltip placement="top"><template #content><div>Tooltip<br/>content.</div></template><ElButton type="info" plain>Hover me too!</ElButton></ElTooltip>
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
