<?php
	function show_gallery_image() {
		try {
			if ( $DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				$image_selection_string = "SELECT `" . $_GET[ "img" ] . "` FROM " . $_GET[ "list" ] . " WHERE `dtuc_book_tracking_id` = '" . $_GET[ "id" ] . "';";
				if ( $get_image = mysqli_query( $DeepText_1_connection, $image_selection_string ) ) {
					$this_image = mysqli_fetch_array( $get_image );
					header("Cache-Control: no-store, no-cache, must-revalidate");
					header("Cache-Control: post-check=0, pre-check=0", false);
					header("Pragma: no-cache");  
					header( "Content-type: image/jpeg" );
					echo base64_decode( $this_image[ $_GET[ "img" ] ] );
				} // if
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch	
	} // show_gallery_image()
	
	show_gallery_image();