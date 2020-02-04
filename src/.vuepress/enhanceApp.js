import './styles/fonts.styl'

import { VueAgile } from 'vue-agile'

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	// eslint-disable-next-line vue/match-component-file-name
	Vue.component('Agile', VueAgile)
};
