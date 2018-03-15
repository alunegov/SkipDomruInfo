chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(`details.url = ${details.url}`)
        const url = new URL(details.url)
        const params = new URLSearchParams(url.search)
        if (params.has("ourl")) {
            const ourl = params.get("ourl")
            console.log(`redirecting to ${ourl}`)
            return { redirectUrl: ourl }
        }
        else {
            console.log(`ourl not found`)
            return { cancel: false }
        }
    },
    { urls: ["*://info.ertelecom.ru/*"] },
    ["blocking"]
);