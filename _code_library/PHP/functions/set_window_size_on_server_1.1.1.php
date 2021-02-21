<?php
	function set_window_size_on_server() {
		echo $_SESSION[ "dtb_browser_window_width" ] = $_POST[ "width" ];
		echo $_SESSION[ "dtb_browser_window_height" ] = $_POST[ "height" ];
	} // set_window_size_on_server()
	session_start();
	set_window_size_on_server();