import './styles/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { VueAgile } from 'vue-agile'

library.add(faDownload);

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	Vue.component('font-awesome-icon', FontAwesomeIcon);
	Vue.component('agile', VueAgile)
};
