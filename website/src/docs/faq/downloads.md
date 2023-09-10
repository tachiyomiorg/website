---
title: Downloads
titleTemplate: Frequently Asked Questions
description: Frequently Asked Question about Downloads.
---

# Downloads
Frequently Asked Question about Downloads.

## How do I download multiple chapters or series at the same time?
The app does not support parallel downloads from a single source to prevent potential IP bans due to excessive requests.
While this might impact speed, it's preferable over rendering a source inaccessible.

Note that Tachiyomi will download from up to five different sources in parallel.

## Why did my downloads stop midway?
Downloads stopping midway may be related to network connection issues or source problems.
**Tachiyomi** will provide notifications regarding encountered errors during download attempts.

## Why can't I see my downloads?
Downloads might not be detected due to multiple factors:

* Inaccessibility of the download location.
  > Ensure the SD card is properly detected if in use.
* Source name changes.
  > Rename the source's folder to match the new name.
* Series title modified by the source.
  > Adjust the folder title to the updated name.

## How do I manage what's downloading?
Navigate to <nav to="download-queue"> to interact with queued downloads.

Cancel all items by clicking the **Overflow** button beside a series chapter or the top right corner.

To reorder the queue, long-press and drag the `=` icon next to a queue item.

## Can I use both internal storage and external SD card storage?
No, you must choose a single location. Internal storage performs better than external SD cards.

## Why does my device photo gallery contain series pages?
**Tachiyomi** typically prevents series pages in downloads from appearing in your device's photo gallery by default through a `.nomedia` file.
However, in some cases, this might not function as intended.

A quick solution is to create the `.nomedia` file yourself, name it as such, and place it in your downloads folder. If the issue pertains to local source, put the `.nomedia` file in the respective local folder.
