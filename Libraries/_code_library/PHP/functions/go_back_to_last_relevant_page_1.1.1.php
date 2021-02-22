<?php
	if ( ! $_SESSION ) session_start();
	
	function go_back_to_last_relevant_page( $table_name, $referring_page ) {
		$search_for_last_page_sql = "SELECT `dtt_temp_page_requested` FROM `DeepText_1`.`" . $table_name . "` 
								WHERE `dtt_temp_page_requested` NOT LIKE '%dark\_box%' 
								ORDER BY `dtt_temp_master_key` desc LIMIT 1;";
		echo $search_for_last_page_sql . "\n";
		if ( $DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1" ) ) {
			if ( $search_for_last_page_query = mysqli_connect( $DeepText_1_connection, $search_for_last_page_sql ) ) {
				$last_page = mysqli_fetch_array( $search_for_last_page_query );
				$last_page_uri = $last_page[ "dtt_temp_page_requested" ];
				echo "last page uri: " . $last_page_uri . "\n";
			} else {
				echo "mysqli error: " . mysqli_error( $DeepText_1_connection );
			} // if else
		} else {
			echo "mysqli connect error: " . mysqli_connect_error();
		} // if else
	} // go_back_to_last_relevant_page()
	go_back_to_last_relevant_page( $_POST[ "table_name" ], $_POST[ "referring_page" ] );