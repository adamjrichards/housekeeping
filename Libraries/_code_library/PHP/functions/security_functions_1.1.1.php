<?php
	// MAIN SECURITY CHECK
	function perform_security_check( $page ) {
		set_security_hierarchy();
		// PAGE SECURITY CHECKS
		$_SESSION[ "security_checks" ] = array();
		$security_check_sql = "SELECT `dta_page_name`, `dta_page_security` FROM `DeepText_1`.`dta_pages_1`;";
		if ( $get_security = mysqli_query( $_SESSION[ "dta_DeepText_1_connection" ], $security_check_sql ) ) {
			while ( $this_security = mysqli_fetch_array( $get_security ) ) {
				$security_key = $this_security[ "dta_page_name" ];
				$security_value = $this_security[ "dta_page_security" ];
				$_SESSION[ "security_checks" ][ $security_key ] = $security_value;
			} // while
		} // if
			
		if ( ! isset( $_SESSION[ "dta_present_user_privilege_numeric" ] ) ){
			$_SESSION[ "dta_present_user_privilege_numeric" ] = 0;
		} else {
			$_SESSION[ "dta_present_user_privilege_numeric" ] = get_privilege_numeric( $_SESSION[ "dta_present_user_privilege_level" ] );
			//echo_to_test_box( $_SESSION[ "dta_present_user_privilege_numeric" ] );
		}// if
		try {
			$level_required = check_page_security( $_GET[ "show_panel" ] );
			$level_numeric_required = get_privilege_numeric( $level_required );
			if ( get_privilege_numeric( $_SESSION[ "dta_present_user_privilege_level" ] ) < $level_numeric_required ) {
				$show_panel = "guest_admin/permission_refused_1.1.1";
				$panel_type = "text";
				return false;
			} // if
			return true;
		} catch ( Exception $e ) {
			echo $error_test = error_get_last() . "<br>";
			return false;
		} // try catch
	}
	
	// SECURITY HIERARCHY
	function set_security_hierarchy() {		
		$_SESSION[ "dta_privilege_levels" ] = array( "guest" => 0, "reader" => 1, "user" => 2, "editor" => 3, "administrator" => 4, "owner" => 5 );
	} // set_security_hierarchy()
		
	// SECURITY FUNCTIONS 1
	function check_page_security( $page ) {
		foreach ( $_SESSION[ "security_checks" ] as $page_to_check => $level_required ) {
			if ( strncmp( $page_to_check, $page, strlen( $page ) ) == 0 ) return $level_required;
		} // foreach
		return "guest";
	} // check_page_security()
		
	function get_privilege_numeric( $level ) {
		foreach ( $_SESSION[ "dta_privilege_levels" ] as $level_name => $level_numeric ) {
			if ( $level_name == $level ) return $level_numeric;
		} // foreach
		return 0;
	} // get_privilege_numeric()
	
	function check_privilege_level( $level_required, $level_given )  {		
		if ( ! isset ( $_SESSION[ "dta_present_user_privilege_level" ] ) ) {
			return false;
		} else {
			$level_numeric_required = get_privilege_numeric( $level_required );
			$level_numeric_given = get_privilege_numeric( $level_given );
			if ( $level_numeric_given >= $level_numeric_required ) {
				return true;
			} else {
				return false;
			} // if else
		} // if else
		return false;
	} // check_privilege_level()
	
	function grant_or_refuse_page( $privileges_granted, $page_on_grant, $page_on_refusal ) {
		if ( $privileges_granted ) {
			return $page_on_grant;
		} else {
			return $page_on_refusal;
		} // if else
	} // grant_or_refuse_page()
	
	function get_page_info_from_db( $page_to_check ) {
		$look_for_page_sql = "SELECT COUNT( `dta_page_name` ) as `page_exists` FROM `DeepText_1_admin_1`.`dta_pages_1`
							WHERE INSTR( `dta_page_default_url`, '" . $page_to_check . "'  ) > 0;";
		if ( $look_for_page_query = mysqli_query( $_SESSION[ "dta_DeepText_1_connection" ], $look_for_page_sql ) ) {
			if ( $page_count = mysqli_fetch_array( $look_for_page_query ) ) {
				$page_exists = ( $page_count[ "page_exists" ] == 1 );
			} else {
				$page_exists = FALSE;
			} // if else
		} // if
		if ( mysqli_error( $_SESSION[ "dta_DeepText_1_connection" ] ) ) echo mysqli_error();
		return TRUE;//$page_exists;
	} // get_page_info_from_db()
	
	function exit_with_prejudice() {}