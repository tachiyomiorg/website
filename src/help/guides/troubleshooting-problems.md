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

## Solving a CAPTCHA

**Please note that WebView is not the same as using your browser.**

You must solve the **CAPTCHA** in **WebView**.

::: guide How to open WebView
1. Go to <Navigation item="browse"/> in the bottom navbar.
1. Press the source you'd like to access.
1. Press the <Navigation item="webview"/> icon.
	<figure class="centered">
		<img :src="$withBase('/help/guides/troubleshooting-problems/assets/WebView-Open.jpg')">
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
