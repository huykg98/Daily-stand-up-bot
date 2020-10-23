const con = require('./../config/connection')

exports.getDialogByChannelId = (channel_id, callback) => {
    //var sql = `select dialog_id from slackbot_channel where channel_id = \"${channel_id}\"`
    var sql = `call up_slackbot_getDialogIdByChannelId(?)`
    var params = [channel_id]
        con.query(sql ,params ,function(err, result) {
            if (err) throw err;
            if(!result[0][0].dialog_id) callback(0)
            else {
                //var sql = `select * from slackbot_dailyreport_dialog_form where dialog_id = \"${result[0][0].dialog_id}\"`
                var sql = `call up_slackbot_getDialogByDialogId(?)`
                var params = [result[0][0].dialog_id]
                con.query(sql, params, function (err, result) {
                    if (err) throw err;   
                    var dialog = {
                        "channel_id": result[0][0].channel_id,
                        "title": result[0][0].title,
                        "submit_label": result[0][0].submit_label,
                        "notify_on_cancel": result[0][0].notify_on_cancel,
                        "state": result[0][0].state,
                        "elements": []
                    }
                    
                    //var sql = `select * from slackbot_dailyreport_dialog_form_details where dialog_id = \"${result[0][0].dialog_id}\"`
                    var sql = `call up_slackbot_getDialogDetailByTemplateId(?)`;
                    console.log(result[0][0]);
                    var params = [result[0][0].template_id]
                    con.query(sql, params, function (err, result) {
                        if (err) throw err;
                        console.log(result[0])
                        for(var i=0; i < result[0].length; i++) {
                            var element = {
                                "name": result[0][i].name,
                                "label": result[0][i].label,
                                "type" : result[0][i].type,
                                "subtype" : result[0][i].subtype,
                                "placeholder": result[0][i].placeholder,
                                "optional" : result[0][i].optional,
                                "max_length" : result[0][i].max_length,
                                "min_length": result[0][i].min_length,
                                "hint" : result[0][i].hint,
                                "value": result[0][i].value
                            }
                            dialog.elements.push(element)          
                        }
                        callback(dialog)
                    });
                    
                });
            }
        })   
}
