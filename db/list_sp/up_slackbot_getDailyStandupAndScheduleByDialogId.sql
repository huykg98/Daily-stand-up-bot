
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDailyStandupAndScheduleByDialogId//
CREATE PROCEDURE `up_slackbot_getDailyStandupAndScheduleByDialogId`(pDialogId INT)
BEGIN
	Select `df`.dialog_id, `df`.title,`df`.date_created, `df`.state,`t`.question_template_name, `s`.period, `s`.day_of_week,`s`.remind_time, `s`.remind_message
	FROM `slackbot_dailyreport_dialog_form` as `df`
    INNER JOIN `slackbot_daily_report_question_template` as `t`
	ON `df`.template_id =`t`.template_id 
	INNER JOIN `slackbot_schedule` as `s`
	ON `df`.schedule_id =`s`.schedule_id 
    WHERE `df`.dialog_id = pDialogId
    ;
END//
