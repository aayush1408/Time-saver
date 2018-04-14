
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let arr = [
        'Time flies like an arrow, fruit flies like a banana.',
        'Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.',
        'A man who dares to waste one hour of time has not discovered the value of life',
        'Time is a created thing. To say \'I don\'t have time,\' is like saying, \'I don\'t want to',
        'Those who make the worst use of their time are the first to complain of its brevity.',
        'Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.',
        'A comfort zone is beautiful place but nothing grows over there',
        'Time is what we want most,but what we use worst.'
    ];
    let rand = Math.floor(Math.random() * arr.length);
    let msg = arr[rand];
    console.log(rand);
    console.log(msg);
    chrome.tabs.sendMessage(tab.id, msg);
}
