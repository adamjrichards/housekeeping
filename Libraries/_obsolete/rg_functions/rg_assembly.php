<?php
/**
 * Raingarden functions and definitions
 */

function find_the_right_static_page() {
	if ( ! empty( $_REQUEST[ "static" ] ) ){
		if( file_exists('static_pages/' . $_REQUEST[ 'static' ] . ".php" )){
			include( "static_pages/" . $_REQUEST[ 'static' ] . ".php" );
		} else {
			include( "errors/404.php" );
		}
	} else if ( ! empty( $_REQUEST[ "blogindex" ] ) ){
		if( file_exists('indexes/' . $_REQUEST[ 'blogindex' ] . ".php" )){
			include( "indexes/" . $_REQUEST[ 'blogindex' ] . ".php" );
		} else {
			include( "errors/404.php" );
		}
	} else if ( ! empty( $_REQUEST[ "project" ] ) ){
		if( is_file('projects/' . $_REQUEST[ 'project' ] . '.php"')){
			include( "projects/" . $_REQUEST[ 'project' ] . ".php" );
	//cl($_SERVER[ 'REQUEST_URI']);
		} else {
			include( "errors/404.php?" );
		}
	} else if ( ! empty( $_REQUEST[ "subsite" ] ) ){
		if( is_file('subsites/' . $_REQUEST[ 'subsite' ] . '.php"')){
			include( " subsites/" . $_REQUEST[ 'subsite' ] . ".php" );
		} else {
			include( "errors/404.php?" );
		}
	}
}

function retrieve_the_content_from_the_source_page( $in_this_file, $of_this_type, $with_this_path ) {
	switch ( $of_this_type ) {
		case "code"	:	$the_path = "$with_this_path/$in_this_file.$of_this_type"; break;
		case "post"	:	$the_path = "assets/posts/$of_this_type"; break;
		case "poem"	:	$the_path = "assets/poems/$of_this_type"; break;
		default		:	$the_path = "assets/$with_this_path/$in_this_file.php";
	}
	$the_source = file_get_contents( $the_path );
	$the_content = substr( $the_source, strpos( $the_source, "<!-------------- Content starts here ----------------->") );
	return strstr( $the_content, "<!-------------- Content ends here ----------------->", TRUE );
}

function retrieve_the_metadata_from_the_source_page( $in_this_file, $of_this_type, $with_this_path ) {
	switch ( $of_this_type ) {
		case "code"	:	$the_path = "$with_this_path/$in_this_file.$of_this_type"; break;
		case "post"	:	$the_path = "assets/posts/$of_this_type"; break;
		case "poem"	:	$the_path = "assets/poems/$of_this_type"; break;
		default		:	$the_path = "assets/$with_this_path/$in_this_file.php";
	}
	$the_source_array = file( $the_path );
	$the_metadata_array = [];
	foreach( $the_source_array as $this_line ) {
		$this_line_length = strlen( $search_for_this ) + 2;
		if( strpos( $this_line, "Date: " ) !== FALSE ) {
			$the_metadata_array[ "date" ] = trim( substr( $this_line, $this_line_length ) );
		} else if( strpos( $this_line, "Categories: " ) !== FALSE ) {
			$the_metadata_array[ "categories" ] -> trim( substr( $this_line, $this_line_length ) );
		} else if( strpos( $this_line, "Tags: " ) !== FALSE ) {
			$the_metadata_array[ "tags" ] -> trim( substr( $this_line, $this_line_length ) );
		} else if( strpos( $this_line, "Title: " ) !== FALSE ) {
			$the_metadata_array[ "title" ] -> trim( substr( $this_line, $this_line_length ) );
		} else if( strpos( $this_line, "Subsite: " ) !== FALSE ) {
			$the_metadata_array[ "subsite" ] -> trim( substr( $this_line, $this_line_length ) );
		} else if( strpos( $this_line, "Number: " ) !== FALSE ) {
			$the_metadata_array[ "number" ] -> trim( substr( $this_line, $this_line_length ) );
		} else if( strpos( $this_line, "ID: " ) !== FALSE ) {
			$the_metadata_array[ "id" ] -> trim( substr( $this_line, $this_line_length ) );
			break;
		}
	}
	return $the_metadata_array;
}





