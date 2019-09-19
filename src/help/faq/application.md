---
title: Application
lang: en-US
sidebarDepth: 2
---

## Library

### How can I see how many chapters I've downloaded?

If you want to see how many chapters you have downloaded for all manga on My Library, enable `Download Badges`. It's under the `Filter` options in `My Library` (the upside-down pyramid of lines beside the three-dot) at the very bottom. Red is downloaded chapter count and Blue is unread chapter count.

### Some covers are white after restoring from backup

The URL to the cover has changed. To fix this, refresh the metadata of your library in `Settings > Advanced`.

## Reader

### Why are some images not displayed?

Aside from network issues, it could be because the images are too big or the decoder doesn't support that image.

## Downloads

### What happened to the simultaneous downloads feature?

It was removed in version `0.7.0` to prevent IP bans caused by too many requests. We know that speed is being sacrificed but it's better than not being able to access a source at all.

### Downloads are unstable

Be aware that it could be a network issue on your device or on the catalog you are trying to download from.

### Can you make it possible to store manga on both internal storage and external SD-card?

At the moment, no. You could try using symlinks (requires root).

## Tracking

### How do I log in with Kitsu?

To log in with Kitsu you need to use your Email address as your username.

### I can't find manga in MAL's search results

You can search a manga from your MAL list like this: `my: <manga>`.
[#65](https://github.com/inorichi/tachiyomi/issues/65)

## Local Manga

### How do I import my Manga into Tachiyomi?

We recommend you to read [this](https://github.com/inorichi/tachiyomi/wiki/Local-manga) guide on how to do so.

### I can't find the Tachiyomi folder

If you don't see a Tachiyomi folder on your device, try downloading a chapter of any Manga or creating a backup so that the folder can be created.

## Application Updates

### How do I enable automatic updates?

The Tachiyomi app now has in-app updating for both stable and dev versions.
If you go to `Settings > About > Version` to check for updates, you can force an update there or wait for the app to notify you.

## User Interface

### How do I change the app language?

Tachiyomi is (as of writing) available in 35 different languages.

By default, the app language follows the language setting of your device.

You can also set your own preferred language for Tachiyomi. Simply from side panel go to the `Settings > General > Language`.

::: tip NOTE
Only the UI has been localized, content will still be using the language of the source selected (i.e. English for KissManga source, Some sources have multiple Language too).
:::

If you want to help translate Tachiyomi, read our [guide](../guides/translation.md) on it.

## Miscellaneous

### iOS Version

Is there an iOS version? No. Is there going to be? There are no plans for
one since iOS and Android apps are nothing alike.

### I lost everything, what now?

Tachiyomi is still in beta. Some design changes or unexpected errors may
lead to data loss. While I try for them not to happen, sometimes it is
unavoidable. To avoid this in the future, you can use the automatic
backup feature in Settings. If your file manager supports it, you may
even backup to Google Drive.
