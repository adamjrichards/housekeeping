<?php
	session_start();
	$this_file_type = $_POST[ "fileType" ];
	$this_list_type = $_POST[ "listType" ];
	$this_reading_list = $_POST[ "readingList" ];
	$this_tracking_id = $_POST[ "trackingId" ];
	//echo $this_file_type . ", " . $this_list_type . ", " . $this_reading_list . ", " . $this_tracking_id . "<br>";
	function count_empty_cells_in_row_XHR( $file_type, $list_type, $reading_list, $tracking_id ) {
		$empty_cell_count = 0;
		if ( $file_type == "IMAGE" ) {		
			$count_empty_cells_sql = "SELECT
									IF( `dtuc_" . $list_type . "_image_1_binary` IS NULL, 1, 0 ) AS nullCount_1,
									IF( `dtuc_" . $list_type . "_image_2_binary` IS NULL, 1, 0 ) AS nullCount_2,
									IF( `dtuc_" . $list_type . "_image_3_binary` IS NULL, 1, 0 ) AS nullCount_3,
									IF( `dtuc_" . $list_type . "_image_4_binary` IS NULL, 1, 0 ) AS nullCount_4,
									IF( `dtuc_" . $list_type . "_image_5_binary` IS NULL, 1, 0 ) AS nullCount_5,
									IF( `dtuc_" . $list_type . "_image_6_binary` IS NULL, 1, 0 ) AS nullCount_6,
									IF( `dtuc_" . $list_type . "_image_7_binary` IS NULL, 1, 0 ) AS nullCount_7,
									IF( `dtuc_" . $list_type . "_image_8_binary` IS NULL, 1, 0 ) AS nullCount_8,
									IF( `dtuc_" . $list_type . "_image_9_binary` IS NULL, 1, 0 ) AS nullCount_9,
									IF( `dtuc_" . $list_type . "_image_10_binary` IS NULL, 1, 0 ) AS nullCount_10
									FROM `" . $reading_list . "_images`
									WHERE `dtuc_" . $list_type . "_tracking_id` = '" . $tracking_id . "';";
			$_SESSION[ "dta_DeepText_1_connection_oop_temp" ] = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", $_SESSION[ "dtu_user_database" ] );
			try {
				if ( $count_empty_cells_query = $_SESSION[ "dta_DeepText_1_connection_oop_temp" ] -> query( $count_empty_cells_sql ) ) {
					if ( ! ( $count_empty_cells = mysqli_fetch_array( $count_empty_cells_query ) ) == NULL ) { 
						$image_cell_status = array( "0" => "filled" );
						$count_empty_cells[ "nullCount_1" ] == 1 ? $image_cell_status[ "1" ] = "not_filled" : $image_cell_status[ "1" ] = "filled";
						$count_empty_cells[ "nullCount_2" ] == 1 ? $image_cell_status[ "2"] = "not_filled" : $image_cell_status[ "2" ] = "filled";
						$count_empty_cells[ "nullCount_3" ] == 1 ? $image_cell_status[ "3" ] = "not_filled" : $image_cell_status[ "3" ] = "filled";
						$count_empty_cells[ "nullCount_4" ] == 1 ? $image_cell_status[ "4" ] = "not_filled" : $image_cell_status[ "4" ] = "filled";
						$count_empty_cells[ "nullCount_5" ] == 1 ? $image_cell_status[ "5" ] = "not_filled" : $image_cell_status[ "5" ] = "filled";
						$count_empty_cells[ "nullCount_6" ] == 1 ? $image_cell_status[ "6" ] = "not_filled" : $image_cell_status[ "6" ] = "filled";
						$count_empty_cells[ "nullCount_7" ] == 1 ? $image_cell_status[ "7" ] = "not_filled" : $image_cell_status[ "7" ] = "filled";
						$count_empty_cells[ "nullCount_8" ] == 1 ? $image_cell_status[ "8" ] = "not_filled" : $image_cell_status[ "8" ] = "filled";
						$count_empty_cells[ "nullCount_9" ] == 1 ? $image_cell_status[ "9" ] = "not_filled" : $image_cell_status[ "9" ] = "filled";
						$count_empty_cells[ "nullCount_10" ] == 1 ? $image_cell_status[ "10" ] = "not_filled" : $image_cell_status[ "10" ] = "filled";
						$_SESSION[ "dta_empty_cells_in_row" ] = $image_cell_status;

						$empty_cell_count = $count_empty_cells[ "nullCount_1" ] + $count_empty_cells[ "nullCount_2" ] + $count_empty_cells[ "nullCount_3" ] + $count_empty_cells[ "nullCount_4" ] + $count_empty_cells[ "nullCount_5" ] + $count_empty_cells[ "nullCount_6" ] + $count_empty_cells[ "nullCount_7" ] + $count_empty_cells[ "nullCount_8" ] + $count_empty_cells[ "nullCount_9" ] + $count_empty_cells[ "nullCount_10" ];
					} else {
						$empty_cell_count = 10;
						throw new MySQLi_Sql_Exception( "Can't get empty cell count from db." );
					} // if else
				} else {
					throw new MySQLi_Sql_Exception( "Can't do empty cell query." );
				} // if else
			} catch ( MySQLi_Sql_Exception $mysqli_exception ) {
				$empty_cell_count = 10;
				//echo $mysqli_exception -> getMessage() . "<br>";
				//echo mysqli_error( $_SESSION[ "dta_DeepText_1_connection_oop" ] );
			} catch ( Exception $other_exception ) {
				$empty_cell_count = 10;
				//echo $other_exception -> getMessage();
				//var_dump( error_get_last() );
			} // try catch			
		} else if ( $file_type == "DOCUMENT" ) {
			$count_empty_cells_sql = "SELECT
									IF( `dtuc_" . $list_type . "_document_1_binary` IS NULL, 1, 0 ) AS nullCount_1,
									IF( `dtuc_" . $list_type . "_document_2_binary` IS NULL, 1, 0 ) AS nullCount_2,
									IF( `dtuc_" . $list_type . "_document_3_binary` IS NULL, 1, 0 ) AS nullCount_3,
									IF( `dtuc_" . $list_type . "_document_4_binary` IS NULL, 1, 0 ) AS nullCount_4,
									IF( `dtuc_" . $list_type . "_document_5_binary` IS NULL, 1, 0 ) AS nullCount_5
									FROM `" . $reading_list . "_documents`
									WHERE `dtuc_" . $list_type . "_tracking_id` = '" . $tracking_id . "';";
			$_SESSION[ "dta_DeepText_1_connection_oop_temp" ] = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", $_SESSION[ "dtu_user_database" ] );
			try {
				if ( $count_empty_cells_query = $_SESSION[ "dta_DeepText_1_connection_oop_temp" ] -> query( $count_empty_cells_sql ) ) {
					if ( ! ( $count_empty_cells = mysqli_fetch_array( $count_empty_cells_query ) ) == NULL ) { 
						$document_cell_status = array( "0" => "filled" );
						$count_empty_cells[ "nullCount_1" ] == 1 ? $document_cell_status[ "1" ] = "not_filled" : $document_cell_status[ "1" ] = "filled";
						$count_empty_cells[ "nullCount_2" ] == 1 ? $document_cell_status[ "2"] = "not_filled" : $document_cell_status[ "2" ] = "filled";
						$count_empty_cells[ "nullCount_3" ] == 1 ? $document_cell_status[ "3" ] = "not_filled" : $document_cell_status[ "3" ] = "filled";
						$count_empty_cells[ "nullCount_4" ] == 1 ? $document_cell_status[ "4" ] = "not_filled" : $document_cell_status[ "4" ] = "filled";
						$count_empty_cells[ "nullCount_5" ] == 1 ? $document_cell_status[ "5" ] = "not_filled" : $document_cell_status[ "5" ] = "filled";
						$_SESSION[ "dta_empty_cells_in_row" ] = $document_cell_status;

						$empty_cell_count = $count_empty_cells[ "nullCount_1" ] + $count_empty_cells[ "nullCount_2" ] + $count_empty_cells[ "nullCount_3" ] + $count_empty_cells[ "nullCount_4" ] + $count_empty_cells[ "nullCount_5" ];
					} else {
						$empty_cell_count = 5;
						throw new MySQLi_Sql_Exception( "Can't get empty cell count from db." );
					} // if else
				} else {
					throw new MySQLi_Sql_Exception( "Can't do empty cell query." );
				} // if else
			} catch ( MySQLi_Sql_Exception $mysqli_exception ) {
				$empty_cell_count = 5;
				//echo $mysqli_exception -> getMessage() . "<br>";
				//echo mysqli_error( $_SESSION[ "dta_DeepText_1_connection_oop" ] );
			} catch ( Exception $other_exception ) {
				$empty_cell_count = 5;
				//echo $other_exception -> getMessage();
				//var_dump( error_get_last() );
			} // try catch
		} // if else if
		
		echo $empty_cell_count;
	} // count_empty_cells()
	
	count_empty_cells_in_row_XHR( $this_file_type, $this_list_type, $this_reading_list, $this_tracking_id );