<?php
	session_start();
	
	function document_list_uploader_delete_document( $reading_list, $tracking_id, $document_slot_number ) {
		$document_deletion_sql = "UPDATE " . $reading_list . "
							SET
							`dtuc_book_document_" . $document_slot_number . "_filename` = NULL,
							`dtuc_book_document_" . $document_slot_number . "_mimetype` = NULL,
							`dtuc_book_document_" . $document_slot_number . "_md5` = NULL,
							`dtuc_book_document_" . $document_slot_number . "_binary` = NULL
							WHERE `dtuc_book_tracking_id` = '" . $tracking_id . "';";
		try {
			if ( $DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( ! $document_deletion_query = $DeepText_1_connection -> query( $document_deletion_sql ) ) {
					throw new Exception( "Can't delete document from database. " );
				} else {
						echo "<table class='document_list_subtable alternating'>
								<tr class='row_odd'>
									<td>
										<input type='text' name='dtuc_book_document_" . $document_slot_number . "_filename' id='dtuc_book_document_" . $document_slot_number . "_filename' placeholder='File name' value='" . $book_document_list_item[ "dtuc_book_document_" . $document_slot_number . "_filename" ] . "' size='100'>
									</td>
								</tr>
								<tr class='row_even'>
									<td>
										<input type='file' name='dtuc_book_document_" . $document_slot_number . "_binary' id='dtuc_book_document_" . $document_slot_number . "_binary' accept='application/x-zip-compressed,application/rtf,application/msword,application/pdf,text/plain,text/html,application/vnd.openxmlformats-officedocument.wordprocessingml.document'>
									</td>
								</tr>
								<tr class='row_even'>
									<td>
										<input type='button' name='upload_dtuc_book_document_" . $document_slot_number . "_binary' id='upload_dtuc_book_document_" . $document_slot_number . "_binary' value='Upload document' onClick='uploadDocument( document.getElementById( \"dtuc_book_document_" . $document_slot_number . "_binary\" ), " . $document_slot_number . " )'>
									</td>
								</tr>
								<tr class='row_odd'>
									<td>
										<input type='button' name='delete_dtuc_book_document_" . $document_slot_number . "_binary' id='delete_dtuc_book_document_" . $document_slot_number . "_binary' value='Delete document' onClick='deleteDocument( " . $document_slot_number . " )'>
									</td>
								</tr>
							</table>";
;
				} // if else
			} // if
		} catch ( Exception $document_deletion_exception ) {
			echo $document_deletion_exception -> getMessage();
			echo mysqli_error( $DeepText_1_connection );
		}
	} // insert_into_database()
	
	document_list_uploader_delete_document( $_POST[ "readingList" ], $_POST[ "trackingId" ], $_POST[ "documentSlotNumber" ] );