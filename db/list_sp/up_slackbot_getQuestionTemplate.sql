
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getQuestionTemplate//
CREATE PROCEDURE `up_slackbot_getQuestionTemplate`()
BEGIN
	select `t`.template_id,
			`t`.question_template_name,
            `t`.description
	from slackbot_daily_report_question_template as `t`;
END//
