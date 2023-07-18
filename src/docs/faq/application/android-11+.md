---
title: Android 11+
description: WIP
---

# Android 11+

## What changed in Android 11?

In Android 11, Google began forcing users to use [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage), which was introduced in Android 5.0 Lollipop, but Google only began forcing developers to use it on Android 11.
Some OEMs seem to better implement Scoped Storage than others, with some users not running into any issues while users using other phone brands have multitudes of problems.

## What does it mean for Tachiyomi?

The introduction of Scoped Storage means that many storage-related functions that Tachiyomi uses may be much slower due to the inherent slowness of Scoped Storage, as outlined [here](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/).
These include deleting chapters, library load times, accessing the folders outside the data folders to download to or read from, and more.

## Is there any way to improve performance?

You can try the command below if you know how to use ADB, a guide on installing it is also outlined on the site here.

```bash
adb shell cmd appops set eu.kanade.tachiyomi android:legacy_storage allow
```

This command enables general storage access for the app, allowing Tachiyomi to use the old general storage access interface.

If you are using a Tachiyomi Preview or a fork, replace `eu.kanade.tachiyomi` with the corresponding fork's package name.
