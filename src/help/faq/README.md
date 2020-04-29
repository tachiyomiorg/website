---
title: Frequently Asked Questions
lang: en-US
sidebarDepth: 2
---

# Frequently Asked Questions

## Application

### Library

#### How can I see how many chapters I've downloaded?
This can be done by enabling **Download badges** under **<MaterialIcon icon-name="class"/> My library**.

::: guide
Enable it by going to **<MaterialIcon icon-name="class"/> My library** → **<MaterialIcon icon-name="filter_list"/> Filter** → **Display** section then checking the **Download badges** option in the bottom.
:::

#### Some covers are white after restoring from backup
The URL to the cover has probably changed. To fix this, refresh the metadata of your library.

::: guide
Refresh your metadata by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="code"/> Advanced](/help/guides/advanced)** then pressing **[Refresh library metadata](/help/guides/advanced/#refresh-library-metadata)**.
::: aside
Read more [here](/help/guides/advanced/#refresh-library-metadata)
:::

#### How do I ignore chapters from certain scanlator groups?
Every now and then you find a manga that is translated by more than one group, because of this you get multiple releases for every chapter in the manga. To fix this the easiest way is to change sorting to **Total chapters**. You won't see any changes but, when you start reading you'll automatically skip the duplicate releases.

::: guide
Change library sorting by going to **<MaterialIcon icon-name="class"/> My library** → **<MaterialIcon icon-name="filter_list"/> Filter** → **Sort** section then in this case selecting **Total chapters**.
:::

#### Why do I see `attempt to invoke virtual method 'com.hippo.unifile...`?
This error can be caused by a variety of reasons, all to do with storage.


::: guide
- Most commonly it is caused by full storage, check to see if your device or SD Card is full
- **Tachiyomi** doesn't have access to SD card enabled in permissions for the app
- If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to.
- This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) actually exist and every folder in the sequence is available and accessible.
- The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.
:::

### Reader
#### Why are some images not displayed?
Aside from network issues, it could be because the images are too big or that the decoder doesn't support that image type.

### Downloads
#### What happened to the simultaneous downloads feature?
It was removed to prevent IP bans caused by too many requests. We know that speed is being sacrificed but it's better than not being able to access a source at all.

#### Downloads are unstable
Be aware that it could be a network issue on your device or on the catalog you are trying to download from.

#### Can you make it possible to store manga on both internal storage and external SD-card?
At the moment, no. You could try using symlinks but that requires having your phone rooted.
::: aside
Read more about rooting your phone [here](https://www.xda-developers.com/root/)
:::

### Tracking
#### How do I log in with Kitsu?
To log in with Kitsu you need to use your email address as your username.

#### Why can't I find manga in MAL's search results?
You can search a manga from your MAL profile's list by searching in the following format: `my:<manga>`
::: aside
Related GitHub issue: [#65](https://github.com/inorichi/tachiyomi/issues/65)
:::

### Local Manga
#### How do I import my manga into Tachiyomi?
We recommend you to read [this](/help/guides/reading-local-manga) guide on how to do so.

#### I can't find the Tachiyomi folder
If you don't see a **Tachiyomi** folder on your device, try downloading a chapter of any manga or creating a backup so that the folder can be created.

### Application Updates
#### How do I enable automatic updates?
The **Tachiyomi** app now has in-app updating for both stable and preview versions. It happens automatically in the background if you got **[Check for updates](/help/guides/about/#check-for-updates)** enabled.
::: guide
If you go to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="help"/> About](/help/guides/about)** you will find the **[Check for updates](/help/guides/about/#check-for-updates)** toggle, you can also press **[Version](/help/guides/about/#version)** to force check for updates.
:::

### User Interface
#### Can I change the app language?
**Tachiyomi** is as of writing available in 35 different languages. By default, the app follows the language used on your device.
Only the UI has been localized, language in manga will still be using the language of the source selected.

::: guide
You can change language by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="tune"/> General](/help/guides/general)** then pressing **[Language](/help/guides/general/#language)**.
::: aside
Read more [here](/help/guides/general/#language)
:::

### Miscellaneous
#### What happened to the F-Droid version?
F-Droid is no longer an officially supported option. Both the stable and preview builds now include an auto-update mechanism.

An unofficial F-Droid repo is available at [tachi.efreakbnc.net](https://tachi.efreakbnc.net).

#### Why do I get a `App not installed` error when installing?
You may encounter this if you're installing an official build over an existing F-Droid build due to differing signatures.

Backup your data, uninstall the app, then restore the data in the fresh install.

#### iOS Version
There is currently no iOS version and there are no plans for one and since iOS and Android apps don't share code it's hard to port.

#### I lost everything, what now?
**Tachiyomi** is still in beta and some design changes or unexpected errors may lead to data loss. While we try for them not to happen, sometimes it is unavoidable. To avoid this in the future, you can use the automatic backup feature.

::: aside
Learn how to backup [here](/help/guides/backup/)
:::

## Extensions

### General

#### What are some good extensions?
The most popular are **MangaDex**, **MangaSee** and **Mangakakalot**, these are large sites which host content from scanlators. Description of some popular sources are listed below:

- Fastest manga updates: **Mangadex** and scanlator sources
- Largest manga library: **Mangakakalot** (found in **Mangabox** extension)
- High quality scans and official translation: **Mangasee**
- Official Shonen Jump latest chapters: **MANGA Plus by SHUEISHA**
- Webtoons and Manhwa/Manhua: **Webtoons**, **Toonily** (found in **Madara** extension), **Mangazuki.me** (also in **Madara** extension)
- Yaoi, Yuri, Shounen Ai and Shoujo Ai: **Mangahasu**, **Dynasty** (for Yuri), **MyReadingManga** (for Yaoi)
- Other popular sources: **Mangahere**, **Mangapark**, **Manhwa18.net** (in **FMReader** extension)

Most of the scanlator sources are part of **Multi-source** extensions, which contain multiple sources. For example, extensions like **Genkan**, **Madara**, **FoolSlide** and **ComiCake** which contain sources which host directly from the scanlators' own websites.

#### Which sources are in the multi-source extensions?
Some extensions contain multiple sources, look at the list below to find out which extension to install for the specific source that you want.

::: guide
User [SnakeDoc83](https://github.com/snakedoc83) has made a handy spreadsheet showing the different multi-source extensions and their sources.
::: aside
Access the spreadsheet [here](https://docs.google.com/spreadsheets/d/1TyJEUg78WWH4zgnf3g6M2lkbWpBWbd40FYiPVQhW8IU/edit#gid=0)
:::

#### How do I request a new extension?
Open an issue [on GitHub](https://github.com/inorichi/tachiyomi-extensions/issues) if one does not already exist.

::: aside
You can find the list of extensions to download [here](/extensions/)
:::

#### Why won't the extensions install?
In some cases your phone might have some issues downloading the extensions, in those cases you can try installing them yourselves directly from the source.

To install just download the file for the extension you want and then install it, like how you installed **Tachiyomi**.

#### How do I allow third-party installations?
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

#### How do I uninstall an extension?
Extensions for **Tachiyomi** are technically installed the same as normal apps. Either you uninstall them through the app section on your phones settings or you go can do it in the app.

::: guide
To uninstall an extension from within **Tachiyomi**, go to **<MaterialIcon icon-name="extension"/> Extensions** then tap **Uninstall** on the extension you want to remove.
:::

#### Why don't I have extensions or any sources in the catalogue?
- **Tachiyomi** no longer have pre-installed extensions, this means that you will need to install extensions you want to use from the **<MaterialIcon icon-name="extension"/> Extensions** menu.
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

#### Why are my extensions not showing up in Catalogues?
If you've freshly reinstalled the **Tachiyomi** app, the installed extensions might not show up in **<MaterialIcon icon-name="explore"/> Catalogues** until you enable them.

::: guide GUIDE
To fix this, go to **<MaterialIcon icon-name="explore"/> Catalogues**→**[<MaterialIcon icon-name="settings"/> Sources](/help/guides/catalogues/#sources)**. Now you can proceed to enabling your desired sources.
:::

#### Why can't I restore my backup?
To restore backups, **Tachiyomi** requires to have extensions installed for the respective manga you want to restore.


#### Why can't I find manga when searching catalogues?
It might be because the title is worded differently. Follow any of the steps below:
- Look up the title on a search engine like **Google** or a manga tracking service such as [AniList](https://anilist.co/home).
- See which site has the series, often a single site will not satisfy all your needs.
- Download the extension for that source from **<MaterialIcon icon-name="extension"/> Extensions** if it exists, read [this](/help/faq/#which-sources-are-in-the-multi-source-extensions) for a list of which extensions contains what sources.
- Go to **<MaterialIcon icon-name="explore"/> Catalogues** → **[Browse](/help/guides/catalogues/#browse)** on a source then search for the manga again.


#### Some common errors you might encounter

##### Java.lang Exception: Challenge not found
Often this will be resolved by force-quitting and reopening Tachiyomi.

##### Loader not implemented
It means that the respective extension for the manga is not installed. To fix, install the extension for the manga. If it still doesn't work, uninstall then reinstall the extension again.

##### Value Manga is licensed at data of type java.lang.String cannot be converted to JSONObject
This means that the manga has been licensed and can no longer be read on that source. Try a different source to read the manga.

##### HTTP error 403
The source you selected may have Cloudflare protection on and is enforcing CAPTCHAs.

1. Find a manga in your library that is from the source you're trying to access
1. Tap on the overflow menu in the Info tab (3 dots)
1. Open in Webview
1. Complete the CAPTCHA if present and wait for the page to finish loading
1. Press back rather than exiting the app and if that does not work, use the back arrow

### MangaDex

#### No results when searching
If you're not getting any results when searching MangaDex then you need to log in. To do so enter the **WebView** for **MangaDex** then press the **Manga** drop-down and choose either **Sign up** or **Log in** to proceed with the log in.

::: guide
To enter the **WebView** go to **<MaterialIcon icon-name="explore"/> Catalogues** → **[Browse](/help/guides/catalogues/#browse)**/**[Latest](/help/guides/catalogues/#latest)** next to **MangaDex**, open any manga from the list and then press the **<MaterialIcon icon-name="more_vert"/> Overflow menu** in the top-right corner and then press **Open in web view**.
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
Make sure you stay up to date by reading [this](/help/faq/#how-do-i-enable-automatic-updates)
:::

#### Alternate searching method
**MangaDex** allows you to search using the ID number to find manga. The easiest way to get the ID is opening the manga in your browser and looking at the URL.

::: guide
An example search would be **`id:23427`** which would return results for [Candy & Cigarettes](https://mangadex.org/title/23427/candy-cigarettes)
:::

#### Chapters from Mangaplus are broken
Install the **Mangaplus** extension instead and then migrate the manga that uses **Mangaplus** on **MangaDex** onto the **Mangaplus** source.

::: aside
Read about source migration [here](/help/guides/source-migration/)
:::

### MangaRock

##### Regarding MangaRock going away:
- You won't lose existing bookmarks or downloads.
- Chapters are no longer updated since **MangaRock** is dead.
- Favorites from **MangaRock** source will no longer be backed up, however backup restoration is possible.
- There is no native way to automatically import your favorites from MangaRock, but you can try [waicool20/mr2tachiyomi](https://github.com/waicool20/mr2tachiyomi).
- Popular alternatives are **MangaDex**, **MangaSee** and **Mangakakalot**.

::: tip Out of the loop?
Read more about the situation [here](https://mangarock.com/).
:::

##### Migrate to Tachiyomi
There is a tool to migrate from **MangaRock** to **Tachiyomi** courtesy of a member of our [Discord server](https://discord.gg/tachiyomi) by the same name as the creator, but a computer is required to finish the migration successfully.

View the program at [waicool20/mr2tachiyomi](https://github.com/waicool20/mr2tachiyomi).

##### Restore a backup from the MangaRock source
It's not currently possible to restore backup from MangaRock officially, as the MangaRock source is dead. There is however an unofficial method to restore/backup all manga from the MangaRock source.

1. Uninstall the MangaRock extension.
1. Install the [DummyRock](/assets/misc/tachiyomi-en.dummyrock-v1.2.1-debug.apk) file.
1. Go to **<MaterialIcon icon-name="extension"/> Extensions** menu and press **Trust** to proceed.
1. Restore backup.

#### Why do I get `Value url at 0 of type java.lang.String cannot be converted to JSONObject`?
If you get this error when opening **MangaRock** chapters, try clearing your chapter cache.

::: guide
Chapter cache can be cleared by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="code"/> Advanced](/help/guides/advanced)** then pressing [Clear chapter cache](/help/guides/advanced/#clear-chapter-cache).
::: aside
Read more about clearing chapter cache [here](/help/guides/advanced/#clear-chapter-cache)
:::

### Madara

#### Leviatan Scans is missing
**Leviatan Scans** has shifted from **Madara** to **Genkan** extension. Install **Genkan**, migrate all **Leviatan scans** then update **Madara**.

### KissManga

#### Why do I get `Page list is empty`?
If you get this error then you need to solve the **CAPTCHA** on their website using your browser (*Google Chrome*, *Samsung Browser*, *Firefox*, *Opera*, etc.).