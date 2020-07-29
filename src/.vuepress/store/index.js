import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

let call = null;
let promise;

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		stable: {
			error: false,
			updated: null,
			data: null,
		},
	},
	mutations: {
		setStableReleaseData(state, stable) {
			// eslint-disable-next-line no-param-reassign
			state.stable = stable;
		},
	},
	actions: {
		async getStableReleaseData({ commit }) {
			const { updated } = this.state.stable;

			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return this.state.stable;
			}

			if (call == null) {
				call = axios.get(RELEASE_URL);
				promise = call
					.then(({ data }) => {
						const object = {
							error: false,
							updated: now,
							data,
						};
						commit("setStableReleaseData", object);
						return new Promise((resolve) => resolve(object));
					})
					.catch((reason) => {
						console.error("Error connecting to GitHub", reason);
						const object = {
							error: true,
							updated: null,
							data: null,
						};
						commit("setStableReleaseData", object);
						return new Promise((resolve) => resolve(object));
					});
			}

			const result = await promise;
			call = null;
			return result;
		},
	},
});
