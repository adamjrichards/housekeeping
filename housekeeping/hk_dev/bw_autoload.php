<?php
if ( ! \function_exists( "the_bw_autoload" ) ) {
	function the_bw_autoload( $the_class_with_namespace ) {

		// get the server mappings
		if ( ! \defined( "MY_BW_DEFAULT_ERROR_HANDLER" )  ) {
			define( "MY_BW_DEFAULT_ERROR_HANDLER", $_SERVER[ "MY_BW_DEFAULT_ERROR_HANDLER" ] );
		}
		if ( ! \defined( "MY_BW_PREFIX" )  ) {
			define( "MY_BW_PREFIX", $_SERVER[ "MY_BW_PREFIX" ] );
		}
		if ( ! \defined( "MY_PROJECT_PREFIX" )  ) {
			\defined( "MY_PROJECT_PREFIX", $_SERVER[ "MY_PROJECT_PREFIX" ] );
		}
		if ( ! \defined( "MY_PROJECT_PATH" )  ) {
			define( "MY_PROJECT_PATH", $_SERVER[ "MY_PROJECT_PATH" ] );
		}
		$the_errex = MY_DEFAULT_ERROR_HANDLER . ""; // get a default handler

		$the_path = \explode( "\\", $the_class_with_namespace );
		$the_domain_space = \array_shift( $the_path );
		$the_class = \array_pop( $the_path );
		$the_prefix = \strstr( $the_class, "_", TRUE );
		if ( ! empty( $the_path ) ) {
			$the_folder = \implode( "/", $the_path );
		} else {
			$the_folder = "";
		}
		$the_file = "$the_class.php";
		$the_class_prefix = \strstr( $the_class, "_", TRUE );
		if ( $the_class_prefix === \strtoupper( $the_class_prefix ) ) {
			$the_folder_to_try = \str_replace( MY_BW_PREFIX, MY_PROJECT_PREFIX, $the_folder );
			$the_file_to_try = \str_replace( \strtoupper( MY_BW_PREFIX ), \strtoupper( MY_PROJECT_PREFIX ), $the_file );
		} else {
			$the_folder_to_try = \str_replace( MY_BW_PREFIX, MY_PROJECT_PREFIX, $the_folder );
			$the_file_to_try = \str_replace( MY_BW_PREFIX, MY_PROJECT_PREFIX, $the_file );
		}
		if( \file_exists( MY_PROJECT_PATH . "$the_folder_to_try/$the_file_to_try" ) ) {
			include MY_PROJECT_PATH . "$the_folder_to_try/$the_file_to_try";
			if( ! \class_exists( $the_class_with_namespace ) ) {
				include "$the_folder/$the_file";
			}
		} else {
			include "$the_folder/$the_file";
		}
	}
}