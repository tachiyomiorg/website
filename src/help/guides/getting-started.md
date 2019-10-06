---
title: Getting started
lang: en-US
---

# Getting started

## Installation

[![github](https://img.shields.io/github/release/inorichi/tachiyomi.svg?style=for-the-badge&maxAge=600)](https://github.com/inorichi/tachiyomi/releases/latest) [![github downloads](https://img.shields.io/github/downloads/inorichi/tachiyomi/total.svg?style=for-the-badge&maxAge=600)](http://www.somsubhra.com/github-release-stats/?username=inorichi&repository=tachiyomi)

You can download the latest version of `Tachiyomi` from the [GitHub releases](https://github.com/inorichi/tachiyomi/releases/latest).

<Badge text="tachiyomi-vX.Y.Z.apk"/>


If you want to try new features before they get to the stable release, you can download the dev version [here](http://tachiyomi.kanade.eu/latest).

Open and install the `.apk` file you just downloaded from GitHub.

<figure class="centered">
	<img height="145" intrinsicsize="1000x500" width="300"
	  :src="$withBase('/assets/media/installprompt.png')">
</figure>

## Installing an extension

Now that Tachiyomi is installed, open the app and navigate to the `Extensions` tab.

In this guide we will use MangaDex, our most popular extension.
Press the `Install` button and accept the installation prompt that will be shown.

If you're getting stopped by a security prompt and don't know what to do you can read this FAQ section: ["How do I allow third-party installations?"](/help/faq/extensions/#how-do-i-allow-third-party-installations).

::: expander <strong>Click to reveal video guide!</strong>
<figure class="centered">
	<video muted loop controls :poster="$withBase('/assets/media/video-guide-extension-install.png')" height="500" controlslist="nodownload noremoteplayback" preload="none" loading="lazy" crossorigin="use-credentials">
		<source :src="$withBase('/assets/media/video-guide-extension-install.webm')" type="video/webm"/>
	</video>
</figure>
:::

## Adding manga to your library

Now that you've installed the MangaDex extension it should show up in the `Catalogues` tab. The items appearing here are called `Sources` (can also be called Catalogues), an extension can contains multiple sources.

To find and add manga, you can now either use the `Latest` button on your source, or you can use `Browse` and search for it.

Now that you've found manga that you want to add to your library, click on it and then press the blue bookmark button.

It should now appear in your `My Library` tab, ready to be read!

::: expander <strong>Click to reveal video guide!</strong>
<figure class="centered">
	<video muted loop controls :poster="$withBase('/assets/media/video-guide-library-add-to.png')" height="500" controlslist="nodownload noremoteplayback" preload="none" loading="lazy" crossorigin="use-credentials">
		<source :src="$withBase('/assets/media/video-guide-library-add-to.webm')" type="video/webm"/>
	</video>
</figure>
:::
