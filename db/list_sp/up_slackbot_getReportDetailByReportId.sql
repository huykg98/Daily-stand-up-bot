
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getReportDetailByReportId//
CREATE PROCEDURE `up_slackbot_getReportDetailByReportId`(pReportId VARCHAR(45))
BEGIN
	SELECT		report_content_detail_id,
				label,
                value,
                report_content_id
                
	FROM 		slackbot_dailyreport_content_detail
    WHERE 		report_content_id = pReportId;
    
END//
