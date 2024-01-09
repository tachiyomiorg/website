---
title: Getting started
titleTemplate: Guides
description: Essential information to help you get set up with Tachiyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Getting started

Essential information to help you get set up with Tachiyomi.

## Installation guide

### Downloading Tachiyomi

1. Visit our [download](/download/) page to get the latest version of **Tachiyomi**.
2. After the download is complete, open the `.apk` file.
3. Proceed with the installation process.

### Adding sources

Once **Tachiyomi** is installed on your device, you can bring your own content to read from various sources:

:::: tabs
== Local source
Read content stored locally on your device.

See the [Local source guide](/docs/guides/local-source/) for instructions.
== External repositories
External repositories add additional sources to **Tachiyomi**. You can add external repositories by going to <nav to="browse"> and tapping **Extension repos**.

Once there, you can add repositories by inputing URLs ending with `index.min.json`. A small set of extensions are available [here](/extensions/).

::: danger Caution
Tachiyomi will not provide resources for any unofficial repositories. Beware that any third-party repositories or extensions will have full access to the app and may contain malware.
:::

Once you've added a repository, go to <nav to="extensions"> and refresh the extensions list.

You can now tap the download button next to extensions to install them.

> You may need to [enable third-party installations](/docs/faq/browse/extensions#enabling-third-party-installations).

::: tip Official repository
Tachiyomi has an official extension repository, you can use the **Add repository** button on the [Extensions](/extensions/) page, or copy the url manually below.
> `https://raw.githubusercontent.com/tachiyomiorg/extensions/repo/index.min.json`
:::

::: danger Caution
Beware that any third-party repository or extension can contain malware.
:::
== Manual extensions
Extensions can be manually installed through `.apk` files.

::: danger Caution
Tachiyomi will not provide resources for any unofficial extensions. Beware that any third-party repositories or extensions will have full access to the app and may contain malware.
:::
::::

### Adding series to your library

After installing the desired extension, you'll find it in the **Sources** tab.

Here's how you can add series to your library:

1. Select the source you'd like to browse.
1. You can use the **Popular**/**Latest** listings to browse, or you can search for the series name.
1. Once you've found the series that you want to add, tap on it for more details.
1. Press the "**Add to library**" button, and the series will be added to your Library, ready to be read!

## Additional setup

### Series search options

If you want to search for series across all your sources, you can use the Global Search feature.

Follow these steps:

1. Go to the "**Browse**" section.
1. Ensure you're on the "**Sources**" tab located at the top-right corner.
1. Use the Search icon in the toolbar to find series from all available sources.

### Trouble finding a specific series?

If you encounter difficulties while searching for a specific series, consider the following points:

* Double-check your spelling and try again, as some sources might use **Japanese romanized** titles instead of **English** ones.
  > Example: **Boku no Hero Academia** instead of **My Hero Academia**.

* Some sources may use different spellings or wordings for titles.
  > Example: **Bungo Stray Dogs** instead of **Bungou Stray Dogs**

  > Example: **3-gatsu no Lion** instead of **Sangatsu no Lion**.
