// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import CustomLayout from "./layouts/CustomLayout.vue";
import "./styles/base.styl";

export default {
	extends: Theme,
	Layout: CustomLayout,
	enhanceApp({ app, router, siteData }) {
		// ...
	},
};
