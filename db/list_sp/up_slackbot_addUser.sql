
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_addUser//
CREATE PROCEDURE `up_slackbot_addUser`(pUserId VARCHAR(45), pUserName VARCHAR(255), pAvatarURL VARCHAR(255))
BEGIN
	INSERT INTO slackbot_dailyreport_user (
		user_id,
        user_name,
        avatar
    )
	VALUES (
		pUserId,
        pUserName,
        pAvatarURL
    );
    
END//
