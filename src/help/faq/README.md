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
Enable it by going to <Navigation item="library"/> → <Navigation item="filter"/> → **Display** section and then checking the **Download badges** option at the bottom.
:::

#### How do I ignore duplicate chapters?
Every now and then you find a manga that is translated by more than one group. Because of this, you get multiple releases for each chapter in the manga. There are several ways to skip the duplicate chapters:

* On the manga page, click on <Navigation item="filter"/> → **Sort** and choose **By chapter number**. This will cause the reader to skip duplicates as you read.
* Bookmark or mark as read the unwanted chapters, then click on <Navigation item="filter"/> → **Filter** and double-tap **Bookmarked** or single-tap **Unread**, respectively. This will hide any bookmarked or read chapters and skip them as you read along, as long as you have **Skip filtered chapters** enabled under <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_reader"/> → **Reading**.
* Migrate to another source that does not have duplicates. For more information on how to migrate a manga, see the [migration guide](/help/guides/source-migration/).

#### Why are some cover thumbnails corrupted, white, or showing a broken page?
The thumbnail download likely did not complete correctly. To fix this, refresh covers in settings.

::: guide
Refresh your covers by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> then pressing **Refresh library manga covers**.
:::

#### Why have some manga chapters been marked as unread when I haven't touched them?
The URLs of the manga chapters have changed, so Tachiyomi detects the chapter(s) as new chapters.

### Browse

