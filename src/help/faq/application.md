---
title: Application
lang: en-US
sidebarDepth: 2
---

## Library

### How can I see how many chapters I've downloaded?
This can be done by enabling [Download badges](/help/guides/my-library/#download-badges).

::: guide
Enable it by going to **[<MaterialIcon icon-name="class"/> My library](/help/guides/my-library)** → **[<MaterialIcon icon-name="filter_list"/> Filter](/help/guides/my-library/#filter-options)** → **[Display](/help/guides/my-library/#display)** section then checking the **[Download badges](/help/guides/my-library/#download-badges)** option in the bottom.
::: aside
Read more [here](/help/guides/my-library/#download-badges)
:::

### Some covers are white after restoring from backup
The URL to the cover has probably changed. To fix this, refresh the metadata of your library.

::: guide
Refresh your metadata by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="code"/> Advanced](/help/guides/advanced)** then pressing **[Refresh library metadata](/help/guides/advanced/#refresh-library-metadata)**.
::: aside
Read more [here](/help/guides/advanced/#refresh-library-metadata)
:::

### How do I ignore chapters from certain scanlator groups?
Every now and then you find a manga that is translated by more than one group, because of this you get multiple releases for every chapter in the manga. To fix this the easiest way is to change sorting to [Total chapters](/help/guides/my-library/#total-chapters). You won't see any changes but, when you start reading you'll automatically skip the duplicate releases.

::: guide
Change library sorting by going to **[<MaterialIcon icon-name="class"/> My library](/help/guides/my-library)** → **[<MaterialIcon icon-name="filter_list"/> Filter](/help/guides/my-library/#filter-options)** → **[Sort](/help/guides/my-library/#sort)** section then in this case selecting **[Total chapters](/help/guides/my-library/#total-chapters)**.
::: aside
Read more [here](/help/guides/my-library/#total-chapters)
:::

### Why do I see `attempt to invoke virtual method 'com.hippo.unifile...`?
This error can be caused by a variety of reasons, all to do with storage.


::: guide
- Most commonly it is caused by full storage, check to see if your device or SD Card is full
- **Tachiyomi** doesn't have access to SD card enabled in permissions for the app
- If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to.
- This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) actually exist and every folder in the sequence is available and accessible.
- The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.
:::

## Reader
### Why are some images not displayed?
Aside from network issues, it could be because the images are too big or that the decoder doesn't support that image type.

## Downloads
### What happened to the simultaneous downloads feature?
It was removed to prevent IP bans caused by too many requests. We know that speed is being sacrificed but it's better than not being able to access a source at all.

### Downloads are unstable
Be aware that it could be a network issue on your device or on the catalog you are trying to download from.

### Can you make it possible to store manga on both internal storage and external SD-card?
At the moment, no. You could try using symlinks but that requires having your phone rooted.
::: aside
Read more about rooting your phone [here](https://www.xda-developers.com/root/)
:::

## Tracking
### How do I log in with Kitsu?
To log in with Kitsu you need to use your email address as your username.

### Why can't I find manga in MAL's search results?
You can search a manga from your MAL profile's list by searching in the following format: `my:<manga>`
::: aside
Related GitHub issue: [#65](https://github.com/inorichi/tachiyomi/issues/65)
:::

## Local Manga
### How do I import my manga into Tachiyomi?
We recommend you to read [this](/help/guides/reading-local-manga) guide on how to do so.

### I can't find the Tachiyomi folder
If you don't see a **Tachiyomi** folder on your device, try downloading a chapter of any manga or creating a backup so that the folder can be created.

## Application Updates
### How do I enable automatic updates?
The **Tachiyomi** app now has in-app updating for both stable and development versions. It happens automatically in the background if you got **[Check for updates](/help/guides/about/#check-for-updates)** enabled.
::: guide
If you go to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="help"/> About](/help/guides/about)** you will find the **[Check for updates](/help/guides/about/#check-for-updates)** toggle, you can also press **[Version](/help/guides/about/#version)** to force check for updates.
:::

## User Interface
### Can I change the app language?
**Tachiyomi** is as of writing available in 35 different languages. By default, the app follows the language used on your device.
Only the UI has been localized, language in manga will still be using the language of the source selected.

::: guide
You can change language by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → **[<MaterialIcon icon-name="tune"/> General](/help/guides/general)** then pressing **[Language](/help/guides/general/#language)**.
::: aside
Read more [here](/help/guides/general/#language)
:::

## Miscellaneous
### What happened to the F-Droid version?
F-Droid is no longer an officially supported option. Both the stable and dev builds now include an autoupdate mechanism.

An unofficial F-Droid repo is available at [tachi.efreakbnc.net](https://tachi.efreakbnc.net).

### Why do I get a `App not installed` error when installing?
You may encounter this if you're installing an official build over an existing F-Droid build due to differing signatures.

Backup your data, uninstall the app, then restore the data in the fresh install.

### iOS Version
There is currently no iOS version and there are no plans for one and since iOS and Android apps don't share code it's hard to port.

### I lost everything, what now?
**Tachiyomi** is still in beta and some design changes or unexpected errors may lead to data loss. While we try for them not to happen, sometimes it is unavoidable. To avoid this in the future, you can use the automatic backup feature.

::: aside
Learn how to backup [here](/help/guides/backup/)
:::
