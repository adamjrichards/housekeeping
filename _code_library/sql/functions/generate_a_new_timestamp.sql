CREATE DEFINER=`adam`@`lotus` FUNCTION `generate_a_new_timestamp`( the_prefix varchar( 40 ) ) RETURNS char(40) CHARSET utf16
BEGIN
	SET @the_time = now(6) + 0;
	SET @the_timestamp = replace( convert( @the_time ), char ), "0.", "" ) );
	RETURN @the_timestamp;
END