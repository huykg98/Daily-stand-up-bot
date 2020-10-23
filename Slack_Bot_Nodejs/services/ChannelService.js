const con = require('./../config/connection');
const slack_apis = require('./../slack_apis');

exports.addChannel = (channel) => { 
    var sql = "call up_slackbot_addChannel(?,?)";
    var params = [channel.id , channel.name]
    con.query(sql, params, function(err, result){
        if(err) throw err;
    })
}

exports.checkChannelExist = (channel_id, callback) => { 
    var sql = "call up_slackbot_getChannelById(?)";
    var params = [channel_id]
    con.query(sql, params, function(err, result){
        if(err) throw err;
        if(result[0].length == 0) callback(false)
        else callback(true)
    })
}

// exports.addAllChannel = () => { 
//     slack_apis.listChannel().then(res => {
//         const listChannel = res.channels;
//         for(const channelDetail in listChannel){
//             var channel = {
//                 id: channelDetail.id,
//                 name: channelDetail.name
//             }
//             checkChannelExist(channel.id, function(isExist){
//                 if(!isExist) addChannel(channel);
//             })
//         } 
//     })
// }

