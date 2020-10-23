
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getDailyStandupById//
CREATE PROCEDURE `up_slackbot_getListQuestionByDialogId`(pDialogId INT)
BEGIN
	Select `dfd`.label
	FROM `slackbot_dailyreport_dialog_form_details` as `dfd`
    INNER JOIN `slackbot_daily_report_question_template` as `t`
	ON `dfd`.template_id =`t`.template_id 
	INNER JOIN `slackbot_dailyreport_dialog_form` as `df`
	ON `df`.template_id = `t`.template_id
    WHERE `df`.dialog_id = pDialogId
    ;
END//
