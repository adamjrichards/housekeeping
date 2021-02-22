<?php

	function hostile_end_user_session( $this_session_id ) {
		foreach ( $_SESSION as $key => $value ) {
			try {
				if ( $key == "dta_session_id" & $value == $this_session_id ) {
					if ( isset ( $_SERVER[ $this_session_id ] ) ) unset( $_SERVER[ $this_session_id ] );
				} // if
			} catch ( Exception $e ) {
				//send_exception_to_server( $e );
			} // try catch
		} // foreach
		kill_session();
	} // end_user_session()
	
	function set_session_name( $rightnow ) {
		if ( ! isset( $_SESSION[ "dta_session_name" ] ) ) {
			$_SESSION[ "dta_session_name" ] = $rightnow . "_" . $_SESSION[ "dta_session_id" ];
		} // if
	} // set_session_name()
	
	function set_session_id() {
		$_SESSION[ "dta_session_id" ] = session_id();
	} // set_session_name()
	
	function set_session_tracking_table() {
		$_SESSION[ "dtt_tracking_table" ] = "dtt_tracking_" . $_SESSION[ "dta_session_name" ];
	} // set_session_name()
	
	function set_session_status( $status ) {
		$_SESSION[ "dta_session_status" ] = $status;
		if ( $_SESSION[ "dta_session_status" ] !== "NEW" ) {
			$session_update_sql = "UPDATE `DeepText_1_admin_1`.`dta_sessions_1` 
								SET
								`dta_session_status` = '" . $status  . "'
								WHERE `dta_session_PHPSESSID` = '" . session_id() . "';";
			$startup_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1_admin_1" );		
			if ( mysqli_query( $startup_connection, $session_update_sql ) ) {
				return TRUE;
			} else {
				echo "Status update exception: " . mysqli_error( $startup_connection ) . "<br>";
				throw new Exception( "Can't start the session. " . mysqli_error( $startup_connection ) );
				return FALSE;
			} // if
		} // if
	} // set_session_name()
