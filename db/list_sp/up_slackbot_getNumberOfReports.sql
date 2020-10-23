
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getNumberOfReports//
CREATE PROCEDURE `up_slackbot_getNumberOfReports`(pDate BIGINT(8))
BEGIN
	SELECT	
    (SELECT COUNT(report_content_id) AS complete
     FROM slackbot_dailyreport_content
     WHERE timestamp BETWEEN pDate AND pDate + 86400) AS completed,
     
    (SELECT COUNT(user_id) AS total
    FROM slackbot_dailyreport_user) AS total;

END//
