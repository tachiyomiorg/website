---
title: Library
description: TBA
---

# Library

## How can I see how many chapters I have downloaded or unread?

Enable badges by going to Library → Filter → **Display** tab and then checking **Download badges** or **Unread badges** at the bottom.

## Why does global update skip some entries?

By default, the app does not check for updates if an entry:

* Has unread chapters
* Hasn't been started
* Has "Completed" status

This helps avoid unnecessary heavy traffic to sources to help ensure that they stay available.
If you have entries that get infrequent or no updates, you should consider using categories and excluding them from updates.

We recommend to **keep the defaults as they are** and read your unread chapters first.

If you don't want to see the skipped items notification, you can disable it at More → Settings → General → **Manage notifications** (Android 8+).

## Why does the app warn about large bulk updates and downloads?

Excessive server queries and unnecessary site interaction may cause sources to employ anti-Tachiyomi tactics.
Also refer to the above question.
Long running update checks and downloading may also negatively impact your battery life.

Tips to reduce server load As mentioned above, it is **recommended to keep the defaults as they are**, but if you are still seeing this warning message, try the following suggestions:

* Use categories (Reading, Plan to read and Completed, or anything else that segments your library).
* Update only the Reading category by going to More → Settings → Library → **Global update** then tap **Categories**.
* If the warning message still occurs, split your reading category down further by seperating entries in your library that are infrequently updated (such as monthly series or series that are on haitus) into a new category, then set global update to only update your more frequently updated reading category

## How do I ignore duplicate chapters?

Sometimes, you find a series that is translated by more than one group.
Because of this, you get multiple releases for each chapter in the series.
There are several ways to skip the duplicate chapters:

* Bookmark or mark as read the unwanted chapters, then tap on → **Filter** and double-tap **Bookmarked** or single-tap **Unread**, respectively.
* This will hide any bookmarked or read chapters and skip them as you read along, as long as you have **Skip filtered chapters** enabled under More → Settings → Reader → **Reading**.
* Migrate to another source that does not have duplicates.
* For more information on how to migrate a series, see the migration guide.

## Why are some cover thumbnails corrupted, white, showing a broken page, or wrong?

The thumbnail download likely did not complete correctly.
To fix this, refresh the covers in settings.

Refresh your covers by going to **More -> Settings -> Advanced** then pressing **Refresh library covers**.

## Why have some series chapters been marked as unread when I have not touched them?

The URLs of the series chapters have changed, so Tachiyomi detects the chapter(s) as new chapters.
