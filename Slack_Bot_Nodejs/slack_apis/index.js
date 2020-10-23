const fetch = require('node-fetch');

const BOT_USER_TOKEN = "xoxb-1126454039121-1126686512513-aW9r1D3GUNEQn9oZZayA16q7"

exports.postMessage = (message) => {
    fetch('https://slack.com/api/chat.postMessage',{
        method: "POST",
        headers: {'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': `Bearer ${BOT_USER_TOKEN}`},
        body: JSON.stringify(message)
        }).then(res => res.json())
        //.then(json => console.log(json));
}

exports.openDialog = (dialog) => {
    fetch('https://slack.com/api/dialog.open',{
        method: "POST",
        headers: {'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${BOT_USER_TOKEN}`},
        body: JSON.stringify(dialog)
        }).then(res => res.json())
        //.then(json => console.log(json));
}

exports.listChannel = () => {
    return fetch('https://slack.com/api/conversations.list',{
        method: "GET",
        headers: {'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${BOT_USER_TOKEN}`},
        }).then(res => res.json())
        //.then(json => console.log(json));
}

