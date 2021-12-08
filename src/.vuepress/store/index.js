import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { GITHUB_PREVIEW_API, GITHUB_STABLE_API } from "../constants";

const worker = (function () {
	const networkMap = new Map();

	// Makes sure there is only one network call to API
	// Everyone else wait for promise
	function _getDataFromGithub(name, url) {
		if (networkMap.has(name)) {
			return networkMap.get(name);
		}

		const call = axios
			.get(url)
			.then((value) => {
				networkMap.delete(name);
				return Promise.resolve(value);
			})
			.catch((reason) => {
				networkMap.delete(name);
				return Promise.reject(reason);
			});

		networkMap.set(name, call);

		return call;
	}

	const dataMap = new Map();

	const now = new Date().getTime();

	// Makes sure there is only one mutation
	// Everyone else wait for promise
	function _getData(store, name, type, url) {
		if (dataMap.has(name)) {
			return dataMap.get(name);
		}

		const promise = _getDataFromGithub(name, url)
			.then(({ data }) => {
				const object = {
					updated: now,
					data,
				};
				store.commit({
					type,
					object,
				});
				dataMap.delete(name);
				return Promise.resolve();
			})
			.catch((reason) => {
				const object = {
					updated: null,
					data: null,
				};
				store.commit({
					type,
					object,
				});
				dataMap.delete(name);
				return Promise.reject(reason);
			});

		dataMap.set(name, promise);

		return promise;
	}

	return {
		getStableData(store, name) {
			return new Promise((resolve, reject) => {
				_getData(store, name, "setStableReleaseData", GITHUB_STABLE_API)
					.then(() => {
						resolve(store.state.stable);
					})
					.catch((reason) => {
						reject(reason);
					});
			});
		},
		getPreviewData(store, name) {
			return new Promise((resolve, reject) => {
				_getData(store, name, "setPreviewReleaseData", GITHUB_PREVIEW_API)
					.then(() => {
						resolve(store.state.preview);
					})
					.catch((reason) => {
						reject(reason);
					});
			});
		},
	};
})();

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		stable: {
			updated: null,
			data: null,
		},
		preview: {
			updated: null,
			data: null,
		},
	},
	mutations: {
		setStableReleaseData(state, { object }) {
			// eslint-disable-next-line no-param-reassign
			state.stable = object;
		},
		setPreviewReleaseData(state, { object }) {
			// eslint-disable-next-line no-param-reassign
			state.preview = object;
		},
	},
	actions: {
		getStableReleaseData() {
			const { updated } = this.state.stable;
			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return Promise.resolve(this.state.stable);
			}

			return worker.getStableData(this, "stable");
		},
		getPreviewReleaseData() {
			const { updated } = this.state.preview;
			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return Promise.resolve(this.state.preview);
			}

			return worker.getPreviewData(this, "preview");
		},
	},
});
