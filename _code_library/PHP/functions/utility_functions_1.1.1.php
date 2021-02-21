<?php
	function extract_info_from_table_name( $name ) { // i.e., dtu_adam_article-list_4_2013-11-24
		$table_name = explode( "_", $name );
		$table_info = array( "data_variable_type" => $table_name[0], "table_creator" => $table_name[1], "table_type" => $table_name[2], "table_creator_number" => $table_name[3], "table_date" => $table_name[4] );
		return $table_info;		
	} // extract_info_from_table_name( $name )

	function boolval_54( $variable ) {
		$variable = intval( $variable );
		if ( $variable === 0 ) {
			return "FALSE";
		} else if ( $variable === 1 ) {
			return "TRUE";
		} else {
			return "NOT A BOOLEAN";
		} // if else if else
	} // boolval()