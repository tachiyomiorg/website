---
title: Reader settings
description: Reader settings for Tachiyomi.
lang: en-US
---

# Reader settings
This section relates to the reading experience in the app and navigating the reader.

## Default reading mode <Badge text="Right to left" type="default-indicator" vertical="middle" />
This setting sets the reader's default direction when you open a manga.

**Left to right**
- Swipe left for next page. Swipe right for previous page.

**Right to left**
- Swipe right for next page. Swipe left for previous page. Default way of reading Manga.

**Vertical**
- Swipe up for next page. Swipe down for previous.

**Webtoon**
- Webtoon is like vertical but stitches all the images together into one stream.

**Continuous vertical**
- Similar to webtoon but with a little space between pages.

::: c-tip
You can change viewer for different series by going to the series, opening a chapter, tapping the middle of the screen, pressing the gear icon, and selecting a different viewer in **Viewer for this series**.
:::

## Double tap animation speed <Badge text="Normal" type="default-indicator" vertical="middle" />
Double tap animation speed changes the speed in which the zoom happens when double tapping.

## Show reading mode <Badge text="True" type="default-indicator" vertical="middle" />
Briefly show current mode when reader is opened

## 32-bit color <Badge text="False" type="default-indicator" vertical="middle" />
This setting decodes images in `ARGB888` format to allow the reader to display more colors.

::: c-warning
This setting will only show up on smartphones running **Android 8.0** or higher.
:::

## Animate page transitions <Badge text="True" type="default-indicator" vertical="middle" />
This setting applies a smooth transition when tapping to change page.

## Rotation <Badge text="Free" type="default-indicator" vertical="middle" />
This allows you to control how the screen is going to be oriented.

- **Free** lets you rotate the screen between portrait and landscape.
- **Lock** will lock the orientation to whatever orientation you had before entering the reader.
- **Force Portrait** forces the reader to be in portrait.
- **Force Landscape** forces the reader to be in landscape.

## Background color <Badge text="Black" type="default-indicator" vertical="middle" />
This allows you to control what color the background should be in reader. Background color can either be **Black**, **Gray** or
**White**.

<Carousel name="carousel-background-color">
<CarouselItem>
<figure class="centered">
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-background-black.png')">
	<h4>Black</h4>
	<p>Surrounds page with black. With an AMOLED screen you can save battery by using this.</p>
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-background-gray.png')">
	<h4>Gray</h4>
	<p>Surrounds page with gray.</p>
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-background-white.png')">
	<h4>White</h4>
	<p>Surrounds page with white. Makes pages seemless with the screen.</p>
</figure>
</CarouselItem>
</Carousel>

## Fullscreen <Badge text="True" type="default-indicator" vertical="middle" />
This setting specifies if the notification and navigation bar are to be hidden while in the reader.

## Show content in cutout area <Badge text="True" type="default-indicator" vertical="middle" />
Lets reader use all screen space even that around punch hole camera and camera notch 

## Keep screen on <Badge text="True" type="default-indicator" vertical="middle" />
This setting determines if the device should be allowed to go to sleep while reading a manga.

## Show page number <Badge text="True" type="default-indicator" vertical="middle" />
This settings shows the page number at the bottom of the page in current page/total page format.

## Skip chapters marked read <Badge text="False" type="default-indicator" vertical="middle" />
This setting allows the chapters marked as read to be skipped during reading. This setting can be useful if a series has multiple scanlation groups and you want to hide one's chapters during reading.

## Skip filtered chapters <Badge text="True" type="default-indicator" vertical="middle" />
This setting allows filtered chapters to be skipped during reading.

## Always show chapter transition <Badge text="True" type="default-indicator" vertical="middle" />
Chapter transition is the area between chapters that shows the names of current and next chapters. When this option is disabled, the reader will hide this area only if the next chapter is loaded.

## Scale type <Badge text="Fit screen" type="default-indicator" vertical="middle" />
Scale type lets you choose how the page fits in your screen.

### Examples

All examples are illustrations and may not reflect what actually happens.

<Carousel name="carousel-scale-type">
<CarouselItem>
<figure class="centered">
	<h4>Fit screen</h4>
	<p>Will fit either to width or height depending on image resolution</p>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-fit-screen.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Stretch</h4>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-stretch.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Fit width</h4>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-fit-width.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Fit height</h4>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-fit-height.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Original size</h4>
	<p>Will be either zoom in or out depending on image resolution</p>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-original-size.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Smart fit</h4>
	<p>Fits to the longest side of the image</p>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-smart-fit.png')">
</figure>
</CarouselItem>
</Carousel>

::: c-tip
You can change scale type when reading a chapter. Tap the middle of the screen, press the gear icon at the top, select a different scale type under **Scale type**. This will change Scale type for all series.
:::

## Zoom start position <Badge text="Automatic" type="default-indicator" vertical="middle" />
Depending on your scale type the page can be wider than the screen, and with zoom start position you can choose where
Tachiyomi will start on that zoomed in page.

### Examples

All examples are illustrations

<Carousel name="carousel-zoom-start-position">
<CarouselItem>
<figure class="centered">
	<h4>Left</h4>
	<p>Will start at the left side of the page.</p>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-zoomstartpos-left.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Right</h4>
	<p>Will start at the right side of the page.</p>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-zoomstartpos-right.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Center</h4>
	<p>Will start at the center of the page.</p>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-zoomstartpos-center.png')">
</figure>
</CarouselItem>
</Carousel>

## Crop borders <Badge text="False" type="default-indicator" vertical="middle" />
Tries to remove excess white borders

<Carousel name="carousel-crop-borders">
<CarouselItem>
<figure class="centered">
	<h4>With Crop borders on</h4>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-crop-border-on.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>With Crop borders off</h4>
	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-crop-border-off.png')">
</figure>
</CarouselItem>
</Carousel>

## Side padding <Badge text="Webtoon" type="tip" vertical="middle" /> <Badge text="None" type="default-indicator" vertical="middle" />
Adds a percentage side padding to the sides of the page

## Tapping <Badge text="True" type="default-indicator" vertical="middle" />
This setting enables switching pages by tapping the sides of the screen.

## Invert Tapping <Badge text="None" type="default-indicator" vertical="middle" />
Inverts the tapping position depending on which setting you choose.

**None**
- Tapping left goes to the next page, and tapping right goes to the previous page
- Tapping bottom goes to the next page, and tapping top goes to the previous page

**Horizontal**
- Tapping left goes to the previous page, and tapping right goes to the next page

**Vertical**
- Tapping bottom goes to the previous page, and tapping top goes to the next page

**Both**
- Applies the two previous mentioned settings

::: c-warning
This setting can only be used when Tapping is enabled.
:::

## Long tap dialog <Badge text="True" type="default-indicator" vertical="middle" />
If enabled, you can long tap on the screen to get the options to set the current page as cover, share it, or save it.

## Volume keys <Badge text="False" type="default-indicator" vertical="middle" />
This setting allows you to flip pages using the volume keys, with the volume up button going to the previous page, and volume down going to next page.

## Invert volume keys <Badge text="False" type="default-indicator" vertical="middle" />

Reverses the Volume keys function of volume up going to the next page and volume down going to the last page.

::: c-warning
This setting can only be used when Volume keys setting is enabled.
:::
