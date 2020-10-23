
CREATE TABLE `slackbot_dailyreport_dialog_form_details_select` (
  `select_id` int(11) NOT NULL,
  `detail_id` int(11) NOT NULL,
  `label` varchar(45) DEFAULT NULL,
  `value` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`select_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
