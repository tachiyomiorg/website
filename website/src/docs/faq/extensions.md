---
title: Extensions - FAQ
description: Frequently Asked Questions related to Extensions.
---

# Extensions

Frequently Asked Questions related to Extensions.

## General

### What are some recommended extensions? What source is the best? What is the replacement for source X? Where to read manga Y?

Tachiyomi does not endorse or recommend any manga source, and there is no best extension.
Instead, we encourage users to spend some time trying out a few sources themselves and discover what sources work best for them.
What works well for somebody else might not work well for you.

::: info Disclaimer
Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality.
:::

---

### What are scanlator sources?

Manga that are not officially licensed are translated by scanlators, who either publish on their websites or **MangaDex**.
This practice contrasts with official sources like **MANGA Plus By SHUEISHA** or **VIZ Shonen Jump**, which host officially licensed and translated manga.

Learn more about scanlation in this **Wikipedia** [**article**](https://en.wikipedia.org/wiki/Scanlation).

#### How do I request a new extension?

Open an issue on [GitHub](https://github.com/tachiyomiorg/tachiyomi-extensions/issues) if one does not already exist.
Make sure it is not on the removed extensions list [here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/3475) first.

You can find the list of extensions to download [here](https://tachiyomi.org/extensions/)

---

### How do I allow third-party installations?

When installing your first extension and you are prompted that your device _is not allowed_ to install unknown apps from that source, follow the prompt to allow it.

In _newer_ versions of **Android**, you need to enable **Install unknown apps** on a per-app basis.

When installing your first extension and you are prompted that your device _is not allowed_ to install unknown apps from that source, follow the prompt to allow it.

In _older_ versions of **Android**, you only need to enable **Unknown sources** globally.

If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)

---

### How do I uninstall an extension?

Extensions for **Tachiyomi** are technically installed the same as standard apps.
Either you uninstall them through the app section on your device's settings or do it in **Tachiyomi**.

::: tip
To uninstall an extension from within **Tachiyomi**, go to → **Extensions** then tap **Uninstall** on the extension you want to remove.
:::

## Removed Extensions

### Why am I unable to download an extension that used to exist?

Extensions tend to be removed for a variety of reasons:

* They become too much of a cat and mouse game to maintain due to the website owners changing the site frequently to deter scrapers.
* The site scrambles images in more than one way, making it impossible to make every image unscrambleable.
* A scanlator team requests the removal of their site from Tachiyomi.
* The site is paywalled.
* Require reverse engineering another app.
* The site has been shut down.

A list of extensions that have been removed is available [here](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/3475), but it does not include sites that have gone offline.

## Split Extensions

Extensions have been split due to the sheer number of extensions in a single extension, with Madara reaching over 200 extensions at one point, making it unreasonable for both devs and users to filter through extensions.
For a deeper explanation of the issue, [this](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/4287) GitHub issue explains in more detail.

---

### What extensions have been split?

All of them have been split.

---

### Why does my multisource extension show up as obsolete?

The multisource extension is obsolete because it has been split.
The multisource extension has been removed from the repository.
It is not actually obsolete.

---

### How do I move to a split extension?

Install the extension that your manga is from, and then uninstall the multisource extension.
If the manga shows the source as a bunch of numbers, force close the app.
For known issues with split extensions, go to this [GitHub issue](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/5672).

---

### Do I need to migrate?

No, unless expressly stated, the internal ID of sources has not changed, so migration is unnecessary.

---

### What if I uninstall the multisource extension before I install the singular extensions?

See what extension IDs correspond to what extensions [here](https://pastebin.com/raw/QX2scdRT).
