---
title: Source problems
description: Encountered an issue with a source? Here are resources to help you troubleshoot it.
lang: en-US
---

# Source problems

**This page is for when you encounter a problem with a source (built-in or extension).**

::: danger It can be accompanied by these error messages:
+ HTTP Error 5xx
- HTTP Error 4xx
+ java.security.cert.CertPathValidatorException
- Page List is empty
+ Unable to resolve host
- unexpected url
+ Attempt to invoke virtual method 'java.lang.String org.jsoup.nodes.Node.attr(java.lang.String)' on a null object reference
:::

## Diagnosis
1. Try opening the manga in WebView. If there is CAPTCHA, solve it and see if it helped.
1. Change your internet connection (switch to WiFi, mobile data or a VPN, use a "What's my IP" site to confirm your ip has changed), then try again.
1. Ask other users to try the action that gives you the error.

::: tip Bonus step
Try the latest Preview version, your issue may have been fixed. Also check versions of your extensions.
:::

If any of these help go to [it only happens to me](#it-only-happens-to-me).
If it's not just you, go to [everyone is having this problem](#everyone-is-having-this-problem).

### It only happens to me
You may be getting a CAPTCHA, may have been IP-banned, or some other counter-measure that website owners deploy against programs like Tachiyomi. If that is the case, there is probably nothing that can be done about that. Some of them (like CAPTCHA) have to be manually solved, some are temporary (IP bans).

**Workarounds that can lower chance of it happening again:**
* Don't use downloads with the source.
* Have less manga in library from the source.

::: tip
All of the above are very imprecise and fuzzy rules, because each site has their own, non-public limits and triggers.
:::

### Everyone is having this problem
In this case it is a problem with the site.
1. Have a look at open issues [for the app](https://github.com/inorichi/tachiyomi/issues) and/or [extensions](https://github.com/inorichi/tachiyomi-extensions/issues).
1. It may have been fixed already, but not released yet, so look at closed issues ([app](https://github.com/inorichi/tachiyomi/issues?q=is%3Aissue+is%3Aclosed) / [extensions](https://github.com/inorichi/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed)) issues as well.
1. If you can't find the issue there, open a new one.

## Solving a CAPTCHA <Badge text="0.9.0 +" vertical="middle"/>

**Please note that WebView is not the same as using your browser.**

You can open WebView in two of the following ways:

* If you already have a manga in **Library**
  * Open the manga in **Library**, then click on the <Navigation item="webview"/> on the **INFO** tab. 
* If you don't have manga in **Library**
  * Go to <Navigation item="browse"/> and click on **BROWSE** beside the source. Then open a manga and click on <Navigation item="webview"/>.

Once in WebView, you will see a webpage and a bar on top with an arrow at the left side, pointing to the left edge of your screen.
If there is no CAPTCHA on the webpage, initiate one by tapping a manga title, if possible. Once a CAPTCHA is shown, solve it. After that, use the aforementioned back arrow on the bar at the top of your screen to go back to your manga. Please do not use the back button on your phone as it does not work as expected.

::: tip
If WebView doesn't work for you, please update the **Android System WebView** app through [Play Store](https://play.google.com/store/apps/details?id=com.google.android.WebView), then go to [Developer Options](https://developer.android.com/studio/debug/dev-options) in your phone's settings and set **WebView Implementation** to Android System WebView. If Android System WebView doesn't work, set **Google Chrome** as default in WebView Implementation.
:::

<figure class="centered">
	<img :src="$withBase('/assets/media/openinwebview.jpg')">
</figure>
