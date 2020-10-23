
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_addReportContent//
CREATE PROCEDURE `up_slackbot_addReportContent`(pUserId VARCHAR(45), pChannelId VARCHAR(45), 
												pReportId VARCHAR(45), pTimestamp VARCHAR(45))
BEGIN
	INSERT INTO slackbot_dailyreport_content (
		user_id,
        channel_id,
        report_content_id,
        timestamp
    )
	VALUES (
		pUserId,
        pChannelId,
        pReportId,
        pTimestamp
    );
    
END//
