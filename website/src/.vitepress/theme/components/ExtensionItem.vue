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
			return "v" + this.item.version;
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
			<Badge :text="pkgVersion" />
		</div>
		<div class="lower">
			{{ pkgId }}
		</div>
	</div>
	<a :href="apkUrl" class="extension-download" title="Download APK" download>
		<span>↓ Download</span>
	</a>
</template>

<style lang="stylus">
.extension {
	align-items: center
	display: flex
	padding: 0.5em 1.5em
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
		margin-right: 0.5em
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
		margin-right: 0.5em
		padding-left: 1rem
		padding-right: 1rem
		padding-top: 0.5rem
		padding-bottom: 0.5rem
		font-weight: 700
		border-radius: 4px
		color: var(--vp-c-brand)
		background-color: transparent
		border: 1px solid var(--vp-c-brand-darker)

		.material-icons {
			color: white
			max-width: 18px
		}

		&:hover {
			background-color: var(--vp-c-brand-darker)
			text-decoration: none

			.material-icons {
				color: var(--vp-c-brand)
			}
		}
	}

	@media (max-width 767px) {
		padding: 0.4em 0em

		.extension-text .lower,
		.extension-download span {
			display: none
		}
	}
}

@media (max-width 767px) {
	.extension {
		border: 1px solid var(--vp-c-gutter)
		border-radius: 8px

		.extension-download {
			background-color: var(--vp-c-brand)
		}
	}
}

&:target {
	background-color: var(--vp-c-bg-soft-mute)
	border-radius: 8px
	transition: 500ms background-color
}
</style>
