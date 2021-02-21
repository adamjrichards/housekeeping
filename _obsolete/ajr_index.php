<?php
	require "pages/utilities/cookie_functions_2.1.1.php";
	require "pages/utilities/math_functions_2.1.1.php";
		
	session_start();
	$GLOBALS[ "rightnow_time" ] = time();
	$GLOBALS[ "landing_pages" ] = array( 0 => "2.0.1", 1 => "2.1.1", 2 => "2.2.1", 3 => "2.3.1", 4 => "2.4.3", 5 => "2.5.1", 6 => "2.6.1" );
	$_SESSION[ "expiry_date" ] = $GLOBALS[ "rightnow_time" ] + 2592000;
	
	function disect_landing_cookie() {
		$GLOBALS[ "landing_cookie" ] = explode( "&", $_COOKIE[ "ajrcom_landings" ] );
		$GLOBALS[ "last_landing" ] = array_shift( $GLOBALS[ "landing_cookie" ] );
		echo "last_landing: " . $GLOBALS[ "last_landing" ] . "<br>";
		$GLOBALS[ "landings_viewed" ] = $GLOBALS[ "landing_cookie" ];
	} // analyze_visit_cookie()
	
	function rotate_landing_page() {
		$landing_page_count = count( $GLOBALS[ "landing_pages" ] );
		$landing_page_keyset = array_keys( $GLOBALS[ "landing_pages" ] );
		$landing_page_key = intval( array_search( $GLOBALS[ "last_landing" ], $GLOBALS[ "landing_pages" ] ) );
		if ( $landing_page_key < intval( $landing_page_keyset[ $landing_page_count - 1 ] ) ) {
			$landing_page_key++;
			echo "landing: " . $landing_page_key . "<br>";
			return $GLOBALS[ "landing_pages" ][ $landing_page_key ];
		} else {
			return $GLOBALS[ "landing_pages" ][0];
		} // if else
	} // choose_index_page
	
	function check_all_landings_viewed() {
		$all_viewed = 1;
		foreach ( $GLOBALS[ "landing_pages" ] as $index => $landings ) {
			if ( array_search( $landings, $GLOBALS[ "landings_viewed" ] ) === FALSE ) $all_viewed = 0;
		} // for each
		return $all_viewed;
	} // check_all_landings_viewed()
	
	function set_landings_cookie( $name, $value ) {
		delete_duplicate_cookies( $name );
		setcookie( $name, strval( $value ), $_SESSION[ "expiry_date" ], "/"  );
	} // visit_counter_cookie_setter()
	
	$cookie_exists = intval( get_cookie( "ajrcom_landings" ) );
	if( $cookie_exists != 0 ) {
		disect_landing_cookie();
		if ( check_all_landings_viewed() == 1 ) {
			$_SESSION[ "landing_page" ] = "2.0.1";
		} else {
			$_SESSION[ "landing_page" ] = rotate_landing_page();
			echo "rotate_landing_page: " . $_SESSION[ "landing_page" ] . "<br>";
		} // if else
		array_push( $GLOBALS[ "landings_viewed" ], $_SESSION[ "landing_page" ] );
		$GLOBALS[ "landings_viewed" ] = array_unique( $GLOBALS[ "landings_viewed" ] );
		$visited_string = rtrim( implode( "&", array_values( $GLOBALS[ "landings_viewed" ] ) ), "&" );
		echo $visited_string . "<br>";
	} else {
		$visited_string = "2.1.1";
		$_SESSION[ "landing_page" ] = "2.1.1";
		$GLOBALS[ "landings_viewed" ] = array( "2.1.1" );
	} // if else
	set_landings_cookie( "ajrcom_landings", $_SESSION[ "landing_page" ] . "&" . $visited_string );
		
	//$_SESSION[ "include_preload" ] = get_explicit_random_boolean( 1, 2 );
	require "pages/loading_2.1.1.php";