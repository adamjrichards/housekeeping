<?php
	function setup_database_table_name_variables() {
		$_SESSION[ "dtu_user_database" ] = "DeepText_1_user_" . $_SESSION[ "dta_user_presently_logged_in" ];
		$_SESSION[ "dtu_user_correspondence" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`dtu_" . $_SESSION[ "dta_user_presently_logged_in" ] . "_correspondence_1`"; 
		$_SESSION[ "dtu_user_panels" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`dtu_" . $_SESSION[ "dta_user_presently_logged_in" ] . "_panels_1`"; 
		$_SESSION[ "dtu_user_preferences" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`dtu_" . $_SESSION[ "dta_user_presently_logged_in" ] . "_preferences_1`"; 
		$_SESSION[ "dtu_user_tables" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`dtu_" . $_SESSION[ "dta_user_presently_logged_in" ] . "_tables_1`"; 
		$_SESSION[ "dtu_user_tracking" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`dtu_" . $_SESSION[ "dta_user_presently_logged_in" ] . "_tracking_1`";
	} // setup_database_table_name_variables()
	
	function mark_tables_for_deletion( $drop_table_sql ) {
	}
	
	function create_item_tracking_id() {
		return substr( $_SESSION[ "dta_user_presently_logged_in" ], 0, 3 ) . time() . dechex( mt_rand( 100000000, 999999999 ) );
	} // create_item_tracking_id()
		