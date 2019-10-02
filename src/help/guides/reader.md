---
title: Reader
lang: en-US
---

# Reader
This section relates to the reading experience in the app and navigating the reader.

## Default viewer <Badge text="Left to Right" type="default-indicator" vertical="middle" />
This setting sets the reader's default direction when you open a manga.

**Left to right**
- Swipe left for next page. Swipe right for previous page.

**Right to left**
- Swipe right for next page. Swipe left for previous page. Default way of reading Manga.

**Vertical**
- Swipe up for next page. Swipe down for previous.

**Webtoon**
- Webtoon is like vertical but stitches all the images together into one stream.

::: tip
You can have different Viewer for different series. You can do this by going to the series, opening a chapter, tapping the middle of the screen, pressing the gear icon, and selecting a different viewer in `Viewer for this series`
:::

## Scale type <Badge text="Fit screen" type="default-indicator" vertical="middle" />
Scale type lets you choose how the page fits in your screen.

### Examples

All examples are illustrations and may not reflect what actually happens.

<div class="carousel" id="scale-type-carousel">
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Fit screen</h4>
        <p>Will fit either to width or height depending on image resolution</p>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/fitscreen.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Stretch</h4>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/stretch.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Fit width</h4>
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/fitwidth.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Fit height</h4>
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/fitheight.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Original size</h4>
        <p>Will be either zoom in or out depending on image resolution</p>
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/originalsize.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Smart fit</h4>
        <p>Fits to the longest side of the image</p>
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/smartfit.png')">
    </figure>
</div>
</div>
<script>
var config = {
  adaptiveHeight: true,
  wrapAround: true,
  pageDots: false
};
new Flickity('#scale-type-carousel', config);
</script>

::: tip
You can change scale type when reading a chapter. Tap the middle of the screen, press the gear icon at the top, select a different scale type under `Scale type`. This will change Scale type for all series.
:::

## Zoom start position <Badge text="Automatic" type="default-indicator" vertical="middle" />
Depending on your scale type the page can be wider than the screen, and with zoom start position you can choose where
Tachiyomi will start on that zoomed in page.

### Examples

All examples are illustrations

<div class="carousel" id="zoom-start-position-carousel">
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Left</h4>
        <p>Will start at the left side of the page.</p>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/zoomstartpositionleft.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Right</h4>
        <p>Will start at the right side of the page.</p>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/zoomstartpositionright.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Center</h4>
        <p>Will start at the center of the page.</p>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/zoomstartpositioncenter.png')">
    </figure>
</div>
</div>
<script>
var config = {
  adaptiveHeight: true,
  wrapAround: true,
  pageDots: false
};
new Flickity('#zoom-start-position-carousel', config);
</script>

## Rotation <Badge text="Free" type="default-indicator" vertical="middle" />
This allows you to control how the screen is going to be oriented. `Free` lets you rotate the screen between portrait and
landscape. `Lock` will lock the orientation to whatever orientation you had before entering the reader. `Force Portrait`
forces the reader to be in portrait. `Force Landscape` forces the reader to be in landscape.

## Background color <Badge text="White" type="default-indicator" vertical="middle" />
This allows you to control what color the background should be in reader. Background color can either be `Black` or
`White`.

<div class="carousel" id="background-color-carousel">
<div class="carousel-cell">
    <figure class="centered">
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/backgroundcolorblack.png')">
        <h4>Black</h4>
        <p>Surrounds page with black. With an AMOLED screen you can save battery by using this.</p>
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/backgroundcolorwhite.png')">
        <h4>White</h4>
        <p>Surrounds page with white. Makes pages seemless with the screen.</p>
    </figure>
</div>
</div>
<script>
var config = {
  adaptiveHeight: true,
  wrapAround: true,
  pageDots: false
};
new Flickity('#background-color-carousel', config);
</script>

## Double tap animation speed <Badge text="Normal" type="default-indicator" vertical="middle" />
Double tap animation speed changes the speed in which the zoom happens when double tapping.

## Skip chapters marked read <Badge text="False" type="default-indicator" vertical="middle" />
This setting allows the chapters marked as read to be skipped during reading. To mark a chapter as read, tap the overflow (three-dot) icon and press 'Mark as Read.'
This setting can be useful if a series has multiple scanlation groups and you want to hide one's chapters during reading.

## Fullscreen <Badge text="True" type="default-indicator" vertical="middle" />
This setting specifies if the notification and navigation bar are to be hidden while in the reader.

## Keep screen on <Badge text="True" type="default-indicator" vertical="middle" />
This setting determines if the device should be allowed to go to sleep while reading a manga.

## Show page number <Badge text="True" type="default-indicator" vertical="middle" />
This settings shows the page number at the bottom of the page in current page/total page format.

## 32-bit color <Badge text="False" type="default-indicator" vertical="middle" />
This setting decodes images in ARGB888 format to allow the reader to display more colors.

::: warning
This setting will only show up on smartphones running Android 8.0 Oreo and later versions.
:::

## Page transitions <Badge text="True" type="default-indicator" vertical="middle" />
This setting applies a smooth transition when tapping to change page.

## Crop borders <Badge text="False" type="default-indicator" vertical="middle" />
Tries to remove excess white borders

<div class="carousel" id="crop-borders-carousel">
<div class="carousel-cell">
    <figure class="centered">
	    <h4>With Crop borders on</h4>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/withcropborder.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>With Crop borders off</h4>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/withoutcropborder.png')">
    </figure>
</div>
</div>
<script>
var config = {
  adaptiveHeight: true,
  wrapAround: true,
  pageDots: false
};
new Flickity('#crop-borders-carousel', config);
</script>

## Tapping <Badge text="True" type="default-indicator" vertical="middle" />
This setting enables switching pages by tapping the sides of the screen.

## Long tap dialog <Badge text="True" type="default-indicator" vertical="middle" />
If enabled, you can long tap on the screen to get the options to set the current page as cover, share it, or save it.

## Volume keys <Badge text="False" type="default-indicator" vertical="middle" />
This setting allows you to flip pages using the volume keys, with the volume up button going to the previous page, and volume down going to next page.

## Invert volume keys <Badge text="False" type="default-indicator" vertical="middle" />

Reverses the Volume keys function of volume up going to the next page and volume down going to the last page.

::: warning
This setting can only be used when Volume keys setting is enabled.
:::