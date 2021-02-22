CREATE DEFINER=`base_code@lotus` PROCEDURE `generate_a_new_UID`(IN the_prefix varchar(10), OUT the_new_uid varchar(250))
BEGIN
	SET @the_utc_time = 0 + utc_timestamp(6);
	SET the_new_UID = CONCAT( @the_prefix, SUBSTRING( REPLACE( CONVERT( @blar, char(25) ), ".", "" ), 3 ) );
END