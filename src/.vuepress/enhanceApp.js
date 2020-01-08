import './styles/index.scss';
import './styles/fonts.scss'

import { VueAgile as Agile } from 'vue-agile'

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	Vue.component('Agile', Agile)
};
