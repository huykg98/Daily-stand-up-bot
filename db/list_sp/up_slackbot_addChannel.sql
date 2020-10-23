
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_addChannel//
CREATE PROCEDURE `up_slackbot_addChannel`(pChannelId VARCHAR(45), pChannelName VARCHAR(45))
BEGIN
	INSERT INTO slackbot_channel (
		channel_id,
        channel_name 
    )
	VALUES ( 
		pChannelId,
        pChannelName
    );
    
END//
