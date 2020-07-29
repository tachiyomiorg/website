---
title: Frequently Asked Questions
description: Need help with something? Most of your issues can probably be solved from this page.
lang: en-US
sidebarDepth: 2
---

# Frequently Asked Questions

## Application

### Library

#### How can I see how many chapters I've downloaded?
This can be done by enabling **Download badges** under <Navigation item="library"/>.

::: guide
Enable it by going to <Navigation item="library"/> → <Navigation item="filter"/> → **DISPLAY** section and then checking the **Download badges** option at the bottom.
:::

#### Why are some covers white after restoring from backup?
The URL to the cover has probably changed. To fix this, refresh the metadata of your library.

::: guide
Refresh your metadata by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> then pressing **Refresh library metadata**.
:::

#### How do I ignore chapters from certain scanlator groups?
Every now and then you find a manga that is translated by more than one group. Because of this, you get multiple releases for each chapter in the manga. The easiest way to fix this is to change sorting to **Total chapters**. You won't see any changes but, when you start reading you'll automatically skip the duplicate releases.

::: guide
Change library sorting by going to <Navigation item="library"/> → <Navigation item="filter"/> → **Sort** section then in this case selecting **Total chapters**.
:::

### Reader
#### Why are some images not displayed?
Aside from network issues, it could be because the images are too big or that the decoder doesn't support that image type.

### Downloads
#### What happened to the simultaneous downloads feature?
It was removed to prevent IP bans caused by too many requests. We know that speed is being sacrificed but it's better than not being able to access a source at all.

#### Why are Downloads unstable?
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

#### What do I do if I can't find the Tachiyomi folder?
If you don't see a **Tachiyomi** folder on your device, try downloading a chapter of any manga or creating a backup so that the folder can be created.

### Application Updates
#### How do I enable automatic updates?
From version **0.9.0** and onwards, Tachiyomi has automatic updates for the app enabled by default. The **Preview** version also has automatic updates enabled by default.

However, if you think you are on an outdated version, go to <Navigation item="more"/> → <Navigation item="about"/> → and click on **Check for updates**.

#### Why are automatic updates not working?

Cetain devices such as MIUI have very aggressive battery saving, which can kill the app in the background. To whitelist Tachiyomi from battery saver, go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> and click on **Disable battery optimization**.

### User Interface
#### Can I change the app language?
**Tachiyomi** is translated in 40+ different languages. By default, the app follows the language used on your device.
Only the UI has been localized, the language of the manga will still be using the language of the source selected.

::: guide
You can change language by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_general"/> then pressing **Language**.
:::

### Miscellaneous

#### Why can't I uninstall Tachiyomi?

On **Android 10**, a bug was introduced which prevented users from uninstalling the app if the phone had a MicroSD card. To fix the issue, please remove the MicroSD card from the phone first, then uninstall Tachiyomi.

#### What happened to the F-Droid version?

