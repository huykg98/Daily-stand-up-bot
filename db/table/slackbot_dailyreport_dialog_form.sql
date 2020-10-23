
CREATE TABLE `slackbot_dailyreport_dialog_form` (
  `dialog_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `submit_label` varchar(45) DEFAULT 'Submit',
  `notify_on_cancel` tinyint(1) NOT NULL DEFAULT '1',
  `state` varchar(45) DEFAULT NULL,
  `date_created` date DEFAULT NULL,
  `template_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`dialog_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
