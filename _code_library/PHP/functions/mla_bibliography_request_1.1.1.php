<?php
	session_start();
	function mla_bibliography_request() {
		$mla_bibliography_selection_sql = "SELECT ";
										if ( $_POST[ "author" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											"`dtuc_book_author_1_last_name`,
											`dtuc_book_author_1_given_names`,
											`dtuc_book_author_2`,"; }
										if ( $_POST[ "editor" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_editor_1_last_name`,
											`dtuc_book_editor_1_given_names`,
											`dtuc_book_editor_2`,"; }
										if ( $_POST[ "mainTitle" ] == "on" ) {
											$mla_bibliography_selection_sql .= 
											" `dtuc_book_main_title`,"; }
										if ( $_POST[ "subTitle" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_subtitle`,"; }
										if ( $_POST[ "volume" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_volume`, 
											`dtuc_book_total_volumes`,"; }
										if ( $_POST[ "translator" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_translator_1_last_name`,
											`dtuc_book_translator_1_given_names`,
											`dtuc_book_translator_2`,"; }
										if ( $_POST[ "publisher" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_publisher`,"; }
										if ( $_POST[ "city" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_publication_city`,"; }
										if ( $_POST[ "originalYear" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_original_publication_year`,"; }
										if ( $_POST[ "editionYear" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_edition_publication_year`,"; }
										if ( $_POST[ "ISBN" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_ISBN`,"; }
										if ( $_POST[ "pages" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_page_length`,"; }
										if ( $_POST[ "type" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_source_1_type`,"; }
										if ( $_POST[ "stableLink" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_link_to_source_1`,"; }
										if ( $_POST[ "downloaded" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_date_added`,"; }
										if ( $_POST[ "reasonAdded" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_reason_added`,"; }
										if ( $_POST[ "description" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_description`,"; }
										if ( $_POST[ "notes" ] == "on" ) {
											$mla_bibliography_selection_sql .=
											" `dtuc_book_notes`,"; }
		$mla_bibliography_selection_sql = rtrim( $mla_bibliography_selection_sql, "," );
		$mla_bibliography_selection_sql .=	 " FROM " . $_SESSION[ "dtuc_book_list" ] . ";";
		
		$mla_bibliography_output_string = "";
		$odd_or_even = "even";
		try {
			if ( $dta_DeepText_1_connection = new MySQLi( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj" ) ) {
				if ( $mla_bibliography_selection_query = $dta_DeepText_1_connection -> query( $mla_bibliography_selection_sql ) ) {
					while ( $mla_bibliography_selection = mysqli_fetch_array( $mla_bibliography_selection_query ) ) {
						$odd_or_even == "odd" ? $odd_or_even = "even" : $odd_or_even = "odd";
						$mla_bibliography_output_string .= "<p class='mla_citation " . $odd_or_even . "'>";
						if ( $mla_bibliography_selection[ "dtuc_book_author_1_last_name" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_author_1_last_name" ] . ", ";
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_author_1_given_names" ];
							if ( $mla_bibliography_selection[ "dtuc_book_author_2" ] != NULL ) {
								$mla_bibliography_output_string .= ", " . $mla_bibliography_selection[ "dtuc_book_author_2" ] . ". ";
							} else {
								$mla_bibliography_output_string .= ". ";
							} // if else
						} else if ( $mla_bibliography_selection[ "dtuc_book_editor_1_last_name" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_editor_1_last_name" ] . ", ";
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_editor_1_given_names" ];
							if ( $mla_bibliography_selection[ "dtuc_book_editor_2" ] != NULL ) {
								$mla_bibliography_output_string .= ", " . $mla_bibliography_selection[ "dtuc_book_editor_2" ] . ". ";
							} else {
								$mla_bibliography_output_string .= ". ";
							} // if else
						} // if else
						if ( $mla_bibliography_selection[ "dtuc_book_main_title" ] != NULL ) {
							$mla_bibliography_output_string .= "<em>" . $mla_bibliography_selection[ "dtuc_book_main_title" ] . "</em>";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_subtitle" ] != NULL ) {
							$mla_bibliography_output_string .= "<em>: " . $mla_bibliography_selection[ "dtuc_book_subtitle" ] . "</em>. ";
						} else {
							$mla_bibliography_output_string .= ". ";
						} // if else
						if ( $mla_bibliography_selection[ "dtuc_book_total_volumes" ] != '1' ) {
							$mla_bibliography_output_string .= "Vol. " . $mla_bibliography_selection[ "dtuc_book_volume" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_author_1_last_name" ] != NULL && $mla_bibliography_selection[ "dtuc_book_editor_1_last_name" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_editor_1_last_name" ] . ", ";
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_editor_1_given_names" ];
							if ( $mla_bibliography_selection[ "dtuc_book_editor_2" ] != NULL ) {
								$mla_bibliography_output_string .= ", " . $mla_bibliography_selection[ "dtuc_book_editor_2" ] . ". ";
							} else {
								$mla_bibliography_output_string .= ". ";
							} // if else
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_translator_1_last_name" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_translator_1_last_name" ] . ", ";
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_translator_1_given_names" ];
							if ( $mla_bibliography_selection[ "dtuc_book_translator_2" ] != NULL ) {
								$mla_bibliography_output_string .= ", " . $mla_bibliography_selection[ "dtuc_book_translator_2" ] . ". ";
							} else {
								$mla_bibliography_output_string .= ". ";
							} // if else
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_publisher" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_publisher" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_publication_city" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_publication_city" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_original_publication_year" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_original_publication_year" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_edition_publication_year" ] != NULL ) {
							$mla_bibliography_output_string .= "This edition: " . $mla_bibliography_selection[ "dtuc_book_edition_publication_year" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_ISBN" ] != NULL ) {
							$mla_bibliography_output_string .= "ISBN: " . $mla_bibliography_selection[ "dtuc_book_ISBN" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_page_length" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_page_length" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_source_1_type" ] != NULL ) {
							$mla_bibliography_output_string .= $mla_bibliography_selection[ "dtuc_book_source_1_type" ] . ". ";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_link_to_source_1" ] != NULL ) {
							$mla_bibliography_output_string .= "Stable link: <em>" . $mla_bibliography_selection[ "dtuc_book_link_to_source_1" ] . "</em>.<br>";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_date_added" ] != NULL ) {
							$mla_bibliography_output_string .= "Downloaded: " . $mla_bibliography_selection[ "dtuc_book_date_added" ] . ".";
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_reason_added" ] != NULL ) {
							$mla_bibliography_output_string .= "<br>" . $mla_bibliography_selection[ "dtuc_book_reason_added" ];
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_description" ] != NULL ) {
							$mla_bibliography_output_string .= "<br>" . $mla_bibliography_selection[ "dtuc_book_description" ];
						} // if
						if ( $mla_bibliography_selection[ "dtuc_book_notes" ] != NULL ) {
							$mla_bibliography_output_string .= "<br>" . $mla_bibliography_selection[ "dtuc_book_notes" ];
						} // if
						$mla_bibliography_output_string .= "</p>";
					} // while
				} else {
					throw new MySQLi_sql_exception( "Can't query" );
				} // if else
			} else {
				throw new MySQLi_sql_exception( "Can't connect" );
			} // if else
			echo $mla_bibliography_output_string . "<br>";
		} catch ( MySQLi_sql_exception $mla_mysqli_output_exception ) {
			echo $mla_mysqli_output_exception . "<br>";
			echo mysqli_error( $dta_DeepText_1_connection );	
		} catch ( Exception $mla_output_exception ) {
			echo $mla_output_exception . "<br>";
			echo error_get_last() . "<br>";		
		} // try catch catch
	} // reading_list_request()
	
	mla_bibliography_request();