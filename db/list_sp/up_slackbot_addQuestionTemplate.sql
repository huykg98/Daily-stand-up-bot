
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_addQuestionTemplate//
CREATE PROCEDURE `up_slackbot_addQuestionTemplate`(pQuestionTemplateName varchar(50),pDescription varchar(100))
BEGIN
	insert into slackbot_daily_report_question_template (question_template_name, description)
    value (pQuestionTemplateName,pDescription);
    select last_insert_id() as id;
END

