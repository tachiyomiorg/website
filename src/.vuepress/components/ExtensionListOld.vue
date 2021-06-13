<template>
	<div class="extension-list">
		<span class="filters-list">
			<ElInput v-model="filters.search" placeholder="Search extensions by name..." clearable />

			<ElSelect v-model="filters.lang" placeholder="Show specific languages..." multiple clearable>
				<ElOption
					v-for="[group] in extensions"
					:key="group.lang"
					:label="group.lang === 'en' ? simpleLangName(group.lang) : langName(group.lang)"
					:value="group.lang"
				/>
			</ElSelect>

			<div>
				Sort by
				<ElRadioGroup v-model="filters.sort">
					<ElRadioButton label="Ascending"></ElRadioButton>
					<ElRadioButton label="Descending"></ElRadioButton>
				</ElRadioGroup>
			</div>

			<div>
				Display extensions with NSFW content?
				<ElRadioGroup v-model="filters.nsfw">
					<ElRadioButton label="Yes"></ElRadioButton>
					<ElRadioButton label="No"></ElRadioButton>
					<ElRadioButton label="Don't care"></ElRadioButton>
				</ElRadioGroup>
			</div>
		</span>

		<div v-if="loading" v-loading.lock="loading" style="min-height: 200px"></div>
		<div v-for="extensionGroup in filteredExtensions" :key="extensionGroup[0].lang">
			<h3>
				<span>
					{{
						extensionGroup[0].lang === "en"
							? simpleLangName(extensionGroup[0].lang)
							: langName(extensionGroup[0].lang)
					}}
				</span>

				<span class="extensions-total">
					Total:
					<span class="extensions-total-sum">
						{{ filteredExtensions.reduce((sum, item) => sum + item.length, 0) }}
					</span>
				</span>
			</h3>
			<div
				v-for="extension in extensionGroup"
				:id="extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')"
				:key="extension.apk"
				class="anchor"
			>
				<div class="extension">
					<a
						:href="`#${extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')}`"
						class="header-anchor"
						aria-hidden="true"
						@click.stop
					>
						#
					</a>
					<img class="extension-icon" :src="iconUrl(extension.apk)" width="42" height="42" />
					<div class="extension-text">
						<div class="upper">
							<span class="font-semibold">{{ extension.name.split(": ")[1] }}</span>
							<Badge :text="'v' + extension.version" />
						</div>
						<div class="down">
							{{ extension.pkg.replace("eu.kanade.tachiyomi.extension.", "") }}
						</div>
					</div>
					<a :href="apkUrl(extension.apk)" class="extension-download" title="Download APK" download>
						<MaterialIcon icon="cloud_download" />
						<span>Download</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import groupBy from "lodash.groupby";
import ISO6391 from "iso-639-1";
import { GITHUB_EXTENSION_JSON } from "../constants";

export default {
	data() {
		return {
			extensions: [],
			filters: {
				search: "",
				lang: [],
				nsfw: "Don't care",
				sort: "Ascending",
			},
			loading: true,
			observer: null,
		};
	},

	computed: {
		filteredExtensions() {
			const { extensions, filters } = this;

			const filtered = [];

			for (const group of extensions) {
				let filteredGroup = filters.lang.length ? (filters.lang.includes(group[0].lang) ? group : []) : group;

				if (filters.search) {
					filteredGroup = filteredGroup.filter((ext) =>
						ext.name.toLowerCase().includes(filters.search.toLowerCase())
					);
				}

				filteredGroup = filteredGroup.filter((ext) =>
					filters.nsfw === "Don't care" ? true : ext.nsfw === (filters.nsfw === "Yes" ? 1 : 0)
				);

				if (filters.sort && filters.sort === "Descending") {
					filteredGroup = filteredGroup.reverse();
				}

				if (filteredGroup.length) {
					filtered.push(filteredGroup);
				}
			}

			return filtered;
		},
	},

	async beforeMount() {
		const { data } = await axios.get(GITHUB_EXTENSION_JSON);
		const values = Object.values(groupBy(data, "lang"));
		values.sort((a, b) => {
			const langA = this.simpleLangName(a[0].lang);
			const langB = this.simpleLangName(b[0].lang);
			if (langA === "All" && langB === "English") {
				return -1;
			}
			if (langA === "English" && langB === "All") {
				return 1;
			}
			if (langA === "English") {
				return -1;
			}
			if (langB === "English") {
				return 1;
			}
			if (langA < langB) {
				return -1;
			}
			if (langA > langB) {
				return 1;
			}
			return 0;
		});
		this.$data.extensions = values;

		this.$nextTick(() => {
			this.loading = false;
		});

		console.log(this.$el)

		this.observer = new IntersectionObserver(this.onElementObserved, {
			root: this.$el,
			threshold: 0.5,
		});
	},

	created() {

	},

	updated() {
		if (window.location.hash) {
			window.location.replace(window.location.hash);
		}
	},

	methods: {
		onElementObserved(entries) {
			console.log("onElementObserved")
			entries.forEach(({ target, isIntersecting }) => {
				console.log(target, isIntersecting)
			});
		},
		simpleLangName: (code) => (code === "all" ? "All" : ISO6391.getName(code)),
		langName: (code) => (code === "all" ? "All" : `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`),
		iconUrl(pkg) {
			const pkgName = pkg.substring(0, pkg.lastIndexOf("."));
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${pkgName}.png`;
		},
		apkUrl: (apk) => `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${apk}`,
	},
};
</script>

<style lang="stylus">




</style>
