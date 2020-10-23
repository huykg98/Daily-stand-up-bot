
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_update_daily_standup_byId//
CREATE PROCEDURE `up_slackbot_update_daily_standup_byId`(pDialogID int(11), pTitle varchar(255), pQuestionTemplateName varchar(255), pState  varchar(45), pRemindTime varchar(255), pPeriod varchar(255), pDayOfWeek varchar(255), pRemindMessage varchar(255))
BEGIN
	
    DECLARE v_template_id INT(11);	 
	DECLARE v_schedule_id INT(11);
    DECLARE v_channel_id INT(11);
	SET v_template_id = ( SELECT template_id FROM slackbot_daily_report_question_template WHERE question_template_name = pQuestionTemplateName );
	SET v_schedule_id = ( SELECT schedule_id FROM slackbot_dailyreport_dialog_form WHERE `dialog_id` = pDialogID);
	SET v_channel_id = ( SELECT channel_id FROM slackbot_channel WHERE `dialog_id` = pDialogID);
	
    UPDATE `slackbot_schedule` SET `remind_time` = pRemindTime, `period` = pPeriod, `day_of_week` = pDayOfWeek, `remind_message` = pRemindMessage
	WHERE (`schedule_id` = v_chedule_id);
    
    UPDATE `slackbot_dailyreport_dialog_form` as df SET `template_id` = v_template_id, `title` = pTitle, `state` = pState, `schedule_id` =v_schedule_id ;
    UPDATE `slackbot_` as df SET `template_id` = v_template_id, `title` = pTitle, `state` = pState, `schedule_id` =v_schedule_id ;
	UPDATE `slackbot_channel` SET `dialog_id` = pDialogID WHERE (`channel_id` = v_channel_id);
END//
