const DialogService = require('./../services/DialogService');
const slack_apis = require('./../slack_apis');
const ReportService = require('./../services/ReportService');
var rand = require("generate-key");
const querystring = require('querystring');

exports.postDialogToSlackAPI =  (req, res) => {
    var body = '';
    req.on('readable', function() {
        body +=req.read();
    });
    
    req.on('end', function() {     
        res.json(); // Respone as fast as possible to avoid warning from slack (respone is unnecessary)
        body = body.substring(0, body.length - 4); // Remove unnecessary string to parse json  
        let bodyContent = querystring.parse(body)
        console.log(bodyContent)         
        DialogService.getDialogByChannelId(bodyContent.channel_id, function(dialogData){
            //console.log(dialogData)
            if(dialogData == 0){
                var message = {
                    "text": "Your channel not have any daily standup",
                    "channel": bodyContent.channel_id
                }
                slack_apis.postMessage(message);
            }
            else {
                let dialog = {
                    "trigger_id": "",
                    "dialog": {
                        "callback_id": "accident",
                        "title": dialogData.title,
                        "submit_label": dialogData.submit_label,
                        "notify_on_cancel": dialogData.notify_on_cancel,
                        "state": dialogData.state,
                        "elements": dialogData.elements
                    }
                }
                dialog.trigger_id = bodyContent.trigger_id;
                slack_apis.openDialog(dialog);
            }
        });
        
    })
}

exports.handleDialogAction = (req, res) => {
    var body = '';
    req.on('readable', function() {
        body +=req.read();
    });
    
    req.on('end', function() {     
        body = body.substring(0, body.length - 4); // Remove unnecessary string to parse json
        let bodyContent = JSON.parse(querystring.parse(body).payload)
        if(bodyContent.type === 'dialog_cancellation') {
            //Do nothing
        }
        if(bodyContent.type === 'dialog_submission'){
            var generateKey = rand.generateKey()
            var report = {
                id: generateKey,
                user_id: bodyContent.user.id,
                channel_id: bodyContent.channel.id,
                timestamp: bodyContent.action_ts
            } 
            ReportService.addReport(report);
            DialogService.getDialogByChannelId(bodyContent.channel.id, function(dialogData){   
                let text = `thanks <@${bodyContent.user.id}> for submit!\nyour data is: `;
                for (let i=0; i < dialogData.elements.length; i++) {
                    var reportDetail = {
                        label: dialogData.elements[i].label,
                        value: bodyContent.submission[dialogData.elements[i].name],
                        reportId: generateKey
                    }
                    ReportService.addReportDetail(reportDetail)
                    text += `\n:beginner: *${dialogData.elements[i].label}* \n ${bodyContent.submission[dialogData.elements[i].name]}`
                }
                text += "\n---------------------------------------------"
                var message = {
                    "text": text,
                    "channel": bodyContent.channel.id
                }
                slack_apis.postMessage(message);
                res.json();
            })
        }
    })
        
}