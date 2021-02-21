<?php
	function throw_new_error_exception( $errno, $errstr, $errfile, $errline ) {
		if ( E_RECOVERABLE_ERROR === $errno ) throw new ErrorException( $errstr, $errno, 0, $errfile, $errline );
		return FALSE;
	} // throw_new_error_exception()
	
	function show_all_server_variables() {
		echo "<h1>_SERVER variables:</h1>";
		foreach ( $_SERVER as $the_variable => $the_value ) {
			echo $the_variable . " => " . $the_value . "<br>";
		} // for
	} // show_all_server_variables()
	
	function show_all_session_variables() {
		echo "<h1>_SESSION variables:</h1>";
		set_error_handler( 'throw_new_error_exception' );
		error_reporting( E_ALL ^ E_NOTICE );
		foreach ( $_SESSION as $the_variable => $the_value ) {
			try {
				echo $the_variable . " => " . $the_value . "<br>";
			} catch ( Exception $e ) {
				echo $the_variable . ": " . gettype( $the_value ) . "<br>";
			}
		} // for
	} // show_all_session_variables()
	
	function show_all_request_variables() {
		echo "<h1>_REQUEST variables:</h1>";
		foreach ( $_REQUEST as $the_variable => $the_value ) {
			echo $the_variable . " => " . $the_value . "<br>";
		} // for
	} // show_all_request_variables()
	
	function show_all_post_variables() {
		echo "<h1>_POST variables:</h1>";
		foreach ( $_POST as $the_variable => $the_value ) {
			echo $the_variable . " => " . $the_value . "<br>";
		} // for
	} // show_all_post_variables()
	
	function show_all_get_variables() {
		echo "<h1>_GET variables:</h1>";
		foreach ( $_GET as $the_variable => $the_value ) {
			echo $the_variable . " => " . $the_value . "<br>";
		} // for
	} // show_all_get_variables()
	
	function show_all_files_variables() {
		echo "<h1>_FILES variables:</h1>";
		foreach ( $_FILES as $the_variable => $the_value ) {
			echo $the_variable . " => " . $the_value . "<br>";
		} // for
	} // show_all_files_variables()
	
	function show_all_env_variables() {
		echo "<h1>_ENV variables:</h1>";
		foreach ( $_ENV as $the_variable => $the_value ) {
			echo $the_variable . " => " . $the_value . "<br>";
		} // for
	} // show_all_env_variables()
	
	function show_all_cookie_variables() {
		echo "<h1>_COOKIE variables:</h1>";
		foreach ( $_COOKIE as $the_variable => $the_value ) {
			echo $the_variable . " => " . $the_value . "<br>";
		} // for
	} // show_all_cookie_variables()