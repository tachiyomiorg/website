---
title: General
lang: en-US
---

# General
This category of settings allows you to change the look of the app, and the update schedule and how the app updates.
The blue badges next to titles is how we indicate the default option, a yellow badge can be used to indicate if for example the feature isn't yet available in the public release.


## Language <Badge text="System default" type="default-indicator" vertical="middle"/>
The language of the app. If changed, all parts of the app change to the language. Defaults to system language. Does not affect which catalog languages are enabled

## Application theme <Badge text="Main theme" type="default-indicator" vertical="middle"/>
How the app looks and what colors are used through the app. There are four themes included, consisting of a light theme and three dark themes.
- `Main` is the default white theme with blue accents.
- `Dark` is themed to completely to material grey.
- `AMOLED` is pitch black in most places and suitable for OLED screens.
- `Dark Blue` is like the main theme as it keeps the blue accents but it's dark instead of white.

### Light themes

#### Main
::: expander <strong>Click to expand!</strong>
<figure class="centered">
	<img width="100%"
	  :src="$withBase('/assets/media/main-theme.png')">
</figure>
:::

### Dark themes

#### Dark
::: expander <strong>Click to expand!</strong>
<figure class="centered">
	<img width="100%"
	  :src="$withBase('/assets/media/dark-theme.png')">
</figure>
:::

#### AMOLED
::: expander <strong>Click to expand!</strong>
<figure class="centered">
	<img width="100%"
	  :src="$withBase('/assets/media/amoled-theme.png')">
</figure>
:::

#### Dark Blue
::: expander <strong>Click to expand!</strong>
<figure class="centered">
	<img width="100%"
	  :src="$withBase('/assets/media/dark-blue.png')">
</figure>
:::

## Library manga per row <Badge text="Portrait: 3" type="default-indicator" vertical="middle"/> <Badge text="Landscape: 4" type="default-indicator" vertical="middle"/>
This setting allows you to set how many manga show up per row. It can be between 1 and 10 and can be set to differing amounts depending on the orientation you want.

## Start screen <Badge text="My library" type="default-indicator" vertical="middle"/>
This setting changes what screen the app opens up to. It can be changed between `My library`, `Recently read`, and `Library updates`.

## Library update frequency <Badge text="Manual" type="default-indicator" vertical="middle"/>
This setting changes how often the app automatically scans for manga updates. It can be changed from preset values between hourly and every 2 days.

## Library update restrictions <Badge text="False" type="default-indicator" vertical="middle"/>
This setting allows you to keep certain categories from updating. If you have categories you don't want to update, because you have a category that you would not like to update, then you can use this setting to save time from updating. If you would like to update manga while this setting is on, pull down in the manga or chapters view to manually update

## Only update ongoing manga <Badge text="False" type="default-indicator" vertical="middle"/>
This setting allows you to keep manga that sources have mark as finished from updating. If you would like to update manga while this setting is on, pull down in the manga or chapters view to manually update.

## Categories to include in global update <Badge text="All" type="default-indicator" vertical="middle"/>
This setting allows you to change which categories are updated when a manual (pull down in library) or automatic update occurs.

## Library update order <Badge text="Alphabetically" type="default-indicator" vertical="middle"/> <Badge text="Dev" type="version-indicator" vertical="middle"/>
This setting allows you to update in different orders, in alphabetical or in the order of the last updated manga.

## Default category <Badge text="Always ask" type="default-indicator" vertical="middle"/>
This setting allows you to change the category that a manga is added to when the bookmark button is tapped and no category is selected.
