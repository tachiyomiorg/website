<template>
	<ul class="noSelect">
		<li>
			<a class="action-button" rel="noopener noreferrer" :href="browserDownloadUrl || null" :title="tagName" download>
				<div class="download stable">
					<font-awesome-icon icon="download" />
					<span class="df">Download latest</span>
					<span class="dfn">Stable release</span>
				</div>
			</a>
		</lI>
		<li>
			<a href="http://tachiyomi.kanade.eu/latest">
				<div class="download dev">
					<font-awesome-icon icon="bug" />
					<span class="df">Download latest</span>
					<span class="dfn">Dev release</span>
				</div>
			</a>
		</li>
	</ul>
</template>

<style scoped>
ul {
	width: 100%;
	text-align: center;
	margin: 0;
	padding: 0;
}

li {
	display: inline-block;
	margin: 10px;
}

.download {
	width: 200px;
	height: 75px;
	float: left;
	border-radius: 5px;
	position: relative;
	cursor: pointer;
}

.download.stable {
	background: #2E84BF;
	color: #fff;
}

.download.dev {
	background: #476582;
	color: #fff;
}

.download > svg {
	font-size: 32px;
	color: #fff;
	position: absolute;
	top: 50%;
	left: 20px;
	height: 1em;
	width: 1em;
	transform: translateY(-50%);
}

.download:hover {
	filter: brightness(110%);
}

.df,
.dfn {
	position: absolute;
	left: 70px;
}

.df {
	top: 20px;
	font-size: .68em;
}

.dfn {
	top: 33px;
	font-size: 1.08em;
}

.noSelect {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
</style>

<script>
import axios from 'axios';

const RELEASE_URL = 'https://api.github.com/repos/inorichi/tachiyomi/releases/latest';

export default {

	data () {
		return {
			tagName: '',
			browserDownloadUrl: '',
		}
	},

	async mounted () {
		const { data } = await axios.get(RELEASE_URL);
		// Maybe eventually some release has more than the apk in assets.
		const apkAsset = data.assets.find(a => a.name.includes('.apk'));
		// Set the values.
		this.$data.tagName = data.tag_name;
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	}
}
</script>