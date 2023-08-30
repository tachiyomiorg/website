---
title: Android 11+
description: Understanding Android 11 Changes
---

# Android 11+
Understanding **Android 11** Changes

## Android 11 Modifications
**Android 11** introduced changes related to [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage), which was initially introduced in **Android 5.0 Lollipop**.

However, the enforcement of **Scoped Storage** was initiated by **Google** with **Android 11**.

Different smartphone manufacturers implement **Scoped Storage** with varying levels of success, resulting in varying user experiences.
Some encounter minimal issues, while others using different phone brands face numerous challenges.

## Implications for Tachiyomi
**Scoped Storage**'s introduction affects various storage-related functions in **Tachiyomi**.
These functions may become slower due to **Scoped Storage**'s inherent latency, as discussed in detail [here](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/).

This impact encompasses tasks like deleting chapters, library loading times, accessing folders outside data directories for downloads and reading, and more.

## Enhancing Performance
For potential performance improvements, consider utilizing the following ADB command if you are comfortable with it.

```bash
adb shell cmd appops set eu.kanade.tachiyomi android:legacy_storage allow
```

This command grants general storage access to the app, enabling **Tachiyomi** to use the conventional storage access interface.

If using **Tachiyomi Preview**, or a fork, replace `eu.kanade.tachiyomi` with the corresponding package name.
