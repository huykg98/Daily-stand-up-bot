
CREATE TABLE `pms_delegate_user` (
  `delegated_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `delegated_user_id` int(11) NOT NULL,
  `delegate_from_date` datetime NOT NULL,
  `delegate_expired_date` datetime NOT NULL,
  `delegate_type` enum('PR','PO') DEFAULT NULL,
  `specific_pr_po` varchar(15) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`delegated_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
