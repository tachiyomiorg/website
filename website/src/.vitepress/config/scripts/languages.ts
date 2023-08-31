export function simpleLangName(code: string) {
	if (code === "all") {
		return "All";
	}
	const namesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
	return namesInEnglish.of(code)!;
}

export function langName(code: string) {
	if (code === "all") {
		return "All";
	}
	const namesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
	const namesInNative = new Intl.DisplayNames([code], { type: "language" });
	return `${namesInEnglish.of(code)} - ${namesInNative.of(code)}`;
}
