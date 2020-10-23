const ReminderService = require('./../services/ReminderService');
const slack_apis = require('./../slack_apis');
const schedule = require('node-schedule')
const querystring = require('querystring');
//'0 35 11 * * 1-5'

const dayOfWeekStringToArray = (str) => {
    const array = str.split(",");
    let dayOfWeek = [];
    for(let i=0; i<array.length; i++){
        if(array[i] != 0) dayOfWeek.push(i)
    }
    console.log(dayOfWeek);
    return dayOfWeek;
}

const remind1DailyReport = (remind, remindName) => {
    let dayOfWeek = dayOfWeekStringToArray(remind.day_of_week)

    let rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = dayOfWeek;
    rule.minute = remind.remind_time.split(":")[1];
    rule.hour = remind.remind_time.split(":")[0];

    schedule.scheduleJob(remindName,rule, function(){
        var message = {
            "text": remind.remind_message,
            "channel": remind.channel_id
        }
        slack_apis.postMessage(message);
    });
}

exports.remind_submit_daily_report = () => {
    ReminderService.getListReminder(function(listRemind){
        var jobList = schedule.scheduledJobs;
        for(var i = 0; i < listRemind.length; i++){
            var job = 'jobList.remind'+i;
            if(eval(job) != undefined) {
              eval(job+'.cancel()');
            }
        }

        for(let i=0 ; i<listRemind.length; i++){
            let remindName = "remind"+i;
            remind1DailyReport(listRemind[i], remindName)
        }
    });  
}

