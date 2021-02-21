<?php

function howmany( $the_array ) {
	say( count( $the_array ) );
}
function pbox() {
	if( isset( $_SESSION[ "the_pbox_content" ] )) {
		$the_pbox = new Php_Box( $_SESSION[ "the_pbox_content" ] );
	}
}

function pbout( $add_this_to_the_pbox_content ) {
	$_SESSION[ "the_pbox_content" ] = $_SESSION[ "the_pbox_content" ] . $add_this_to_the_pbox_content . "<hr><hr>";
}

if ( ! function_exists( 'cl' ) ) :
	function cl( $stuff ) {
		$stuff = addslashes($stuff);
		echo( "<script>console.log('$stuff');</script>" );
	}
endif;

function there_is_a_folder( $with_this_name ){
	return is_dir( $with_this_name );
}

function delete( $the_unloved_file ) {
	unlink( $the_unloved_file );
}

function say( $this_here ) {
	echo "$this_here<br>";
}
function shout( $this_here ) {
	echo "<h3>$this_here</h3>";
}
function scream( $this_here ) {
	echo "<h1>$this_here</h1>";
}

function vump( $this_here ) {
	echo var_dump( $this_here );
}

function count_the_array_entries( $the_countable ) {	
	return count( $the_countable );
}

function there_is_a_file_called( $called_this ) {
	//echo "<h2>File to check: $called_this</h2>";
	if ( is_file( $called_this ) ) {
		//echo "<h3>File confirmed: $called_this</h3>";
		return TRUE;
	} else {
		//echo "<h3>File unconfirmed: $called_this</h3>";
		return FALSE;
	}
} // there_is_a_file_called()
		
function there_is_no_file_called( $called_this ) {
	//echo "<h2>File to check: $called_this</h2>";
	if( is_file( $called_this ) ) {;
		//echo "<h3>File unconfirmed: $called_this</h3>"; 
		return FALSE;
	} else {
		//echo "<h3>File confirmed: $called_this</h3>";
		return TRUE;
	}
} // there_is_no_file_called()

function there_is_a_folder_called( $called_this ) {
	if ( ( file_exists( $called_this ) ) && ( is_dir( $called_this ) ) ) {
		return TRUE;
	} else {
		return FALSE;
	}	
} // there_is_a_folder_called()
		
function there_is_no_folder_called( $called_this ) {
	if ( is_dir( $called_this ) ) {
		return FALSE;
	} else {
		return TRUE;
	}
}

function get_me_a_random_integer_between( $the_low_end, $the_high_end ) {
	//echo "$the_low_end to $the_high_end<br>";
	return mt_rand( $the_low_end, $the_high_end );
}

function remove_the_first_element_in_the_array( $this_particular_array ){
	$array_shift( $this_particular_array );
} // remove_the_first_item_in_the_array()	

function get_the_objects_file( $of_this_type, $in_this_subfolder, $with_this_name ) {
	//echo(  $_SESSION[ $of_this_type."_uri" ] . "$in_this_subfolder/$with_this_name" );
	return $_SESSION[ $of_this_type."_uri" ] . "$in_this_subfolder/$with_this_name";
}

function get_the_uri_for_this_post( $this_item ) {
	return "assets/posts/$this_item.php";
}

function _uri( $this_item ) {
	return "assets/posts/$this_item.php";
}

function clean_the_place_up() {
	$the_crawler = new RecursiveDirectoryIterator( ".." );
	$the_search_targets = array( 'error_log', '_notes', 'dwsync' );
	foreach( new RecursiveIteratorIterator( $the_crawler ) as $the_file_in_question ) {
		shout( $the_file_in_question );
		foreach( $the_search_targets as $the_target ) {
			say($the_target);
			if ( strpos( $the_file_in_question, $the_target ) != FALSE ) {
				unlink( $the_file_in_question );
				scream( $the_file_in_question );
			}
		}
	}

}