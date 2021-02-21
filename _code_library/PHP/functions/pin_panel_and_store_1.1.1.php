<?php
	function pin_panel_and_store() {
		echo $_POST[ "page" ];
		echo $_POST[ "left" ];
		echo $_POST[ "top" ];
		echo $_POST[ "width" ];
		echo $_POST[ "height" ];
		$update_panel_dimensions_sql = "UPDATE `DeepText_1`.`dtu_" . $_SESSION[ "user_now_logged_in" ] . " _panel_tracking_1 
									SET `dtu_panel_filename` = '" . $_POST[ "page" ] . "',
										`dtu_panel_left` = '" . $_POST[ "left" ] . "', 
										`dtu_panel_top` = '" . $_POST[ "top" ] . "',  
										`dtu_panel_width` = '" . $_POST[ "width" ] . "',  
										`dtu_panel_height` = '" . $_POST[ "height" ] . "',  
										`dtu_panel_pinned` = 1
									WHERE `dtu_panel_tracker = 
	} // set_window_size_on_server()
	session_start();
	pin_panel_and_store();