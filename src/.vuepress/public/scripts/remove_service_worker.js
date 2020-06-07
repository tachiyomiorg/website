if ("serviceWorker" in navigator) {
	console.log("Checking for service worker...");
	navigator.serviceWorker.getRegistrations().then(function (registrations) {
		if (registrations.length < 1) {
			console.log("Found no service worker!");
			return;
		}
		registrations.forEach((registration) => {
			registration.unregister();
			console.log("Removed service worker!");
		});
	});
}
