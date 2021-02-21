<?php
	session_start();
	
	function image_gallery_uploader_update_caption() {
		
		$_SESSION[ "dtuc_reading_list_images" ] = $_POST[ "readingList" ];
		$_SESSION[ "dtuc_image_slot_number" ] = $_POST[ "imageSlotNumber" ];
		$_SESSION[ "dtuc_book_tracking_id" ] = $_POST[ "trackingId" ];
		
		$insert_image_data_sql = "UPDATE " . $_POST[ "readingList" ] . "
										SET
										`dtuc_book_image_" . $_POST[ "imageSlotNumber" ] . "_caption` = '" . $_POST[ "caption" ] . "'										
										WHERE `dtuc_book_tracking_id` = '" . $_POST[ "trackingId" ] . "';";
		//echo $insert_image_data_sql;
		try {
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $insert_image_data_query = $dta_DeepText_1_connection -> query( $insert_image_data_sql ) ) {
					echo "TRUE";
				} else {
					echo "FALSE";
				} // if else
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch

	} // image_gallery_uploader_insert_image_data()
	
	image_gallery_uploader_update_caption();