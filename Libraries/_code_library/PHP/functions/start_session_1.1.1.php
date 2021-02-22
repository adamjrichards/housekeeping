<?php
	function start_session( $start_new, $rightnow ) {
		try {
			if ( $start_new === TRUE ) {
				session_start();
				$new_session_id = session_id( session_regenerate_id( true ) );
				session_write_close();
				session_unset();
				if ( session_status() === PHP_SESSION_ACTIVE ) session_destroy();
				session_id( $new_session_id );
				session_start();
				$_SESSION[ "dta_session_id" ] = session_id();
			} else {
				if ( session_status() === PHP_SESSION_NONE ) {
					session_start();
					$_SESSION[ "dta_session_id" ] = session_id();
				} else if ( session_status() === PHP_SESSION_ACTIVE ) {
					return FALSE;
					//record_bad_session();
					// check for bad session
				} // if else
			} // if else			
			return TRUE;
		} catch ( Exception $start_session_exception ) {
			echo $start_session_exception -> getMessage();
			return FALSE;
		} // try catch
	} // start_session(
		