DROP TABLE IF EXISTS `base_code`.`bcode_uids`;
CREATE TABLE IF NOT EXISTS `bcode`.`bcode_uids`( 
	bcode_uid varchar(50) NOT NULL UNIQUE,
	bcode_uid_generated DATETIME DEFAULT CURRENT_TIMESTAMP,
	bcode_uid_retired DATETIME DEFAULT CURRENT_TIMESTAMP,
	bcode_uid_target varchar(512),
	PRIMARY KEY ( bcode_uid )
);