**F-Droid** is no longer supported. Both the Stable and Preview builds are now automatically updated. An unofficial **F-Droid** repo is available at [tachi.efreakbnc.net](https://tachi.efreakbnc.net).

#### Will there be an iOS version?
There is no iOS version and no plans for one. Since iOS and Android apps don't share code it's hard to port.

#### Will Tachiyomi ever be on the Google Play Store?
Due to Google Play's content policy, almost certainly not.

#### How can I report Tachiyomi copycats on the Google Play Store?
If you're on desktop, fill out [this](https://support.google.com/googleplay/android-developer/contact/takedown) form following [these](https://pastebin.com/08eeuJxH) steps.
#### Can Tachiyomi read Light Novels?
No. Tachiyomi is an image parser, meaning it can't parse text.

#### Can I revert back from the Material Design 2 update of Tachiyomi?
While there will never be a toggle between the two UI versions, you can continue to use the old UI version by using [TachiyomiAZ](https://tachiyomi.org/forks/TachiyomiAZ/).

#### Will there ever be a dual-page reader option?
The logic required to make a dual-page reader automatically work along with scanlator page inconsistencies and other issues means it is unlikely to be added at this time.

#### I lost everything, what now?
To avoid data loss in the future, you can use the automatic backup feature.

::: aside
Learn how to create automatic backups [here](/help/guides/creating-backups/#turning-on-auto-backups/)
:::

## Extensions

### General

#### What are some recommended extensions?

::: warning DISCLAIMER
Tachiyomi is not affiliated with or responsible for any source that is down, slow, or missing chapters.
:::

While Tachiyomi does not officially endorse or recommend any manga website, below listed are some popular sources reported by users. **MangaPark**, **MangaHub** and **MangaDex** are among the most popular in general, these are large sites that host content from scanlators. Description of some popular sources are listed below:

- Largest manga library: **MangaPark**
- All around good source: **MangaHub**
- Fastest manga updates: **MangaDex** and [scanlator sources](/help/faq/#what-are-scanlator-sources)
- Official Shonen Jump latest chapters: **MANGA Plus by SHUEISHA**
- Webtoons and Manhwa/Manhua: **Webtoons**, **Toonily** (found in **Madara** extension), **Mangazuki.me** (in **Madara** extension), **IsekaiScan.com** (also in **Madara** extension)
- Western comics: **Comicastle**, **ComicExtra **and **ComicPunch**  
- Yaoi, Yuri, Shounen Ai and Shoujo Ai: **Mangahasu**, **Dynasty** (for Yuri), **Lily Manga** (for Yuri, in **Madara** extension) **MyReadingManga** (for Yaoi)
- Other popular sources: **MangaFreak**, **MangaOwl**, **MangaHere**, **ReadManhwa**, **Manhwa18.net** (in **FMReader** extension)

Most of the scanlator sources are part of **Multi-source** extensions, which contain multiple sources. For example, extensions like **Genkan**, **Madara**, **FoolSlide** and **ComiCake** contain sources which host directly from the scanlators' own websites.

#### What are some recommended NSFW extensions?
- Serialized Manga: Hentai2Read
- Fakku Rips: HentaiNexus 
- Webtoon Hentai: Toonily and Manhwa Club (in **Madara** extension), Manhwa18.net (in **FMReader** extension), ReadManhwa
- Casual Browsing: E-Hentai and NHentai
- Western Comics: AllPornComic in Madara

#### What are scanlator sources?
Manga that are not officially licensed are translated by scanlators, who either publish manga on their own website or **MangaDex**. Scanlator sources always provide the fastest manga updates and have the highest scan quality.

Some popular scanlator sources are **Jaimini's Box** (in **FoolSlide** extension), **MerakiScans**, **Hatigarm Scans** (in **Genkan** extension) etc.

Learn more about scanlation in this **Wikipedia** [**article**](https://en.wikipedia.org/wiki/Scanlation).

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
	<video muted loop controls :poster="$withBase('/help/faq/assets/UnknownSources-Android10.png')" height="500" controlslist="nodownload noremoteplayback" preload="none" loading="lazy" crossorigin="use-credentials">
		<source :src="$withBase('/help/faq/assets/UnknownSources-Android10.webm')" type="video/webm" />
	</video>
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Android 7.1 and lower</h4>
	<p>In older versions of Android you only need to enable "Unknown sources" globally.</p>
	<video muted loop controls :poster="$withBase('/help/faq/assets/UnknownSources-Android7.png')" height="500" controlslist="nodownload noremoteplayback" preload="none" loading="lazy" crossorigin="use-credentials">
		<source :src="$withBase('/help/faq/assets/UnknownSources-Android7.webm')" type="video/webm" />
	</video>
</figure>
</CarouselItem>
</Carousel>

::: aside
If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)
:::

#### How do I uninstall an extension?
Extensions for **Tachiyomi** are technically installed the same as normal apps. Either you uninstall them through the app section on your phone's settings or you go can do it in the app.

::: guide
To uninstall an extension from within **Tachiyomi**, go to <Navigation item="browse"/> → **EXTENSIONS** then tap **Uninstall** on the extension you want to remove.
:::

#### Why don't I have extensions or any sources in Browse?
- **Tachiyomi** no longer have pre-installed extensions, this means that you will need to install extensions you want to use from the <Navigation item="browse"/> → **EXTENSIONS** menu.
- If you're getting the `Loader not implemented` error after clicking on a manga, you will need to reinstall the extensions you used to use.

#### How do see sources of other languages?

You do this by following the steps below.

1. Go to <Navigation item="browse"/> → **SOURCES**.
1. Click on <Navigation item="filter"/> on the top right corner.
1. Scroll down until you find the language of your source and enable it.

#### Why can't I restore my backup?
To restore backups, **Tachiyomi** requires to have extensions installed for the respective manga you want to restore.


#### Why can't I find manga when searching Browse?
It might be because the title is worded differently. Follow any of the steps below:
- Look up the title on a search engine like **Google** or a manga tracking service such as [AniList](https://anilist.co/home).
- See which site has the series, often a single source will not satisfy all your needs.
- Download the extension for that source from <Navigation item="browse"/> → **EXTENSIONS** if it exists, read [this](/help/faq/#which-sources-are-in-the-multi-source-extensions) for a list of which extensions contains what sources.
- Go to <Navigation item="browse"/> → <Navigation item="button_browse"/> on a source then search for the manga again.


#### What are some common errors?

##### `Java.lang Exception: Challenge not found`
Often this will be resolved by force-quitting and reopening **Tachiyomi**.

##### `Loader not implemented`
It means that the respective extension for the manga is not installed. To fix, install the extension for the manga. If it still doesn't work, uninstall then reinstall the extension again.

##### `Value Manga is licensed at data of type java.lang.String cannot be converted to JSONObject`
This means that the manga has been licensed and can no longer be read on that source. Try a different source to read the manga.

##### `HTTP error 403`
The source you selected may have **Cloudflare** protection on and is enforcing **CAPTCHAs**.

1. Find a manga in your library that is from the source you're trying to access.
1. Tap on the <Navigation item="webview"/> in the **INFO** tab.
1. Complete the **CAPTCHA** if present and wait for the page to finish loading.
1. Press back rather than exiting the app and if that does not work, use the back arrow.

##### `App not installed`
You may encounter this if you're installing an official build over an existing **F-Droid** build due to differing signatures.
Backup your data, uninstall the app, then restore the data in the fresh install.

##### `Attempt to invoke virtual method 'com.hippo.unifile...`
This error can be caused by a variety of reasons, all to do with storage.

::: guide
- Most commonly it is caused by full storage, check to see if your device or SD Card is full
- **Tachiyomi** doesn't have access to SD card enabled in permissions for the app
- If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to.
- This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) actually exist and every folder in the sequence is available and accessible.
- The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.
:::

### MangaDex

#### Why are there no results when searching?
::: aside-guide
[<MaterialIcon icon-name="videocam"/> Click for video guide](/help/faq/assets/MangaDex-NoResults.webm)
:::

If you're not getting any results when searching MangaDex then you need to log in. To do so enter the <Navigation item="webview"/> for **MangaDex** then press the **Manga** drop-down and choose either **Sign up** or **Log in** to proceed with the login.

::: guide
To enter the **WebView** go to <Navigation item="browse"/> → <Navigation item="button_browse"/>/<Navigation item="button_latest"/> next to **MangaDex**, then press on <Navigation item="webview"/> in the top right corner.
:::

::: tip
Make sure you're on app version **0.9.2** or higher.
::: aside
Make sure you stay up to date by reading [this](/help/faq/#how-do-i-enable-automatic-updates)
:::

#### Why is MangaDex slow?
If pages are loading slowly or not at all, try:
— Making sure you have the latest version of the extension.
— Checking if MangaDex is either down, or is having the same issues.
— Trying to Clear database under More › Settings › Advanced.
— Trying to Clear chapter cache under More › Settings › Advanced.
— Going to More › Extensions › MangaDex › Image Server and then selecting a different server location.
#### Is there an alternate searching method?
**MangaDex** allows you to search using the ID number to find manga. The easiest way to get the ID is by opening the manga in your browser and looking at the URL.

::: guide
An example search would be **`id:23427`** which would return results for [Candy & Cigarettes](https://mangadex.org/title/23427/candy-cigarettes)
:::

#### How do I deal with duplicate chapters in MangaDex?
This can be solved by opening MangaDex in <Navigation item="webview"/> and block the scanlator group whose chapter you don't want to see.

#### How do I fix chapters from Mangaplus being broken?
Install the **MANGA Plus by SHUEISHA** extension instead and then migrate the manga that uses **MANGA Plus** on **MangaDex** onto the **MANGA Plus** source.

::: aside
Read about source migration [here](/help/guides/source-migration/)
:::

### MangaPark

#### How do I deal with duplicate chapters in MangaPark?
To solve this issue, follow the below steps.

1. Go to <Navigation item="browse"/> → <Navigation item="tab_extensions"/>.
1. Click on **MangaPark** extension and then `Chapter List Source`.
1. Choose an option like `Smart list` or `Prioritize source`.
1. Go back to MangaPark's chapter list and refresh it.

### Mangabox

#### What does `Page list is empty` mean?
**Mangakakalot**/**Manganelo** have created new entries for manga on their sites again. Some old entries are obsolete and will not work. To resolve this, [migrate](/help/guides/source-migration/#source-migration) the manga from **Mangakakalot**/**Manganelo** to another source.

#### What does `Source URL has changed` mean?
This means that the manga is dead and needs to be migrated from **Mangakakalot**/**Manganelo** to a different source. Refer to the guide for **Page list is empty** above.

#### How do I fix the `Image could not be decoded` error?
Open the manga in WebView and wait for the image to comes up. If the image isn't loading you will need to look elsewhere to read that particular manga, as some Mangabox sources, such as Mangakakalot, are now blocking entire regions.

### Webtoons

#### How do I fix the `Page list is empty` error?
You will have to open the manga entry in WebView and verify your age, as Webtoons has recently added age verifications on their site.

### Japscan

#### Why are some Japscan chapters not loading?
Japscan has some manga that are scrambled using a different algorithm than others on their site. If you encounter a manga being scrambled, use a different source to read.

### KissManga

#### Why is the KissManga extension missing?
The **KissManga** extension has been removed, as they have been blocking 3rd party apps & adblockers. Please migrate KissManga favorites in your library to a different source and uninstall the extension.

::: aside
Read more about source migration [here](/help/guides/source-migration/#source-migration)
:::
