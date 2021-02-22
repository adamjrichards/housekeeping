<?php
	session_start();
	
	function document_list_uploader_request() {
		$book_document_list_sql = "SELECT `dtuc_book_document_1_filename`,
								`dtuc_book_document_2_filename`,
								`dtuc_book_document_3_filename`,
								`dtuc_book_document_4_filename`,
								`dtuc_book_document_5_filename`
								FROM " . $_POST[ "readingList" ] . "
								WHERE `dtuc_book_tracking_id` = '" . $_POST[ "trackingId" ] . "';";
		try {
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $book_document_list_query = $dta_DeepText_1_connection -> query( $book_document_list_sql ) ) {
					$book_document_list_item = mysqli_fetch_array( $book_document_list_query );
					for ( $i = 1; $i <= 5; $i++ ) {
						echo "<tr>";
						echo "<td class='document_list_cell' id='document_list_cell_" . $i . "' colspan='2'>
								<table class='document_list_subtable alternating'>
									<tr class='row_odd'>
										<td>
											<input type='text' name='dtuc_book_document_" . $i . "_filename' id='dtuc_book_document_" . $i . "_filename' placeholder='File name' value='" . $book_document_list_item[ "dtuc_book_document_" . $i . "_filename" ] . "' disabled size='100'>
										</td>
									</tr>
									<tr class='row_even'>
										<td>
											<input type='file' name='dtuc_book_document_" . $i . "_binary' id='dtuc_book_document_" . $i . "_binary' accept='application/x-zip-compressed,application/rtf,application/msword,application/pdf,text/plain,text/html,application/vnd.openxmlformats-officedocument.wordprocessingml.document'>
										</td>
									</tr>
									<tr class='row_even'>
										<td>
											<input type='button' name='upload_dtuc_book_document_" . $i . "_binary' id='upload_dtuc_book_document_" . $i . "_binary' value='Upload document' onClick='uploadDocument( document.getElementById( \"dtuc_book_document_" . $i . "_binary\" ), " . $i . " )'>
										</td>
									</tr>
									<tr class='row_odd'>
										<td>
											<input type='button' name='delete_dtuc_book_document_" . $i . "_binary' id='delete_dtuc_book_document_" . $i . "_binary' value='Delete document' onClick='deleteDocument( " . $i . " )'>
										</td>
									</tr>
								</table>											
							</td>";
						echo "</tr>";
					} // for				
				} // if
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch
	} // document_list_uploader_request()
	
	document_list_uploader_request();