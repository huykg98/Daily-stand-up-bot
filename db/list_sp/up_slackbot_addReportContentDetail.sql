
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_addReportContentDetail//
CREATE PROCEDURE `up_slackbot_addReportContentDetail`(pLabel VARCHAR(45), pValue VARCHAR(45), pReportContentId VARCHAR(45))
BEGIN
	INSERT INTO slackbot_dailyreport_content_detail (
		label,
        value,
        report_content_id
    )
	VALUES (
		pLabel,
        pValue,
        pReportContentId
    );
    
END//
