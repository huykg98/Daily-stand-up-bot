
CREATE TABLE `slackbot_dailyreport_content` (
  `report_content_id` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `channel_id` varchar(45) NOT NULL,
  `timestamp` bigint(8) NOT NULL,
  PRIMARY KEY (`report_content_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
