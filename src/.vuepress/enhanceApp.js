import "./styles/animate.css";
import "./styles/sweetalert2.css";
import "vue-material-design-icons/styles.css";
import Element from "element-ui";
import { VueAgile } from "vue-agile";
import VueMoment from "vue-moment";
import VueSweetalert2 from "vue-sweetalert2";
import store from "./store";

const redirectList = [
	{
		path: "/help/guides/troubleshooting-problems/",
		redirect: "/help/guides/troubleshooting/",
	},
	{
		path: "/help/guides/reading-local-manga/",
		redirect: "/help/guides/local-manga/",
	},
	{
		path: "/help/guides/creating-backups/",
		redirect: "/help/guides/backups/",
	},
];

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData, // site metadata
}) => {
	// eslint-disable-next-line vue/match-component-file-name
	Vue.component("VueAgile", VueAgile);
	Vue.use(VueSweetalert2);
	Vue.use(VueMoment);
	Vue.use(Element);
	Vue.mixin({ store });
	// Reroute to new pages
	router.addRoutes(redirectList);
};
