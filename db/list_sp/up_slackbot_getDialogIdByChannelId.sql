
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDialogIdByChannelId//
CREATE PROCEDURE `up_slackbot_getDialogIdByChannelId`(pChannelId VARCHAR(45))
BEGIN
	SELECT  	dialog_id							
	FROM 		slackbot_channel
    WHERE 		channel_id = pChannelId;
    
END//
