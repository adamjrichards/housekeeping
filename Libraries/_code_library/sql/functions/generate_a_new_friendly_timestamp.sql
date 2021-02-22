CREATE DEFINER=`adam`@`lotus` FUNCTION `generate_a_new_friendly_timestamp`() RETURNS datetime
BEGIN
	SET @the_timestamp = now();
	RETURN @the_timestamp;
END