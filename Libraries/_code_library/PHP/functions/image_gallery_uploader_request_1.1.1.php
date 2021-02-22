<?php
	session_start();
	
	function image_gallery_uploader_request() {
		$book_image_gallery_sql = "SELECT `dtuc_book_image_1_caption`,
										`dtuc_book_image_2_caption`,
										`dtuc_book_image_3_caption`,
										`dtuc_book_image_4_caption`,
										`dtuc_book_image_5_caption`,
										`dtuc_book_image_6_caption`,
										`dtuc_book_image_7_caption`,
										`dtuc_book_image_8_caption`,
										`dtuc_book_image_9_caption`,
										`dtuc_book_image_10_caption`
										FROM " . $_POST[ "readingList" ] . "
										WHERE `dtuc_book_tracking_id` = '" . $_POST[ "trackingId" ] . "';";
		try {
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $book_image_gallery_query = $dta_DeepText_1_connection -> query( $book_image_gallery_sql ) ) {
					$book_image_gallery_item = mysqli_fetch_array( $book_image_gallery_query );
					echo "<tr>";
					for ( $i = 1; $i <= 10; $i++ ) {
						echo "<td class='image_gallery_cell' id='image_gallery_cell_" . $i . "'>
								<table class='image_gallery_subtable alternating'>
									<tr class='center'>
										<td id='image_gallery_subtable_image_" . $i . "'>
											<img name='dtuc_book_image_" . $i . "' id='dtuc_book_image_" . $i . "' class='image_gallery_item' src='https://www.deeptext.ca/functions/show_gallery_image_1.1.1.php?img=dtuc_book_image_" . $i . "_thumbnail&list=" . $_POST[ "readingList" ] . "&id=" . $_POST[ "trackingId" ] . "' width='200' alt='No image " . $i . " available'>
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
						if ( $i == 5 ) echo "</tr><tr>";
					} // for
					echo "</tr>";				
				} // if
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch
	} // image_gallery_uploader_request()
	
	image_gallery_uploader_request();