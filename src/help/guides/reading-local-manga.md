---
title: Reading local manga
lang: en-US
---

# Reading local manga

You have to first create a folder named `local` in Tachiyomi folder, which is located in the phone's `Internal storage` or external SD card. Then place your manga inside `Tachiyomi/local` folder.

After that, the manga be can be found in `Local manga`, which is located under `Catalogues` as a new source.

::: warning IMPORTANT
Remember to give the app disk permissions on Android 6 and newer.
:::

If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).

Supported chapter formats are directories with pictures inside, `ZIP`/`CBZ`, `RAR`/`CBR` and `EPUB`. But expect better performance with directories and `ZIP`/`CBZ`.

You can also place your chapters or manga in both storages and Tachiyomi will merge them.

You can then access the manga in `Catalogues > Local manga`.

## Folder Structure

Tachiyomi requires a specific folder structure for local manga to be correctly processed. Local manga will be read from the `Tachiyomi/local` folder. Each manga must have a `Manga` folder and a `Chapter` folder. Images will then go into the chapter folder. See below for more information on archive files. You can refer to the following example:

::: tip EXAMPLE
<div class="side-by-side">
	<ul class="file-tree">
		<li>
			/sdcard/Tachiyomi/local
			<ul>
				<li>
					My manga
					<ul>
						<li>
							ch1
							<ul>
								<li class="file">files</li>
							</ul>
						</li>
						<li>
							ch2
							<ul>
								<li class="file">files</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>&hellip;</li>
			</ul>
		</li>
	</ul>
	<ul class="file-tree">
		<li>
			/storage/18F5-2C11/Tachiyomi/local
			<ul>
				<li>
					My manga
					<ul>
						<li>
							ch3
							<ul>
								<li class="file">files</li>
							</ul>
						</li>
						<li>
							ch4
							<ul>
								<li class="file">files</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>&hellip;</li>
			</ul>
		</li>
	</ul>
</div>
:::

Tachiyomi will see four chapters in a single manga.

The path to the folder with images must contain both the manga title and the chapter name (as seen above). 

## Archive Files

Archive files such as `ZIP`/`CBZ` are supported but the folder structure inside is not. Any folders inside the archive file are ignored. You must place the archive inside the `Manga` folder where the name will become the `Chapter` title. All images inside the archive regardless of folder structure will become pages for that chapter. 

::: tip ZIP EXAMPLE
<ul class="file-tree">
		<li>
			/sdcard/Tachiyomi/local
			<ul>
				<li>
					My manga
					<ul>
						<li>
							ch1.zip
							<ul>
								<li class="file">img files</li>
							</ul>
						</li>
						<li>
							ch2.zip
							<ul>
								<li>
									ch2
									<ul>
										<li class="file">img files</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>&hellip;</li>
			</ul>
		</li>
</ul>
:::

