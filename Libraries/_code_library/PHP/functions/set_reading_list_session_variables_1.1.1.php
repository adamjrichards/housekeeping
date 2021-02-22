<?php
	session_start();
	function set_reading_list_session_variables() {		
		$_SESSION[ "dtuc_book_list_name" ] = $_POST[ "readingList" ];
		$_SESSION[ "dtuc_book_list" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`" . $_SESSION[ "dtuc_book_list_name" ] . "`";
		$_SESSION[ "dtuc_book_list_images" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`" . $_SESSION[ "dtuc_book_list_name" ] . "_images`";
		$_SESSION[ "dtuc_book_list_documents" ] = "`" . $_SESSION[ "dtu_user_database" ] . "`.`" . $_SESSION[ "dtuc_book_list_name" ] . "_documents`";
	} // set_reading_list_session_variable
	
	set_reading_list_session_variables();