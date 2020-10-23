
CREATE TABLE `slackbot_dailyreport_dialog_form_details` (
  `detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `template_id` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `label` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT 'textarea',
  `subtype` varchar(45) DEFAULT NULL,
  `placeholder` varchar(255) DEFAULT NULL,
  `optional` tinyint(1) DEFAULT '0',
  `max_length` int(11) DEFAULT '3000',
  `min_length` int(11) DEFAULT '0',
  `hint` varchar(45) DEFAULT NULL,
  `value` text,
  PRIMARY KEY (`detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
