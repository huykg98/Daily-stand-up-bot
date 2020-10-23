
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_report_filter_V1_1//
CREATE PROCEDURE `up_slackbot_report_filter_V1_1`(
							pFromDate BIGINT(8), pToDate BIGINT(8), 
							pUsername VARCHAR(45), pChannel VARCHAR(45))
BEGIN
	SET @queryStr = CONCAT('
	select sdd.label, scd.value, temp.user_name, temp.timestamp
	from slackbot_channel sc 
	join slackbot_dailyreport_dialog_form sd on sc.dialog_id = sd.dialog_id
	join slackbot_dailyreport_dialog_form_details sdd on sd.template_id = sdd.template_id
	join 
	(SELECT		rp.report_content_id,
				sl.channel_id,
                su.user_name,
                rp.timestamp
						
			FROM 		slackbot_dailyreport_content AS rp
            JOIN        slackbot_dailyreport_user AS su ON su.user_id = rp.user_id
			JOIN		slackbot_channel AS sl ON sl.channel_id = rp.channel_id
		
			
			WHERE  		rp.timestamp BETWEEN ',pFromDate , ' AND ', pToDate, ') AS temp on temp.channel_id = sc.channel_id
	join slackbot_dailyreport_content_detail scd on scd.report_content_id = temp.report_content_id and scd.label = sdd.label
	where sc.channel_id = \'', pChannel, '\''
    );
    
	IF pUsername <> '' THEN 
		SET @queryStr = CONCAT(@queryStr , ' AND user_name = \'', pUsername, '\'');
	END IF;
    
	PREPARE STMT FROM @queryStr; 
	EXECUTE STMT;
	DEALLOCATE PREPARE STMT ;
END//