#### Why can't I find a certain manga?
Sometimes you can struggle to find a source that has the manga you're looking for. Here are some tips to help you find it:
::: guide Tips to find your manga
1. Look up the manga on [Google](https://google.com/) or a manga database such as [MangaUpdates](https://www.mangaupdates.com/).
1. See if the manga has any alternate spellings or other title variations. Try searching again in your sources with the alternate titles you found.
1. If you still can't find the manga in any of your sources, then try to search for an extension for the website you've found in step 1 in the [extensions](/extensions/) list.

#### If you find the manga on a specific scanlator/aggregator and they do have an extension
Download the corresponding extension, click on it under <Navigation item="browse"/> → **Sources**, and then search for the manga there.
#### If you find the manga on a specific scanlator/aggregator and they don't have an extension
Check if adding the site as an extension has [already been requested](https://github.com/tachiyomiorg/tachiyomi-extensions/issues). If it hasn't been, you can [request it yourself](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose).

If the scanlator or aggregator doesn't have an online manga reader, you can download the manga from their website and set up the series as a [local manga](/help/guides/local-manga/).
:::

### Reader

#### Why are some images not displayed?
Aside from network issues, it could be because the images are too big or that the decoder doesn't support that image type.

### Downloads

#### How do I download several chapters or manga simultaneously?
The app doesn't allow parallel downloads from one source to prevent IP bans caused by too many requests. We know that speed is being sacrificed but it's better than not being able to access a source at all.

However, if you're downloading several manga from different sources, the app will start downloading simultaneously from up to 5 different sources.

#### Why do my downloads sometimes stop midway through?
Be aware that it could be a network issue on your device or on the website you are trying to download from.

#### Can you make it possible to store manga on both internal storage and external SD-card?
At the moment, no. You could try using symlinks but that requires having your device rooted.
::: note
Read more about rooting your device [here](https://www.xda-developers.com/root/)
:::

### Tracking

#### How do I log in with Kitsu?
To log in with Kitsu you need to use your email address as your username.

#### Why can't I find manga in MAL's search results?
If you can't find a manga by name, you can look it up on MAL and then search for it in Tachiyomi using the following format: `id:<id from manga URL>`. You can also search for a manga on your MAL profile list by searching in the following format: `my:<manga name>`. 
::: note
Related GitHub issue: [#65](https://github.com/tachiyomiorg/tachiyomi/issues/65)
:::

### Local Manga

#### How do I import my manga into Tachiyomi?
We recommend you to read [this](/help/guides/local-manga) guide on how to do so.

#### What do I do if I can't find the Tachiyomi folder?
If you don't see the **Tachiyomi** folder on your device, try setting the download location to default and downloading a chapter of any manga so that the folder can be created.

::: guide
Set download location to default by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_downloads"/> → **Download location** and selecting first option. Restart the app after changing download location.
:::

#### How do I fix empty/blank covers on my local manga?
Sometimes some covers for local manga aren't displayed. Follow these steps to fix it:

::: guide
1. Make sure you've created the right folder structure. To check it, open the manga with the missing cover and check if you can read chapters in the app. If not, follow [this](/help/guides/local-manga) guide first.
1. Take a screenshot of which chapters you've read and then remove manga from the library.
1. Go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> and tap **Clear database**. This only affects manga that aren't in your library.
1. Go to <Navigation item="browse"/> → **Local source** and find the manga. The cover should be fixed now. Add the manga back to your library, mark your read chapters, and re-add tracking if needed.
:::

::: note
Related GitHub issue: [#932](https://github.com/tachiyomiorg/tachiyomi/issues/932)
:::

### Application Updates

#### How do I enable automatic updates?
From version **0.9.0** and onwards, Tachiyomi has automatic updates for the app enabled by default. The **Preview** version also has automatic updates enabled by default.

However, if you think you are on an outdated version, go to <Navigation item="more"/> → <Navigation item="about"/> and click on **Check for updates**.

#### Why are automatic updates not working?

Certain devices such as MIUI have very aggressive battery saving, which can kill the app in the background. To whitelist Tachiyomi from your battery saver, go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> and click on **Disable battery optimization**. If that does not work, you can also visit [DontKillMyApp](https://dontkillmyapp.com/) to see what battery saving options your device has and how to disable or circumvent them.

### User Interface

#### Can I change the app language?
**Tachiyomi** is translated into 40+ different languages. By default, the app follows the language used on your device.

::: guide
You can change language by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_general"/> then pressing **Language**.
:::

### Miscellaneous

#### What is Tachiyomi Preview?
It's a weekly-updated, beta version of the app. It contains features that may be added to Tachiyomi in the future but also is more prone to bugs and crashes. Tachiyomi Preview is used by developers and contributors to test the app and find bugs.

If you are willing to use Tachiyomi Preview, be sure to [turn on auto-backup](/help/guides/backups/#turning-on-auto-backups) to prevent losing your library due to potential bugs or crashes.

#### Why can't I uninstall Tachiyomi?

On **Android 10**, a bug was introduced which prevented users from uninstalling the app if the device had a MicroSD card. To fix the issue, please remove the MicroSD card from the device first, then uninstall Tachiyomi.

#### Will there be an iOS version?
There is no iOS version and there are no plans for one. Since iOS and Android apps don't share code, it's hard to port.

#### Will Tachiyomi ever be on the Google Play Store?
Due to Google Play's content policy, almost certainly not, as they do not allow the APK system to work. The content on some websites will lead to Google taking it down at some point, and Inorichi does not want to have to deal with it as they have stated [before](https://github.com/tachiyomiorg/tachiyomi/issues/1745#issuecomment-441208074).

#### How can I report Tachiyomi copycats on the Google Play Store?
If you're on desktop, fill out [this](https://support.google.com/googleplay/android-developer/contact/takedown) form following [these](https://pastebin.com/08eeuJxH) steps.

#### Can Tachiyomi read Light Novels?
No. Tachiyomi is an image parser, meaning it can't parse text.

#### Can I revert back from the Material Design 2 update of Tachiyomi?
While there will never be a toggle between the two UI versions, you can continue to use the old UI version by using [TachiyomiAZ](https://tachiyomi.org/forks/TachiyomiAZ/).

#### Will there ever be a dual-page reader option?
The logic required to make a dual-page reader automatically work along with scanlator page inconsistencies and other issues means it is unlikely to be added at this time.

#### Why can I see manga pages in my device's photo gallery?
Tachiyomi adds a `.nomedia` file to the downloads folder by default to prevent this from happening, but sometimes it doesn't work or something went wrong. To fix this, all you need to do is create the file yourself. Name it `.nomedia` and place it in your downloads folder. If you are having the same problem with your local manga, place the `.nomedia` file in the local folder.

#### I lost everything, what now?
To avoid data loss in the future, you can use the automatic backup feature.

::: note
Learn how to create automatic backups [here](/help/guides/backups/#turning-on-auto-backups/)
:::

#### Why am I having problems restoring from my backup?
See the [guide](/help/guides/backups/#restoring) on restoring from a backup.

## Extensions

### General

#### What are some recommended extensions?
Tachiyomi does not endorse or recommend any manga source, and there is no best extension. Rather, we encourage users to spend some time trying out a few sources themselves, and discover what sources work best for them. What works well for somebody else might not work well for you.

<ElAlert type="info" title="Disclaimer" description="Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality." show-icon :closable="false"></ElAlert>

#### What are scanlator sources?
Manga that are not officially licensed are translated by scanlators, who either publish on their own website or on **MangaDex**. This is in contrast to official sources like **MANGA Plus By SHUEISHA** or **VIZ Shonen Jump**, which host officially licensed and translated manga.

Learn more about scanlation in this **Wikipedia** [**article**](https://en.wikipedia.org/wiki/Scanlation).

#### Which sources are in the multi-source extensions?
Some extensions contain multiple sources. Consult the [extension list](/extensions/) to find out which extension to install for the specific source that you want.

#### How do I request a new extension?
Open an issue on [GitHub](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) if one does not already exist.

::: note
You can find the list of extensions to download [here](/extensions/)
:::

#### I'm having problems installing an extension, what can I do?
In some cases, your device might have some issues downloading and automatically installing an extension. In those cases, you can manually download and install the extension yourself. Go to the [extension list](extensions/), find the extension you want, and click **Download**. Once the .apk file has been downloaded, use your file manager to find it and open it. A prompt to install it as an app should pop up. Once it is done installing, it will be automatically added to Tachiyomi as a source.

#### How do I allow third-party installations?
::::: el-tabs
:::: el-tab-pane label="Android 8.0 and higher"
::: videolink
[<MaterialIcon icon="videocam"/> Click for Android 8.0 and newer video guide](/assets/faq_unknown-sources-a10.webm)
:::
When installing your first extension and are prompted that your device *isn't allowed* to install unknown apps from that source, simply follow the prompt to allow it.

In *newer* versions of **Android**, you need to enable **Install unknown apps** on a per-app basis.
::::
:::: el-tab-pane label="Android 7.1 and lower"
::: videolink
[<MaterialIcon icon="videocam"/> Click for Android 7.1 and older video guide](/assets/faq_unknown-sources-a7.webm)
:::
When installing your first extension and are prompted that your device *isn't allowed* to install unknown apps from that source, simply follow the prompt to allow it.

In *older* versions of **Android**, you only need to enable **Unknown sources** globally.
::::
:::::

::: note
If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)
:::

#### How do I uninstall an extension?
Extensions for **Tachiyomi** are technically installed the same as normal apps. Either you uninstall them through the app section on your device's settings or do it in the app.

::: guide
To uninstall an extension from within **Tachiyomi**, go to <Navigation item="browse"/> → **Extensions** then tap **Uninstall** on the extension you want to remove.
:::

#### How can I see sources from other languages?

You do this by following the steps below:

1. Go to <Navigation item="browse"/> → **Sources**.
1. Click on <Navigation item="filter"/> on the top right corner.
1. Scroll down until you find the language of your source and enable it.

### MangaDex

#### Version 5 API Rewrite

##### Do I need to login to search?
You do not need to login to MangaDex to read manga anymore.

##### Why are all the covers placeholders?
Covers do not work right now due to it not being in the API yet.

##### Can I read and download manga from MangaDex right now?
Reading and downloading works fine.

##### Why aren't there any new manga updates?
There are no new uploads as the frontend is not up yet, so scanlators cannot upload anything new.

##### Why are all my manga saying "Manga ID format has changed, migrate from MangaDex to MangaDex to continue reading"?
You need to [migrate](./source-migration.md) all your MangaDex manga from MangaDex to MangaDex as MangaDex has changed their manga ID system from normal IDs to UUIDs.

##### Will I lose my downloads?
Downloads from before will not be removed or lost by the app.

##### Why can't I restore from a JSON backup?
JSON backups are now unusable due to the ID change, you'll have to manually readd your manga.

### Former Mangabox extensions

#### What happend to Mangabox?
As part of a general move to split up multi-source extensions, the Mangabox extension was removed, and all of its sources were made into their own extensions, namely **Mangakakalot**, **Manganelo**, **Mangabat** and **Mangairo**.

#### What do `Page list is empty` and `Source URL has changed` mean?
The former **Mangabox** extensions have created new entries for many of the manga on their websites. The old entries are obsolete and will not work. To resolve this, [migrate](/help/guides/source-migration/) the manga from the source to itself to get the new entry, or better yet, to a different source entirely to avoid similar errors in the future.

#### How do I fix the `Image could not be decoded` error?
Open the manga in <Navigation item="webview"/>, open a chapter, and wait for the images to load. If they don't load, you will need to look elsewhere to read that particular manga, as some of the former **Mangabox** sources, such as **Mangakakalot**, are now blocking entire regions.

### MangaPark

#### How do I deal with duplicate chapters in MangaPark?
To solve this issue, follow the below steps.

1. Go to <Navigation item="browse"/> → <Navigation item="extensions"/>.
1. Click on **MangaPark** extension and then **Chapter List Source**.
1. Choose an option like **Smart list** or **Prioritize source**.
1. Go back to **MangaPark**'s chapter list and refresh it.

### Webtoons

#### How do I fix the `Page list is empty` error?
You will have to open the manga entry in WebView and verify your age, as Webtoons has added age verifications on their website.

### Toonily 

#### Why can't I access Toonily?
The Toonily source may have issues loading due to the the Cloudflare bypass in WebView timing out.

### Removed Extensions

#### Why can't I download an extension that used to exist?
Extensions tend to be removed for a variety of reasons: 

- They become too much of a cat and mouse game to maintain due to the website owners changing the site frequently to deter scrapers.
- The site scrambles images in more than one way, making it impossible to make every image unscrambleable.
- A scanlator team requests removal of their site from Tachiyomi.
- The site is paywalled.
- Require reverse engineering another app.
- The site has been shut down.

A list of extensions that have been removed is available [here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/3475), it does not include sites that have gone offline.

## Android 11

### What changed in Android 11?
In Android 11, Google began forcing users to use [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage), which was introduced in Android 5.0 Lollipop, but Google only began forcing developers to use it on Android 11. Some OEMs seem to better implement Scoped Storage than others, with some users not running into any issues while users using other phone brands have multitudes of problems.

### What does it mean for Tachiyomi?
The introduction of Scoped Storage means that many storage-related functions that Tachiyomi uses may be much slower due to the inherent slowness of Scoped Storage, as outlined [here](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/). These include deleting chapters, library load times, accessing the folders outside the data folders to download to or read from, and more.

### Is there any way to improve performance?

You can try the command below if you know how to use ADB, a guide on installing it is also outlined on the site [here](/help/guides/troubleshooting/#what-are-some-common-errors).
```
adb shell cmd appops set eu.kanade.tachiyomi android:legacy_storage allow
```
This command enables general storage access for the app, allowing Tachiyomi to use the old general storage access interface. 

If you are using a Tachiyomi Preview or a fork, replace `eu.kanade.tachiyomi` with the corresponding fork's package name.
