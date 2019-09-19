---
title: Source problems
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
1. Try opening the manga in webview. If there is CAPTCHA, solve it and see if it helped.
1. Change your internet connection (switch to WiFi, mobile data or a VPN, use a "What's my IP" site to confirm your ip has changed), then try again.
1. Ask other users to try the action that gives you the error.

::: tip Bonus step
Try the latest dev version, your issue may have been fixed. Also check versions of your extensions.
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
1. Have a look at [open](https://github.com/inorichi/tachiyomi/issues) issues.
1. It may have been fixed already, but not released yet, so look at [closed](https://github.com/inorichi/tachiyomi/issues?q=is%3Aissue+is%3Aclosed) issues as well.
1. If you can't find the issue there, you can open a new one.
