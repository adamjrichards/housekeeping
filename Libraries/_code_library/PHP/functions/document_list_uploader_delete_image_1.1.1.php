<?php
	session_start();
	
	function image_gallery_uploader_delete_image( $reading_list, $tracking_id, $image_slot_number ) {
		$image_deletion_sql = "UPDATE " . $reading_list . "
							SET
							`dtuc_book_image_" . $image_slot_number . "_filename` = NULL,
							`dtuc_book_image_" . $image_slot_number . "_mimetype` = NULL,
							`dtuc_book_image_" . $image_slot_number . "_caption` = NULL,
							`dtuc_book_image_" . $image_slot_number . "_md5` = NULL,
							`dtuc_book_image_" . $image_slot_number . "_thumbnail` = NULL,
							`dtuc_book_image_" . $image_slot_number . "_binary` = NULL
							WHERE `dtuc_book_tracking_id` = '" . $tracking_id . "';";
		try {
			if ( $DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( ! $image_deletion_query = $DeepText_1_connection -> query( $image_deletion_sql ) ) {
					throw new Exception( "Can't delete image from database." );
				} else {
						echo "<td class='image_gallery_cell' id='image_gallery_cell_" . $i . "'>
								<table class='image_gallery_subtable alternating'>
									<tr class='center'>
										<td id='image_gallery_subtable_image_" . $i . "'>
											<img name='dtuc_book_image_" . $i . "' id='dtuc_book_image_" . $i . "' class='image_gallery_item' src='' width='200' alt='No image " . $i . " available'>
										</td>
									</tr>
									<tr class='row_odd'>
										<td>
											<input type='text' name='dtuc_book_image_" . $i . "_caption' id='dtuc_book_image_" . $i . "_caption' placeholder='Caption' value='" . $book_image_gallery_item[ "dtuc_book_image_" . $i . "_caption" ] . "'>
										</td>
									</tr>
									<tr class='row_odd'>
										<td>
											<input type='button' name='update_dtuc_book_image_" .$i . "_caption' id='update_dtuc_book_image_" .$i . "_caption' value='Update caption' onClick='updateCaption( " . $i . ",  document.getElementById( \"dtuc_book_image_" . $i . "_caption\" ).value )'>
										</td>
									</tr>
									<tr class='row_even'>
										<td>
											<input type='file' name='dtuc_book_image_" . $i . "_binary' id='dtuc_book_image_" . $i . "_binary' accept='image/x-png,image/gif,image/jpeg'>
										</td>
									</tr>
									<tr class='row_even'>
										<td>
											<input type='button' name='upload_dtuc_book_image_" . $i . "_binary' id='upload_dtuc_book_image_" . $i . "_binary' value='Upload image' onClick='uploadImage( document.getElementById( \"dtuc_book_image_" . $i . "_binary\" ), " . $i . ", document.getElementById( \"dtuc_book_image_" . $i . "_caption\" ).value)'>
										</td>
									</tr>
									<tr class='row_odd'>
										<td>
											<input type='button' name='delete_dtuc_book_image_" . $i . "_binary' id='delete_dtuc_book_image_" . $i . "_binary' value='Delete image' onClick='deleteImage( " . $i . " )'>
										</td>
									</tr>
								</table>											
							</td>";
;
				} // if else
			} // if
		} catch ( Exception $image_deletion_exception ) {
			echo $image_deletion_exception -> getMessage();
			echo mysqli_error( $DeepText_1_connection );
		}
	} // insert_into_database()
	
	image_gallery_uploader_delete_image( $_POST[ "readingList" ], $_POST[ "trackingId" ], $_POST[ "imageSlotNumber" ] );