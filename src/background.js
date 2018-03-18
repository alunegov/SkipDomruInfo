chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(`details.url = ${details.url}`);
    const url = new URL(details.url);
    const params = new URLSearchParams(url.search);
    let resp;
    if (params.has('ourl')) {
      const ourl = params.get('ourl');
      console.log(`redirecting to ${ourl}`);
      resp = { redirectUrl: ourl };
    } else {
      console.log('ourl not found');
      resp = { cancel: false };
    }
    return resp;
  },
  { urls: ['*://info.ertelecom.ru/*'] },
  ['blocking'],
);
