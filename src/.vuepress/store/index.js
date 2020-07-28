import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const preview = {
	updated: null,
	data: null,
};

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

let call = null;
let promise;

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		preview,
	},
	mutations: {
		preview(state, preview) {
			state.preview = preview;
		},
	},
	actions: {
		async preview({ commit }) {
			const { updated } = this.state.preview;

			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return this.state.preview;
			}

			if (call == null) {
				call = axios.get(RELEASE_URL);
				promise = new Promise(async (resolve, reject) => {
					const { data } = await call;
					const preview = {
						updated: now,
						data,
					};
					commit("preview", preview);
					resolve(preview);
				});
			}

			const preview = await promise;
			call = null;
			return preview;
		},
	},
});
