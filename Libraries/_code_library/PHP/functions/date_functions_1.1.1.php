<?php
	function get_month_name( $month_number ) {
		switch ( $month_number ) {
			case "1": $month = "January";
				break;
			case "2": $month = "February";
				break;
			case "3": $month = "March";
				break;
			case "4": $month = "April";
				break;
			case "5": $month = "May";
				break;
			case "6": $month = "June";
				break;
			case "7": $month = "July";
				break;
			case "8": $month = "August";
				break;
			case "9": $month = "September";
				break;
			case "10": $month = "October";
				break;
			case "11": $month = "November";
				break;
			case "12": $month = "December";
				break;
			case "01": $month = "January";
				break;
			case "02": $month = "February";
				break;
			case "03": $month = "March";
				break;
			case "04": $month = "April";
				break;
			case "05": $month = "May";
				break;
			case "06": $month = "June";
				break;
			case "07": $month = "July";
				break;
			case "08": $month = "August";
				break;
			case "09": $month = "September";
				break;
		} // switch
		return $month;
	} // get_month_name()
	
	function format_db_list_date( $unformatted_date ) {
		$date_array = date_parse( $unformatted_date );
		$_SESSION[ "dta_db_format_list_date" ] = $date_array[ "year" ] . "-" . $date_array[ "month" ] . "-" . $date_array[ "day" ];
		return $_SESSION[ "dta_db_format_list_date" ];	
	} // format_friendly_list_date()
	
	function format_db_rightnow_date() {
		$date_array = date_parse( getdate() );
		$_SESSION[ "dta_db_format_rightnow_date" ] = $date_array[ "year" ] . "-" . $date_array[ "month" ] . "-" . $date_array[ "day" ];
		return $_SESSION[ "dta_db_format_rightnow_date" ];	
	} // format_db_rightnow_date()
		
	function format_friendly_list_date( $unformatted_date ) {
		$date_array = date_parse( $unformatted_date );
		$_SESSION[ "dta_friendly_format_list_date" ] = get_month_name( $date_array[ "month" ] ) . " " . $date_array[ "day" ] . ", " . $date_array[ "year" ];
		return $_SESSION[ "dta_friendly_format_list_date" ];	
	} // format_friendly_list_date()
	
	function format_friendly_rightnow_date() {
		$date_array = date_parse( getdate() );
		$_SESSION[ "dta_friendly_format_rightnow_date" ] = get_month_name( $date_array[ "month" ] ) . " " . $date_array[ "day" ] . ", " . $date_array[ "year" ];
		return $_SESSION[ "dta_friendly_format_rightnow_date" ];	
	} // format_friendly_rightnow_date()
	
	function calculate_elapsed_time_since_action( $datetime ) {
		$time_now = date_create( date( "Y-m-d H:i:s", time() ) );
		$time_then = date_create( $datetime );
		return date_diff( $time_then, $time_now );
	} // check_elapsed_time_since_action() 
	
	function set_and_format_datetime() {
		$_SESSION[ "dta_default_timezone" ] = date_default_timezone_get();
		$_SESSION[ "dta_rightnow_date" ] = date_create();
		$_SESSION[ "dta_compressed_rightnow_date" ] = date_format( $_SESSION[ "dta_rightnow_date" ], "Ymd" );;
		$_SESSION[ "dta_db_format_rightnow_date" ] = date_format( $_SESSION[ "dta_rightnow_date" ], "Y-m-d" );
		$_SESSION[ "dta_db_format_rightnow_datetime" ] = date_format( $_SESSION[ "dta_rightnow_date" ], "Y-m-d H:i:s" );
		$_SESSION[ "dta_friendly_format_rightnow_date" ] = date_format( $_SESSION[ "dta_rightnow_date" ], "F d, Y" );
		$_SESSION[ "dta_rightnow_timestamp" ] = time();
	} // set_and_format_datetime()
?>