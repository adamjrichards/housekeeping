<?php
	
	function initialize_tracking_table() {
		$tracking_table = create_tracking_table();
		if ( $tracking_table ) {
			if ( $tracking_insert = insert_into_tracking_table() ) {
				return TRUE;
			} // if
		} // if
		return FALSE;
	} // initialize_session_tables()

	function create_tracking_table() {
		$_table_sql = "CREATE TABLE `DeepText_1_tracking_1`.`" . $_SESSION[ "dtt_tracking_table" ] . "` (
						  `dtt_tracking_master_key` int(11) NOT NULL AUTO_INCREMENT,
						  `dtt_tracking_request_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
						  `dtt_tracking_page_requested` varchar(500) NOT NULL,
						  `dtt_tracking_good_request` tinyint(1) NOT NULL DEFAULT '1',
						  `dtt_tracking_session_status` enum('NO CHANGE','NEW','CONTINUING','REGISTERING','LOGGED_IN','LOGGED_OUT','TIMED-OUT','ENDED','HOSTILE') NOT NULL DEFAULT 'NO CHANGE',
						  `dtt_tracking_action_taken` varchar(1000) DEFAULT NULL,
						  `dtt_tracking_security_status` enum('SAFE','DANGEROUS','REJECTED'),
						  PRIMARY KEY (`dtt_tracking_master_key`)
					) ENGINE=InnoDB DEFAULT CHARSET=utf8";
		$create_table_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1_tracking_1" );
		if ( mysqli_query( $create_table_connection, $_table_sql ) ) {
			return TRUE;
		} else {
			echo "Tracker creation error: " . mysqli_error( $create_table_connection ) . "<br>";
			exit();
			return FALSE;
		} // if else
	} // create__tracking_table()
	
	function insert_into_tracking_table() {
		$_table_sql = "INSERT INTO `DeepText_1_tracking_1`.`" . $_SESSION[ "dtt_tracking_table" ] . "` (
						`dtt_tracking_page_requested`
						) VALUES (
						'" . $_SERVER[ "REQUEST_URI" ] . "'
						);";
		//echo $_table_sql . "<br>";
		$insert_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1_tracking_1" );
		if ( mysqli_query( $insert_connection, $_table_sql ) ) {
			return TRUE;
		} else {
			echo "INSERT TRACKER " . mysqli_error( $insert_connection ) . "<br>";
			return FALSE;
		} // if else
	} // insert_into__tracking_table()
	
	function update_tracking_table( $request_honoured ) {
		$_table_sql = "UPDATE `DeepText_1_tracking_1`.`" . $_SESSION[ "dtt_tracking_table" ] . "` 
						SET `dtt_tracking_good_request` = '" . $request_honoured . "' 
						WHERE `dtt_tracking_master_key` = ( 
							SELECT `max_key` FROM ( SELECT MAX( `dtt_tracking_master_key` ) AS `max_key`
							FROM `" . $_SESSION[ "dtt_tracking_table" ] . "` ) AS `_table` );";
		//echo $_table_sql . "<br>";
		$update_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1_tracking_1" );
		if ( mysqli_query( $update_connection, $_table_sql ) ) {
			return TRUE;
		} else {
			echo "UPDATE TRACKER " . mysqli_error( $update_connection ) . "<br>";
			return FALSE;
		} // if else
	} // insert_into__tracking_table()
	