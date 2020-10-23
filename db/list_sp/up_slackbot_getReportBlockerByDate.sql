
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getReportBlockerByDate//
CREATE PROCEDURE `up_slackbot_getReportBlockerByDate`(pDate BIGINT(8))
BEGIN
	SELECT		su.user_name,
				sch.channel_name,
                sd.value
                
	FROM 		slackbot_dailyreport_content_detail sd
    JOIN		slackbot_dailyreport_content sc ON sd.report_content_id = sc.report_content_id
    JOIN		slackbot_dailyreport_user su ON sc.user_id = su.user_id
    JOIN		slackbot_channel sch ON sch.channel_id = sc.channel_id
    
    WHERE 		sc.timestamp BETWEEN pDate AND pDate + 86400 AND sd.label LIKE '%blocker%';
    
END//
