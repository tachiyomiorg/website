<template>
	<div>
		<div v-for="extensionGroup in extensions" :key="extensionGroup[0].lang">
			<h3>{{ langName(extensionGroup[0].lang) }}</h3>
			<div class="extension" v-for="extension in extensionGroup" :key="extension.apk">
				<img :src="iconUrl(extension.apk)" width="42" height="42">
				<div class="extension-text">
					<div class="upper">
						<span class="bold">{{ extension.name.split(': ')[1] }}</span>
						<Badge :text="'v' + extension.version"/>
					</div>
					<div class="down">
						{{ extension.pkg }}
					</div>
				</div>
				<a
					:href="apkUrl(extension.apk)"
					class="button"
					title="Download APK"
					download>
					<font-awesome-icon icon="download" />
					<span>Download</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';
import ISO6391 from 'iso-639-1';

const EXTENSION_JSON = 'https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/index.json';

export default {
	data () {
		return {
			extensions: []
		}
	},

	methods: {
		langName: code => code === 'all' ? 'All' : `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`,
		iconUrl (pkg) {
			const pkgName = pkg.substring(0, pkg.lastIndexOf('.'));
			return `https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/icon/${pkgName}.png`;
		},
		apkUrl: apk => `https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/apk/${apk}`
	},

	async beforeMount () {
		const { data } = await axios.get(EXTENSION_JSON);
		const values = Object.values(groupBy(data, 'lang'));
		this.$data.extensions = sortBy(values, [g => this.langName(g[0].lang)]);
	}
}
</script>

<style lang="scss">
.extension {
	display: flex;
	align-items: center;
	padding: 0.4em 0.2em;

	&:not(:last-child) {
		border-bottom: 1px solid #eaecef;
	}

	img {
		margin-right: 0.5em;
	}

	.extension-text {
		flex: 1;

		.down {
			font-size: 0.8rem;
			font-family: monospace;
			color: #6c757d;
		}
	}

	.button {
		display: inline-block;
		font-size: 0.8em;
		color: #fff;
		background-color: #2e84bf;
		padding: 0.5rem;
		border-radius: 4px;
		transition: background-color 0.1s ease;
		box-sizing: border-box;
		border-bottom: 1px solid #2977ac;
		text-transform: uppercase;

		&:hover {
			background-color: #3992cf;
			text-decoration: none !important;
		}

		svg + span {
			margin-left: 0.25rem;
		}
	}
}

@media (max-width: 767px) {
	.extension {
		.extension-text .down, .button span {
			display: none;
		}
	}
}
</style>
