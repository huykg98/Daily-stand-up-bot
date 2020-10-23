
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDailyStandupList//
CREATE PROCEDURE `up_slackbot_getDailyStandupList`()
BEGIN
	Select `df`.dialog_id, `df`.title, `df`.date_created, `df`.state,`t`.question_template_name, `s`.period	
	FROM `slackbot_dailyreport_dialog_form` as `df`
    INNER JOIN `slackbot_daily_report_question_template` as `t`
	ON `df`.template_id =`t`.template_id 	
    INNER JOIN `slackbot_channel` as `c`
	ON `df`.dialog_id =`c`.dialog_id 
	INNER JOIN `slackbot_schedule` as `s`
	ON `s`.schedule_id = `df`.schedule_id;
END//
