
CREATE TABLE `slackbot_channel` (
  `channel_id` varchar(45) NOT NULL,
  `dialog_id` int(11) DEFAULT NULL,
  `channel_name` varchar(45) NOT NULL,
  PRIMARY KEY (`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
