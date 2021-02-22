<?php
	session_start();
	
	function image_gallery_uploader_update_image_slot( $reading_list, $tracking_id, $image_slot_number) {
		$book_image_slot_sql = "SELECT `dtuc_book_image_" . $image_slot_number . "_caption`
								FROM " . $reading_list . "
								WHERE `dtuc_book_tracking_id` = '" . $trackingId . "';";
		try {
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $book_image_slot_query = $dta_DeepText_1_connection -> query( $book_image_slot_sql ) ) {
					if ( $book_image_slot_item = mysqli_fetch_array( $book_image_slot_query ) ) {
						$caption = $book_image_slot_item[ "dtuc_book_image_" . $image_slot_number . "_caption" ];
					} else {
						$caption = "";
					} // if else
				} else {
					$caption = "";
				} // if else
						echo "<table class='image_gallery_subtable alternating'>
								<tr class='center'>
									<td id='image_gallery_subtable_image_" . $image_slot_number . "'>
										
									</td>
								</tr>
								<tr class='row_odd'>
									<td>
										<input type='text' name='dtuc_book_image_" . $image_slot_number . "_caption' id='dtuc_book_image_" . $image_slot_number . "_caption' placeholder='Caption' value='" . $book_image_gallery_item[ "dtuc_book_image_" . $image_slot_number . "_caption" ] . "'>
									</td>
								</tr>
								<tr class='row_odd'>
									<td>
										<input type='button' name='update_dtuc_book_image_" .$image_slot_number . "_caption' id='update_dtuc_book_image_" .$image_slot_number . "_caption' value='Update caption' onClick='updateCaption( " . $image_slot_number . ",  document.getElementById( \"dtuc_book_image_" . $image_slot_number . "_caption\" ).value )'>
									</td>
								</tr>
								<tr class='row_even'>
									<td>
										<input type='file' name='dtuc_book_image_" . $image_slot_number . "_binary' id='dtuc_book_image_" . $image_slot_number . "_binary' accept='image/x-png,image/gif,image/jpeg'>
									</td>
								</tr>
								<tr class='row_even'>
									<td>
										<input type='button' name='upload_dtuc_book_image_" . $image_slot_number . "_binary' id='upload_dtuc_book_image_" . $image_slot_number . "_binary' value='Upload image' onClick='uploadImage( document.getElementById( \"dtuc_book_image_" . $image_slot_number . "_binary\" ), " . $image_slot_number . ", document.getElementById( \"dtuc_book_image_" . $image_slot_number . "_caption\" ).value)'>
									</td>
								</tr>
								<tr class='row_odd'>
									<td>
										<input type='button' name='delete_dtuc_book_image_" . $image_slot_number . "_binary' id='delete_dtuc_book_image_" . $image_slot_number . "_binary' value='Delete image' onClick='deleteImage( " . $image_slot_number . " )'>
									</td>
								</tr>
							</table>";
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch
	} // image_gallery_uploader_request()
	
	image_gallery_uploader_update_image_slot( $_POST[ "readingList" ], $_POST[ "trackingId" ], $_POST[ "imageSlotNumber" ] );