---
title: Diagnosis
description: This page is for when you encounter a problem with a source or the app.
---

# Diagnosis

This page is for when you encounter a problem with a source or the app.

## Main diagnosis

### Update Your Extensions
- Go to **Browse -> Extensions**, ensure no extensions have an **Update** button.

### Update Your App
- Navigate to **More -> About** and tap **Check for updates**.

### Manual Series Refresh
- Drag down to manually refresh problematic series.

### Test Other Series
- Try different series from the same source.

### Update WebView
- Ensure your WebView is up to date.

### Use Public WebView
- Attempt opening series in public WebView. Wait for CAPTCHA or Cloudflare protection if needed.

### Change Connection
- Switch networks (Wi-Fi, mobile data, VPN) and confirm IP change.

### Ask Others
- Get others to replicate the error.

### Source Status
- Verify source's status in a browser.

### Retry Button
- Look for retry button on series page.

### Advanced Settings
- Go to **More -> Settings -> Advanced** and try any of the below:
  - Clear Cache
  - Clear Cookies
  - Clear Database
  - DNS over HTTPS

### Download Issues
- Delete queue, retry downloads.

### Restart Tachiyomi
- Force close and reopen app.

::: tip
An extension update may fix your issue.
Wait or check for an extension update if you have not already.
> There are no ETAs for updates.
:::

If any of these solutions help, go to [it only happens to me](#it-only-happens-to-me). If it is not just you, go to [everyone is having this problem](https://tachiyomi.org/help/guides/troubleshooting/#everyone-is-having-this-problem).

If none of these solutions help, try asking in our [Discord server](https://discord.gg/tachiyomi).

Check **#status-updates** first to see if your issue is known. State your app version and the source, manga, and chapter with the problem if it is not listed.

## It only happens to me
You may be getting a [Cloudflare](#solving-cloudflare-issues) protection, may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like Tachiyomi.

If that is the case, there is probably nothing that Tachiyomi can do to solve it. Some of them (like [Cloudflare](#solving-cloudflare-issues)) have to be manually solved, and some are temporary (IP bans).

**Workarounds that can the lower chance of an issue happening again:**
- Don't use downloads with the source.
- Have less manga in your library from the source.

::: warning
The above are imprecise and fuzzy rules because each site has its non-public limits and triggers.
:::

## Everyone is having this problem
If the site is reachable and fully functional, there may be an issue with the extension or app.

1. Have a look at open issues [for the app](https://github.com/tachiyomiorg/tachiyomi/issues) and/or [**extensions**](https://github.com/tachiyomiorg/tachiyomi-extensions/issues).
1. It may have been fixed already but not released yet, so look at closed issues ([app](https://github.com/tachiyomiorg/tachiyomi/issues?q=is%3Aissue+is%3Aclosed)/[extensions](https://github.com/tachiyomiorg/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed)) issues as well.
1. If you can't find the issue there, open a new one.

> If the site is not reachable or has issues, all you can do is wait for the site to become functional again.
