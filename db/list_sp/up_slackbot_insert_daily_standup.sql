
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_insert_daily_standup//
CREATE PROCEDURE `up_slackbot_insert_daily_standup`( pTitle varchar(255), pQuestionTemplateName varchar(255), pState  varchar(45), pRemindTime varchar(255), pPeriod varchar(255), pDayOfWeek varchar(255), pRemindMessage varchar(255))
BEGIN
	
    DECLARE v_template_id INT(11);	 
	DECLARE v_schedule_id INT(11);	 
	SET v_template_id = ( SELECT template_id FROM slackbot_daily_report_question_template WHERE question_template_name = pQuestionTemplateName );
    
    INSERT INTO `slackbot_schedule` (`remind_time`, `period`, `day_of_week`, `remind_message`) 
    VALUES (pRemindTime, pPeriod, pDayOfWeek, pRemindMessage);
	SET v_schedule_id =  LAST_INSERT_ID();

    INSERT INTO `slackbot_dailyreport_dialog_form` (`template_id`, `title`, `state`, `date_created`, `schedule_id`)
 	VALUES (v_template_id, pTitle, pState, now(), v_schedule_id);
    SELECT LAST_INSERT_ID() as id;
END//
