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
	//$_SESSION[ "the_pbox_content" ] = $_SESSION[ "the_pbox_content" ] . $add_this_to_the_pbox_content . "#hr>#hr>";
}

function cl( $stuff ) {
     $stuff = addslashes($stuff);
     // echo( "#script>console.log('$stuff');#/script>" );
}

function there_is_a_folder( $with_this_name ){
	return is_dir( $with_this_name );
}

function the_length( $of_this_here_thing ) {
     if ( is_string( $of_this_here_thing ) ) {
          return strlen( $of_this_here_thing );
     } else if ( is_array( $of_this_here_thing ) ) {
          return count( $of_this_here_thing );
     } else {
          return FALSE;
     }
}
function len( $of_this_here_thing ) {
     return the_length( $of_this_here_thing );
}
   

function where() {
	shout( getcwd() );
}

function delete_the_folder_called( $the_folder ) {
     $the_files = array_slice( scandir( $the_folder ), 2 );
     if ( ! empty( $the_files ) ) {
          foreach( $the_files as $this_here_file ) {
               if ( is_dir( "$the_folder/$this_here_file" ) ) { 
                    delete_the_folder_called( "$the_folder/$this_here_file" );
               } else {
                    unlink( "$the_folder/$this_here_file" );
               }
               rmdir( "$the_folder/$this_here_file" );
          }
     }
     rmdir( $the_folder );
}

function find_the_folder_called( $the_folder, $starting_here = "\\Web\\vhosts" ) {
     $the_folders = array_slice( scandir( $starting_here ), 2 );
     chdir( $starting_here );
     if ( ! empty( $the_folders ) ) {
          foreach( $the_folders as $this_folder ) {
               if ( $the_folder === $this_folder ) {
                    return "$starting_here\\$the_folder";
               } else if ( is_dir( $this_folder ) ) {
                    find_the_folder_called( $the_folder, $this_folder ); 
               }
          }
     } 
     
}

function create( $the_name, $the_type = "a file" ) {
    switch ( $the_type ) {
         case "a file"  : create_a_file_called( $the_name ); break;
         case "a folder"  : create_a_folder_called( $the_name ); break;
    }
}
     
function create_a_folder_called( $the_folder ) {
     if ( file_exists( $the_folder ) ) {
          delete_the_folder_called( $the_folder );
     }
     mkdir( $the_folder );
}

function create_a_file_called( $the_file ) {
     fopen( $the_file, "w+" );
}

function recreate_the_folder_called( $the_folder ) {
     $the_files = scandir( $the_folder );
     if ( ! empty( $the_files ) ) {
          foreach( $the_files as $this_here_file ) {
               if ( is_dir( $this_here_file ) ) {
                    delete_the_folder_called( $this_here_file );
                    rmdir( $this_here_file );
               } else {
                    unlink( $this_here_file );
               }
          }
     }
     mkdir( $the_folder );
}

function delete( $the_unloved_file ) {
     if ( is_file( $the_unloved_file ) ) {
	    unlink( $the_unloved_file );
     } else if ( is_dir( $the_unloved_file ) ) {
          delete_the_folder_called( $the_unloved_file );
     }
}

function recreate( $the_desired_file ) {
     delete( $the_desired_file );
     create( $the_desired_file, "a file" );
}

function say( $this_here ) {
	// echo "$this_here#br>";
}
function shout( $this_here ) {
	// echo "#h3>$this_here#/h3>";
}
function scream( $this_here ) {
	// echo "#h1>$this_here#/h1>";
}

function vump( $this_here ) {
     // echo "#pre>";
	var_dump( $this_here );
     // echo "#/pre>";
}

function count_the_array_entries( $the_countable ) {	
	return count( $the_countable );
}

function there_is_a_file_called( $called_this ) {
	// echo "#h2>File to check: $called_this#/h2>";
	if ( is_file( $called_this ) ) {
		// echo "#h3>File confirmed: $called_this#/h3>";
		return TRUE;
	} else {
		// echo "#h3>File unconfirmed: $called_this#/h3>";
		return FALSE;
	}
} // there_is_a_file_called()
		
function there_is_no_file_called( $called_this ) {
	// echo "#h2>File to check: $called_this#/h2>";
	if( is_file( $called_this ) ) {;
		// echo "#h3>File unconfirmed: $called_this#/h3>"; 
		return FALSE;
	} else {
		// echo "#h3>File confirmed: $called_this#/h3>";
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
	// echo "$the_low_end to $the_high_end#br>";
	return mt_rand( $the_low_end, $the_high_end );
}

function remove_the_first_element_in_the_array( $this_particular_array ){
	$array_shift( $this_particular_array );
} // remove_the_first_item_in_the_array()	

function get_the_objects_file( $of_this_type, $in_this_subfolder, $with_this_name ) {
	// echo(  $_SESSION[ $of_this_type."_uri" ] . "$in_this_subfolder/$with_this_name" );
	return $_SESSION[ $of_this_type."_uri" ] . "$in_this_subfolder/$with_this_name";
}

function get_the_template_for_this_post( $this_item ) {
	return "rg_assets/rg_posts/$this_item.php";
}

function _uri( $this_item ) {
	return "rg_assets/rg_posts/$this_item.php";
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