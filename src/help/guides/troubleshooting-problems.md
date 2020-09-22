---
title: Troubleshooting problems
description: Encountered an issue with a source? Here are resources to help you troubleshoot it.
lang: en-US
---

# Troubleshooting problems

**This page is for when you encounter a problem with a source extension.**

::: danger It can be accompanied by these error messages:
+ HTTP Error 5xx
- HTTP Error 4xx
+ java.security.cert.CertPathValidatorException
- Page List is empty
+ Unable to resolve host
- unexpected url
+ Attempt to invoke virtual method 'java.lang.String org.jsoup.nodes.Node.attr(java.lang.String)' on a null object reference
- Failed to bypass Cloudflare
:::

## Diagnosis
* Verify your extensions are up to date. (<Navigation item="browse"/> → Extensions, make sure no extensions have an update button)
* Check if **Tachiyomi** has an update (<Navigation item="more"/> → <Navigation item="about"/> then click **Check for updates**)
* Try opening the manga in <Navigation item="webview"/>. If there is [CAPTCHA](#solving-a-captcha), solve it and see if it helped.
* Change your internet connection (*switch to Wi-Fi, mobile data or a VPN, use a "What's my IP" site to confirm your IP has changed*), then try again.
* Ask other users to try the action that gives you the error.
* Check if the source is either down, or is having issues in a browser.
* Press the retry button in the middle of your manga page if one exists.
* Try the following at <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/>
  * **Clear Cache**
  * **Clear Cookies**
  * **Clear Database**
* If your downloads are getting stuck, try deleting the queue and trying again.
* Force close **Tachiyomi** and reopen it.

::: tip Bonus step
Try the latest Preview version, your issue may have been fixed.
:::

If any of these help, go to [it only happens to me](#it-only-happens-to-me).
If it's not just you, go to [everyone is having this problem](#everyone-is-having-this-problem).

If none of these help, try asking in our [Discord Server](https://discord.gg/tachiyomi)

### It only happens to me
You may be getting a **CAPTCHA**, may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like **Tachiyomi**. If that is the case, there is probably nothing that can be done about that. Some of them (like **CAPTCHA**) have to be manually solved, some are temporary (IP bans).

**Workarounds that can lower chance of it happening again:**
* Don't use downloads with the source.
* Have less manga in library from the source.

::: tip
All of the above are very imprecise and fuzzy rules, because each site has their own, non-public limits and triggers.
:::

### Everyone is having this problem
If the site is reachable and fully functional then there may be an issue with the extension or app.
1. Have a look at open issues [for the app](https://github.com/inorichi/tachiyomi/issues) and/or [extensions](https://github.com/inorichi/tachiyomi-extensions/issues).
1. It may have been fixed already, but not released yet, so look at closed issues ([app](https://github.com/inorichi/tachiyomi/issues?q=is%3Aissue+is%3Aclosed) / [extensions](https://github.com/inorichi/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed)) issues as well.
1. If you can't find the issue there, open a new one.

If the site is not reachable or having issues then all you can do is wait for the site to become functional again.

### What are some common errors?

:::: el-collapse
::: el-collapse-item title="Java.lang Exception: Challenge not found"
Often this will be resolved by force-quitting and reopening **Tachiyomi**.
:::
::: el-collapse-item title="Loader not implemented"
It means that the respective extension for the manga is not installed. To fix, install the extension for the manga. If it still doesn't work, uninstall then reinstall the extension again.
:::
::: el-collapse-item title="Value Manga is licensed at data of type java.lang.String cannot be converted to JSONObject"
This means that the manga has been licensed and can no longer be read on that source. Try a different source to read the manga.
:::
::: el-collapse-item title="HTTP error 403"
The source you selected may have **Cloudflare** protection on and is enforcing [CAPTCHA](#solving-a-captcha). Please complete the [CAPTCHA](#solving-a-captcha) to fix it.
:::
::: el-collapse-item title="App not installed"
You may encounter this if you're installing an official build over an existing **F-Droid** build due to differing signatures.
Backup your data, uninstall the app, then restore the data in the fresh install.
:::
::: el-collapse-item title="Attempt to invoke virtual method 'com.hippo.unifile..."
This error can be caused by a variety of reasons, all to do with storage.

- Most commonly it is caused by full storage, check to see if your device or SD Card is full.
- Check if **Tachiyomi** has access to the SD card. You can enable it in the android settings for app permissions.
- If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to. This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.
- The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.
:::
::: el-collapse-item title="Cannot Access SD Card"
This error is typically caused by having a file or folder name that is too long. Android's file manager does not support filenames longer than 255 characters. If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it. Otherwise, delete the Tachiyomi downloads folder off of the SD Card.
:::
::::


## Solving a CAPTCHA

**Please note that WebView is not the same as using your browser.**

You must solve the **CAPTCHA** in **WebView**.

::: guide How to open WebView
1. Go to <Navigation item="browse"/> in the bottom navbar.
1. Press the source you'd like to access.
1. Press the <Navigation item="webview"/> icon.
	<figure class="centered">
		<img class="zoomable" :src="$withBase('/help/guides/troubleshooting-problems/assets/WebView-Open.jpg')">
	</figure>
1. Complete **CAPTCHA** if one is present.
1. Once done, press the *Back Arrow* at the top left to return.
:::

### WebView not working?
If **WebView** doesn't work for you, please update the [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.WebView) app.

When you've updated go to [Developer Options](https://developer.android.com/studio/debug/dev-options) in your phone's settings and set **WebView Implementation** to `Android System WebView`.

::: guide Still not working?
If `Android System WebView` doesn't work, try setting `Google Chrome` as the default **WebView Implementation** instead.
:::


