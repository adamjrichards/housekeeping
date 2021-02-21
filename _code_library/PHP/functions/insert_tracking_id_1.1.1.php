<?php	
	function insert_tracking_id() {
		try {
			$select_tracking_id_sql = "SELECT `dtuc_book_tracking_id`
				FROM " . $_POST[ "readingList" ] . "
				WHERE `dtuc_book_tracking_id` = '" . $_POST[ "trackingId" ] . "';";
			if ( ! $_SESSION[ "dta_DeepText_1_connection" ] = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				throw new MySQLi_Sql_Exception( "Can't connect to database." );
			} else {
				if ( ! $select_tracking_id_query = $_SESSION[ "dta_DeepText_1_connection" ] -> query( $select_tracking_id_sql ) ) {
					throw new MySQLi_Sql_Exception( "Can't query database." );
				} else {
					if ( ( $select_tracking_id = mysqli_fetch_array( $select_tracking_id_query ) ) == NULL ) {
						try {
							$insert_book_tracking_sql = "INSERT INTO " . $_POST[ "readingList" ] . " (								
													`dtuc_book_tracking_id`
													) VALUES (
													'" . $_POST[ "trackingId" ] . "' );";
							if ( ! $insert_book_tracking_query = $_SESSION[ "dta_DeepText_1_connection" ] -> query( $insert_book_tracking_sql ) ) {
								throw new Exception( "Cannot execute book tracking id insert." . mysqli_error( $_SESSION[ "dta_DeepText_1_connection" ] ) );
							} // if
						} catch ( Exception $insert_file_error ) {
							echo $insert_file_error -> getMessage() . "<br>";	
						} // try catch
					} else {
						echo "Book tracking id already inserted into _images." . "<br>";
					} // if else
				} // if else
			} // if else
		} catch ( MySQLI_sql_exception $select_tracking_id_mysqli_error ) {
			echo $select_tracking_id_mysqli_error -> getMessage() . "<br>";
		} catch ( Exception $select_tracking_id_error ) {
			echo $select_tracking_id_error -> getMessage() . "<br>";
		} // try catch
	} // insert_tracking_id()
	
	insert_tracking_id();