import ISO6391 from "iso-639-1";

export function simpleLangName(code) {
	return code === "all" ? "All" : ISO6391.getName(code);
}

export function langName(code) {
	return code === "all" ? "All" : `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`;
}
