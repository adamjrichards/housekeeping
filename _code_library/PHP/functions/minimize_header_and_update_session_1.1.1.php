<?php
	if ( ! $_SESSION ) session_start();
	function minimize_header_and_update_session( $session_id ) {
		if( ! $dta_DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1" ) ) {
			echo mysqli_connect_error();
		} // if
		try {
			$update_header_state_sql = "UPDATE `DeepText_1_admin_1`.`dta_sessions_1`
									SET `dta_session_header_minimized` = 1
									WHERE `dta_session_PHPSESSID` = '" . $_SESSION[ "dta_session_id" ] . "';";
			if (  mysqli_query( $dta_DeepText_1_connection, $update_header_state_sql ) ) {
				$_SESSION[ "dtu_header_minimized" ] = TRUE;
				echo $_SESSION[ "dtu_header_minimized" ];
			} else {
				throw new Exception( "Bad session id, can't update session table" );
				echo mysqli_error( $dta_DeepText_1_connection );
			} // if else
		} catch ( Exception $update_header_try_id_var ) {
			$update_header_state_sql = "UPDATE `DeepText_1_admin_1`.`dta_sessions_1`
						SET `dta_session_header_minimized` = 1
						WHERE `dta_session_PHPSESSID` = '" . $session_id . "';";
			if ( mysqli_query( $dta_DeepText_1_connection, $update_header_state_sql ) ) {
				echo "header minimized";
				$_SESSION[ "dtu_header_minimized" ] = TRUE;
			} else {
				echo mysqli_error( $dta_DeepText_1_connection );
				throw new Exception( "Bad session id, can't update session table" );
				$_SESSION[ "BAD SESSION" ] = TRUE;
			} // if else
		} // try catch
	} // minimize_header_and_update_session();
	minimize_header_and_update_session( session_id() );
								
		