chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const url = new URL(details.url)
        const params = new URLSearchParams(url.search)
        if (params.has("ourl")) {
            const ourl = params.get("ourl")
            console.log(`redirecting to ${ourl}`)
            return {redirectUrl: ourl}
        }
        else {
            console.log(`canceling ${details.url}`)
            return {cancel: true}
        }
    },
    {
        urls: ["*://info.ertelecom.ru/*"]
    },
    ["blocking"]
);