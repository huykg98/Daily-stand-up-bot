
CREATE TABLE `slackbot_dailyreport_content_detail` (
  `report_content_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `label` text,
  `value` text,
  `report_content_id` varchar(45) NOT NULL,
  PRIMARY KEY (`report_content_detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
