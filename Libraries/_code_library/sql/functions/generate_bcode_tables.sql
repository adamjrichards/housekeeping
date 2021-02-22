CREATE DEFINER=`adam`@`lotus` PROCEDURE `generate_bcode_tables`()
BEGIN
	DROP TABLE IF EXISTS `base_code`.`bcode_snippets`;
	CREATE TABLE `base_code`.`bcode_snippets` (
		bcode_tracker INT AUTO_INCREMENT,
		bcode_snippet_uid varchar(40) DEFAULT 'none',
		bcode_snippet_timestamp varchar(40) DEFAULT 'none',
		bcode_snippet_friendly_timestamp date DEFAULT ' ',
		bcode_snippet_title varchar(25),
		bcode_snippet_purpose varchar(25),
		bcode_snippet_language enum( 'HTML', 'JavaScript', 'PHP', 'SQL', 'Java', 'VB' ) DEFAULT 'PHP',
		bcode_snippet_description TEXT,
		bcode_snippet_file TEXT,
		bcode_snippet TEXT,
		bcode_snippet_notes TEXT,
        PRIMARY KEY ( `bcode_snippet_uid` )     
	);    
END