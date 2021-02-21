<?php
	session_start();
	
	function reading_list_item_image_gallery_request() {
		$book_image_gallery_request_sql = "SELECT `dtuc_book_image_1_caption`,
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
			$book_image_gallery_item = array();
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $book_image_gallery_request_query = $dta_DeepText_1_connection -> query( $book_image_gallery_request_sql ) ) {
					$book_image_gallery_array = mysqli_fetch_array( $book_image_gallery_request_query );
					echo "<tr>";
					for ( $i = 1; $i <= 10; $i++ ) {
						echo "<td><figure><img name='dtuc_book_image_" . $i . "' id='dtuc_book_image_" . $i . "' class='image_gallery_item' src='https://www.deeptext.ca/functions/show_gallery_image_1.1.1.php?img=dtuc_book_image_" . $i . "_thumbnail&list=" . $_POST[ "readingList" ] . "&id=" . $_POST[ "trackingId" ] . "' width='200' alt='No image " . $i . " available'><figcaption>" . $book_image_gallery_array[ "dtuc_book_image_" . $i . "_caption" ] . "</figcaption></figure></td>\n";
						if ( $i == 5 ) echo "</tr><tr>";
					} // for
					echo "</tr>";
				} // if
			} // if
		} catch ( Exception $e ) {
			echo $e -> getMessage();
		} // try catch

	} // reading_list_item_image_gallery_request()
	
	reading_list_item_image_gallery_request();