
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_deleteDialogFormDetail_ByTemplateId//
CREATE PROCEDURE `up_slackbot_deleteDialogFormDetail_ByTemplateId`(templateId int)
BEGIN
	delete from slackbot_dailyreport_dialog_form_details
    where template_id = templateId;
END//

