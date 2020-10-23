
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDialogByDialogId//
CREATE PROCEDURE `up_slackbot_getDialogByDialogId`(pDialogId INT)
BEGIN
	SELECT  	dialog_id,
				title,
				submit_label,
				notify_on_cancel,
				state,
                template_id,
                schedule_id
                
	FROM 		slackbot_dailyreport_dialog_form
    WHERE 		dialog_id = pDialogId;
    
END//
