
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDailyStandupList_V1_0//
CREATE PROCEDURE `up_slackbot_getDailyStandupList_V1_0`()
BEGIN
	Select `t1`.dialog_id, `t1`.title, `t1`.date_created, `t1`.state,`t2`.question_template_name, `t3`.period	
	FROM `slackbot_dailyreport_dialog_form` as `t1`
    INNER JOIN `slackbot_daily_report_question_template` as `t2`
	ON `t1`.template_id =`t2`.template_id 	
	INNER JOIN `slackbot_schedule` as `t3`
	ON `t3`.schedule_id = `t1`.schedule_id;
END//
