<?php
	session_start();
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
	
	function insert_into_database( $document_file) {
		if ( file_exists( $document_file ) ) {
			try {
				$file_binary = file_get_contents( $document_file );
				$file_md5 = md5( $file_binary ); 
				$insert_document_sql = "UPDATE " . $_SESSION[ "dtuc_reading_list_documents" ] . "
									SET
									`dtuc_book_document_" . $_SESSION[ "dtuc_document_slot_number" ] . "_md5` = '" . $file_md5 . "',
									`dtuc_book_document_" . $_SESSION[ "dtuc_document_slot_number" ] . "_binary` = '" . base64_encode( $file_binary ) . "'
									WHERE `dtuc_book_tracking_id` = '" . $_SESSION[ "dtuc_book_tracking_id" ] . "';";
				if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
					if ( ! $insert_document_query = $dta_DeepText_1_connection -> query( $insert_document_sql ) ) {
						throw new Exception( "Can't insert documents into " . $_SESSION[ "dtuc_reading_list_documents" ] . "." );
					} // if
				} else {
					throw new MySQLi_Sql_Exception( "Can't connect to database." );
				} // if else
			} catch ( Exception $document_insert_exception ) {
				echo $document_insert_exception -> getMessage() . "<br>";
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
	
	function document_list_uploader_insert_document() {
		$document_file = move_file_to_uploads_folder();
		insert_into_database( $document_file );
		//remove_temp_folder();
	} // document_gallery_uploader_insert_document_data()
	
	document_list_uploader_insert_document();