<template>
	<div class="extension-group">
		<h3>
			<span>
				{{ list[0].lang === "en" ? simpleLangName(list[0].lang) : langName(list[0].lang) }}
			</span>

			<span class="extensions-total">
				Total:
				<span class="extensions-total-sum">
					{{ totalCount }}
				</span>
			</span>
		</h3>
		<div
			v-for="extension in list"
			:id="extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')"
			:key="extension.apk"
			class="anchor"
		>
			<extension-item v-bind:item="extension" v-bind:observer="observer" />
		</div>
	</div>
</template>
<script>
import { simpleLangName, langName } from "../scripts/languages";
import ExtensionItem from "./ExtensionItem.vue";

export default {
	components: { ExtensionItem },
	props: ["list", "totalCount"],
	data() {
		return {
			observer: null,
		};
	},
	created() {
		this.observer = new IntersectionObserver(this.onElementObserved, {
			root: this.$el,
			threshold: 1.0,
		});
	},
	beforeDestroy() {
		this.observer.disconnect();
	},
	methods: {
		simpleLangName,
		langName,
		preloadImage(target) {
			let img = target.getElementsByTagName("img")[0]
			if (img.hasAttribute('src')) {
				return
			}
			let src = img.getAttribute('data-src');
			img.setAttribute('src', src);
		},
		onElementObserved(entries) {
			entries.forEach(({ target, isIntersecting }) => {
				if (!isIntersecting) {
					target.style.visibility = "hidden"
					return;
				}

				this.observer.unobserve(target);
				this.preloadImage(target)
				target.style.visibility = "visible"
			});
		},
	},
};
</script>
<style lang="stylus">
.extensions-total
	float right
	&-sum
		color $accentColor

.anchor
	margin-top -3.9em
	padding-bottom 0.2em
	padding-top 4.5em

	&:first-child
		border-top 1px solid $borderColor
</style>
