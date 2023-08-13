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

<template v-if="item">
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
</template>

<style lang="stylus">
.extension {
	align-items: center
	display: flex
	padding: 0.5em 1.5em
	margin: 0.8em 0.2em
	border-radius: 8px

	&:hover {
		background-color: var(--vp-c-bg-soft-mute)
	}

	.anchor {
		margin-left: 0.2em
		margin-right: 0.2em
		font-size: 1.4em
		opacity: 0
	}

	&:hover .anchor {
		opacity: 1
	}

	.extension-icon {
		margin: 0.2em 0.5em
	}

	.extension-text {
		flex: 1

		.upper {
			font-weight: 600

			.badge {
				font-weight: 400
				margin-left: 8px
			}
		}

		.lower {
			color: #6c757d
			font-family: monospace
			font-size: 0.9rem
		}
	}

	.extension-download {
		padding: 0.4em
		font-weight: 700
		font-size: 1.4em
		border-radius: 4px

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
	}
}

&:target {
	background-color: var(--vp-c-bg-soft-mute)
	border-radius: 8px
	transition: 500ms background-color
}
</style>
