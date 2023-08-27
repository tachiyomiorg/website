---
title: Common issues
description: This page is for when you encounter a problem with a source or the app.
---

# Common issues

This page is for when you encounter a problem with a source or the app.

## Basic issues

### Cannot Access SD Card
The `Cannot Access SD Card` error can sometimes be fixed by changing the location of your downloads to somewhere else and back to the SD card, then restarting the app.

Having a file or folder name that is too long can also cause this issue.
Android's file manager does not support filenames longer than 255 characters.
If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it.
Otherwise, delete the Tachiyomi downloads folder off of the SD Card.

### Storage issues with Android 11+
See [this](troubleshooting.md#undefined) section of the FAQ to learn how Scoped Storage affects Tachiyomi in Android 11+ and how to fix it.

### Slow loading
If any sources are slow, it is likely due to the site being slow, your internet being slow, or a rate limit applied to the source to reduce the load or IP bans.

### Reading is laggy
This is usually due to the images in the chapters being too long or large for the reader to handle.
If you turn have **32-bit color** on, try turning it off under **More -> Settings -> Reader**.
This helps sometimes to free up some RAM being used.
To eliminate this issue, find a different source that cuts the chapter into more pieces or downscales the images.

### App not installed
Refer to this section.

## Advanced errors
### Java.lang Exception: Failed to bypass Cloudflare
`Java.lang.Exception: Failed to bypass Cloudflare` means that the source you selected has Cloudflare protection on, refer to the Cloudflare guide to fix it.
If the solutions provided do not fix the issue, the source has likely raised the Cloudflare protection level high enough that Tachiyomi is not able to access the site.

### Unable to resolve host / Connection failed / Failed to connect to / timeout / connection reset
Errors like `Unable to resolve host`, `Connection failed`, `Failed to connect to`, `timeout`, `connection reset` mean that something is preventing you from connecting to the source.

Possible reasons include:

* Your internet connection is not good enough to connect.
* The app does not have access to the internet.
* Your ISP has blocked the site.
* The site is down.

Try the following solutions to fix this issue:

* Enable **More -> Settings -> Advanced -> DNS over HTTPS**.
* Use a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).
* Reboot your router.

### java.security.cert.CertPathValidatorException / Chain validation failed
`java.security.cert.CertPathValidatorException` or `Chain validation failed` means there is a problem with validating source's sertificate.

* Check if the site's certificate has expired.
  Use an online service for checking SSL certificates.
  If the certificate has expired, wait while the site owner to renew it.
* Ensure that you have the right date and time set on your phone.
* Try **More -> Settings -> Advanced** then try **Clear cache** and **Clear cookies**.
* Try using a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).
* Try restarting the device.

### Attempt to invoke virtual method 'com.hippo.unifile...
The `Attempt to invoke virtual method' com.hippo.unifile...` error can be caused by various reasons, but they all have to do with storage.

* Most commonly, it is caused by full storage.
  Check to see if your device or SD Card is full.
* Check if **Tachiyomi** has access to the SD card.
  You can enable it in Android settings for app permissions.
* If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to.
  This may be because the folder is corrupted or does not exist.
  Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.
* The drive you're writing to is corrupted.
  Check using a file manager to see if it is accessible.

## HTTP errors

### HTTP Error: 403
Possible reasons for `HTTP error 403`:
* The source you selected has Cloudflare protection on, refer to the Cloudflare guide to fix it.
* The source is down, removed the series, or banned your IP.
  > Open WebView to check if this is the case.

### HTTP Error: 404
`HTTP error 404` probably means that the source is down or removed the series.
Open WevView to check if this is the case.
Migrate to a different source for this series if you'd like.

### HTTP Error: 429 - Too Many Requests
`HTTP error 429` or `Too Many Requests` means that the source banned your IP address (in most cases, it's temporary) because you could be downloading or reading too fast
 We suggest [reporting](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose) the issue so that a rate limit can be added to prevent IP bans in the future.

### HTTP Error: 5xx
`HTTP error 5xx` like `500`, `502`, and others are server-side errors, and the source you are trying to access has problems on their side.
Open the source in WebView and check if the site is down.

### HTTP Error: 1006
`HTTP error 1006` means that the source has banned your IP address (in most cases, it's temporary).

### HTTP Error: 1020
`HTTP error 1020` means that you have violated a firewall rule the site owner has put up.
This usually means that the site owner has raised the Cloudflare protection level or that the site owner is blocking IPs outside their country.

::: warning
If error-specific instructions did not help or your error is not on the list, go through **Diagnosis**.
:::
