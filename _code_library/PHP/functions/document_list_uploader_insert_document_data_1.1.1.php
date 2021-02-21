<?php
	session_start();
	require "insert_tracking_id_1.1.1.php";
	
	function document_list_uploader_insert_document_data() {
		
		$_SESSION[ "dtuc_reading_list_documents" ] = $_POST[ "readingList" ];
		$_SESSION[ "dtuc_document_slot_number" ] = $_POST[ "documentSlotNumber" ];
		$_SESSION[ "dtuc_book_tracking_id" ] = $_POST[ "trackingId" ];
		
		$insert_document_data_sql = "UPDATE " . $_POST[ "readingList" ] . "
										SET
										`dtuc_book_document_" . $_POST[ "documentSlotNumber" ] . "_filename` = '" . $_POST[ "fileName" ] . "',
										`dtuc_book_document_" . $_POST[ "documentSlotNumber" ] . "_mimetype` = '" . $_POST[ "fileType" ] . "'										
										WHERE `dtuc_book_tracking_id` = '" . $_POST[ "trackingId" ] . "';";
		//echo $insert_document_data_sql;
		try {
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $insert_document_data_query = $dta_DeepText_1_connection -> query( $insert_document_data_sql ) ) {
					echo "TRUE";
				} else {
					echo "FALSE";
				} // if else
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch

	} // document_gallery_uploader_insert_document_data()
	
	insert_tracking_id();
	document_list_uploader_insert_document_data();