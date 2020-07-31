import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { GITHUB_LATEST_API } from "../constants";

let call = null;


Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		stable: {
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
		getStableReleaseData({ commit }) {
			return new Promise((resolve, reject) => {
				const { updated } = this.state.stable;
				const now = new Date().getTime();

				if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
					resolve(this.state.stable);
				}

				if (call == null) {
					call = axios.get(GITHUB_LATEST_API);
				}

				call.then(({ data }) => {
					const object = {
						updated: now,
						data,
					};
					commit("setStableReleaseData", object);
					call = null;
					resolve(this.state.stable);
				}).catch((reason) => {
					const object = {
						updated: null,
						data: null,
					};
					commit("setStableReleaseData", object);
					call = null;
					reject(reason);
				});
			});
		},
	},
});
