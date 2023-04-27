---
title: Troubleshooting
description: Encountered an issue with a source or the app? Here are resources to help you troubleshoot it.
lang: en-US
---

# Troubleshooting

This page is for when you encounter a problem with a source or the app.

### What are some common issues?

:::: el-collapse
::: el-collapse-item title="Failed to bypass Cloudflare"
**Failed to bypass Cloudflare** means that the source you selected has [Cloudflare](#solving-cloudflare-issues) protection on, refer to the [Cloudflare](#solving-cloudflare-issues) guide to fix it. If the solutions provided do not fix the issue, the source has likely raised the Cloudflare protection level high enough that Tachiyomi is not able to access the site.
:::
::: el-collapse-item title="HTTP error 403"
Possible reasons for **HTTP error 403**:

- The source you selected has [Cloudflare](#solving-cloudflare-issues) protection on, refer to the [Cloudflare](#solving-cloudflare-issues) guide to fix it.
- The source is down, removed the manga, or banned your IP. Open <NavigationText item="webview"/> to check if this is the case.
:::
::: el-collapse-item title="HTTP error 404"
**HTTP error 404** probably means that the source is down or removed the manga. Open <NavigationText item="webview"/> to check if this is the case. [Migrate](/source-migration/#migrating-on-stable-preview) to a different source for this manga if you'd like.
:::
::: el-collapse-item title="HTTP error 429 (Too Many Requests)"
**HTTP error 429** or **Too Many Requests** means that the source banned your IP address (in most cases, it's temporary) because you could be downloading or reading too fast. We suggest [reporting](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose) the issue so that a rate limit can be added to prevent IP bans in the future.
:::
::: el-collapse-item title="HTTP error 5xx"
**HTTP error 5xx** like **500, 502** and others are server-side errors, and the source you are trying to access has problems on their side. Open the source in <NavigationText item="webview"/> and check if the site is down.
:::
::: el-collapse-item title="HTTP error 1006"
**HTTP error 1006** means that the source has banned your IP address (in most cases, it's temporary).
:::
::: el-collapse-item title="HTTP error 1020"
**HTTP error 1020** means that you have violated a firewall rule the site owner has put up. This usually means that the site owner has raised the Cloudflare protection level or that the site owner is blocking IPs outside their country.
:::
::: el-collapse-item title="Unable to resolve host / Connection failed / Failed to connect to / timeout / connection reset"
Errors like **Unable to resolve host**, **Connection failed**, **Failed to connect to**, **timeout**, **connection reset** mean that something is preventing you from connecting to the source.

Possible reasons include:
- Your internet connection is not good enough to connect.
- The app does not have access to the internet.
- Your ISP has blocked the site.
- The site is down.

Try the following solutions to fix this issue:
- Enable <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/> → **DNS over HTTPS**.
- Use a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).
- Reboot your router.
:::
::: el-collapse-item title="java.security.cert.CertPathValidatorException / Chain validation failed"
**java.security.cert.CertPathValidatorException** or **Chain validation failed** means there is a problem with validating source's sertificate.

- Check if the site's certificate has expired. Use an online service for checking SSL certificates. If the certificate has expired, wait while the site owner to renew it.
- Ensure that you have the right date and time set on your device.
- Try <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/> → **Clear cache** and **Clear cookies**.
- Try using a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).
- Try restarting the device.
:::
::: el-collapse-item title="App not installed"
Refer to [this](#unable-to-install-the-app-or-extensions) section.
:::
::: el-collapse-item title="Attempt to invoke virtual method 'com.hippo.unifile..."
The **Attempt to invoke virtual method' com.hippo.unifile...** error can be caused by various reasons, but they all have to do with storage.

- Most commonly, it is caused by full storage. Check to see if your device or SD card is full.
- Check if **Tachiyomi** has access to the SD card. You can enable it in Android settings for app permissions.
- If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to. This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.
- The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.
:::
::: el-collapse-item title="Cannot Access SD Card"
The **Cannot Access SD Card** error can sometimes be fixed by changing the location of your downloads to somewhere else and back to the SD card, then restarting the app.

Having a file or folder name that is too long can also cause this issue. Android's file manager does not support filenames longer than 255 characters. If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it. Otherwise, delete the Tachiyomi downloads folder off of the SD card.
:::
::: el-collapse-item title="Storage issues with Android 11+"
See [this](/help/faq/#android-11) section of the FAQ to learn how Scoped Storage affects Tachiyomi in Android 11+ and how to fix it.
:::
::: el-collapse-item title="Slow loading"
<ElAlert type="info" title="Disclaimer" description="Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality." show-icon :closable="false"></ElAlert>
If any sources are slow, it is likely due to the site being slow, your internet being slow, or a ratelimit applied to the source to reduce load or IP bans.
:::
::: el-collapse-item title="Reading is laggy"
This is usually due to the images in the chapters being too long or large for the reader to handle. If you turn have **32-bit color** on, try turning it off under <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_reader"/>. This helps sometimes to free up some RAM being used. To eliminate this issue, find a different source that cuts the chapter into more pieces or downscales the images.
:::
::::

::: c-warning
If error-specific instructions didn't help or your error isn't on the list, go through [Diagnosis](#diagnosis).
:::

## Diagnosis
* Verify your extensions are up to date (<NavigationText item="browse"/> → **Extensions**, make sure no extensions have an **Update** button).
* Check if **Tachiyomi** has an update (<NavigationText item="more"/> → <NavigationText item="about"/> then tap **Check for updates**).
* Manually refresh the manga you are having issues with by dragging down.
* Check other manga from the source.
* Verify that [WebView](#update-webview) is updated.
* Try opening the manga in <NavigationText item="webview"/>. If there is a [Cloudflare](#solving-cloudflare-issues) protection, wait for it to load. If there is a [CAPTCHA](#solving-cloudflare-issues), solve it and see if it helped.
* Change your internet connection (*switch to Wi-Fi, mobile data or a VPN, use a "What's my IP" site to confirm your IP has changed*), then try again.
* Ask other users to try the action that gives you the error.
* Check if the source is either down, or is having issues in a browser.
* Press the retry button in the middle of your manga page if one exists.
* Try the following at <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/>
  * **Clear Cache**
  * **Clear Cookies**
  * **Clear Database**
  * **DNS over HTTPS**
* If your downloads are getting stuck, try deleting the queue and trying again.
* Force close **Tachiyomi** and reopen it.

::: c-tip
An extension update may fix your issue. Wait or check for an extension update if you have not already. There are no ETAs for updates.
:::

If any of these solutions help, go to [it only happens to me](#it-only-happens-to-me).
If it is not just you, go to [everyone is having this problem](#everyone-is-having-this-problem).

If none of these solutions help, try asking in our [Discord Server](https://discord.gg/tachiyomi). Check **#status-updates** first to see if your issue is known. State your app version and the source, manga, and chapter with the problem if it is not listed.

### It only happens to me
You may be getting a [Cloudflare](#solving-the-cloudflare-issue) protection, may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like **Tachiyomi**. If that is the case, there is probably nothing that **Tachiyomi** can do to solve it. Some of them (like [Cloudflare](#solving-cloudflare-issues)) have to be manually solved, and some are temporary (IP bans).

**Workarounds that can the lower chance of an issue happening again:**
* Don't use downloads with the source.
* Have less manga in your library from the source.

::: c-warning
The above are imprecise and fuzzy rules because each site has its non-public limits and triggers.
:::

### Everyone is having this problem
If the site is reachable and fully functional, there may be an issue with the extension or app.
1. Have a look at open issues [for the app](https://github.com/tachiyomiorg/tachiyomi/issues) and/or [extensions](https://github.com/tachiyomiorg/tachiyomi-extensions/issues).
1. It may have been fixed already but not released yet, so look at closed issues ([app](https://github.com/tachiyomiorg/tachiyomi/issues?q=is%3Aissue+is%3Aclosed) / [extensions](https://github.com/tachiyomiorg/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed)) issues as well.
1. If you can't find the issue there, open a new one.

If the site is not reachable or has issues, all you can do is wait for the site to become functional again.

## Solving Cloudflare issues

Cloudflare is an anti-bot mechanism. Some sources intentionally have a higher Cloudflare protection level to block apps like Tachiyomi. You can try the following suggestions to help resolve Cloudflare challenges. If they don't work, migrate to other sources or wait until they lower their protection.

### Loading the website in WebView

Try to load the website in **WebView**. **Note that WebView is not the same as using your browser.**

::: guide How to open WebView
1. Go to <NavigationText item="browse"/> in the bottom navbar.
1. Press the source you would like to access.
1. Press the <NavigationText item="webview"/> icon in the top toolbar.
1. Complete a **CAPTCHA** if one is shown.
1. Once done, press the X at the top left to return.
:::

You may need to try this multiple times. You can also try pressing the <NavigationText item="overflow" /> icon, opening the website in your regular browser, then checking for a CAPTCHA there.

Some sources may have more advanced **Cloudflare** protection. If you are facing issues, try the following options.

### Clearing WebView data

::: guide
1. In the <NavigationText item="webview"/> screen, try "Clear cookies" then "Refresh" from the <NavigationText item="overflow"/> menu.
1.  Go to <NavigationText item="more"/> in the bottom navbar, then <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/>, then select "Clear WebView data".
:::

### Changing your user agent

A user agent string helps websites identify information about the requester. While some sources have user agent strings set, most rely on the default value set in the app.

::: guide
1. Go to <NavigationText item="more"/> in the bottom navbar, then <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/>.
1. Change the **Default user agent string** setting to a different one. [This website](https://www.whatismybrowser.com/guides/the-latest-user-agent/) is a decent reference.
1. Restart the app and try accessing the source again.
:::

## Update WebView

To update **WebView**, you need to find what **WebView implementation** is used on your device. In general, default implementation depends on the Android version as follows:
* Android 10.0 and up - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).
* Android from 7.0 to 9.0 - [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
* Android 6.0.1 and below - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).

::: c-tip
Users on Android 7.0 and up can also see and change **WebView implementation** in [Developer Options](https://developer.android.com/studio/debug/dev-options).
:::

::: c-warning
Non-standard implementations like Firefox can lead to **Tachiyomi** not working correctly or, in the worst-case, crash. We recommend to setting your **WebView implementation** to [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) or [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
:::

## Unable to install the app or extensions

Try installing [Split APK Installer](https://play.google.com/store/apps/details?id=com.aefyr.sai) from the Google Play Store, then use it to try and install the affected APK. Split APK Installer will tell you why the APK is uninstallable, or it will install the APK for you. Some common errors are listed below.

:::: el-collapse
::: el-collapse-item title="INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package eu.kanade.tachiyomi signatures do not match the previously installed version; ignoring!"
If Split APK Installer outputs the above error when attempting to install the APK, you are likely installing a official build over an existing **F-Droid** build. The **F-Droid** build has a different signature than the official build, so you must backup your data, uninstall the app, then restore the data in a fresh install.
:::
::: el-collapse-item title="DISPLAY_NAME column is null"
If Split APK Installer outputs "DISPLAY_NAME column is null", the APK you have downloaded is corrupted. Some users experience this error multiple times after redownloading the APK, so keep redownloading the APK until it installs correctly.
:::
::: el-collapse-item title="INSTALL_FAILED_NO_MATCHING_ABIS"
If Split APK Installer outputs "INSTALL_FAILED_NO_MATCHING_ABIS", the APK you have downloaded is the wrong one for your CPU architecture. Download the correct one or download the universal APK if you are not aware which CPU architecture your device uses.
:::
::::

## Getting Logcats and Crash Logs

To dump crash logs following an app crash, go to <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_advanced"/> → **Dump crash logs**

::: guide-empty
<figure class="centered">
	<img class="zoomable" :src="$withBase('/assets/guides_dump-crashlogs.png')">
</figure>
:::

To get device logs if the app is not behaving as expected, record device logs using a [Logcat Reader](https://play.google.com/store/apps/details?id=com.dp.logcatapp).
