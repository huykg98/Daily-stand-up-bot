
CREATE TABLE `slackbot_schedule` (
  `schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `remind_time` varchar(255) NOT NULL,
  `period` varchar(255) NOT NULL,
  `day_of_week` varchar(255) DEFAULT NULL,
  `date_remind` date DEFAULT NULL,
  `timezone` varchar(255) DEFAULT NULL,
  `remind_message` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`schedule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
