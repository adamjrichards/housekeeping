<?php
	session_start();
	function reading_list_request_notifier() {
		$_SESSION[ "reading_list_request_sql" ] = "SELECT `dtuc_book_main_title`, `dtuc_book_author_1_last_name`, `dtuc_book_editor_1_last_name`, `dtuc_book_tracking_id` 
								 FROM `DeepText_1_user_" . $_SESSION[ "dta_user_presently_logged_in" ] . "`.`dtuc_" . $_SESSION[ "dta_user_presently_logged_in" ] . "_" . $_POST[ "type" ] . "_" . $_POST[ "number" ] . "_" . $_POST[ "date" ] . "`";
		try {
			$reading_list_request_mysqli = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" );
			$reading_list_request_query = $reading_list_request_mysqli -> query( $_SESSION[ "reading_list_request_sql" ] );
			echo "<option selected disabled>Choose book</option>";
			while( $reading_list_request_array = mysqli_fetch_array( $reading_list_request_query ) ) {
				echo "<optgroup label='Author/editor: " . $reading_list_request_array[ "dtuc_book_author_l_last_name" ] . $reading_list_request_array[ "dtuc_book_editor_1_last_name" ] . "'>";
				echo "<option value='" . $reading_list_request_array[ "dtuc_book_tracking_id" ] . "'>TITLE: "  . $reading_list_request_array[ "dtuc_book_main_title" ] . ".</option>";
				echo "</optgroup>";
			} // while
			if ( empty( $_SESSION[ "dtuc_book_tracking_id" ] ) ) $_SESSION[ "dtuc_book_tracking_id" ] = $reading_list_request_array[ "dtuc_book_tracking_id" ];
		} catch ( mysqli_sql_exception $mysqli_exception ) {
			echo $mysqli_exception -> errorMessage();
		} catch ( Exception $non_mysqli_exception ) {
			echo $non_mysqli_exception -> getMessage();
		} // try catch
	} // reading_list_request_notifier()
	
	reading_list_request_notifier();