CREATE PROCEDURE `create_a_new_schema_from_the_base_code_template` ( IN new_db_name varchar(40), IN new_db_table_prefix varchar(10) )
BEGIN
	SET @the_sql = CONCAT( "DROP DATABASE IF EXISTS ", new_db_name );
    PREPARE the_statement FROM @the_sql;
    EXECUTE the_statement;
    DEALLOCATE PREPARE the_statement;
END
