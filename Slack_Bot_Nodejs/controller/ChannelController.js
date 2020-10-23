const ChannelService = require('./../services/ChannelService')
const slack_apis = require('./../slack_apis')

exports.addChannelToDatabaseAuto = (req, res) => {
    var body = '';
    req.on('readable', function() {
        body +=req.read();
    });
    
    req.on('end', function() {
      console.log(body)  
      body = body.substring(0, body.length - 4);
      let bodyContent = JSON.parse(body)
      if(bodyContent.challenge) {
        var data = {"challenge": bodyContent.challenge}
        res.json(data)
      }
      else {
        var channel = {
          id: bodyContent.event.channel.id,
          name: bodyContent.event.channel.name
        }
        ChannelService.checkChannelExist(channel.id, function(isExist){
          if(!isExist) ChannelService.addChannel(channel)
        })     
      }
    })
}

exports.addAllChannel = () => { 
  slack_apis.listChannel().then((res) => {
      const listChannel = res.channels;
      for(const channelDetail of listChannel){       
          ChannelService.checkChannelExist(channelDetail.id, function(isExist){ 
            var channel = {
              id: channelDetail.id,
              name: channelDetail.name
            }
            if(!isExist) ChannelService.addChannel(channel);
          })
      } 
  })
}