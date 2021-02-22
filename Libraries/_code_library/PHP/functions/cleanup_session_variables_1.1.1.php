<?php
	function cleanup_session_variables( $admin_variables, $data_variables ) {
		if ( $admin_variables ) {
			foreach ( $_SESSION as $key => $value ) {
				if ( strpos( $key, "dta_" ) == 0 ) {
					unset( $key );
				} // if
			} // foreach
		} // if
		if ( $data_variables ) {
			foreach ( $_SESSION as $key => $value ) {
				if ( strpos( $key, "dtu_" ) == 0 ) {
					unset( $key );
				} // if
			} // foreach
		} // if		
	} // clean-up_session_variables()