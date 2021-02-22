<?php
	function stream_file_from_database() {
		$n = $_GET[ "fId" ];
		try {
			if ( $DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				$file_selection_sql = "SELECT `dtuc_book_document_" . $n . "_filename`, `dtuc_book_document_" . $n . "_mimetype`, `dtuc_book_document_" . $n . "_binary` FROM " . $_GET[ "table" ] . " WHERE `dtuc_book_tracking_id` = '" . $_GET[ "id" ] . "';";
				if ( $get_file = mysqli_query( $DeepText_1_connection, $file_selection_sql ) ) {
					$this_file = mysqli_fetch_array( $get_file ); 
					header( "Cache-Control: no-cache private" );
					header( "Content-Description: File Transfer" );
					header( "Content-disposition: attachment; filename=" . str_replace( " ", "_", $this_file[ "dtuc_book_document_" . $n . "_filename" ] ) );
					header( "Content-type: " . $this_file[ "dtuc_book_document_" . $n . "_mimetype" ] );
					header( "Content-transfer-encoding: binary" );
					header( "Content-length: " . strlen( $this_file[ "dtuc_book_document_" . $n . "_binary" ] ) );
					echo $this_file[ "dtuc_book_document_" . $n . "_binary" ];
				} // if
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch
	} // stream_file_from_database ()
	//stream_file_from_database();