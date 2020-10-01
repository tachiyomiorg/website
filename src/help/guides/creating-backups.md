---
title: Creating backups
description: Backups can save you a lot of headache in case something happens to your installation or device.
lang: en-US
---

# Creating backups

Backups are inter-compatible between **Tachiyomi** versions, with a few exceptions listed under [forks information](#forks-information).

Backups can hold the following information:
1. **Titles**
1. **Categories**
1. **Read chapters**
1. **Tracking settings**
1. **Reading history**

::: guide
You can do this by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_backup"/> and then selecting **Create backup** and select a location to save it.
:::

## Restoring

Restoring is done from the <Navigation item="settings_backup"/> settings. To restore without issues be sure to:

* Install all the <Navigation item="tab_extensions"/> that were installed at the time of the backup.
* Log into the <Navigation item="settings_tracking"/> services that you use.
* Log into **MangaDex** using **WebView** [as explained here](/help/faq/#no-results-when-searching).
* You're able to access all the sources through the **WebView**.
* Be on a consistent internet connection.

## Transferring downloads

You can transfer downloaded manga chapters from one version of **Tachiyomi** to another.

::: guide
You can do this by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_downloads"/> and then set the download directory to that of the download folder of your old **Tachiyomi**, then restore the backup.
:::

## Turning on auto-backups

It is highly recommended you turn on auto backups, this will ensure you can recover if need be.

::: guide
You can do this by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_backup"/> and then setting a **backup frequency**. In the case of a catastrophic failure, at least you will be able to recover.
:::

## Forks information

### <img class="forkIconBefore" src="/assets/forks_logo-neko.png" width="24" height="24" /> [Neko](/forks/Neko)

This fork can only restore **MangaDex** entries in a backup. If there are entries from other sources that are a part of that backup then they will not transfer.

### <img class="forkIconBefore" src="/assets/forks_logo-az.png" width="24" height="24" /> [TachiyomiAZ](/forks/TachiyomiAZ), <img class="forkIconBefore" src="/assets/forks_logo-sy.png" width="24" height="24" />  [TachiyomiSY](/forks/TachiyomiSY) and <img class="forkIconBefore" src="/assets/forks_logo-eh.png" width="24" height="24" />  [TachiyomiEH](/forks/TachiyomiEH)

These forks have some built-in extensions, namely: **E-Hentai**, **Hitomi.la**, and **nHentai** for <Navigation item="tachiyomiaz" /> and <Navigation item="tachiyomieh" /> while <Navigation item="tachiyomisy" /> only has **E-Hentai**.


Titles from said extensions will not be restored when restoring a backup made by these forks to standard Tachiyomi. It is possible to restore titles to these forks, but it is not possible to back them up out of these forks.
