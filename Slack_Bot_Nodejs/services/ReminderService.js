const con = require('./../config/connection');

exports.getListReminder = (callback) => {
  var sql = "call up_slackbot_getScheduleForPostMessage";
  con.query(sql, function(err, result){
      if(err) throw err;
      callback(result[0]);
  })
}
