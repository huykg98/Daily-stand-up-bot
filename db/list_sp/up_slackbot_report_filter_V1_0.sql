
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_report_filter_V1_0//
CREATE PROCEDURE `up_slackbot_report_filter_V1_0`(
							pFromDate BIGINT(8), pToDate BIGINT(8), 
							pUsername VARCHAR(45), pChannel VARCHAR(45))
BEGIN
	SET @queryStr = CONCAT(
		'SELECT		rp.report_content_id,
					rp.user_id,
					rp.channel_id,
					rp.timestamp,
					sl.channel_name,
					su.user_name 
					
		FROM 		slackbot_dailyreport_content AS rp
		JOIN		slackbot_channel AS sl ON sl.channel_id = rp.channel_id
		JOIN		slackbot_dailyreport_user AS su ON su.user_id = rp.user_id'
    , ' WHERE  rp.timestamp BETWEEN ', pFromDate, ' AND ', pToDate, '');
    
    IF pChannel <> '' THEN 
		SET @queryStr = CONCAT(@queryStr , ' AND rp.channel_id = \'', pChannel, '\'');
	END IF;
    
    IF pUsername <> '' THEN 
		SET @queryStr = CONCAT(@queryStr , ' AND user_name = \'', pUsername, '\'');
	END IF;
    
	PREPARE STMT FROM @queryStr; 
	EXECUTE STMT;
	DEALLOCATE PREPARE STMT ;
    
END//
