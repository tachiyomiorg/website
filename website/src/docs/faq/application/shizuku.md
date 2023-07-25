---
title: Shizuku
description: TBA
---

# Shizuku

## What is Shizuku?

Tachiyomi can use Shizuku as an alternate way to install and update extensions.
It accesses system APIs to install packages directly without user input.
Shizuku requires setup with ADB or root privileges.
Read more about it [here](https://shizuku.rikka.app/introduction/).

## Do I need Shizuku?

No, only use Shizuku if you want to avoid being prompted during extension installations.

## How do I set Shizuku up?

To learn how to set Shizuku up, go [here](https://shizuku.rikka.app/guide/setup/).
Once you have set it up, enable it in Tachiyomi by going to **More** → **Settings** → **Advanced** → **Installer**.

## What is the difference between the installers?

* **Legacy**: fallback method installer if the standard PackageInstaller has issues.
  * This is the default for MIUI.
* **PackageInstaller**: The default installer.
  * This has more features depending on the Android version, such as skipping user prompts on Android 12 when updating extensions.
* **Shizuku**: See above.
