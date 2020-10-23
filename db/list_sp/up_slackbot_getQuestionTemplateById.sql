
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getQuestionTemplateById//
CREATE PROCEDURE `up_slackbot_getQuestionTemplateById`(pTemplateId int)
BEGIN
	SELECT `q`.question_template_name, `q`.description, `q`.template_id
    FROM slackbot_daily_report_question_template AS `q`
    WHERE `q`.template_id = pTemplateId;
END//
