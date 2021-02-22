<?php
	function set_panel_size_on_server( $dimensions ) {
		$baseWindowWidth = 1920;
		$baseWindowHeight = 950;
		$baseLeft = $dimensions[ "dta_page_panel_left" ];
		$baseTop = $dimensions[ "dta_page_panel_top" ];
		$baseWidth = $dimensions[ "dta_page_panel_width" ];
		$baseHeight = $dimensions[ "dta_page_panel_height" ];
		$ratioX = $_SESSION[ "dtb_browser_window_width" ] / $baseWindowWidth;
		$ratioY = $_SESSION[ "dtb_browser_window_height" ] / $baseWindowHeight;
		$newLeft = $baseLeft * $ratioX;
		$newTop = $baseTop * $ratioY;
		$newWidth = $baseWidth * $ratioX;
		$newHeight = $baseHeight * $ratioY;
		
		$panel_dimensions = array( "left" => intval( $newLeft ), "top" => intval( $newTop ), "width" => intval( $newWidth ), "height" => intval( $newHeight ) );
		//var_dump( $panel_dimensions );
		return $panel_dimensions; 
	} // set_window_size_on_server()
	