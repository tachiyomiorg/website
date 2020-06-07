console.log("Checking for service worker...")
navigator.serviceWorker.getRegistrations().then(function(registrations) { 
    if (registrations.length < 1) {
        console.log("Found no service worker!")
    }
    for(let registration of registrations) { 
        registration.unregister()
        console.log("*yeet* Removed service worker!")
    } 
})