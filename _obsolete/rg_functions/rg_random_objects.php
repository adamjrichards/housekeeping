<?php

/**
 * Raingarden functions and definitions
 */

// Functions with names beginning "get_a_" return the output to another function.
function get_a_random_object( $of_this_type ) {
	
	$the_folder_uri = get_the_filepath_for_the_asset_type( $of_this_type );
	
	if ( there_is_a_folder_called( $the_folder_uri ) ) {
		$all_the_nodes_in_the_folder = scandir( $the_folder_uri);
		$all_the_files_in_the_folder = array();
		foreach( $all_the_nodes_in_the_folder as $this_particular_node ) {
			$this_particular_node_now = "$the_folder_uri$this_particular_node";
			if( there_is_a_file_called( $this_particular_node_now ) ) {
				$all_the_files_in_the_folder[] = $this_particular_node_now;
			}
		}
		$how_many_items_are_in_the_folder = count( $all_the_files_in_the_folder );
		$a_random_number = get_me_a_random_integer_between( 0, $how_many_items_are_in_the_folder - 1 );
		$return_me = $all_the_files_in_the_folder[ $a_random_number ];
		return $return_me;
	} else {
		//die( "There are no objects of type $of_this_type in folder $the_folder_uri." );
	}
}

// Functions with names beginning "show_me_" echo the output and return the filename. 

function show_me_a_random_background_image( $of_this_size = "x1920y1080" ) {
	$return_me = get_a_random_object( "Background $of_this_size" );
	echo $return_me;
	return $return_me;
}
function show_me_a_random_project() {
	$return_me = get_a_random_object( "Project" );
	echo $return_me;
	return $return_me;
}

function show_me_a_random_banner_image( $of_this_size = "x1920y150" ) { // insert a src attribute
	$return_me = get_a_random_object( "Banner $of_this_size" );	
	echo $return_me;
	return $return_me;
}

function show_me_a_random_poem() {
	$return_me;
	switch( random_int( 1, 4 ) ) {
		case 1: $return_me = get_a_random_object( "Poem A to F" ); break;
		case 2: $return_me = get_a_random_object( "Poem G to M" ); break;
		case 3: $return_me = get_a_random_object( "Poem N to S" ); break;
		case 4: $return_me = get_a_random_object( "Poem T to Other" ); break;
	}
	echo file_get_contents( $return_me );
	return $return_me;
}

function show_me_a_random_poem_background( $with_this_orientation ) { // insert a style attribute
	echo get_a_random_object( "Poem background", $with_this_orientation );
}