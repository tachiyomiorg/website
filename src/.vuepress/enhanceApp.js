import "./styles/animate.css";
import "./styles/sweetalert2.css";
import "vue-material-design-icons/styles.css";
import "vue-good-table/dist/vue-good-table.css";

import { VueAgile } from "vue-agile";
import { VueGoodTable } from "vue-good-table";
import VueSweetalert2 from "vue-sweetalert2";
import VueMoment from "vue-moment";
import Element from "element-ui";

import store from "./store";

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData, // site metadata
}) => {
	// eslint-disable-next-line vue/match-component-file-name
	Vue.component("Agile", VueAgile);
	// eslint-disable-next-line vue/match-component-file-name
	Vue.component("VueGoodTable", VueGoodTable);
	Vue.use(VueSweetalert2);
	Vue.use(VueMoment);
	Vue.use(Element);
	Vue.mixin({ store });
	// Reroute to new pages
	router.beforeEach((to, from, next) => {
		const redirectList = {
			"/help/guides/troubleshooting-problems/": "/help/guides/troubleshooting/",
			"/help/guides/reading-local-manga/": "/help/guides/local-manga/",
			"/help/guides/creating-backups/": "/help/guides/backups/",
		};
		const redirect = redirectList[to.path];

		if (redirect) {
			next({ path: redirect });
		} else next();
	});
};
