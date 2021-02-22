<?php

namespace housekeeping\hk_files;

class HK_File_Prefixer extends \housekeeping\hk_core\_HK_FILE_HANDLER {

	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_dirname;
	public $my_last_file_data = [];
	public $my_prefix = null;
	public $my_old_prefix = "temp";
	public $my_parent_folder_name = null;

	function __construct( $the_root_folder, $the_new_prefix, $the_old_prefix = null ) {
		$this->my_root_folder = $the_root_folder;
		$this->my_prefix = $the_new_prefix;
		if ( ! empty( $the_old_prefix ) ) {
			$this->my_old_prefix = $the_old_prefix;
		}
		if ( \is_dir( $this->my_root_folder ) ) {
			$this->prefix_the_files( $this->my_root_folder );
		}
	}

	public function prefix_the_files( $in_this_folder, $to_this_version = 1, $in_this_state = 1 ) {
		$the_new_name = "";
		$the_old_prefix = "";
		$the_new_prefix = $this->my_prefix;
		\chdir( $in_this_folder );
		$the_handle = \opendir( "." );
		if ( $the_handle !== FALSE ) {
			while ( FALSE !== ( $this_item = \readdir( $the_handle ) ) ) {
				$the_candidate_filename = \ltrim( \pathinfo( $this_item, PATHINFO_FILENAME ), "\_" );
				if ( \preg_match( "/^\.|(\.phpproj)|(\.sln)|(\.user)|(\.ste)|(\.ico)|(\.manifest)|(\.ini)|(\.txt)|(\.conf)|(\.lnk)/", $this_item ) === 1 ) {
					continue;
				}
				if ( \preg_match( "/(README)|(LICENSE)|(xmlrpc\.xml)|(index\.php)|(php\_info\.php)|(xdebug\_info\.php)|(\.git)|(\.vs)/", $this_item ) === 1 ) {
					continue;
				}
				if ( \preg_match( "/(\_obsolete)|(\_resources)|(\_testbench)|(\_code_library)|(\_asset_library)|(\_debug)|(\_notes)|(xdebug)/", $this_item ) === 1 ) {
					continue;
				}
				if ( \preg_match( "/(\.exe)|(\.dll)|(\.bat)/", $this_item ) === 1 ) {
					continue;
				}
				if ( \preg_match( "/(^$this->my_prefix\_)/", $this_item ) === 1 ) {
					continue;
				}
				$the_capitals_prefix = \mb_strtoupper( $this->my_prefix );
				if ( \preg_match( "/(^$the_capitals_prefix\_)/", $this_item ) === 1 ) {
					continue;
				}

				if ( ( \is_file( $this_item ) ) && ( \mb_strpos( $this_item, ".", 1 ) === FALSE ) ) {
					continue;
				}
				// Replace Black Willow prefixes and infixes with a bw reference.
				if ( \preg_match( "/black\_willow/", $the_candidate_filename ) === 1 ) {
					$the_candidate_file = \preg_replace( "/^(black_willow)/", "_bwt", $the_candidate_filename );
				}
				if ( \preg_match( "/bw_/", $the_candidate_filename ) === 1 ) {
					$the_candidate_file = \preg_replace( "/^(bw_)/", "_bwt_", $the_candidate_filename, 1 );
				}
				if ( \preg_match( "/^BW_/", $the_candidate_filename ) === 1 ) {
					$the_candidate_file = \preg_replace( "/^(BW_)/", "_BWT_", $the_candidate_filename, 1 );
				}

				// If the old file doesn't have a legitimate prefix, make it a bwt (Black Willow template).
				if ( \mb_strpos( $this_item, "_" ) > 3 ) { // Prefixes are 2, 3, or 4 chars long and mandatory.
					$the_old_prefix = \mb_strstr( $this_item, "_", TRUE );
					$the_candidate_filename = \preg_replace( "/$the_old_prefix\_/", "_bwt_", $the_candidate_filename, 1 );
				}

				// Rename the files recursively.
				if ( \is_dir( $this_item ) ) {
					$this->prefix_the_files( $this_item, $to_this_version, $in_this_state );
					$the_new_name = "{$the_new_prefix}_{$the_candidate_filename}";
				} else if ( \is_file( $this_item ) ) {
					$the_path_extension = \pathinfo( $this_item, PATHINFO_EXTENSION );
					if ( $the_path_extension === "" ) {
						continue;
					}
					if ( \preg_match( "/^(\_*)([A-Z]{1,})/", $the_candidate_filename ) != FALSE ) {
						$the_new_prefix = \mb_strtoupper( $this->my_prefix );
					}
					if ( \preg_match( "/^(\_*)([a-z]{1,}\_)/", $the_candidate_filename ) >= 1 ) {
						$the_new_prefix = \mb_strtolower( $this->my_prefix );
					}
					$the_new_name = "{$the_new_prefix}{$the_candidate_filename}.{$the_path_extension}";
				}
				print_r( "Renaming $this_item to $the_new_name.<BR>" );
				\rename( $this_item, $the_new_name,  );
			} // while
			\closedir( $the_handle );
			chdir( ".." );
		} // if
		//$in_this_folder = \str_replace( "$the_old_prefix\_", "", $in_this_folder );
		//\rename( $in_this_folder, \strtolower( "{$this->my_prefix}_{$in_this_folder}" ) );
	} // rename_the_files()
}