
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDialogDetailByTemplateId//
CREATE PROCEDURE `up_slackbot_getDialogDetailByTemplateId`(pTemplateId INT)
BEGIN
	SELECT  	`detail_id`,
				`name`,
				`label`,
				`type`,
				`placeholder`,
				`optional`,
                `max_length`,
                `min_length`,
                `hint`,
                `subtype`,
                `value`,
                `template_id`
                
	FROM 		slackbot_dailyreport_dialog_form_details
    WHERE 		template_id = pTemplateId;
    
END//
