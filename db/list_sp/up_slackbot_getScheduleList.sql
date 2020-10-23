
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_getScheduleList//
CREATE PROCEDURE `up_slackbot_getScheduleList`()
BEGIN
	SELECT  schedule_id, remind_time, period, day_of_week, date_remind, timezone, remind_message FROM slackbot_schedule;
END//
