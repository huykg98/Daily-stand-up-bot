
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getUserById//
CREATE PROCEDURE `up_slackbot_getUserById`(pUserId VARCHAR(45))
BEGIN
	SELECT  	user_id,
				user_name
                
	FROM 		slackbot_dailyreport_user
    WHERE 		user_id = pUserId;
    
END//
