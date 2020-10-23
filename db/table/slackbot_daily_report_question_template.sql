
CREATE TABLE `slackbot_daily_report_question_template` (
  `template_id` int(11) NOT NULL AUTO_INCREMENT,
  `question_template_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`template_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
