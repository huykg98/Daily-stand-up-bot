
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getScheduleForPostMessage//
CREATE PROCEDURE `up_slackbot_getScheduleForPostMessage`()
BEGIN
	SELECT 			sc.remind_time, 
					sc.day_of_week, 
                    sc.remind_message, 
                    cn.channel_id
                    
	FROM 			slackbot_schedule sc
	JOIN 			slackbot_dailyreport_dialog_form df ON sc.schedule_id = df.schedule_id
	JOIN 			slackbot_channel cn ON cn.dialog_id = df.dialog_id;
    
END//
