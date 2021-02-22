CREATE FUNCTION `get_me_a_new_uid` ( the_prefix varchar(10) )
RETURNS VARCHAR(40)
BEGIN
	SET @the_seed = substring( replace( date_format( utc_timestamp(6), '%f'), ".", "" ), 3 );
RETURN "0";
END