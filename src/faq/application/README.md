---
title: Application
lang: en-US
sidebarDepth: 2
---

## What are some good extensions?

The most popular are MangaDex, MangaRock and MangaSee, these are large
sites which host content from scanlators, there's also extensions like
Genkan, Madara, FoolSlide and ComiCake which contain sources which
host directly from the scanlators own websites.

[Here](https://docs.google.com/spreadsheets/d/1TyJEUg78WWH4zgnf3g6M2lkbWpBWbd40FYiPVQhW8IU/edit#gid=0)
is a good spreadsheet showing the different extensions and their sources.

## How do I allow third-party installations?

When installing your first extension and are prompted that your phone
isn't allowed to install unknown apps from that source, simply press
the `Settings` button and then allow it.

Two example videos, left one is for newer Androids.

<figure class="centered">
	<video autoplay crossorigin="use-credentials" height="355"
	  intrinsicsize="400x688" loading="lazy" loop="loop" muted="muted"
	  playsinline="playsinline" :poster="$withBase('/assets/media/unknownapps-api28.png')"
	  preload="none" width="200">
		<source :src="$withBase('/assets/media/unknownapps-api28.webm')" type="video/webm" />
		<source :src="$withBase('/assets/media/unknownapps-api28.mp4')" type="video/mp4" />
	</video>
	<video autoplay crossorigin="use-credentials" height="355"
	  intrinsicsize="400x688" loading="lazy" loop="loop" muted="muted"
	  playsinline="playsinline" :poster="$withBase('/assets/media/unknownapps-api25.png')"
	  preload="none" width="200">
		<source :src="$withBase('/assets/media/unknownapps-api25.webm')" type="video/webm" />
		<source :src="$withBase('/assets/media/unknownapps-api25.mp4')" type="video/mp4" />
	</video>
</figure>

## Why won't the extensions install?

In some cases your phone might have some issues downloading the
extensions, in those cases you can try installing them yourselves
directly from the source. [Here](https://github.com/inorichi/tachiyomi-extensions/tree/repo/apk)
is the repository for the files.

To install just download the `.apk` file for the extension you want
and then install it, like how you installed Tachiyomi.

## Does Tachiyomi have automatic updates?

The Tachiyomi app now has in-app updating for both stable and dev
versions. If you go to `Settings > About > Version` to check for updates,
you can force an update there or wait for the app to notify you.

## Why are some images not displayed?

Aside from network issues, it could be because the images are too
big or the decoder doesn't support that image.

## How do I change the app language?

Tachiyomi is (as of writing) available in 35 different languages.

By default, the app language follows the language setting of your device.

You can also set your own preferred language for Tachiyomi. Simply
from side panel go to the `Settings > General > Language`.

::: tip NOTE
Only the UI has been localized, content will still be using
the language of the source selected (i.e. English for KissManga
source, Some sources have multiple Language too).
:::

If you want to help translate Tachiyomi, read [this](https://github.com/inorichi/tachiyomi/wiki/Translation).

<figure>
	<a href="https://hosted.weblate.org/engage/tachiyomi/?utm_source=widget" target="_blank">
		<img src="https://hosted.weblate.org/widgets/tachiyomi/-/multi-auto.svg">
	</a>
</figure>
