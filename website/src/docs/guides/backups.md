---
title: Backups
description: Backups in Tachiyomi are compatible between different versions of the app, with a few exceptions listed under forks information.
---

# Backups

Backups in Tachiyomi are compatible between different versions of the app, with a few exceptions listed under forks information.

## What's Included in a Backup?

Backups store the following information:

- **Titles**
- **Categories**
- **Read chapters**
- **Tracking settings**
- **Reading history**
- **Manga information**
  - Author, Artist, Date Added to Library, Selected Viewer, Read Duration, etc.

::: tip How to create a backup
1. Go to **More → Backup and Restore**.
1. Select **Create backup** and choose a location to save it.

![Backup and Restore](/docs/guides/backups/backup.light.webp#light)

![Backup and Restore](/docs/guides/backups/backup.dark.webp#dark)
:::

## Restoring a Backup

Restoring a backup can be done through the Backup and Restore settings.
To ensure a smooth restoration process, remember to:

1. Log into the Tracking services you previously used.
1. Download any extensions you've used in your backup.

## Transferring Downloads to a New Installation

You can transfer downloaded manga chapters from one version of Tachiyomi to another.

## Enabling Automatic Backups

It is highly recommended to enable automatic backups to ensure you can recover in case of any issues.

::: tip How to enable
1. Go to **More → Settings → Backup**.
1. Set a **backup frequency** to schedule automatic backups.
This way, you can recover from catastrophic failures.

![Automatic Backups](/docs/guides/backups/automatic_backups.light.webp#light)

![Automatic Backupse](/docs/guides/backups/automatic_backups.dark.webp#dark)
:::

## Forks Information

Some forks of Tachiyomi have specific limitations regarding backup restoration:

- [Neko](/forks/neko) can only restore [MangaDex](/extensions/#all.mangadex) entries in a backup.
  > Entries from other sources will not transfer.
- Some forks, such as [TachiyomiAZ](/forks/tachiyomi-az) and [TachiyomiSY](/forks/tachiyomi-sy), have built-in extensions.
  > Example: [E-Hentai](/extensions/#all.ehentai), [nHentai](/extensions/#all.nhentai), and **Hitomi.la**.
- Restoring a backup made by these forks to standard Tachiyomi will not restore titles from such extensions.
  > While it is possible to restore titles to these forks, backing them up out of these forks is not possible.
- Some forks only support restoring legacy backups and haven't implemented the changes needed for new backup formats yet.

Be aware of these limitations when dealing with backups in different Tachiyomi forks.
