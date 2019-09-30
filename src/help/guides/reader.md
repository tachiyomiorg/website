---
title: Reader
lang: en-US
---

# Reader
:construction: :construction_worker_man: W.I.P. Description, help us improve through
[here](https://github.com/tachiyomiorg/website/edit/master/src/help/guides/reader.md)!

## Default viewer <Badge text="Left to Right" type="default-indicator" vertical="middle" />
Default viewer lets you choose which way you want the reader to flip though pages.

::: tip
You can have different Viewer for different series. By going to the series opening a chapter, tapping the middle of the
screen, then pressing the gear icon, then select a different viewer in `View for this series`
:::

**Left to right**
- Swipe left for next page. Swipe right for privious page. Perfect for reading Comics

**Right to left**
- Swipe right for next page. Swipe left for privious page. Perfect for reading Manga

**Vertical**
- Swipe up for next page. Swipe down for privious.

**Webtoon**
- Scroll through pages. Perfect for reading Webtoons

## Scale type <Badge text="Fit screen" type="default-indicator" vertical="middle" />
Scale type lets you choose how the page fits to your screen.

::: tip
You can change scale type when reading a chapter. By tapping the middle of the screen, then press the gear icon, then
select a different scale type under `Scale type`. This will change Scale type for all series.
:::

<h3>Examples</h3>

All examples are illustrations and may not reflect what really happends

<div class="carousel" id="scale-type-carousel">
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Fit screen</h4>
        <p>Will fit either to width or height depending on image dimensions</p>
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
        <p>Will be either zoom in or out depending on image dimensions</p>
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/originalsize.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Smart fit</h4>
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

## Zoom start position <Badge text="Automatic" type="default-indicator" vertical="middle" />
Depending on your scale type the page can be wider than the screen and with zoom start position you can choose where
Tachiyomi will start on that zoomed in page.

<h3>Examples</h3>

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
        <p>Will start at the center side of the page.</p>
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
This allows you to control how to screen is going to be oriented. `Free` lets you rotate the screen between portrait and
landscape. `Lock` will lock the orientation to whatever orientation you had before entering the reader. `Force Portrait`
forces reader to be in portrait. `Force Landscape` forces reader to be in landscape.

## Background color <Badge text="White" type="default-indicator" vertical="middle" />
This allows you to control what color the background should be in reader. Background color can either be `Black` or
`White`.

<div class="carousel" id="background-color-carousel">
<div class="carousel-cell">
    <figure class="centered">
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/backgroundcolorblack.png')">
        <h4>Black</h4>
        <p>Surrounds page with black. With a Amoled screen you can save some battery by using this to read some more series.</p>
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/backgroundcolorwhite.png')">
        <h4>White</h4>
        <p>Surrounds page with white. Make pages seemless with screen, black background pages will not.</p>
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
Double tap animation speed changes the speed in which the zoom happends when double tapping.

## Skip chapters marked read <Badge text="False" type="default-indicator" vertical="middle" />
Skip chapters marked read will skip chapters that you have marked as read when reading
Example?

## Fullscreen <Badge text="True" type="default-indicator" vertical="middle" />
Fullscreen if true will hide notification bar and bottom navigation else it will show

## Keep screen on <Badge text="True" type="default-indicator" vertical="middle" />
Keep screen on if true will keep

## Show page number <Badge text="True" type="default-indicator" vertical="middle" />
Displays current page number along with total page count

## 32-bit color <Badge text="False" type="default-indicator" vertical="middle" />
::: warning
This setting will only show up on Oreo or later
:::
Lets you use 32-bit color.

## Page transitions <Badge text="True" type="default-indicator" vertical="middle" />
Adds a page between chapters display read chapter and upcoming chapter name and chapter number

## Crop borders <Badge text="False" type="default-indicator" vertical="middle" />
Tries to remove exess white borders

<div class="carousel" id="crop-borders-carousel">
<div class="carousel-cell">
    <figure class="centered">
	    <h4>With crop borders</h4>
        <img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/media/withcropborder.png')">
    </figure>
</div>
<div class="carousel-cell">
    <figure class="centered">
	    <h4>Without crop borders</h4>
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
Tap to flip through pages. On left and right sides of screen.

## Long tap dialog <Badge text="True" type="default-indicator" vertical="middle" />
If enabled when reading you can long tap to set the page as cover, share it, or save it.

## Volume keys <Badge text="False" type="default-indicator" vertical="middle" />
Flip through pages with volume keys.
- Volume up goes backward
- Volume down goes forward

## Invert volume keys <Badge text="False" type="default-indicator" vertical="middle" />
::: warning
Disabled if Volume keys if False
:::
Invert direction of volume keys
- Volume up goes forward
- Volume down goes backward
