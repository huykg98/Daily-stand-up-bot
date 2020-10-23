
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getChannelById//
CREATE PROCEDURE `up_slackbot_getChannelById`(pChannelId VARCHAR(45))
BEGIN
	SELECT  	channel_id,
				dialog_id,
				channel_name
                
	FROM 		slackbot_channel
    WHERE 		channel_id = pChannelId;
    
END//
