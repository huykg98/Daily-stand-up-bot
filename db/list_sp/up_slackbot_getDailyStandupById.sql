
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDailyStandupById//
CREATE PROCEDURE `up_slackbot_getDailyStandupById`(pDialogId INT)
BEGIN
	Select `df`.dialog_id, `df`.title, `df`.date_created, `df`.state,`t`.question_template_name, `s`.period, `s`.day_of_week
	FROM `slackbot_dailyreport_dialog_form` as `df`
    INNER JOIN `slackbot_daily_report_question_template` as `t`
	ON `df`.template_id =`t`.template_id 	
    INNER JOIN `slackbot_channel` as `c`
	ON `df`.dialog_id =`c`.dialog_id 
	INNER JOIN `slackbot_schedule` as `s`
	ON `s`.channel_id = `c`.channel_id
    WHERE `df`.dialog_id = pDialogId 
    ;
END//
