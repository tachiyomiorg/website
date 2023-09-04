<script>
export default {
	props: ["item"],
	computed: {
		pkgId: function () {
			return this.item.pkg.replace("eu.kanade.tachiyomi.extension.", "");
		},
		pkgName: function () {
			return this.item.name.split(": ")[1];
		},
		pkgVersion: function () {
			return this.item.version;
		},
		pkgIsNsfw: function () {
			return !!parseInt(this.item.nsfw);
		},
		pkgHasReadme: function () {
			return !!parseInt(this.item.hasReadme);
		},
		pkgHasChangelog: function () {
			return !!parseInt(this.item.hasChangelog);
		},
		iconUrl: function () {
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${this.item.pkg}.png`;
		},
		apkUrl: function () {
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${this.item.apk}`;
		},
	},
};
</script>

<template>
	<div class="extension">
		<a :href="`#${pkgId}`" class="anchor" aria-hidden="true" @click.stop>#</a>
		<img class="extension-icon" :src="iconUrl" loading="lazy" width="42" height="42" />
		<div class="extension-text">
			<div class="upper">
				{{ pkgName }}
			</div>
			<div class="lower">
				{{ pkgId }}
			</div>
		</div>
		<Badge v-if="pkgIsNsfw" type="danger" :text="pkgVersion" title="This extension contains NSFW entries." />
		<Badge v-else type="info" :text="pkgVersion" title="This extension is free from NSFW entries." />
		<a :href="apkUrl" class="extension-download" title="Download APK" download>↓</a>
	</div>
</template>

<style lang="stylus">
.extension {
	position: relative
	align-items: center
	display: flex
	width: 100%
	padding: 0.5em 0
	margin: 0.8em 0
	border-radius: 8px
	gap: 0.675rem

	&:hover {
		background-color: var(--vp-c-bg-soft-mute)
	}

	.anchor {
		position: absolute
		left: 0
		margin-left: -1em
		font-size: 1.4em
		opacity: 0
	}

	&:hover .anchor {
		opacity: 1
	}

	.extension-icon {
		flex-shrink: 0
		margin-left: -4px;
	}

	.extension-text {
		flex-grow: 1
		min-width: 0

		.upper {
			font-weight: 600
			overflow: hidden
			text-overflow: ellipsis
			white-space: nowrap

			.badge {
				font-weight: 400
			}
		}

		.lower {
			margin-top: 0.25rem
			color: #6c757d
			font-family: var(--vp-font-family-mono)
			font-size: 0.9rem
			overflow: hidden
			text-overflow: ellipsis
			white-space: nowrap
			line-height: 16px
		}
	}

	.extension-download {
		padding: 0.4em
		font-weight: 700
		font-size: 1.4em
		border-radius: 4px
		flex-shrink: 0
		margin-right: -0.4em

		.material-icons {
			color: white
			max-width: 18px
		}

		&:hover {
			.VPBadge {
				background-color: var(--vp-c-brand-darker)
				text-decoration: none
			}
		}
	}

	@media (max-width 767px) {
		padding: 0.4em 0em
	}
}

@media (max-width 767px) {
	.anchor {
		display: none
	}

	.extension {
		border: 1px solid var(--vp-c-divider)
		border-radius: 8px
		padding: 0.5em

		.extension-download {
			margin-right: 0
		}
	}
}

&:target {
	background-color: var(--vp-c-bg-soft-mute)
	border-radius: 8px
	transition: 500ms background-color
}
</style>
