<template>
	<div>
		<div v-for="extensionGroup in extensions" :key="extensionGroup[0].lang">
			<h2>{{ langName(extensionGroup[0].lang) }}</h2>
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
				<a :href="apkUrl(extension.apk)" class="button" download>Download</a>
			</div>
		</div>
	</div>
</template>

<script>
const axios = require('axios')
const groupBy = require('lodash/groupBy')
const sortBy = require('lodash/sortBy')
const ISO6391 = require('iso-639-1').default

const EXTENSION_JSON = 'https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/index.json'

export default {
	data: function () {
		return {
			extensions: []
		}
	},
	methods: {
		langName: code => code === 'all' ? 'All' : ISO6391.getName(code),
		iconUrl (pkg) {
			const pkgName = pkg.substring(0, pkg.lastIndexOf('.'))
			return `https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/icon/${pkgName}.png`
		},
		apkUrl: apk => `https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/apk/${apk}`
	},
	async beforeMount () {
		const { data } = await axios.get(EXTENSION_JSON)
		const values = Object.values(groupBy(data, 'lang'))
		this.$data.extensions = sortBy(values, [g => this.langName(g[0].lang)])
	}
}
</script>

<style>
.extension {
	display: flex;
	align-items: center;
	padding: 0.4em 0.2em;
}

.extension:not(:last-child) {
	border-bottom: 1px solid #eaecef;
}

.extension img {
	margin-right: 0.5em;
}

.extension .extension-text {
	flex: 1;
}

.extension .extension-text .down {
	font-size: 0.8rem;
	font-family: monospace;
	color: #6c757d;
}

.extension .button {
    display: inline-block;
	font-size: 0.8em;
    color: #fff;
    background-color: #2e84bf;
    padding: 0.3rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid #2977ac;
	text-transform: uppercase;
}

.extension .button:hover {
	background-color: #3992cf;
	text-decoration: none !important;
}

.bold {
	font-weight: bold;
}

@media (max-width: 767px) {
	.extension .extension-text .down {
		display: none;
	}
}
</style>
