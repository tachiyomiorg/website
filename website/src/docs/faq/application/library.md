---
title: Library
description: Frequently Asked Questions about the Library.
---

# Library
Frequently Asked Questions about the Library.

## How Can I Monitor My Downloaded Chapters?
You can enable badges by navigating to **Library -> Filter** and clicking the **Display** tab.
Then, at the bottom, select **Download badges**.

## Why Does Global Update Skip Certain Entries?
The app's default behavior is to skip updates for entries that meet the following criteria:

* Have unread chapters
* Haven't been initiated
* Carry a "**Completed**" status

This strategy prevents unnecessary server traffic, which could lead to sources implementing measures against **Tachiyomi**.
To manage entries with infrequent or no updates, consider using categories and excluding them from updates.

We recommend sticking with the default settings and prioritizing unread chapters for reading.

If you wish to disable the notification about skipped items, you can do so at **More -> Settings -> General -> Manage notifications** (doing so requires Android 8 or above).

## Why Am I Warned About Large Bulk Updates and Downloads?
Excessive server queries and superfluous site interactions could trigger anti-**Tachiyomi** measures from sources. See the previous question for more context. Long-running update checks and downloads might also impact your device's battery life.

To mitigate these concerns:

* It's advisable to maintain the default settings.
* Try these tips if you still encounter the warning message:
  * Use categories to segment your library (Reading, Plan to Read, Completed, etc.).
  * Update only the Reading category by navigating to **More -> Settings -> Library -> Global update** and then tap **Categories**.
  * If the warning persists, create a new category for infrequently updated entries (like monthly series or those on hiatus) and set global updates to target the more frequently updated reading category.

## How Can I Ignore Duplicate Chapters?
Dealing with series translated by multiple groups that result in duplicate chapter releases?

Bookmark or mark as read the undesired chapters, then open the **Filter** menu, ensure you're on the **Filter** tab, then double-tap **Bookmarked** or single-tap **Unread**.

This hides bookmarked or read chapters, enabling you to skip them as you read.
Ensure [Skip filtered chapters](/docs/guides/reader-settings#skip-filtered-chapters) is enabled at **More -> Settings -> Reader** under the section **Reading**.

Alternatively, migrate to a source without duplicates.
Refer to the [migration guide](/docs/guides/source-migration) for detailed instructions.

## Why Are Some Cover Thumbnails Corrupted or Blank?
If cover thumbnails appear corrupted, blank, or broken, it's likely due to an incomplete download. Fix this by refreshing the covers in settings.

Refresh your covers at **More -> Settings -> Advanced** then tap **Refresh library covers**.

## Why Have Some Series Chapters Been Marked as Unread?
If certain series chapters are marked as unread without your interaction, it could be due to changed URLs.
**Tachiyomi** detects these changes and interprets the chapters as new.
