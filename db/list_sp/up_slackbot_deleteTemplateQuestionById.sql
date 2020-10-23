
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_deleteTemplateQuestionById//
CREATE PROCEDURE `up_slackbot_deleteTemplateQuestionById`(templateId int)
BEGIN
	delete from slackbot_daily_report_question_template
    where template_id = templateId;
END//

