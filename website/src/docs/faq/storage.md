---
title: Storage
titleTemplate: Frequently Asked Questions
description: Understanding Storage Permissions.
---

# Storage location

Tachiyomi manages several things within a selected storage location, including automatic backups, chapter downloads, and the Local source.

The following illustrates the folder structure:

```txt
<Your selected storage location>/
├── autobackup
│   ├── eu.kanade.tachiyomi_yyyy-mm-dd_hh-mm.tachibk
│   └── ...
├── downloads
│   └── Source name (LANG)
│       ├── Title
│       │   ├── Chapter01.cbz
│       │   └── ...
│       └── Other title
│           ├── Chapter01.cbz
│           └── ...
└── local
    ├── Title
    │   ├── Chapter01.cbz
    │   └── ...
    └── Other title
        └── Chapter01.cbz
```

Backup file name prefixes are unique for the app to avoid potential collisions between forks.

## Migrating from v0.14.x or ealier

If you were using the default locations before, then simply select the existing `Tachiyomi` folder.

::: warning
If you have an existing `downloads` folder, you should be selecting its parent folder (if applicable; avoid choosing the root of your storage) or you should move your downloads to a new location.

Note the illustrated example above where `downloads` is a folder _within_ the location being set, and the individual source folders are _within_ that `downloads` folder.
:::

If you need to change your storage location or have moved files around from outside the app, you may need to force the app to recheck for the files by going to <nav to="advanced"> then **Invalidate downloads index**.

# Scoped Storage

Since Android 11, most apps are enforced to use [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage) for better security for users so that apps cannot read everything on the device.

**Scoped Storage**'s introduction affects various storage-related functions in **Tachiyomi**.
These functions may become slower due to **Scoped Storage**'s inherent latency, as discussed in detail [here](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/).

This can impact tasks like deleting chapters, library loading times, accessing local files like downloads or the local source, and more. As always, using internal storage is recommended over SD cards if latency is of concern.
