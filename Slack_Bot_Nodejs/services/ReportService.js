const con = require('./../config/connection')

exports.addReport = (report) => {
    var sql = "call up_slackbot_addReportContent(?,?,?,?)";
    var params = [report.user_id , report.channel_id, report.id, report.timestamp]
    con.query(sql, params, function(err, result){
        if(err) throw err;
    })
}

exports.addReportDetail = (reportDetail) => {
    var sql = "call up_slackbot_addReportContentDetail(?,?,?)";
    var params = [reportDetail.label , reportDetail.value, reportDetail.reportId]
    console.log(params)
    con.query(sql, params, function(err, result){
        if(err) throw err;
    })
}