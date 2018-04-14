console.log('Chrome extension ready to go');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);
    if (message) {
        setTimeout(function () {
            alert(message);
        }, 1000 * 60 * 15);
    }
    console.log(message);
}