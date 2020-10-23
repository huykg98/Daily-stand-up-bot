
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getAllUser//
CREATE PROCEDURE `up_slackbot_getAllUser`()
BEGIN
	SELECT		user_id,
				user_name
                
	FROM 		slackbot_dailyreport_user;
    
END//
