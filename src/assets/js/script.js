addEventListener("hashchange", () => {
	var q = document.querySelector(location.hash)
	if (q instanceof HTMLHeadingElement && q.parentElement.parentElement instanceof HTMLDetailsElement)
		q.parentElement.parentElement.open = true;
})
if (location.hash) requestAnimationFrame(() => dispatchEvent(new HashChangeEvent("hashchange")));
if ('IntersectionObserver' in self) {
	const mo = new IntersectionObserver(i => {
		for (const s of i) {
			/** @type {HTMLVideoElement} */
			const v = s.target;
			if (s.isIntersecting && v.paused) {
				v.load()
				v.play()
			} else if (!v.paused) v.pause()
		}
	})
	for (let v of document.querySelectorAll('video')) {
		mo.observe(v)
		v.controls = false
	}
}
