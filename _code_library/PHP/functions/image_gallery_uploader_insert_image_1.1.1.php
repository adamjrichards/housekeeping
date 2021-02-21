<?php
	session_start();
	require "shrink_image_on_server_1.1.1.php";
	function move_file_to_uploads_folder() {
		$file_name = $_SERVER[ "HTTP_X_FILE_NAME" ];
		$file_size = $_SERVER[ "HTTP_X_FILE_SIZE" ];
		if ( ! file_exists( $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] ) ) mkdir( $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] );
		try {
			$in_stream = fopen( "php://input", "r" );
			$out_stream = fopen( $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] . "/" . $file_name, "w" );
			while ( $file_data = fread( $in_stream, 1024 ) ) {
				fwrite( $out_stream, $file_data );
			} // while
			if ( file_exists( $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] . "/" . $file_name ) ) echo "File moved.";
			return $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] . "/" . $file_name;
		} catch ( Exception $uploading_error ) {
			echo $uploading_error -> getMessage();
		} // try catch
	} // move_files_to_uploads_folder()
	
	function insert_into_database( $image_file) {
		if ( file_exists( $image_file ) ) {
			try {
				$image_thumbnail = shrink_image_on_server( $image_file, $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] . "/" . "thumbnail.", "height", 200, 200 );
				$file_thumbnail = file_get_contents( $image_thumbnail );
				$file_binary = file_get_contents( $image_file );
				$file_md5 = md5( $file_binary ); 
				$insert_image_sql = "UPDATE " . $_SESSION[ "dtuc_reading_list_images" ] . "
									SET
									`dtuc_book_image_" . $_SESSION[ "dtuc_image_slot_number" ] . "_md5` = '" . $file_md5 . "',
									`dtuc_book_image_" . $_SESSION[ "dtuc_image_slot_number" ] . "_thumbnail` = '" . base64_encode( $file_thumbnail ) . "',
									`dtuc_book_image_" . $_SESSION[ "dtuc_image_slot_number" ] . "_binary` = '" . base64_encode( $file_binary ) . "'
									WHERE `dtuc_book_tracking_id` = '" . $_SESSION[ "dtuc_book_tracking_id" ] . "';";
				if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
					if ( ! $insert_image_query = $dta_DeepText_1_connection -> query( $insert_image_sql ) ) {
						throw new Exception( "Can't insert images into " . $_SESSION[ "dtuc_reading_list_images" ] . "." );
					} // if
				} else {
					throw new MySQLi_Sql_Exception( "Can't connect to database." );
				} // if else
			} catch ( Exception $image_insert_exception ) {
				echo $image_insert_exception -> getMessage() . "<br>";
				echo mysqli_error( $dta_DeepText_1_connection ) . "<br>";				
			} // try catch
		} else {
			echo "File doesn't exist." . "<br>";
		} // if else		
	} // insert_into_database()
	
	function remove_temp_folder() {
		array_map( "unlink", glob( $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] . "/*.*" ) );
		rmdir( $_SESSION[ "dta_uploads_folder" ] . $_SESSION[ "temp_folder_name" ] );
	} // remove_temp_folder()
	
	function image_gallery_uploader_insert_image() {
		$image_file = move_file_to_uploads_folder();
		insert_into_database( $image_file );
		//remove_temp_folder();
	} // image_gallery_uploader_insert_image_data()
	
	image_gallery_uploader_insert_image();