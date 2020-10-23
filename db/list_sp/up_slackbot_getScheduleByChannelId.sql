
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getScheduleByChannelId//
CREATE PROCEDURE `up_slackbot_getScheduleByChannelId`(pChannelId varchar(255))
BEGIN
	SELECT  	remind_time,
				period,
				day_of_week,
				remind_message
	FROM 		slackbot_schedule
    WHERE 		channel_id = pChannelId;
    
END//
