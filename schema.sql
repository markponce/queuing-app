CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `departments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `letter` varchar(45) DEFAULT NULL,
  `start` int(10) unsigned DEFAULT '0',
  `status` tinyint(4) DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `counters` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `department_id` int(10) unsigned DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `queues` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `department_id` int(10) unsigned DEFAULT NULL,
  `counter_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `departments` (`name`, `letter`, `start`, `status`, `created_at`, `updated_at`) VALUES ('Bills Payment', 'BP', '1000', '1', current_timestamp, current_timestamp);
INSERT INTO `departments` (`name`, `letter`, `start`, `status`, `created_at`, `updated_at`) VALUES ('Money Transfer', 'MT', '1000', '1', current_timestamp, current_timestamp);
INSERT INTO `departments` (`name`, `letter`, `start`, `status`, `created_at`, `updated_at`) VALUES ('Foreign Exchange', 'FE', '1000', '1', current_timestamp, current_timestamp);

INSERT INTO `sequelize`.`counters` (`name`, `status`, `created_at`, `updated_at`, `department_id`) VALUES ('Counter 1', '1', current_timestamp, current_timestamp, '1');
INSERT INTO `sequelize`.`counters` (`name`, `status`, `created_at`, `updated_at`, `department_id`) VALUES ('Counter 2', '1', current_timestamp, current_timestamp, '1');
INSERT INTO `sequelize`.`counters` (`name`, `status`, `created_at`, `updated_at`, `department_id`) VALUES ('Counter 3', '1', current_timestamp, current_timestamp, '2');
INSERT INTO `sequelize`.`counters` (`name`, `status`, `created_at`, `updated_at`, `department_id`) VALUES ('Counter 4', '1', current_timestamp, current_timestamp, '2');
INSERT INTO `sequelize`.`counters` (`name`, `status`, `created_at`, `updated_at`, `department_id`) VALUES ('Counter 5', '1', current_timestamp, current_timestamp, '3');
INSERT INTO `sequelize`.`counters` (`name`, `status`, `created_at`, `updated_at`, `department_id`) VALUES ('Counter 6', '1', current_timestamp, current_timestamp, '3');
