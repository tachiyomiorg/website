---
title: Backup
lang: en-US
---

# Backup
This category of settings allows you to setup a backup and restore mechanism for the manga you are reading in the app.


## Create backup
Create backup lets you backup your library (titles, categories, read chapters), tracking settings, and reading history. This setting will bring up a dialog letting you choose what to backup. Manga is greyed out because it will always be backed up.
::: expander <strong>Click to reveal video guide!</strong>
<figure class="centered">
	<video :poster="$withBase('/assets/media/video-guide-backup-create.png')" height="500" autoplay="autoplay" loop="loop" preload="none" loading="lazy" crossorigin="use-credentials" playsinline="playsinline"   >
		<source :src="$withBase('/assets/media/video-guide-backup-create.webm')" type="video/webm" />
	</video>
</figure>
:::

## Restore backup
Restore backup lets you restore your previously created backup. This setting will bring up a file explorer for you. Proceed by navigating to where your stored backup is located and then select it.
::: expander <strong>Click to reveal video guide!</strong>
<figure class="centered">
	<video :poster="$withBase('/assets/media/video-guide-backup-restore.png')" height="500" autoplay="autoplay" loop="loop" preload="none" loading="lazy" crossorigin="use-credentials" playsinline="playsinline"   >
		<source :src="$withBase('/assets/media/video-guide-backup-restore.webm')" type="video/webm" />
	</video>
</figure>
:::

## Backup frequency
Backup frequency lets you select a frequency in which Tachiyomi will automatically backup your library. This setting will bring up a dialog letting you choose between preset backup frequencies.

## Backup directory
Backup directory lets you choose where your automatic backup is stored.

## Max automatic backups
Max automatic backups lets you choose how many backups will be stored before deleting the oldest one.
