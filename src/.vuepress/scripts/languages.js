import ISO6391 from "iso-639-1";

const ALL = "All";
const ALL_CODE = ALL.toLowerCase();
const PT_BR_CODE = "pt-br";
const PT_BR_SIMPLE_NAME = "Brazilian Portuguese";
const PT_BR_LANG_NAME = `${PT_BR_SIMPLE_NAME} (Português Brasileiro)`;

export function simpleLangName(code) {
	code = code.toLowerCase();
	if (code === ALL_CODE) {
		return ALL;
	} else if (code === PT_BR_CODE) {
		return PT_BR_SIMPLE_NAME;
	} else {
		return `${ISO6391.getName(code)}`;
	}
}

export function langName(code) {
	code = code.toLowerCase();
	if (code === ALL_CODE) {
		return ALL;
	} else if (code === PT_BR_CODE) {
		return PT_BR_LANG_NAME;
	} else {
		return `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`;
	}
}
