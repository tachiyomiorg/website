---
title: Creating backups
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

## Restoring

Restoring is done from the [<MaterialIcon icon-name="cloud_upload"/> Backup](/help/guides/backup) settings. To restore without issues be sure to:

* Install all the <MaterialIcon icon-name="extension"/> Extensions that were installed at the time of the backup.
* Log into the [<MaterialIcon icon-name="autorenew"/> Tracking](/help/guides/tracking) services that you use.
* Log into **MangaDex** using **Webview** [as explained here](/help/faq/#no-results-when-searching).
* You're able to access all the sources through the **WebView**.
* Be on a consistent internet connection.

## Transferring downloads

You can transfer downloaded manga chapters from one version of **Tachiyomi** to another.

::: guide
You can do this by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → [<MaterialIcon icon-name="get_app"/> Downloads](/help/guides/downloads) and then set the download directory to that of the download folder of your old **Tachiyomi**, then restore the backup.
:::

## Turning on auto-backups

It is highly recommended you turn on auto backups, this will ensure you can recover if need be.

::: guide
You can do this by going to **[<MaterialIcon icon-name="settings"/> Settings](/help/guides/settings)** → [<MaterialIcon icon-name="cloud_upload"/> Backup](/help/guides/backup) and then setting a [backup frequency](/help/guides/backup/#backup-frequency). In the case of a catastrophic failure, at least you will be able to recover.
:::

## Forks information

#### [Neko](/forks/Neko)

This fork can only restore **MangaDex** entries in a backup. If there are entries from other sources that are a part of that backup then they will not transfer.

#### [TachiyomiAZ](/forks/TachiyomiAZ), and [TachiyomiEH](/forks/TachiyomiEH)

These two forks have some built-in extensions, namely: **E-Hentai**, **Hitomi.la**, and **nHentai**.

Titles in these extensions on these two forks will not be restored when restoring a backup made by these forks to standard Tachiyomi. It is possible to restore titles to these two forks, but it is not possible to back them up out of these forks.
