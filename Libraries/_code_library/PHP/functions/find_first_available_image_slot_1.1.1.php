<?php
	session_start();
	$list_type = $_POST[ "listType" ];
	$reading_list = $_POST[ "readingList" ];
	$tracking_id = $_POST[ "trackingId" ];
	function find_first_available_image_slot( $list_type, $reading_list, $tracking_id ) {
		for ( $i = 1; $i <= 10; $i++ ) {
			try {
				$find_null_slot_sql = "SELECT IF( `dtuc_" . $list_type . "_image_" . $i . "_binary` IS NULL, 'TRUE', 'FALSE' ) AS `null_slot` FROM " . $reading_list . "
									WHERE `dtuc_book_tracking_id` = '" . $tracking_id . "';";
				//echo $find_null_slot_sql;
				$dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" );
				if ( $find_null_slot_query = $dta_DeepText_1_connection -> query( $find_null_slot_sql ) ) {
					if ( $find_null_slot = mysqli_fetch_array( $find_null_slot_query ) ) {
						if ( $find_null_slot[ "null_slot" ] === "TRUE" ) {
							echo $i;
							break;
						} // if
					} // if
				} else {
					throw new Exception( "Can't perform null slot query." );
				} // if else
				if ( $i == 10 ) throw new Exception( "No slots available." );
			} catch ( Exception $find_null_slot_exception ) {
				echo $find_null_slot_exception -> getMessage();
				echo mysqli_error( $dta_DeepText_1_connection );
			} // try catch
		} // for
	} // find_first_available_image_slot()
	
	find_first_available_image_slot( $list_type, $reading_list, $tracking_id );
	