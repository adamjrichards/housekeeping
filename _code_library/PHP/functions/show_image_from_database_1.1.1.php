<?php
	function show_image_from_database() {
		if ( strstr( $_GET[ "reading_list" ], "_book-list_" ) ) {
			try {
				if ( $DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
					$image_selection_string = "SELECT `" . $_GET[ "img" ] . "` FROM " . $_GET[ "reading_list" ] . " WHERE `dtuc_book_tracking_id` = '" . $_GET[ "id" ] . "';";
					if ( $get_image = mysqli_query( $DeepText_1_connection, $image_selection_string ) ) {
						$this_image = mysqli_fetch_array( $get_image ); 
						header( "Content-type: image/jpeg" );
						echo base64_decode( $this_image[ $_GET[ "img" ] ] );
					} // if
				} // if
			} catch ( Exception $e ) {
				echo $e -> getMessage();
			} // try catch
		} else if ( strstr( $_GET[ "reading_list" ], "_article-list_" ) ) {
			try {
				if ( $DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
					$image_selection_string = "SELECT `" . $_GET[ "img" ] . "` FROM `" . $_GET[ "reading_list" ] . "` WHERE dtu_article_master_key = " . $_GET[ "key" ] . ";";
					if ( $get_image = mysqli_query( $DeepText_1_connection, $image_selection_string ) ) {
						$this_image = mysqli_fetch_array( $get_image ); 
						header( "Content-type: image/jpeg" );
						echo base64_decode( $this_image[ $_GET[ "img" ] ] );
					} // if
				} // if
			} catch ( Exception $e ) {
				echo $e -> getMessage();
			} // try catch
		} else if ( strstr( $_GET[ "reading_list" ], "_project-list_" ) ) {
			try {
				if ( $DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
					$image_selection_string = "SELECT `" . $_GET[ "img" ] . "` FROM `" . $_GET[ "reading_list" ] . "` WHERE dtu_project_master_key = " . $_GET[ "key" ] . ";";
					if ( $get_image = mysqli_query( $DeepText_1_connection, $image_selection_string ) ) {
						$this_image = mysqli_fetch_array( $get_image ); 
						header( "Content-type: image/jpeg" );
						echo base64_decode( $this_image[ $_GET[ "img" ] ] );
					} // if
				} // if
			} catch ( Exception $e ) {
				echo $e -> getMessage();
			} // try catch
		} // if else if
	} // show_image_from_database ()
	show_image_from_database();