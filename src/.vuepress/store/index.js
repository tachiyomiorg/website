import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { GITHUB_LATEST_API, GITHUB_PREVIEW_API } from "../constants";

const worker = (function() {
	let networkMap = new Map()

	// Makes sure there is only one network call to API 
	// Everyone else wait for promise
	function _getDataFromGithub(name, url) {
		if (networkMap.has(name)) {
			console.log("Returning call: " + name)
			return networkMap.get(name)
		}

		console.log("Calling server: " + name)
		const call = axios.get(url)
		.then((value) => {
			networkMap.delete(name)
			return Promise.resolve(value);
		})
		.catch((reason) => {
			networkMap.delete(name)
			return Promise.reject(reason);
		})

		networkMap.set(
			name,
			call
		)

		return call 
	}

	let dataMap = new Map()

	const now = new Date().getTime();

	// Makes sure there is only one mutation for preview
	// Everyone else wait for promise
	function _getPreviewData(store, name) {
		if (dataMap.has(name)) {
			console.log("Returning promise for preview")
			return dataMap.get(name)
		}

		console.log("Creating promise for preview")
		const data = _getDataFromGithub(name, GITHUB_PREVIEW_API).then(({ data }) => {
			const object = {
				updated: now,
				data,
			};
			store.commit("setPreviewReleaseData", object);
			dataMap.delete(name)
			return Promise.resolve(store.state.preview)
		}).catch((reason) => {
			const object = {
				updated: null,
				data: null,
			};
			store.commit("setPreviewReleaseData", object);
			dataMap.delete(name)
			return Promise.reject(reason)
		})

		dataMap.set(
			name,
			data
		)

		return data
	}

	// Makes sure there is only one mutation for stable
	// Everyone else wait for promise
	function _getStableData(store, name) {
		if (dataMap.has(name)) {
			console.log("Returning promise for stable")
			return dataMap.get(name)
		}

		console.log("Creating promise for stable")
		const data = _getDataFromGithub(name, GITHUB_LATEST_API).then(({ data }) => {
			const object = {
				updated: now,
				data,
			};
			store.commit("setStableReleaseData", object);
			dataMap.delete(name)
			return Promise.resolve(store.state.stable)
		}).catch((reason) => {
			const object = {
				updated: null,
				data: null,
			};
			store.commit("setStableReleaseData", object);
			dataMap.delete(name)
			return Promise.reject(reason)
		})

		dataMap.set(
			name,
			data
		)

		return data
	}

	return {
		getPreviewData(store, name) {
			return _getPreviewData(store, name)
		},
		getStableData(store, name) {
			return _getStableData(store, name)
		}
	}
})()

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
		setStableReleaseData(state, object) {
			// eslint-disable-next-line no-param-reassign
			state.stable = object;
		},
		setPreviewReleaseData(state, object) {
			// eslint-disable-next-line no-param-reassign
			state.preview = object;
		},
	},
	actions: {
		getStableReleaseData({ commit }) {
			const { updated } = this.state.stable;
			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return Promise.resolve(this.state.stable);
			}

			return worker.getStableData(this, "stable")
		},
		getPreviewReleaseData({ commit }) {
			const { updated } = this.state.preview;
			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return Promise.resolve(this.state.preview);
			}

			return worker.getPreviewData(this, "preview")
		},
	},
});
