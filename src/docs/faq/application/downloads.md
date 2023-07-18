---
title: Downloads
description: WIP
---

# Downloads

## How do I download several chapters or manga simultaneously?

The app does not allow parallel downloads from one source to prevent IP bans caused by too many requests.
We know that speed is being sacrificed, but it is better than an overall inaccessible source.

However, if you download several manga from different sources, the app will start downloading simultaneously from up to five different sources.

## Why do my downloads sometimes stop midway through?

It is likely an issue to do with your connection to your network or the source.
Tachiyomi will notify you of what error it has encountered trying to download.

### Why aren't my downloads being detected?

This can happen for a variety of reasons:

* The download location may be inaccessible.
  * If you are using an SD card, make sure it's detected.
* The source name may have changed.
  * Change the name of the source's folder to the new name.
* The source you downloaded the manga from may have changed the title.
  * Change the title of the folder to the new title.

## How do I cancel or change the download queue?

Go to **More** → **Download Queue** and cancel items in the queue or cancel all items by tapping on the overflow next to a manga chapter or on the top right.
If you would like the change the order of the queue, tap and hold the = on the side of an item in the queue.

## Can you make it possible to store manga on both internal storage and external SD-card?

At the moment, no.
You could try using symlinks, but that requires having your device rooted.

Read more about rooting your device [here](https://www.xda-developers.com/root/)

## Why can I see manga pages from my downloads in my device's photo gallery?

Tachiyomi adds a `.nomedia` file to the Downloads folder by default to prevent this from happening, but sometimes it does not work, or something goes wrong.
To fix this, all you need to do is create the file yourself.
Name it `.nomedia` and place it in your downloads folder.
If you have the same problem with your local manga, place the `.nomedia` file in the local folder.
