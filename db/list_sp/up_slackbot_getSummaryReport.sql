
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getSummaryReport//
CREATE PROCEDURE `up_slackbot_getSummaryReport`(pFromDate BIGINT(8), pToDate BIGINT(8))
BEGIN
    
    DECLARE vFromDate BIGINT(8);
    DECLARE vToDate BIGINT(8);
    
	CREATE TEMPORARY TABLE IF NOT EXISTS temp(
		date BIGINT(8),
        total INT
    );

    SET vFromDate = pFromDate;
    SET vToDate = pToDate;
    
    WHILE vFromDate < vToDate DO	
		 INSERT INTO temp(date, total) VALUES (vFromDate, 
			(SELECT COUNT(report_content_id)
            FROM slackbot_dailyreport_content
            WHERE timestamp BETWEEN vFromDate AND vFromDate + 86400)
         );			
         SET vFromDate = vFromDate + 86400;
	END WHILE;
    
    SELECT date,
	       total
	FROM   temp;
    
	DROP TEMPORARY TABLE IF EXISTS temp;
END//
