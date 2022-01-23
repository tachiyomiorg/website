---
title: Frequently Asked Questions
description: Need help with something? Most of your issues can probably be solved from this page.
lang: en-US
sidebarDepth: 2
---

# Frequently Asked Questions

## Application

### General

#### Will there be an iOS version?
No. There is no iOS version, and there are no plans for one. Since iOS and Android apps do not share code, it is hard to port.

#### Will Tachiyomi ever be on the Google Play Store?
Google Play's content policy does not allow the APK based extension system to work. The content on some websites will lead to Google taking it down at some point, and Inorichi does not want to have to deal with it as they have stated [before](https://github.com/tachiyomiorg/tachiyomi/issues/1745#issuecomment-441208074).

#### Can Tachiyomi read Light Novels?
No. Tachiyomi is an image parser, not a text parser.

#### Can Tachiyomi stream Anime?
No. Any project that calls itself Tachiyomi that supports anime is **not affiliated with the main project**.

#### Can Tachiyomi sync between devices?
No. But you can use Tachiyomi backup and restore features to save and load manga database and move manga content to another device.


#### How can I report Tachiyomi copycats on the Google Play Store?
If you are on desktop, fill out [this](https://support.google.com/googleplay/android-developer/contact/takedown) form following [these](https://pastebin.com/08eeuJxH) steps.

### Library

#### How can I see how many chapters I have downloaded or unread?
Enable badges by going to <NavigationText item="library"/> → <NavigationText item="filter"/> → **Display** tab and then checking **Download badges** or **Unread badges** at the bottom.

#### How do I ignore duplicate chapters?
Sometimes, you find a manga that is translated by more than one group. Because of this, you get multiple releases for each chapter in the manga. There are several ways to skip the duplicate chapters:

* On the manga page, tap on <NavigationText item="filter"/> → **Sort** and choose **By chapter number**. Doing this will cause the reader to skip duplicates as you read.
* Bookmark or mark as read the unwanted chapters, then tap on <NavigationText item="filter"/> → **Filter** and double-tap **Bookmarked** or single-tap **Unread**, respectively. This will hide any bookmarked or read chapters and skip them as you read along, as long as you have **Skip filtered chapters** enabled under <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_reader"/> → **Reading**.
* Migrate to another source that does not have duplicates. For more information on how to migrate a manga, see the [migration guide](/help/guides/source-migration/).

#### Why are some cover thumbnails corrupted, white, showing a broken page, or wrong?
The thumbnail download likely did not complete correctly. To fix this, refresh covers in settings.

::: guide
Refresh your covers by going to <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/> then pressing **Refresh library manga covers**.
:::

#### Why have some manga chapters been marked as unread when I have not touched them?
The URLs of the manga chapters have changed, so Tachiyomi detects the chapter(s) as new chapters.

### Browse

#### Why can I not see sources that I have installed?

##### If it is an extension that is not the same language as your phone's primary language
Enable the language of the source by going to <NavigationText item="browse"/> → Sources tab → <NavigationText item="language"/> → Turn on the language of the source you would like to use.

##### If it is an NSFW extension
<NavigationText item="settings"/> → <NavigationText item="browse"/> → Check show in sources list.

#### How do I find a manga I am looking for?
Sometimes you can struggle to find a source that has the manga you are looking to read. Here are some tips to help you find it:
::: guide Tips to find your manga
1. Look up the manga on [Google](https://google.com/) or a manga database such as [MangaUpdates](https://www.mangaupdates.com/).
1. See if the manga has any alternate spellings or other title variations. Try searching again in your sources with the alternate titles you found.
1. If you still cannot find the manga in any of your sources, then try to search for an extension for the website you found in step 1 in the [extensions](/extensions/) list.

#### If you find the manga on a specific scanlator or aggregator and they do have an extension
Download the corresponding extension, tap on it under <NavigationText item="browse"/> → **Sources**, and then search for the manga there.
#### If you find the manga on a specific scanlator or aggregator and they do not have an extension
Check if adding the site as an extension has [already been requested](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) and that it is not on the list of extensions that will not be added back [here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/3475). If it has not been requested and it is not on the list, you can [request it here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose).

If the scanlator or aggregator does not have an online manga reader, you can download the manga from their website and set up the series as a [local manga](/help/guides/local-manga/).
:::

### Reader

#### Why are some images not displayed?
Aside from network issues, sometimes Tachiyomi does not register the image as existing, exit and re-enter the reader to fix this.

#### Will there ever be a dual-page reader option?
The logic required to make a dual-page reader automatically work along with scanlator page inconsistencies and other issues means it is unlikely to be added at this time.

#### How can I make Tachiyomi turn pages with the volume rocker? Can I reverse the tapping direction? Can I change the tapping zones? 
Refer to the guides section of the site [here](/help/guides/reader-settings/#navigation-layout). Refer to [here](/help/guides/reader-settings/#volume-keys) if you want to use your volume rocker to navigate pages.

### Downloads

#### How do I download several chapters or manga simultaneously?
The app does not allow parallel downloads from one source to prevent IP bans caused by too many requests. We know that speed is being sacrificed, but it is better than an overall inaccessible source.

However, if you download several manga from different sources, the app will start downloading simultaneously from up to five different sources.

#### Why do my downloads sometimes stop midway through?
It is likely an issue to do with your connection to your network or the source. Tachiyomi will notify you of what error it has encountered trying to download.

#### How do I cancel or change the download queue?
Go to <NavigationText item="more"/> → Download Queue and cancel items in the queue or cancel all items by tapping on the <NavigationText item="overflow"/> next to a manga chapter or on the top right. If you would like the change the order of the queue, tap and hold the = on the side of a item in the queue.

#### Can you make it possible to store manga on both internal storage and external SD-card?
At the moment, no. You could try using symlinks, but that requires having your device rooted.
::: note
Read more about rooting your device [here](https://www.xda-developers.com/root/)
:::

#### Why can I see manga pages from my downloads in my device's photo gallery?
Tachiyomi adds a `.nomedia` file to the Downloads folder by default to prevent this from happening, but sometimes it does not work, or something goes wrong. To fix this, all you need to do is create the file yourself. Name it `.nomedia` and place it in your downloads folder. If you have the same problem with your local manga, place the `.nomedia` file in the local folder.

### Local Manga

#### How do I import my downloaded manga into Tachiyomi?
We recommend you to read [this](/help/guides/local-manga) guide on how to do so.

#### What do I do if I cannot find the Tachiyomi folder?
If you do not see the **Tachiyomi** folder, create one with a file manager.

#### How do I fix empty/blank covers on my local manga?
Sometimes some covers for local manga are not displayed. Follow these steps to fix it:

::: guide
1. Make sure you have created the right folder structure. To check that you have, open the manga with the missing cover and check if you can read chapters in the app. If not, follow [this](/help/guides/local-manga) guide first.
1. Take a screenshot of which chapters you have read, and then remove manga from the library.
1. Go to <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/> and tap **Clear database**. This will only affect manga that are not in your library.
1. Go back to the <NavigationText item="browse"/> → **Local source** and find the manga. The cover should be fixed now. Add the manga back to your library, mark your read chapters, and re-add tracking if needed.
:::

::: note
Related GitHub issue: [#932](https://github.com/tachiyomiorg/tachiyomi/issues/932)
:::

### Application Updates

#### How do I enable automatic updates?
From version **0.9.0** and onwards, Tachiyomi has had automatic updates for the app enabled by default. The **Preview** version also has automatic updates enabled by default.

However, if you think you are on an outdated version, go to <NavigationText item="more"/> → <NavigationText item="about"/> and tap on **Check for updates**.

#### Why are automatic updates not working?

Certain Android skins like MIUI have very aggressive battery saving, which can kill the app in the background. To whitelist Tachiyomi from your battery saver, go to <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/> and tap on **Disable battery optimization**. If that does not work, you can also visit [DontKillMyApp](https://dontkillmyapp.com/) to see what battery saving options your device has and how to disable or circumvent them.

### User Interface

#### Can I change the app language?
No. It was removed due to it causing small bugs everywhere in **Tachiyomi**. Android does not provide a standard way of selecting a language that's not your device-language. You can improve the quality of the translations in your language [here](https://hosted.weblate.org/projects/tachiyomi/) or change your system language.


### Miscellaneous

#### What is Tachiyomi Preview?
It is a weekly updated, beta version of the app. It contains features that may be added to Tachiyomi in the future and is more prone to bugs and crashes. It is intended for users who would like the bleeding edge of Tachiyomi as soon as it comes out.

If you are willing to use Tachiyomi Preview, be sure to [turn on auto-backup](/help/guides/backups/#turning-on-auto-backups) to prevent losing your library due to potential bugs or crashes.

#### What is a fork?

Forks are alternative versions of Tachiyomi with different features. Read more about them [here](/forks/).

#### Why am I unable to uninstall Tachiyomi?

On **Android 10**, a bug was introduced that prevented users from uninstalling the app if the device had a MicroSD card. To fix the issue, please remove the MicroSD card from the device first, then uninstall Tachiyomi.

#### Can I revert from the Material Design 2 update of Tachiyomi? 
While there will never be a toggle between the two UI versions, you can continue to use the old UI version by using [TachiyomiAZ](/forks/TachiyomiAZ/).

#### How do I pause reading history or go incognito?

Enable Incognito Mode by going to <NavigationText item="more"/> → Incognito Mode.

#### Can I make Tachiyomi only read my downloaded chapters? Why am I not able to disable downloaded only?

Enable Download only by going to <NavigationText item="more"/> → Download only.

#### What is DNS over HTTPS?

DNS over HTTPS is an experimental way of providing, as the name implies, DNS resolution via HTTPS.
It provides the advantage of not being vulnerable to Man-in-the-middle attacks (due to TLS encryption in HTTPS), preventing DNS spoofing. If you would like to learn more, go [here](https://www.cloudflare.com/learning/dns/dns-over-tls/). It allows some blocks to be circumvented without using a VPN.

You can enable this feature by going to <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/>.

#### What should I do if I cannot screenshot within Tachiyomi?
You have Secure Screen on, disable it if you want to screenshot by going to <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_security"/> → Secure Screen.

#### How do I backup my library automatically? How do I move data from one phone to another?
Learn how to use the backup and restore feature [here](/help/guides/backups/), and learn how to enable automatic backups [here](/help/guides/backups/#turning-on-auto-backups/)

## Extensions

### General

#### What are some recommended extensions? What source is the best? What is the replacement for source X? Where to read manga Y?
Tachiyomi does not endorse or recommend any manga source, and there is no best extension. Instead, we encourage users to spend some time trying out a few sources themselves and discover what sources work best for them. What works well for somebody else might not work well for you.

<ElAlert type="info" title="Disclaimer" description="Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality." show-icon :closable="false"></ElAlert>

#### What are scanlator sources?
Manga that are not officially licensed are translated by scanlators, who either publish on their websites or **MangaDex**. This practice contrasts with official sources like **MANGA Plus By SHUEISHA** or **VIZ Shonen Jump**, which host officially licensed and translated manga.

Learn more about scanlation in this **Wikipedia** [**article**](https://en.wikipedia.org/wiki/Scanlation).

#### How do I request a new extension?
Open an issue on [GitHub](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) if one does not already exist. Make sure it is not on the removed extensions list [here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/3475) first.

::: note
You can find the list of extensions to download [here](/extensions/)
:::


#### How do I allow third-party installations?
::::: el-tabs
:::: el-tab-pane label="Android 8.0 and higher"
::: videolink
[<MaterialIcon icon="videocam"/> Click for Android 8.0 and newer video guide](/assets/faq_unknown-sources-a10.webm)
:::
When installing your first extension and you are prompted that your device *is not allowed* to install unknown apps from that source, follow the prompt to allow it.

In *newer* versions of **Android**, you need to enable **Install unknown apps** on a per-app basis.
::::
:::: el-tab-pane label="Android 7.1 and lower"
::: videolink
[<MaterialIcon icon="videocam"/> Click for Android 7.1 and older video guide](/assets/faq_unknown-sources-a7.webm)
:::
When installing your first extension and you are prompted that your device *is not allowed* to install unknown apps from that source, follow the prompt to allow it.

In *older* versions of **Android**, you only need to enable **Unknown sources** globally.
::::
:::::

::: note
If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)
:::

#### How do I uninstall an extension?
Extensions for **Tachiyomi** are technically installed the same as standard apps. Either you uninstall them through the app section on your device's settings or do it in **Tachiyomi**.

::: guide
To uninstall an extension from within **Tachiyomi**, go to <NavigationText item="browse"/> → **Extensions** then tap **Uninstall** on the extension you want to remove.
:::

### MangaDex

#### Version 5 API Rewrite

##### Why are all my manga saying "Manga ID format has changed, migrate from MangaDex to MangaDex to continue reading"?
You need to [migrate](./source-migration.md) all your MangaDex manga from MangaDex to MangaDex as MangaDex has changed their manga ID system from IDs to UUIDs.

##### Why can I not restore from a JSON backup?
JSON backups are now unusable due to the ID change. You will have to manually re-add your manga.

#### How can I block particular Scanlator Groups?

The **MangaDex** extension allows blocking **Scanlator Groups**. Chapters uploaded by a **Blocked Scanlator Group** will not show up in **Latest** or in **Manga feed** (chapters list). For now, you can only block Groups by entering their UUIDs manually.

Follow the following steps to easily block a group from the Tachiyomi MangaDex extension:

A. Finding the **UUIDs**:
   - Go to [https://mangadex.org](https://mangadex.org) and <NavigationText item="search"/> for the Scanlation Group that you wish to block and view their Group Details
   - Using the URL of this page, get the 16-digit alphanumeric string which will be the UUID for that scanlation group
   - For Example: 
       * The Group *Tristan's test scans* has the URL 
	       - [https://mangadex.org/group/6410209a-0f39-4f51-a139-bc559ad61a4f/tristan-s-test-scans](https://mangadex.org/group/6410209a-0f39-4f51-a139-bc559ad61a4f/tristan-s-test-scans)
           - Therefore, their UUID will be `6410209a-0f39-4f51-a139-bc559ad61a4f`
       * Other Examples include:
	       + Azuki Manga     | `5fed0576-8b94-4f9a-b6a7-08eecd69800d`
           + Bilibili Comics | `06a9fecb-b608-4f19-b93c-7caab06b7f44`
           + Comikey         | `8d8ecf83-8d42-4f8c-add8-60963f9f28d9`
           + MangaPlus       | `4f1de6a2-f0c5-4ac5-bce5-02c7dbb67deb`

B. Blocking a group using their UUID in Tachiyomi MangaDex extension `v1.2.150+`:
  1. Go to <NavigationText item="browse"/> → <NavigationText item="extensions"/>.
  1. Click on **MangaDex** extension and then <NavigationText item="settings"/> under your Language of choice.
  1. Tap on the option **Block Groups by UUID** and enter the UUIDs.
       - By Default, the following groups are blocked: 
	   ```
	   Azuki Manga, Bilibili Comics, Comikey & MangaPlus
	   ```
	   - Which are entered as: 
	   ```
	   5fed0576-8b94-4f9a-b6a7-08eecd69800d, 06a9fecb-b608-4f19-b93c-7caab06b7f44,
	   8d8ecf83-8d42-4f8c-add8-60963f9f28d9, 4f1de6a2-f0c5-4ac5-bce5-02c7dbb67deb
	   ```

### Mangakakalot, Manganelo, Mangabat and Mangairo

#### What do `Page list is empty` and `Source URL has changed` mean?
The former **Mangabox** extensions have created new entries for many of the manga on their websites. The old entries are obsolete and will not work. To resolve this, [migrate](/help/guides/source-migration/) the manga from the source to itself to get the new entry, or better yet, to a different source entirely to avoid similar errors in the future.

### MangaPark

#### How do I deal with duplicate chapters in MangaPark?
To solve this issue, follow the below steps.

1. Go to <NavigationText item="browse"/> → <NavigationText item="extensions"/>.
1. Click on **MangaPark** extension and then **Chapter List Source**.
1. Choose an option like **Smart list** or **Prioritize source**.
1. Go back to **MangaPark**'s chapter list and refresh it.

### Removed Extensions

#### Why am I unable to download an extension that used to exist?
Extensions tend to be removed for a variety of reasons: 

- They become too much of a cat and mouse game to maintain due to the website owners changing the site frequently to deter scrapers.
- The site scrambles images in more than one way, making it impossible to make every image unscrambleable.
- A scanlator team requests the removal of their site from Tachiyomi.
- The site is paywalled.
- Require reverse engineering another app.
- The site has been shut down.

A list of extensions that have been removed is available [here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/3475), but it does not include sites that have gone offline.

### Split Extensions
Extensions have been split due to the sheer number of extensions in a single extension, with Madara reaching over 200 extensions at one point, making it unreasonable for both devs and users to filter through extensions. For a deeper explanation of the issue, [this](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/4287) GitHub issue explains in more detail.

#### What extensions have been split?
All of them have been split.

#### Why does my multisource extension show up as obsolete? 
The multisource extension is obsolete because it has been split. The multisource extension has been removed from the repository. It is not actually obsolete.

##### How do I move to a split extension?
Install the extension that your manga is from, and then uninstall the multisource extension. If the manga shows the source as a bunch of numbers, force close the app. For known issues with split extensions, go to this [GitHub issue](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/5672).

#### Do I need to migrate? 
No, unless expressly stated, the internal ID of sources has not changed, so migration is unnecessary.

#### What if I uninstall the multisource extension before I install the singular extensions?
See what extension IDs correspond to what extensions [here](https://pastebin.com/raw/QX2scdRT).

## Android 11+

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

## Shizuku

### What is Shizuku?
Tachiyomi can use Shizuku as an alternate way to install and update extensions. It accesses system APIs to install directly packages without user input. Shizuku requires setup with ADB or root privileges. Read more about it [here](https://shizuku.rikka.app/introduction/).

### Do I need Shizuku?
No, only use Shizuku if you want to avoid being prompted during extension installations.

### How do I set Shizuku up?
To learn how to set Shizuku up, go [here](https://shizuku.rikka.app/guide/setup/). Once you have set it up, enable it in Tachiyomi by going to **More** → **Settings** → **Advanced** → **Installer**.

### What is the difference between the installers?
* **Legacy**: fallback method installer if the standard PackageInstaller has issues. This is the default for MIUI.
* **PackageInstaller**: The default installer. This has more features depending on the Android version, such as skipping user prompts on Android 12 when updating extensions.
* **Shizuku**: See above.
