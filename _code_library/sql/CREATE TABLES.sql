mdictDROP TABLE IF EXISTS `raingarden`.`rg_uids`;
CREATE TABLE IF NOT EXISTS `raingarden`.`rg_uids`( 
	rg_uid varchar(50) NOT NULL UNIQUE,
    rg_uid_generated DATETIME DEFAULT CURRENT_TIMESTAMP,
    rg_uid_retired DATETIME DEFAULT CURRENT_TIMESTAMP,
    rg_uid_target varchar(512),
    PRIMARY KEY ( rg_uid )
);
DROP TABLE IF EXISTS `base_code`.`bcode_uids`;
CREATE TABLE IF NOT EXISTS `bcode`.`bcode_uids`( 
	bcode_uid varchar(50) NOT NULL UNIQUE,
    bcode_uid_generated DATETIME DEFAULT CURRENT_TIMESTAMP,
    bcode_uid_retired DATETIME DEFAULT CURRENT_TIMESTAMP,
    bcode_uid_target varchar(512),
    PRIMARY KEY ( bcode_uid )
);
DROP TABLE IF EXISTS `mdict`.`mdict_uids`;
CREATE TABLE IF NOT EXISTS `mdict`.`mdict_uids`( 
	mdict_uid varchar(50) NOT NULL UNIQUE,
    mdict_uid_generated DATETIME DEFAULT CURRENT_TIMESTAMP,
    mdict_uid_retired DATETIME DEFAULT CURRENT_TIMESTAMP,
    mdict_uid_target varchar(512),
    PRIMARY KEY ( mdict_uid )
);