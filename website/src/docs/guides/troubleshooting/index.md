---
title: Troubleshooting
description: Facing source or app issues? Here's how to troubleshoot.
---

# Troubleshooting

Facing source or app issues?
Here's how to troubleshoot.

## WebView

### Accessing Websites via WebView

::: tabs
== Using Browse
1. Open **Browse** from the bottom navbar.
1. Tap the desired source.
1. Tap the **WebView** icon in the top toolbar.
1. Complete a **CAPTCHA** if one is shown.
1. Close by tapping `X` at the top-left.
== Using Series
1. Open a series.
1. Tap the **WebView** icon button.
1. Complete a **CAPTCHA** if one is shown.
1. Close by tapping `X` at the top-left.
:::

Repeat if needed.
Alternatively, try opening the website in your browser using the **Overflow** icon and solve any **CAPTCHA** there.

![Open WebView](/docs/guides/troubleshooting/open-webview.dark.webp =1079x520)

### Clearing cookies and WebView data
::: info Clearing cookies and WebView data
1. Navigate to **More -> Settings -> Advanced**.
1. Tap **Clear cookies**.
1. Tap **Clear WebView data**.
:::

### WebView Update
To update WebView, you need to find what WebView implementation is used on your device.

In general, default implementation depends on the Android version as follows:

::: tabs
== Android 10 and above
[Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
== Android 7-9
[Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome)
== Android 6 and below
[Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
:::

::: tip **Android 7** and above
Newer Android users can check/change WebView in [Developer Options](https://developer.android.com/studio/debug/dev-options).
:::

::: warning Caution with Non-Standard WebView
Using non-standard WebView (like Firefox) might cause **Tachiyomi** malfunction or crashes.

It's best to choose [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) or [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
:::

## Cloudflare

**Cloudflare**, an anti-bot mechanism, is used by some sources.
Some sources intentionally have higher **Cloudflare** protection to deter apps like **Tachiyomi**.

### Dealing with Cloudflare Looping
Certain sources may employ more advanced **Cloudflare** protection, leading to WebView continuously loading when bypassing using the above solution.
If this occurs, try [Accessing the Website via WebView](#accessing-websites-via-webview).

### Changing your user agent
A user agent string shares requester information with websites, potentially affecting **Cloudflare**'s bot detection.
While some sources have specific user agent strings, most rely on the app's default.

::: info Changing your user agent
1. Navigate to **More -> Settings -> Advanced**.
1. Modify **Default user agent string** to another value.
	> [Here's a reference](https://www.whatismybrowser.com/guides/the-latest-user-agent/).
1. Restart the app and retry source access.
:::

::: tip Did these methods not work?
Wait for the source to lower its protection or switch to different sources.
:::

## General

### Obtaining Logcats
To diagnose abnormal app behavior, record device logs using a [Logcat Reader](https://play.google.com/store/apps/details?id=com.dp.logcatapp).

### Obtaining Crash Logs
For crash investigations, navigate to **More -> Settings -> Advanced** and tap **Dump crash logs**.

![Dump crashlogs](/docs/guides/troubleshooting/dump-crash-logs.dark.webp =512x386)

### App or Extension Installation Issues
Problematic with app or extension installation?
Follow these steps:

1. Install [Split APK Installer](https://play.google.com/store/apps/details?id=com.aefyr.sai) from Google Play Store.
1. Utilize it to install the `.apk`.

**Split APK Installer** clarifies issues or successfully installs.
Common errors include:

::: details `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package eu.kanade.tachiyomi signatures do not match the previously installed version; ignoring!`
Seeing this error while installing the `.apk` over an existing **F-Droid** build indicates a mismatch in signatures.
Data backup, uninstall, and fresh installation are required.
:::

::: details `DISPLAY_NAME column is null`
Seeing this error points to a corrupted `.apk`.
Redownload repeatedly to resolve.
:::

::: details `INSTALL_FAILED_NO_MATCHING_ABIS`
Seeing this error suggests the `.apk` is incompatible with your CPU architecture.
Obtain the appropriate version or a universal `.apk`.
:::
