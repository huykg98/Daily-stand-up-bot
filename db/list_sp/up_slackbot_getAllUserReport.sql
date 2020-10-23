
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getAllUserReport//
CREATE PROCEDURE `up_slackbot_getAllUserReport`()
BEGIN
	SELECT		rp.report_content_id,
				rp.user_id,
                rp.channel_id,
                rp.timestamp,
                sl.channel_name,
                su.user_name
                
	FROM 		slackbot_dailyreport_content AS rp
    JOIN		slackbot_channel AS sl ON sl.channel_id = rp.channel_id
    JOIN		slackbot_dailyreport_user AS su ON su.user_id = rp.user_id;
    
END//
