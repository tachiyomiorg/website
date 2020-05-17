import "./styles/fonts.styl";
import "./styles/animate.css";
import "./styles/sweetalert2.css";
import "vue-material-design-icons/styles.css";

import { VueAgile } from "vue-agile";
import VueSweetalert2 from "vue-sweetalert2";

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData, // site metadata
}) => {
	// eslint-disable-next-line vue/match-component-file-name
	Vue.component("Agile", VueAgile);
	Vue.use(VueSweetalert2);
};
