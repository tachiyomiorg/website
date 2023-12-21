---
title: Local source
titleTemplate: Guides
description: For users who would like to download and organize their own media.
---

# Local source

If you like to download and organize your media, then you want to know how to manage your own series in Tachiyomi.

::: warning
This page explores some advanced features.
:::

## Creating local series

1. Create a folder named `local` in the `/Tachiyomi/` folder.

    > The `/Tachiyomi/` folder is located in the root of phone's **internal storage** or **external SD card** and it's **not related** to the `eu.kanade.tachiyomi/` folder or the download location in the settings.
1. Place correctly structured series inside `/Tachiyomi/local/`.

    > If adding series in folders it is recommended to add a file named `.nomedia` to the local folder so images do not show up in the gallery.
1. You should now be able to access the series in <nav to="sources"> under **Local source**.

If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).

Supported chapter formats are folders with pictures inside (such as `.jpg`, `.png`, etc) or archive files (`ZIP`/`CBZ`, `RAR`/`CBR`, and `EPUB`).
But expect better performance with directories and `ZIP`/`CBZ`.

Note that a single folder or archive file is treated as a single chapter. For example, Tachiyomi will not automatically split an `EPUB` file containing multiple chapters into separate chapters within the app.

Remember to give the app storage permissions on **Android 6** and newer.

### Folder structure

Tachiyomi requires a specific folder structure for local series to be correctly processed.
Local series will be read from the `Tachiyomi/local` folder.
Each series must have a `Series` folder and a `Chapter` folder.
Images will then go into the chapter folder.
See below for more information on archive files.
You can refer to the following example:

#### Example {#example-storages}

:::tabs
== Device Storage
<div class="tree">
	<ul>
		<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
		<span class="folder root">/sdcard/Tachiyomi/local</span>
		<li>
			<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
			<span class="folder main">[the series title]</span>
			<ul>
				<li>
					<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
					<span class="file jpg">cover<span class="file-extension">.jpg</span></span>
				</li>
				<li>
					<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
					<span class="folder">chapter_1</span>
					<ul>
						<li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
						<li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
					<span class="folder">chapter_2</span>
					<ul>
						<li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
						<li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
					<span class="folder">chapter_n</span>
					<ul>
						<li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
						<li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</div>
== SD Card
<div class="tree">
	<ul>
		<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
		<span class="folder root">/storage/18F5-2C11/Tachiyomi/local</span>
		<li>
			<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
			<span class="folder main">[the series title]</span>
			<ul>
				<li>
					<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
					<span class="file jpg">cover<span class="file-extension">.jpg</span></span>
				</li>
				<li>
					<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
					<span class="folder">chapter_1</span>
					<ul>
						<li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
						<li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
					<span class="folder">chapter_2</span>
					<ul>
						<li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
						<li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
					</ul>
				</li>
				<li>
					<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
					<span class="folder">chapter_n</span>
					<ul>
						<li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
						<li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</div>
:::

Tachiyomi will see four chapters in a single series.
The path to the folder with images must contain both the series title and the chapter name (as seen above).

### Archive files

Archive files such as `ZIP`/`CBZ` are supported but the folder structure inside is not.
Any folders inside the archive file are ignored.
You must place the archive inside the `Series` folder where the name will become the `Chapter` title.
All images inside the archive regardless of folder structure will become pages for that chapter.

#### Example {#example-archives}

:::tabs
== .ZIP
<div class="tree">
	<ul>
		<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
		<span class="folder root">/sdcard/Tachiyomi/local</span>
		<li>
			<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
			<span class="folder main">[the series title]</span>
			<ul>
				<li>
					<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
					<span class="file jpg">cover<span class="file-extension">.jpg</span></span>
				</li>
				<li>
					<img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-zip">
					<span class="file zip">chapter_1<span class="file-extension">.zip</span></span>
					<ul>
						<li>
							<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
							<span class="file jpg">image_1<span class="file-extension">.jpg</span></span>
						</li>
						<li>
							<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
							<span class="file jpg">image_n<span class="file-extension">.jpg</span></span>
						</li>
					</ul>
				</li>
				<li>
					<img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-zip">
					<span class="file zip">chapter_2<span class="file-extension">.zip</span></span>
					<ul>
						<li>
							<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
							<span class="file jpg">image_1<span class="file-extension">.jpg</span></span>
						</li>
						<li>
							<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
							<span class="file jpg">image_n<span class="file-extension">.jpg</span></span>
						</li>
					</ul>
				</li>
				<li>
					<img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-zip">
					<span class="file zip">chapter_n<span class="file-extension">.zip</span></span>
					<ul>
						<li>
							<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
							<span class="file jpg">image_1<span class="file-extension">.jpg</span></span>
						</li>
						<li>
							<img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
							<span class="file jpg">image_n<span class="file-extension">.jpg</span></span>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</div>
:::

<style scoped>
	@import "../../../.vitepress/theme/styles/tree.styl"
</style>
