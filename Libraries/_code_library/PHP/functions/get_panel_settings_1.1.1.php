<?php
	function get_initial_panel_settings( $this_panel, $size_to_window ) {
		$panel = substr( $this_panel, strripos( $this_panel, "/" ) + 1 );
		$panel_settings_sql = "SELECT `dta_page_title`, `dta_page_panel_header`, `dta_page_panel_footer`, `dta_page_panel_footer_height`, `dta_page_panel_left`, `dta_page_panel_top`, `dta_page_panel_width`, `dta_page_panel_height` FROM `DeepText_1_admin_1`.`dta_pages_1` WHERE `dta_page_name` LIKE '%" . $panel . "%';";
		//echo $panel_settings_sql . "<br>";
		if ( $get_panel_settings = mysqli_query( $_SESSION[ "dta_DeepText_1_connection" ], $panel_settings_sql ) ) {
			require "functions/set_panel_size_on_server_1.1.1.php";
			if ( $size_to_window ) {
				$_SESSION[ "this_panel_settings" ] = set_panel_size_on_server( mysqli_fetch_array( $get_panel_settings ) );
			} else {
				$panel_settings = mysqli_fetch_array( $get_panel_settings );
				$_SESSION[ "this_panel_settings" ] = array( "title" => $panel_settings[ "dta_page_title" ], "header" => $panel_settings[ "dta_page_panel_header" ], "footer" => $panel_settings[ "dta_page_panel_footer" ], "footer_height" => $panel_settings[ "dta_page_panel_footer_height" ], "left" => $panel_settings[ "dta_page_panel_left" ], "top" => $panel_settings[ "dta_page_panel_top" ], "width" => $panel_settings[ "dta_page_panel_width" ], "height" => $panel_settings[ "dta_page_panel_height" ] );
			} // if else
		} // if
	} // get_panel_settings()
	
	function get_last_panel_settings( $this_panel, $size_to_window ) {
		$panel = substr( $this_panel, strripos( $this_panel, "/" ) + 1 );
		$panel_settings_sql = "SELECT `dta_page_title`, `dta_page_panel_header`, `dta_page_panel_footer`, `dta_page_panel_footer_height`, `dta_page_panel_left`, `dta_page_panel_top`, `dta_page_panel_width`, `dta_page_panel_height` FROM `DeepText_1_admin_1`.`dta_pages_1` WHERE `dta_page_name` LIKE '%" . $panel . "%';";
		if ( $get_panel_settings = mysqli_query( $_SESSION[ "dta_DeepText_1_connection" ], $panel_settings_sql ) ) {
			require "functions/set_panel_size_on_server_1.1.1.php";
			if ( $size_to_window ) {
				$_SESSION[ "this_panel_settings" ] = set_panel_size_on_server( mysqli_fetch_array( $get_panel_settings ) );
			} else {
				$panel_settings = mysqli_fetch_array( $get_panel_settings );
				$_SESSION[ "this_panel_settings" ] = array( "title" => $panel_settings[ "dta_page_title" ], "header" => $panel_settings[ "dta_page_panel_header" ], "footer" => $panel_settings[ "dta_page_panel_footer" ], "footer_height" => $panel_settings[ "dta_page_panel_footer_height" ], "left" => $panel_settings[ "dta_page_panel_left" ], "top" => $panel_settings[ "dta_page_panel_top" ], "width" => $panel_settings[ "dta_page_panel_width" ], "height" => $panel_settings[ "dta_page_panel_height" ] );
			} // if else
		} // if
	} // get_panel_settings()