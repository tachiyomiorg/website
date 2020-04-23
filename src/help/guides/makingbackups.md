---
title: Making Backups
lang: en-US
---

# Making Backups

Backups are inter-compatible between Tachiyomi versions, however, note the following:

## Neko 
can only restore Mangadex entries in a backup. If there are entries from other sources that are a part of that backup they will not transfer to Neko. 

## TachiyomiEH and TachiyomiAZ forks
These two have some built-in extensions, namely: E-Hentai, hitomi.la, and nhentai.
Titles in these extensions on these two forks will not be restored when restoring a backup made by these forks to standard Tachiyomi. It is possible to restore titles to these two forks, but it is not possible to back them up out of these forks. 

## What Backups Can Hold
Backups can hold the following information: titles, categories, read chapters, tracking settings and reading history; as long as they are selected when creating the backup. 

## Restoring
Restoring is done from the backup settings. To restore without issues be sure to:
* Have all the extensions installed that were installed at the time of the backup. 
* Log into the tracking services you use
* Log into MangaDex using Webview (outlined in 6.1)
* You're able to access all the sources through webview
* A consistent internet connection

## Transferring downloads to another Tachiyomi version
You can also transfer downloaded manga chapters from one version of Tachiyomi to another. Go to … More on the bottom nav bar  > Settings > Downloads, then set the download directory to that of the download folder of your old Tachiyomi, then restore the backup.

## Turning on Auto-Backups
*It is highly recommended you turn on auto backups* to do this click the … more button at the bottom nav > Settings >  Backup > Backup Frequency. In the case of catastrophic failure at least you will be able to recover by doing this.
