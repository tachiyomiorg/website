---
title: Troubleshooting
description: This page is for when you encounter a problem with a source or the app.
---

# Troubleshooting

This page is for when you encounter a problem with a source or the app.

## WebView

### Loading the website in WebView
Try to load the website in **WebView**.
> Note that WebView is not the same as using your browser.

::: tip How to open WebView
1. Go to **Browse** in the bottom navbar.
1. Press the source you would like to access.
1. Press the **WebView** icon in the top toolbar.
1. Complete a **CAPTCHA** if one is shown.
1. Once done, press the X at the top left to return.
:::

You may need to try this multiple times.
You can also try pressing the **Overflow** icon, opening the website in your regular browser, then checking for a **CAPTCHA** there.

Some sources may have more advanced **Cloudflare** protection.
If you are facing issues, try the following options.

### Clearing cookies and WebView data
::: tip Guide
1. Go to **More -> Settings -> Advanced**.
1. Press **Clear cookies**.
1. Press **Clear WebView data**.
:::

### Update WebView
To update WebView, you need to find what WebView implementation is used on your device.
In general, default implementation depends on the Android version as follows:

- Android 10.0 and up - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).
- Android from 7.0 to 9.0 - [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
- Android 6.0.1 and below - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).

::: tip
Users on Android 7.0 and up can also see and change WebView implementation in [Developer Options](https://developer.android.com/studio/debug/dev-options).
:::

::: warning
Non-standard implementations like Firefox can lead to Tachiyomi not working correctly or, in the worst-case, crash.
It is recommended to set your WebView implementation to [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) or [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
:::

## Cloudflare

### Solving Cloudflare issues
Cloudflare is an anti-bot mechanism.
Some sources intentionally have a higher Cloudflare protection level to block apps like Tachiyomi.

You can try the following suggestions to help resolve Cloudflare challenges.

> If none of these help, wait until they lower their protection or migrate to other sources.

## Misc

### Changing your user agent
A user agent string helps websites identify information about the requester.
This information may impact Cloudflare's bot detection.
While some sources have user agent strings set, most rely on the default value set in the app.

::: tip Guide
1. Go to **More -> Settings -> Advanced**.
1. Change the **Default user agent string** setting to a different one.
	> [This website](https://www.whatismybrowser.com/guides/the-latest-user-agent/) is a decent reference.
1. Restart the app and try accessing the source again.
:::

### Unable to install the app or extensions
Try installing [Split APK Installer](https://play.google.com/store/apps/details?id=com.aefyr.sai) from the Google Play Store, then use it to try and install the affected APK.
**Split APK Installer** will tell you why the APK is uninstallable, or it will install the APK for you.
Some common errors are listed below.

::: details INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package eu.kanade.tachiyomi signatures do not match the previously installed version; ignoring!
If **Split APK Installer** outputs the above error when attempting to install the APK, you are likely installing a official build over an existing **F-Droid** build.
The **F-Droid** build has a different signature than the official build, so you must backup your data, uninstall the app, then restore the data in a fresh install.
:::

::: details DISPLAY_NAME column is null
If **Split APK Installer** outputs `DISPLAY_NAME column is null`, the APK you have downloaded is corrupted.
Some users experience this error multiple times after redownloading the APK, so keep redownloading the APK until it installs correctly.
:::

::: details INSTALL_FAILED_NO_MATCHING_ABIS
If **Split APK Installer** outputs `INSTALL_FAILED_NO_MATCHING_ABIS`, the APK you have downloaded is the wrong one for your CPU architecture.
Download the correct one or download the universal APK if you are not aware which CPU architecture your device uses.
:::

### Getting Logcats and Crash Logs
To dump crash logs following an app crash, go to **More -> Settings -> Advanced -> Dump crash logs**.

![Dump crashlogs](/docs/guides/troubleshooting/dump-crash-logs.dark.webp =512x386)

To get device logs if the app is not behaving as expected, record device logs using a [Logcat Reader](https://play.google.com/store/apps/details?id=com.dp.logcatapp).
