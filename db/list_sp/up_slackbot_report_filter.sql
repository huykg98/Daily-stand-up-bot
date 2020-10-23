
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_report_filter//
CREATE CREATE DEFINER=`intern`@`%` PROCEDURE `up_slackbot_report_filter`(
							pFromDate BIGINT(8), pToDate BIGINT(8), 
							pUsername VARCHAR(45), pChannel VARCHAR(45))
BEGIN
	
	CREATE TEMPORARY TABLE IF NOT EXISTS temp AS(
		SELECT		rp.report_content_id,
					rp.user_id,
					rp.channel_id,
					rp.timestamp,
					sl.channel_name,
					su.user_name 
					
		FROM 		slackbot_dailyreport_content AS rp
		JOIN		slackbot_channel AS sl ON sl.channel_id = rp.channel_id
		JOIN		slackbot_dailyreport_user AS su ON su.user_id = rp.user_id		
		
		WHERE  		rp.timestamp BETWEEN pFromDate AND pToDate
    );
    
    IF pUsername = '' AND pChannel = '' THEN 
		SELECT		report_content_id,
					user_id,
					channel_id,
					timestamp,
					channel_name,
					user_name 
		FROM 		temp;
	END IF;
    
    IF pUsername = '' AND pChannel <> '' THEN 
		SELECT		report_content_id,
					user_id,
					channel_id,
					timestamp,
					channel_name,
					user_name 
		FROM 		temp
        WHERE		channel_id = pChannel;
	END IF;
    
    IF pUsername <> '' AND pChannel = '' THEN 
		SELECT		report_content_id,
					user_id,
					channel_id,
					timestamp,
					channel_name,
					user_name 
		FROM 		temp
        WHERE		user_name = pUsername;
	END IF;
    
    IF pUsername <> '' AND pChannel <> '' THEN 
		SELECT		report_content_id,
					user_id,
					channel_id,
					timestamp,
					channel_name,
					user_name 
		FROM 		temp
        WHERE		user_name = pUsername AND channel_id = pChannel;
	END IF;
    
    DROP TEMPORARY TABLE IF EXISTS temp;
    
END//
