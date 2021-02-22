<?php
	function check_username_availability( $candidate_name ) {
		if ( $dta_DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1" ) ) {
			$check_username_string = "SELECT COUNT( `dta_user_username` ) AS `dta_username_count` FROM `dta_users_1` WHERE `dta_user_username` LIKE '" . $candidate_name . "';";
			if ( $get_usernames = mysqli_query( $dta_DeepText_1_connection, $check_username_string ) ) {
				if ( $this_username = mysqli_fetch_array( $get_usernames ) ) {
					return $this_username[ "dta_username_count" ];
				} // if
			} // if
			return 0;
		} else {
			echo mysqli_error( $dta_DeepText_1_connection );
			return 0;
		} // if else
	} // check_username_availability()
	echo check_username_availability( $_POST[ "name" ] );
?>