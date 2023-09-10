---
title: Downloads
titleTemplate: Frequently Asked Questions
description: Frequently Asked Question about Downloads.
---

# Downloads
Frequently Asked Question about Downloads.

## Downloading multiple chapters or series concurrently
The app does not support parallel downloads from a single source to prevent potential IP bans due to excessive requests.
While this might impact speed, it's preferable to rendering a source inaccessible.

However, if you're downloading series from various sources, up to five different sources can be downloaded simultaneously.

## Downloads stopping midway
Downloads stopping midway may relate to network connection issues or source problems.
**Tachiyomi** will provide notifications regarding encountered errors during download attempts.

## Downloads aren't detected
Downloads might not be detected due to multiple factors:

* Inaccessibility of the download location.
  > Ensure the SD card is properly detected if in use.
* Source name changes.
  > Rename the source's folder to match the new name.
* Series title modifications by the source.
  > Adjust the folder title to the updated name.

## Managing download queue
Navigate to <nav to="download-queue"> to interact with queued downloads.

Cancel all items by clicking the **Overflow** button beside a series chapter or the top right corner.

To reorder the queue, long-press the `=` icon next to a queue item.

## Internal storage and external SD card storage
As of now, this option isn't available.
You could explore using symlinks, but this requires device rooting.

For more details on rooting your device, refer to [this guide](https://www.xda-developers.com/root/).

## Series pages in device photo gallery
**Tachiyomi** typically prevents series pages in downloads from appearing in your device's photo gallery by default through a `.nomedia` file.
However, in some cases, this might not function as intended.

A quick solution is to create the `.nomedia` file yourself, name it as such, and place it in your downloads folder. If the issue pertains to local source, put the `.nomedia` file in the respective local folder.
