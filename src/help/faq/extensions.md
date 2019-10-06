---
title: Extensions
lang: en-US
sidebarDepth: 2
---

## General

### What are some good extensions?
The most popular are **MangaDex**, **MangaSee** and **Mangakakalot**, these are large
sites which host content from scanlators, there's also extensions like
**Genkan**, **Madara**, **FoolSlide** and **ComiCake** which contain sources which
host directly from the scanlators own websites.

::: guide
User [SnakeDoc83](https://github.com/snakedoc83) has made a handy spreadsheet showing the different extensions and their sources.
::: aside
Access the spreadsheet [here](https://docs.google.com/spreadsheets/d/1TyJEUg78WWH4zgnf3g6M2lkbWpBWbd40FYiPVQhW8IU/edit#gid=0)
:::

### How do I request a new extension?
Open an issue [on GitHub](https://github.com/inorichi/tachiyomi-extensions/issues) if one does not already exist.

::: aside
You can find the list of extensions to download [here](/extensions/)
:::

### Why won't the extensions install?
In some cases your phone might have some issues downloading the extensions, in those cases you can try installing them yourselves directly from the source.

To install just download the file for the extension you want and then install it, like how you installed **Tachiyomi**.

### How do I allow third-party installations?
When installing your first extension and are prompted that your phone isn't allowed to install unknown apps from that source, simply follow the prompt to allow it.

<Carousel name="carousel-unknown-source">
<CarouselItem>
<figure class="centered">
	<h4>Android 8.0 and higher</h4>
	<p>In newer versions of Android you need to enable "Install unknown apps" by a per-app basis.</p>
	<video muted loop controls :poster="$withBase('/assets/media/video-guide-unknownsources-android10.png')" height="500" controlslist="nodownload noremoteplayback" preload="none" loading="lazy" crossorigin="use-credentials">
		<source :src="$withBase('/assets/media/video-guide-unknownsources-android10.webm')" type="video/webm" />
	</video>
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Android 7.1 and lower</h4>
	<p>In older versions of Android you only need to enable "Unknown sources" globally.</p>
	<video muted loop controls :poster="$withBase('/assets/media/video-guide-unknownsources-android711.png')" height="500" controlslist="nodownload noremoteplayback" preload="none" loading="lazy" crossorigin="use-credentials">
		<source :src="$withBase('/assets/media/video-guide-unknownsources-android711.webm')" type="video/webm" />
	</video>
</figure>
</CarouselItem>
</Carousel>

::: aside
If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)
:::

### How do I uninstall an extension?
Extensions for **Tachiyomi** are technically installed the same as normal apps. Either you uninstall them through the app section on your phones settings or you go can do it in the app.

::: guide
To uninstall an extension from within **Tachiyomi**, go to **[<MaterialIcon icon-name="extension"/> Extensions](/help/guides/extensions)** then tap **Uninstall** on the extension you want to remove.
:::

### Why don't I have extensions or any sources in the catalogue?
- **Tachiyomi** no longer have pre-installed extensions, this means that you will need to install extensions you want to use from the **[<MaterialIcon icon-name="extension"/> Extensions](/help/guides/extensions)** menu.
- If you're getting the `Loader not implemented` error after clicking on a manga, you will need to reinstall the extensions you used to use. Which number in the menu corresponds to which is below.

::: expander <strong>Click to expand!</strong>
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

::: warning
Be aware that **Batoto** is deprecated so you will need to migrate from that source to others.
::: aside
Read more about Batoto shutting down [here](https://goboiano.com/manga-scanlation-site-batoto-to-close-down/)
:::

### Why can't I restore my backup?
To restore backups, **Tachiyomi** requires to have extensions installed for the respective manga you want to restore.

### Which sources are there in the multi-source extensions?
Some extensions contain multiple sources, look at the list below to find out which extension to install for the specific source that you want.

::: guide
User [SnakeDoc83](https://github.com/snakedoc83) has made a handy spreadsheet showing the different extensions and their sources.
::: aside
Access the spreadsheet [here](https://docs.google.com/spreadsheets/d/1TyJEUg78WWH4zgnf3g6M2lkbWpBWbd40FYiPVQhW8IU/edit#gid=0)
:::

### Why can't I find manga when searching catalogues?
It might be because the title is worded differently. Follow any of the steps below:
- Look up the title on a search engine like **Google** or a manga tracking service such as [AniList](https://anilist.co/home).
- See which site has the series, often a single site will not satisfy all your needs.
- Download the extension for that source from **[<MaterialIcon icon-name="extension"/> Extensions](/help/guides/extensions)** if it exists, read [this](/help/faq/extensions/#which-sources-are-there-in-the-multi-source-extensions) for a list of which extensions contains what sources.
- Go to **[<MaterialIcon icon-name="explore"/> Catalogues](/help/guides/catalogues)** → **[Browse](/help/guides/catalogues/#browse)** on a source then search for the manga again.


### Some common errors you might encounter

#### Java.lang Exception: Challenge not found
Often this will be resolved by force-quitting and reopening Tachiyomi.

#### Loader not implemented
It means that the respective extension for the manga is not installed. To fix, install the extension for the manga. If it still doesn't work, uninstall then reinstall the extension again.

#### Value Manga is licensed at data of type java.lang.String cannot be converted to JSONObject
This means that the manga has been licensed and can no longer be read on that source. Try a different source to read the manga.

#### HTTP error 503
The source you selected may have Cloudflare protection on and is enforcing CAPTCHAs.

1. Find a manga in your library that is from the source you're trying to access
1. Tap on the overflow menu in the Info tab (3 dots)
1. Open in Webview
1. Complete the CAPTCHA if present and wait for the page to finish loading
1. Press back rather than exiting the app and if that does not work, use the back arrow

## MangaDex

### No results when searching
If you're not getting any results when searching MangaDex then you need to log in. To do so enter the **WebView** for **MangaDex** then press the **Manga** drop-down and choose either **Sign up** or **Log in** to proceed with the log in.

::: guide
To enter the **WebView** go to **[<MaterialIcon icon-name="explore"/> Catalogues](/help/guides/catalogues)** → **[Browse](/help/guides/catalogues/#browse)**/**[Latest](/help/guides/catalogues/#latest)** next to **MangaDex**, open any manga from the list and then press the **<MaterialIcon icon-name="more_vert"/> Overflow menu** in the top-right corner and then press **Open in web view**.
:::

::: expander <strong>Click to reveal video guide!</strong>
<figure class="centered">
	<video muted loop controls :poster="$withBase('/assets/media/video-guide-mangadex-no-results.png')" height="500" controlslist="nodownload noremoteplayback" preload="none" loading="lazy" crossorigin="use-credentials">
		<source :src="$withBase('/assets/media/video-guide-mangadex-no-results.webm')" type="video/webm"/>
	</video>
</figure>
:::

::: tip
Make sure you're on app version **0.8.4** or higher.
::: aside
Make sure you stay up to date by reading [this](/help/faq/application/#how-do-i-enable-automatic-updates)
:::

### Alternate searching method
**MangaDex** allows you to search using the ID number to find manga. The easiest way to get the ID is opening the manga in your browser and looking at the URL.

::: guide
An example search would be **`id:23427`** which would return results for [Candy & Cigarettes](https://mangadex.org/title/23427/candy-cigarettes)
:::

### Chapters from Mangaplus are broken
Install the **Mangaplus** extension instead and then migrate the manga that uses **Mangaplus** on **MangaDex** onto the **Mangaplus** source.

::: aside
Read about source migration [here](/help/guides/source-migration/)
:::

## MangaRock

#### Regarding MangaRock going away:
- You won't lose existing bookmarks or downloads.
- Chapters will no longer be updated once **MangaRock** is dead.
- There is no native way to automatically import your favorites from MangaRock, but you can try [waicool20/mr2tachiyomi](https://github.com/waicool20/mr2tachiyomi).
- Popular alternatives are **MangaDex**, **MangaSee** and **Mangakakalot**.

::: tip Out of the loop?
Read more about the situation [here](https://mrcomics.com/).
:::

#### Migrate to Tachiyomi
There is a tool to migrate from **MangaRock** to **Tachiyomi** courtesy of a member of our [Discord server](https://discord.gg/tachiyomi) by the same name as the creator, but a computer is required to finish the migration successfully.

View the program at [waicool20/mr2tachiyomi](https://github.com/waicool20/mr2tachiyomi).

### Why do I get `Value <url> at 0 of type java.lang.String cannot be converted to JSONObject`?
If you get this error when opening **MangaRock** chapters, try clearing your chapter cache.

::: guide
Chapter cache can be cleared by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="code"/> Advanced](/help/guides/advanced)** then pressing [Clear chapter cache](/help/guides/advanced/#clear-chapter-cache).
::: aside
Read more about clearing chapter cache [here](/help/guides/advanced/#clear-chapter-cache)
:::

## Madara

### Leviatan Scans is missing
**Leviatan Scans** has shifted from **Madara** to **Genkan** extension. Install **Genkan**, migrate all **Leviatan scans** then update **Madara**.

## KissManga

### Why do I get `Page list is empty`?
If you get this error then you need to solve the **CAPTCHA** on their website using your browser (*Google Chrome*, *Samsung Browser*, *Firefox*, *Opera*, etc.).
