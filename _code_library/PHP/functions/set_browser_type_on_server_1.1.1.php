<?php
	function set_browser_type_on_server() {
		echo $_SESSION[ "htb_browser_agent" ] = $_POST[ "browser" ];
		$session_update_sql = "UPDATE `DeepText_1`.`dta_sessions_1`
							SET
							`dta_session_user_agent` = '" . $_SESSION[ "dtb_browser_agent" ] . "'
							WHERE `dta_session_id` = '" . $_SESSION[ "dta_session_id" ] . "';";
		$DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1" ); 
		mysqli_query( $DeepText_1_connection, $session_update_sql ) or die( mysqli_error( $DeepText_1_connection ) );		
	} // set_window_size_on_server()
	session_start();
	set_browser_type_on_server();