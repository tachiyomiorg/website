---
title: Backups
titleTemplate: Guides
description: Backups helps you prevent losing your library if something happens.
---

# Backups

Backups in **Tachiyomi** are compatible between different versions of the app.

::: tip How to create a backup
1. Go to <nav to="backup-and-restore">.
1. Select **Create backup** and choose a location to save it.

![Backup and Restore](/docs/guides/backups/backup.light.webp#light =414x215)

![Backup and Restore](/docs/guides/backups/backup.dark.webp#dark =414x215)
:::

## General backup details

### What's included in a backup?
- **Titles**
- **Categories**
- **Read chapters** for titles in Library
- **Tracking settings**
- **Reading history**
- **Series information**
  - Author, Artist, Date Added to Library, Selected Viewer, Read Duration, etc.
- **Extensions** used

### What's NOT included in a backup?
- **Reading history** of titles NOT in library
- **Settings** including app settings and extension-specific settings
- **Downloaded** chapters including [local source](/docs/guides/local-source/) chapters

## Restoring a backup
Restoring a backup can be done through the Backup and Restore settings.

To ensure a smooth restoration process, remember to:

1. Log into the Tracking services you previously used.
1. Download any extensions you've used in your backup.

Before starting to import the selected backup, the app will remind the user of these.

### Transferring downloads to a new installation
You can transfer downloaded series chapters from one version of **Tachiyomi** to another
by correctly specifying the Download Location.

## Suggestions for backups

### Enabling automatic backups
It is highly recommended to enable automatic backups to ensure you can recover in case of any issues.

::: tip How to enable automatic backups
1. Go to <nav to="backup-and-restore">.
1. Set a **backup frequency** to schedule automatic backups.
This way, you can recover from catastrophic failures.

![Automatic Backups](/docs/guides/backups/automatic_backups.light.webp#light =414x402)

![Automatic Backups](/docs/guides/backups/automatic_backups.dark.webp#dark =414x402)
:::

### Syncing backups with external cloud services
Cross device sync in **Tachiyomi** is not currently available, but users can use
[Autosync for Google Drive](https://play.google.com/store/apps/details?id=com.ttxapps.drivesync)
in order to sync backup files to Drive automatically with the following steps:

1. Install the app from the link above
2. Enable [Automatic Backups](/docs/guides/backups#enabling-automatic-backups) and set it to your desired frequency and storage location.
3. Download the latest backup from Google Drive and restore to whatever device you have

Users who are familiar with [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite)
or [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) can setup auto sync of their backups similarly.

## Additional information for forks

::: warning
This section explores some extra details regarding [forks](/forks/).
:::

All [endorsed Tachiyomi forks](/forks/) support the `.proto.gz` format to backup/restore your library.

In addition, some forks have specific limitations regarding backup restoration:

- [Neko](/forks/Neko/) can only restore [MangaDex](/extensions/#all.mangadex) entries in a backup.
  > Entries from other sources will not transfer.

  > Migrate everything to MangaDex if you require to.
- All forks have fork-specific settings and changes that might be saved in Backups.
  Such settings are not restored in original Tachiyomi and will get lost when creating a new backup.
  > For Example: [TachiyomiSY](/forks/TachiyomiSY/) has the option to backup/restore saved searches.

  These will **NOT** be restored to original Tachiyomi or its forks.
- Only [TachiyomiAZ](/forks/TachiyomiAZ/) supports creating/restoring both legacy `.json` backups and current `.proto.gz` backups.
  > Users are recommended to update their `.json` backups to use the improved and efficient `.proto.gz` backups.

Be aware of these limitations when dealing with backups in different **Tachiyomi** forks.
