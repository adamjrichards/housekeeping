<?php
	session_start();
	
	function document_list_uploader_update_document_slot( $reading_list, $tracking_id, $document_slot_number) {
		$book_document_slot_sql = "SELECT `dtuc_book_document_" . $document_slot_number . "_filename`
								FROM " . $reading_list . "
								WHERE `dtuc_book_tracking_id` = '" . $tracking_id . "';";
		try {
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $book_document_slot_query = $dta_DeepText_1_connection -> query( $book_document_slot_sql ) ) {
					if ( $book_document_slot_item = mysqli_fetch_array( $book_document_slot_query ) ) {
						echo "<table class='document_list_subtable alternating'>
								<tr class='row_odd'>
									<td>
										<input type='text' name='dtuc_book_document_" . $document_slot_number . "_filename' id='dtuc_book_document_" . $document_slot_number . "_filename' placeholder='File name' value='" . $book_document_slot_item[ "dtuc_book_document_" . $document_slot_number . "_filename" ] . "' disabled size='100'>
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
					} // if
				} // if
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch
	} // document_gallery_uploader_request()
	
	document_list_uploader_update_document_slot( $_POST[ "readingList" ], $_POST[ "trackingId" ], $_POST[ "documentSlotNumber" ] );