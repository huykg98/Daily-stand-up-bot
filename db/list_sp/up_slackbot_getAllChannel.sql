
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getAllChannel//
CREATE PROCEDURE `up_slackbot_getAllChannel`()
BEGIN
	SELECT  	channel_id,
				dialog_id,
				channel_name
                
	FROM 		slackbot_channel;
    
END//
