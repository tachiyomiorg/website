---
title: Reading local manga
lang: en-US
---

# Reading local manga

You have to place your manga inside the folder `Tachiyomi/local` located in the root of your internal storage or external SD card, usually `/sdcard` and `/storage/18F5-2C11` (with different values).

After that, they will be shown in the catalogue as a new source.

::: warning IMPORTANT
Remember to give the app disk permissions on Android 6 and newer.
:::

If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).

Supported chapter formats are directories with pictures inside, `ZIP`/`CBZ`, `RAR`/`CBR` and `EPUB`. But expect better performance with directories and `ZIP`/`CBZ`.

You can also place your chapters or manga in both storages and Tachiyomi will merge them.

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

The path to the folder (or archive) with images must contain both the manga title and the chapter name (as seen above).

You can then access the manga in `Catalogues > Local manga`.
