
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getListChannelByDialogId//
CREATE PROCEDURE `up_slackbot_getListChannelByDialogId`(pDialogId INT)
BEGIN
	SELECT  	channel_id,
				channel_name
                
	FROM 		slackbot_channel
    WHERE 		dialog_id = pDialogId;
END//
