<?php
	function get_previous_status_from_db() {
		try {
			$DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1_admin_1" );
			$get_session_status_sql = "SELECT `dta_session_status` FROM `DeepText_1_admin_1`.`dta_sessions_1` WHERE `dta_session_PHPSESSID` = '" . $_SESSION[ "dta_session_id" ] . "';";
			$get_session_status = mysqli_query( $DeepText_1_connection, $get_session_status_sql );
			$this_session_status = mysqli_fetch_array( $get_session_status );
			if ( $this_session_status ) {
				return $this_session_status[ "dta_session_status" ];
			} else {
				return "NONE";
			} // if else
		} catch ( Exception $session_check ) {
			echo $session_check -> getMessage();
			return "NO STATUS";
		} // try catch
	} // check_for_previous_session()
		
	function verify_session() {
		try {
			if ( $DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				$session_status_sql = "SELECT dta_session_status FROM `DeepText_1_admin_1`.`dta_sessions_1` WHERE `dta_session_PHPSESSID` = '" . $_SESSION[ "dta_session_id" ] . "';";
				$get_session_status = $DeepText_1_connection -> query( $session_status_sql );
				$last_access_sql = "SELECT MAX( `dtt_tracking_request_time` ) as `last_access` FROM `DeepText_1_tracking_1`.`" . $_SESSION[ "dtt_tracking_table" ] . "`;";
				$get_last_access = $DeepText_1_connection -> query( $last_access_sql );
				$this_session_status = mysqli_fetch_array( $get_session_status );
				$last_access_result = mysqli_fetch_array( $get_last_access );
				if ( $this_session_status[ "dta_session_status" ] === ( "ENDED" || "HOSTILE" || "TIMED_OUT" || "LOGGED_OUT" ) ) {
					return "CLOSED";
				} else if ( calculate_elapsed_time_since_action( $last_access_result[ "last_access" ] ) -> format( "%s" ) > 3600 ) {
					return "EXPIRED";
				}  // if else if
				return "VALID";
			} // if
		} catch ( Exception $session_verification ) {
			//send_exception_to_server( $e );
			return "INVALID";
		} // try catch
	} // verify_session()
	