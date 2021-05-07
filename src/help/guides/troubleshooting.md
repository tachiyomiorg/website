---
title: Troubleshooting
description: Encountered an issue with a source or the app? Here are resources to help you troubleshoot it.
lang: en-US
---

# Troubleshooting

This page is for when you encounter a problem with a source or the app.

### What are some common errors?

::: c-warning
If error-specific instructions didn't help or your error isn't on the list, go through [Diagnosis](#diagnosis).
:::

:::: el-collapse
::: el-collapse-item title="Java.lang Exception: Challenge not found"
Often **Java.lang Exception: Challenge not found** will be resolved by force-quitting and reopening **Tachiyomi**.
:::
::: el-collapse-item title="Java.lang Exception: Failed to bypass Cloudflare"
**Java.lang Exception: Failed to bypass Cloudflare** means that the source you selected has [Cloudflare](#solving-the-cloudflare-issue) protection on, refer to the [Cloudflare](#solving-the-cloudflare-issue) guide to fix it.
:::
::: el-collapse-item title="Loader not implemented"
**Loader not implemented** means that the respective extension for the manga is not installed. To fix, install the extension for the manga. If it still doesn't work, uninstall then reinstall the extension again.
:::
::: el-collapse-item title="Value Manga is licensed at data of type java.lang.String cannot be converted to JSONObject"
**Value Manga is licensed...** means that the manga has been licensed and can no longer be read on that source. Try a different source to read the manga.
:::
::: el-collapse-item title="HTTP error 403"
Possible reasons for **HTTP error 403**:

- The source you selected has [Cloudflare](#solving-the-cloudflare-issue) protection on, refer to the [Cloudflare](#solving-the-cloudflare-issue) guide to fix it.
- The source is down, removed the manga or banned your IP. Open <Navigation item="webview"/> to check if this is the case.
:::
::: el-collapse-item title="HTTP error 404"
**HTTP error 404** probably means that the source is down or removed the manga. Open <Navigation item="webview"/> to check if this is the case.
:::
::: el-collapse-item title="HTTP error 429 (Too Many Requests)"
**HTTP error 429** or **Too Many Requests** means that the source banned your IP address (in most cases it's temporary). We suggest to [migrate](./source-migration.md) part of your manga to another source to reduce number of requests to the source.
:::
::: el-collapse-item title="HTTP error 5xx"
**HTTP error 5xx** like **500, 502** and others are server errors and the source you are trying to access has problems on their side. Open the source in <Navigation item="webview"/> and check if the site is down.
:::
::: el-collapse-item title="Unable to resolve host / Connection failed"
Errors like **Unable to resolve host** or **Connection failed** mean that something prevents your connection with the site. Possible reasons: your internet connection is bad, the app doesn't have access to the internet, your ISP have blocked the site, the site is down. Try using different internet connection (switch to Wi-Fi, mobile data or a VPN). Try to enable <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> → **DNS over HTTPS**.
:::
::: el-collapse-item title="java.security.cert.CertPathValidatorException / Chain validation failed"
**java.security.cert.CertPathValidatorException** or **Chain validation failed** means there is a problem with validating source's sertificate.

- Check if the site's certificate have expired. Use an online service for checking SSL certificates. If the certificate have expired, then wait while the site owner will renew it.
- Ensure that you have the right date and time set on your phone.
- Try <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> → **Clear cache** and **Clear cookies**.
- Try using different internet connection (switch to Wi-Fi, mobile data or a VPN).
- Try to restart the device.
:::
::: el-collapse-item title="App not installed"
You may encounter **App not installed** if you're installing an official build over an existing **F-Droid** build due to differing signatures.
Backup your data, uninstall the app, then restore the data in the fresh install.
:::
::: el-collapse-item title="Attempt to invoke virtual method 'com.hippo.unifile..."
**Attempt to invoke virtual method 'com.hippo.unifile...** error can be caused by a variety of reasons, all to do with storage.

- Most commonly it is caused by full storage, check to see if your device or SD Card is full.
- Check if **Tachiyomi** has access to the SD card. You can enable it in the android settings for app permissions.
- If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to. This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.
- The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.
:::
::: el-collapse-item title="Cannot Access SD Card"
**Cannot Access SD Card** error is typically caused by having a file or folder name that is too long. Android's file manager does not support filenames longer than 255 characters. If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it. Otherwise, delete the Tachiyomi downloads folder off of the SD Card.
:::
::: el-collapse-item title="Storage issues with Android 11"
After the introduction of [Scoped Storage](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/) in **Android 11**, your library could load slowly and/or the app is unable to delete chapters automatically.

One way to fix this is by executing an [ADB](https://www.xda-developers.com/quickly-install-adb/) command on a computer to opt-out the app from the new storage changes.


**How to run ADB**

ADB is a small tool bundled in the Android SDK as part of the “Platform Tools”.

1. [Download the SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools.html) for Windows, Mac, or Linux
2. Extract the ZIP file somewhere easily accessible (like `C:\platform-tools`)

You will need to enable "USB Debugging/Android Debugging" on your phone next:

* If you use a custom ROM and/or aren't able to enable Developer options try googling how to enable Developer options on your specific device

1. Open **Settings**
2. (Only on Android 8.X) Scroll down/Select to **System**
3. Select **About phone**
4. Quickly tap **Build number** 7 times
5. You will see a message appear that says "**You are now a developer**"
6. Now go back and you’ll see **Developer options** listed
7. Scroll until you find **USB debugging/Android debugging**
8. Toggle the switch to enable it

With platform-tools downloaded and USB debugging enabled, you can now follow the next steps:

1. Connect your Android device to the computer with an USB cable
2. Make sure to allow "USB debugging/Android debugging" when a pop-up appears
3. Open the **platform-tools** folder on your computer
4. Shift+Right click and select **Open command prompt here** or **Open PowerShell window here**
5. Type `.\adb devices` and hit Enter
6. You should see an entry with your device(s)
7. Now you can enter the following ADB command!


**ADB command**

`.\adb shell cmd appops set eu.kanade.tachiyomi android:legacy_storage allow`


If you're using Preview, or a Fork, replace `eu.kanade.tachiyomi` with the other app's ID.
  * **Tachiyomi Preview** → `eu.kanade.tachiyomi.debug`
  * **TachiyomiAZ** → `eu.kanade.tachiyomi.az`
  * **TachiyomiJ2K** → `eu.kanade.tachiyomi.j2k`
  * **TachiyomiSY** → `eu.kanade.tachiyomi.sy`
  * **Neko** → `tachiyomi.mangadex`

***Please note that the command will not show an output if successful.***

:::
::::

## Diagnosis
* Verify your extensions are up to date (<Navigation item="browse"/> → **Extensions**, make sure no extensions have an **Update** button).
* Check if **Tachiyomi** has an update (<Navigation item="more"/> → <Navigation item="about"/> then click **Check for updates**).
* Verify that [WebView](#update-webview) is updated.
* Try opening the manga in <Navigation item="webview"/>. If there is a [Cloudflare](#solving-the-cloudflare-issue) protection, wait for it to load. If there is a [CAPTCHA](#solving-the-cloudflare-issue), solve it and see if it helped.
* Change your internet connection (*switch to Wi-Fi, mobile data or a VPN, use a "What's my IP" site to confirm your IP has changed*), then try again.
* Ask other users to try the action that gives you the error.
* Check if the source is either down, or is having issues in a browser.
* Press the retry button in the middle of your manga page if one exists.
* Try the following at <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/>
  * **Clear Cache**
  * **Clear Cookies**
  * **Clear Database**
  * **DNS over HTTPS**
* If your downloads are getting stuck, try deleting the queue and trying again.
* Force close **Tachiyomi** and reopen it.

::: c-tip
Your issue may have been fixed in the Preview version already, just wait for a new Stable release.
:::

If any of these help, go to [it only happens to me](#it-only-happens-to-me).
If it's not just you, go to [everyone is having this problem](#everyone-is-having-this-problem).

If none of these help, try asking in our [Discord Server](https://discord.gg/tachiyomi). State app version, source, manga and chapter with the problem.

### It only happens to me
You may be getting a [Cloudflare](#solving-the-cloudflare-issue) protection, may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like **Tachiyomi**. If that is the case, there is probably nothing that can be done about that. Some of them (like [Cloudflare](#solving-the-cloudflare-issue)) have to be manually solved, some are temporary (IP bans).

**Workarounds that can lower chance of it happening again:**
* Don't use downloads with the source.
* Have less manga in library from the source.

::: c-warning
All of the above are very imprecise and fuzzy rules, because each site has their own, non-public limits and triggers.
:::

### Everyone is having this problem
If the site is reachable and fully functional then there may be an issue with the extension or app.
1. Have a look at open issues [for the app](https://github.com/tachiyomiorg/tachiyomi/issues) and/or [extensions](https://github.com/tachiyomiorg/tachiyomi-extensions/issues).
1. It may have been fixed already, but not released yet, so look at closed issues ([app](https://github.com/tachiyomiorg/tachiyomi/issues?q=is%3Aissue+is%3Aclosed) / [extensions](https://github.com/tachiyomiorg/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed)) issues as well.
1. If you can't find the issue there, open a new one.

If the site is not reachable or having issues then all you can do is wait for the site to become functional again.

## Solving the Cloudflare issue

**Please note that WebView is not the same as using your browser.**

You must solve the **Cloudflare** issue in **WebView**.

::: guide How to open WebView
1. Go to <Navigation item="browse"/> in the bottom navbar.
1. Press the source you'd like to access.
1. Press the <Navigation item="webview"/> icon.
	<figure class="centered">
		<img class="zoomable" :src="$withBase('/assets/guides_webview-open.jpg')">
	</figure>
1. Complete **CAPTCHA** if one is present.
1. Once done, press the *Back Arrow* at the top left to return.
:::

## Update WebView

To update **WebView**, you need to find what **WebView implementation** is used on your device. In general, default implementation depends on the Android version as follows:
* Android 10.0 and higher - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).
* Android from 7.0 to 9.0 - [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
* Android 6.0.1 and lower - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).

::: c-tip
Users of Android 7.0 and higher can also see and change **WebView implementation** in [Developer Options](https://developer.android.com/studio/debug/dev-options).
:::

::: c-warning
Non-standard implementations like Firefox can lead to Tachiyomi not working correctly or in the worst-case crash. We recommend to set **WebView implementation** to [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) or [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
:::

## Unable to install the app or extensions

Try installing [Split APK Installer](https://play.google.com/store/apps/details?id=com.aefyr.sai) from the Google Play Store, then use it to try and install the affected APK. Split APK Installer will either tell you why the APK cannot be installed, or it will install the APK for you.

## Getting Logcats and Crash Logs

To dump crash logs following an app crash, go to (<Navigation item="more"/> → <Navigation item="settings_advanced"/> → **Dump Crash Logs**)

::: guide-empty
<figure class="centered">
	<img class="zoomable" :src="$withBase('/assets/guides_dump-crashlogs.png')">
</figure>
:::

To get device logs if the app is not behaving as expected, record the device logs using a [Logcat Reader](https://play.google.com/store/apps/details?id=com.dp.logcatapp).