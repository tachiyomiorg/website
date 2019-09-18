---
title: Extensions
lang: en-US
sidebarDepth: 2
---

## General

### What are some good extensions?

The most popular are MangaDex, MangaRock and MangaSee, these are large
sites which host content from scanlators, there's also extensions like
Genkan, Madara, FoolSlide and ComiCake which contain sources which
host directly from the scanlators own websites.

[Here](https://docs.google.com/spreadsheets/d/1TyJEUg78WWH4zgnf3g6M2lkbWpBWbd40FYiPVQhW8IU/edit#gid=0)
is a good spreadsheet showing the different extensions and their sources.

### Why won't the extensions install?

In some cases your phone might have some issues downloading the
extensions, in those cases you can try installing them yourselves
directly from the source. [Here](https://github.com/inorichi/tachiyomi-extensions/tree/repo/apk)
is the repository for the files.

To install just download the `.apk` file for the extension you want
and then install it, like how you installed Tachiyomi.

### How do I allow third-party installations?

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

### How do I uninstall an extension?

Extensions for Tachiyomi are technically installed the same as normal apps.
Either you uninstall them through the place you normally uninstall apps or
you go to the `Extensions` tab, enter the extension you wish to uninstall
then press `Uninstall`.

### Why don't I have extensions or any sources in the catalog?

**A:** Tachiyomi `0.8.4` and above no longer have pre-installed extensions,
so when upgrading or installing versions above this, installing the extensions
you use will be required to install extensions from the extensions menu
(the one with the puzzle piece).

**B:** If you're getting a "Loader not implemented" error after clicking on
a manga, you will need to reinstall the extensions you used to use. Which
number in the menu corresponds to which is below. Be aware that Batoto is
deprecated so you will need to migrate from that source to others.

::: expander <strong>Click to expand!</strong>
::: tip
1. Batoto
2. Mangahere
3. Mangafox
4. Kissmanga
5. Readmanga
6. Mintmanga
7. Mangachan
8. ReadMangaToday
9. Mangasee
10. WieManga
:::

## Source problems

Create your issue or see if it's already been listed
[**here**](https://github.com/inorichi/tachiyomi-extensions/issues).

### Why am I getting a 503 in (this source)?

This may be on account that the source you selected has Cloudflare protection
on, so you will need to do a captcha through webview (Not your browser).
To do this, you will need to find a manga in your library that is from
the source you're trying to access, tap on the overflow menu in the Info
tab (3 dots), open in Webview, and do the captcha there (wait for the page
to finish loading). Be sure to press back rather than exit the app and if
that does not work, use the back arrow.

### Cloudflare captcha

Please note that webview is not the same as using your browser.
Webview is a new feature introduced in stable version `0.8.4` to allow
for log-in only features and solving captcha.

You can find the web view option by opening a manga, then tapping the 3
dots in the top right while in the `Info` tab. If you have no existing
manga from the source, go to `Catalogues`, press `Browse` beside the
source, and open a manga, following the above instructions.

Once you are in webview, you will see a webpage and a bar on top with
an arrow at the left side, pointing to the left edge of your screen.
If there is no captcha on the webpage, initiate one by tapping a manga
title, if possible. Once a captcha is shown, solve it. After that, use
the aforementioned back arrow on the bar at the top of your screen to
go back to your manga. Please do not use the back button on your phone
as it does not work as expected.

If webview doesn't work for you, please update the Android System WebView
app through Play Store, then go to `Developer Options` in your phone's
settings and set WebView Implementation to Android System WebView.

<figure class="centered">
	<img :src="$withBase('/assets/media/openinwebview.jpg')">
</figure>

### Which sources are there in the multi-source extensions?

Some extensions contain multiple sources, look at the list below to find
out which extension to install for the specific source that you want.

::: expander <strong>Click to expand!</strong>
::: tip
1. Comicake
   - Whim Scans
   - Champion Scans
   - LetItGo Scans
2. Foolslide
   - Jamini’s Box
   - Helvetica Scans
   - Sense-Scans
   - Kirei Cake
   - Silent Sky
   - Mangatellers
   - Iskultrip Scans
   - Anata no Motokare
   - Death Toll Scans
   - DKThias Scanlations
   - World Three
   - Doki Fansubs
   - Yuri-ism
   - Ajia no Scantrad
   - One Time Scans
   - Tsubasa Society
   - MangaScouts
   - Storm in Heaven
   - Lilyreader
   - Midnight Haven
   - Russification/Русификация
   - Evil Flowers
   - AkaiYuhiMun team
   - LupiTeam
   - HentaiCafe
   - ShoujoSense
   - The Cat Scans
   - ShojouHearts
3. Genkan
   - Leviatan Scans
   - Psycho Play
   - One Shot Scans
   - KaguyaDex
   - Komi Scans
   - Hunlight Scans
4. Madara
   - Mangasushi
   - NinjaScans
   - ReadManhua
   - ZeroScans
   - IsekaiScans
   - Happy Tea Scans
   - Just For Fun
   - Agent of Change Translations
   - Kanjiku
   - KomikGo
   - Luxy Scans
   - Tritinia Scans
   - Tsubaki No Scan
   - Yokai Jump
   - ZManga
   - Mangazuki.me
   - Mangazuki.online
   - Mangazuki.club
   - 1st Kiss
   - Mangalike
   - Manga SY
   - Manhwa Club
   - WuxiaWorld
   - Yo Manga
   - ManyToon
   - Chibi Manga
5. My Manga Reader CMS
   - مانجا اون لاين
   - Read Comics Online
   - Biamam Scans
   - Fallen Angels
   - Hatigarm Scans
   - Mangawww Reader
   - ZXComic
   - White Cloud Pavilion
   - MangaTreat Scans
   - SOS Scanltaion
   - Scan FR
   - Scan VF
   - Komikid
   - ToraScans
   - Comic Space
   - Mangas Yuri
   - Dracaena
   - Nikushima
   - Anigai Clan
   - MangaHanta
   - Fallen Angel Scans
   - LeoManga
   - Mangadoor
   - Mangas.pw
   - HentaiShark
6. MangaCards
   - Valhalla Scans
   - NANI? Scans
:::

### Error: java.lang Exception: Challenge not found

Try closing (force-quit) and reopening Tachiyomi.

## MangaDex

### No results when searching

::: tip
Make sure you're on app version `0.8.4` or higher.
:::

If you're not getting any results when searching MangaDex then
you need to log in.

To do so, go to `Browse`/`Latest` for MangaDex under `Catalogues`, open
any manga from the list and then press the overflow menu (3 dot menu)
in the top-right corner and then the `Open in web view` button.

Now go to the hamburger menu, press the `Manga` drop-down and then
choose either `Sign up` or `Log in` to proceed with the log in.

### Alternate searching method

In `Mangadex 1.2.52` and newer the extension allows you to search using
the id number to find manga. To get the id number look at the URL of
the manga you want to add.

An example search: `id:31477`.

### Chapters from Mangaplus are broken

Install the Mangaplus extension and then migrate the manga that
uses Mangaplus on Mangadex onto the Mangaplus source.

## MangaRock

### Regarding MangaRock going away:

- You won't lose existing bookmarks or downloads.
- Chapters will no longer be updated once MangaRock is dead.
- There is no native way to automatically import your favorites from
  MangaRock (although you can try [waicool20/mr2tachiyomi](https://github.com/waicool20/mr2tachiyomi)).
- Popular alternatives: Mangasee, Kissmanga, MangaDex, Mangakakalot, Toonily.

### Migrate to Tachiyomi

There is a tool to migrate from MangaRock to Tachiyomi courtesy of a member
of our Discord server by the same name as the creator, but a computer is
required to finish the migration successfully.

Note that you must download the 64-bit version of Java or it will run
out of memory. Access the program at [waicool20/mr2tachiyomi](https://github.com/waicool20/mr2tachiyomi).

## Madara

### Leviatan Scans is missing

Leviatan Scans has shifted from Madara to Genkan extension.

Install Genkan. Migrate all Leviatan scans. Update Madara.

## KissManga

### Error: Page list is empty

If you get this error then you need to solve the captcha on their website
using your browser (*Google Chrome*, *Samsung Browser*, *Firefox*, *Opera*,
etc.).
