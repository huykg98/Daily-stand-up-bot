
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_updateQuestionTemplate//
CREATE PROCEDURE `up_slackbot_updateQuestionTemplate`(templateId int,questionName varchar(50),Qdescription varchar(50))
BEGIN
	update slackbot_daily_report_question_template
    set question_template_name=questionname, description=Qdescription
    where template_id=templateId;
END//

