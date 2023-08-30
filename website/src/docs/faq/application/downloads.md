---
title: Downloads
description: Frequently Asked Question related to Downloads.
---

# Downloads
Frequently Asked Question related to Downloads.

## Downloading Multiple Chapters or Series Concurrently
The app does not support parallel downloads from a single source to prevent potential IP bans due to excessive requests.
While this might impact speed, it's preferable to rendering a source inaccessible.

However, if you're downloading series from various sources, up to five different sources can be downloaded simultaneously.

## Downloads Stopping Midway
Downloads stopping midway may relate to network connection issues or source problems.
**Tachiyomi** will provide notifications regarding encountered errors during download attempts.

## Undetected Downloads Reasons
Downloads might not be detected due to multiple factors:

* Inaccessibility of the download location.
  > Ensure the SD card is properly detected if in use.
* Source name changes.
  > Rename the source's folder to match the new name.
* Series title modifications by the source.
  > Adjust the folder title to the updated name.

## Managing Download Queue
Navigate to **More -> Download Queue** to interact with queued downloads.

Cancel all items by clicking the **Overflow** button beside a series chapter or the top right corner.

To reorder the queue, long-press the `=` icon next to a queue item.

## Internal Storage and External SD-Card Storage
As of now, this option isn't available.
You could explore using symlinks, but this requires device rooting.

For more details on rooting your device, refer to [this guide](https://www.xda-developers.com/root/).

## Series Pages in Device Photo Gallery
**Tachiyomi** typically prevents series pages in downloads from appearing in your device's photo gallery by default through a `.nomedia` file.
However, in some cases, this might not function as intended.

A quick solution is to create the `.nomedia` file yourself, name it as such, and place it in your downloads folder. If the issue pertains to local series, put the `.nomedia` file in the respective local folder.
