---
title: Shizuku
description: Using Shizuku with Tachiyomi.
---

# Shizuku
Using **Shizuku** with **Tachiyomi**.

## Understanding Shizuku
**Shizuku** serves as an alternative method for installing and updating extensions in **Tachiyomi**.

It taps into system APIs to directly install packages without requiring user interaction.

To get a detailed understanding of **Shizuku**, its purpose, and how it operates, refer to the information provided [here](https://shizuku.rikka.app/introduction/).

## Is Shizuku Necessary?
No, **Shizuku** is not obligatory.

It should be considered if you wish to bypass installation prompts during extension setup.

## Setting Up Shizuku
To set up **Shizuku**, follow the instructions [here](https://shizuku.rikka.app/guide/setup/).

After configuring it, activate **Shizuku** within **Tachiyomi** by navigating to <nav to="advanced"> then changing the **Installer** setting.

## Comparing Installers
Three installer options are available:

* **Legacy**: A fallback installer if the standard **PackageInstaller** faces complications.
  > This is the default for **MIUI**.
* **PackageInstaller**: The primary installer option with additional features dependent on the Android version.
  > For instance, it can bypass user prompts when updating extensions on **Android 12**.
* **Shizuku**: Refer to the above section for details on **Shizuku**'s functionality.
* **Private**: Installs directly to your device without passing as an application.
