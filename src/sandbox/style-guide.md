---
title: Style guide
description: Style guide to aid website content contributors.
lang: en-US
sitemap:
  exclude: true
---

# Style guide
Style guide to aid website content contributors. For the code used for certain segments, please view the code for this page.
Note that I am not experienced in making these and thus it was created on a whim, if you know any way to improve this page then please submit an edit for it or create an issue.

## FAQ Style
Some **DO**s and **DO NOT**s for [FAQ](../help/faq/README.md).

- **DO NOT** be afraid to ask for help, this includes clarifying what some parts on this page mean.

- **DO** write each segment as a question:
> #### How can I see how many chapters I've downloaded?

- **DO** write your instructions as clear as possible, preferably check with other people first and see if they can help you improve your language used.

- **DO NOT** write noticably sloppily, this makes it harder for both us and the user to understand.

- **DO NOT** forget to at least check for basic grammar issues, this includes not having a capital letter in your first word and forgetting commas/periods.

- **DO PREFERABLY**, in relation to the above, use resources that can aid with grammar and general structure:
> - [Grammarly](https://app.grammarly.com/) - Grammarly's writing app makes sure everything you type is not only correct, but also clear and easy to read.
> - [Hemmingway App](http://www.hemingwayapp.com/) - Hemingway App makes your writing bold and clear.

- **DO** preferably try to build the enviroment and test it locally first before submitting your PR, ask for help with this if you need it.

- **DO** use guide containers for quickly showing how to achieve something:
> ::: guide Instructions
> Enable it by going to <Navigation item="library"/> → <Navigation item="filter"/> → **Display** section and then checking the **Download badges** option at the bottom.
> :::

- **DO** include video guides as a text under the header:
> ::: aside-guide
> [<MaterialIcon icon-name="videocam"/> Click for video guide](/help/faq/assets/MangaDex-NoResults.mp4)
> :::

- **DO** try to be consistent with video recording by following these guidelines:
> ::: guide Video recording guidelines
> When making videos, it's highly preferable that you use [Android Studio's](https://developer.android.com/studio) emulator for a consistent result each time. The emulator settings > for the front-page images is a **Pixel 3 XL** running **Android 10**.
> - Record your videos as **MP4** or **WEBM**, whichever works the best for you.
> - Use Androids built-in **Demo Mode**, it can be found in the Developer settings.
> - Record with a clean workspace and don't be too hasty or too slow with actions.
> :::

- **DO** use arrow symbols in instructions, instead of using greater-than symbols:
> Start → Goal

- **DO** bold important words in your text:
> ...checking the **Download badges** option...

- **DO** use **[Navigation](https://github.com/tachiyomiorg/website/blob/master/src/.vuepress/components/Navigation.vue#L35-L82)** items when applicable:
> <Navigation item="library"/>

- **DO** use unordered lists when writing a list of stuff that's not an instruction:
> - This thing.
> - And that thing.

- **DO NOT** use unordered lists for instructions.
- **DO** use ordered lists when writing a longer instruction:
> 1. Step one.
> 1. Step two.

- **DO** use tabs for instructions when necessary for a good experience:
> :::: el-tabs
> ::: el-tab-pane label="Android 8+"
> **Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
> :::
> ::: el-tab-pane label="Android 7 and under"
> **Pellentesque** _habitant_ morbi tristique **senectus** et netus.
> :::
> ::::

- **MAYBE** use accordions for FAQ entries, needs further testing if/before we replace all:
> :::: el-collapse
> ::: el-collapse-item title="How can I see how many chapters I've downloaded?"
> **Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
> :::
> ::: el-collapse-item title="Why are there no results when searching?"
> **Pellentesque** _habitant_ morbi tristique **senectus** et netus.
> :::
> ::::

> :::::: el-collapse
> ::::: el-collapse-item title="You can even chain tabs and other stuff into accordions"
> :::: el-tabs
> ::: el-tab-pane label="Android 8+"
> **Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
> :::
> ::: el-tab-pane label="Android 7 and under"
> **Pellentesque** _habitant_ morbi tristique **senectus** et netus.
> :::
> ::::
> :::::
> ::::: el-collapse-item title="Or decide to only write pure content."
> Yeet.
> :::::
> ::::::

- **DO** use alerts to give the user a heads up:
> <el-alert type="info" title="Disclaimer" description="Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality." show-icon :closable="false"></el-alert>
> <el-alert type="warning" title="Warning!" description="This feature requires you to be on Android 7 or above." show-icon :closable="false"></el-alert>
> <el-alert type="error" title="Attention!" description="Make sure you have created a backup before following these instructions!" show-icon :closable="false"></el-alert>
> ::: aside
> More alerts can be found on the [Element-UI](element-ui.md#alert) page.
> :::

- **DO** include related info as an aside object:
> **Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
> ::: aside
> Related GitHub issue: [#65](https://github.com/inorichi/tachiyomi/issues/65)
> :::

> **Pellentesque** _habitant_ morbi tristique **senectus** et netus.
> ::: aside
> Learn how to create automatic backups [here](/help/guides/creating-backups/#turning-on-auto-backups/)
> :::

- **DO** use code tags for error codes and file names:
> Storage related error: `Attempt to invoke virtual method 'com.hippo.unifile...`

> File name for the phone to ignore images from Tachiyomi: `.nomedia`

## Guide Style
Many of the stuff previously mentioned generally applies when making guides too, some stuff unique to guide would probably be these:

- **DO** use guide containers when writing instructions:
> ::: guide
> 1. Go to <Navigation item="more"/> and tap <Navigation item="source_migration"/>.
> 1. Select the **Source** you're migrating from.
> 1. Find and select the title that you want to migrate.
> 	> **Tachiyomi** will do a global search of all the sources you have installed and enabled. If you don't find the manga you want, try searching for other titles it might go under.
> 1. Once you find the manga you want to migrate, select it and then choose which data you want to transfer over, and you're done.
> :::

- **DO** use code blocks when you're pasting code:
> ```json
> {
> "title": "Example Title",
> "author": "Example Author",
> "artist": "Example Artist",
> "description": "Example Description",
> "genre": ["genre 1", "genre 2", "etc"],
> "status": "0",
> "_status values": ["0 = Unknown", "1 = Ongoing", "2 = Completed", "3 = Licensed"]
> }
> ```

- **DO** use a modified guide container when visualizing folder/file location:
>::: guide File tree
><ul class="file-tree">
>		<li>
>			/sdcard/Tachiyomi/local
>			<ul>
>				<li>
>					My manga
>					<ul>
>						<li>
>							ch1.zip
>							<ul>
>								<li class="file">img files</li>
>							</ul>
>						</li>
>						<li>
>							ch2.zip
>							<ul>
>								<li>
>									ch2
>									<ul>
>										<li class="file">img files</li>
>									</ul>
>								</li>
>							</ul>
>						</li>
>						<li class="file">cover.jpg</li>
>					</ul>
>				</li>
>				<li>&hellip;</li>
>			</ul>
>		</li>
></ul>
>:::

- **DO** use carousels for multiple images:
> <Carousel name="carousel-background-color">
> <CarouselItem>
> <figure class="centered">
> 	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-Background-Black.png')">
> 	<h4>Black</h4>
> 	<p>Surrounds page with black. With an AMOLED screen you can save battery by using this.</p>
> </figure>
> </CarouselItem>
> <CarouselItem>
> <figure class="centered">
> 	<img height="400" intrinsicsize="208x500" width="260" :src="$withBase('/assets/guides_reader-Background-White.png')">
> 	<h4>White</h4>
> 	<p>Surrounds page with white. Makes pages seemless with the screen.</p>
> </figure>
> </CarouselItem>
> </Carousel>
