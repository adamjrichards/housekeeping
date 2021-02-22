<?php

/************************************************************************************************
	RGCafe metadata functions specific to poems, with this default metadata format:

		<!-----------------------------------------------------------------------------------------------
		RGCafe Assets Default Metadata

		File UID :
		Content :
		Site :
		Series :
		Title :
		Tags :
		HTML ID :
		HTML ClassName :
		Folder :
		Filename :
		CDate :
		------------------------------------------------------------------------------------------------>

*************************************************************************************************/


	function get_me_the_poem_called( $by_this_title, $in_this_format = "make it static" ) {
		$the_index = index_a_directory_recursively( $_SESSION[ "root_folders" ][ "poems" ] );
		$the_random_id = random_int( 500, 999 );
		$the_html_id = "the_poem_wrapper_$the_random_id";
		foreach( $the_index as $the_item ) {
			$the_file_array = file( $the_item );
			$the_file_string = file_get_contents( $the_item );
			foreach( $the_file_array as $this_line  ){
				if( strpos( $this_line, "HTML ID: " !== FALSE ) ) {
					$the_html_id = trim( substr( $this_line, 9 ) );
				} 
				if( strpos( $this_line, "Title: " ) !== FALSE ) {
					$the_title = trim( substr( $this_line, 7 ) );
					if( $the_title === $by_this_title ){
						switch( $in_this_format ) {
							case "make it static"		: $the_contents_string = "<section class='pickup_lines poem static default_values' id='$the_html_id'>"; break;
							case "make it draggable"	: $the_contents_string = "<section class='pickup_lines poem non-draggable default_values' id='$the_html_id' draggable='true' onmouseenter='there_is_only_one_draggable_element_at_a_time( this )'>"; break;
							case "make it float"		: $the_contents_string = "<section class='pickup_lines poem fixed default_values' id='$the_html_id' draggable='true' onmouseenter='there_is_only_one_floating_element_at_a_time( this )'>"; break;
						}
						$the_contents_string .= file_get_contents( $the_item );
						return $the_contents_string .= "</section>";
					}				
				}
			}
			add_ids_to_the_html_if_theyre_missing( $the_item, $the_html_id );
		}
		return FALSE;
	}

	function show_me_the_poem_called( $by_this_title, $in_this_format = 'make it static' ) {
		echo get_me_the_poem_called( $by_this_title, $in_this_format );
	}
