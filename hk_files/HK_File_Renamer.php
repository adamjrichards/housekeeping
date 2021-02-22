<?php

namespace housekeeping\hk_files;

class HK_File_Renamer extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_dirname;
	public $my_last_file_data = [];
	public $my_prefix = null;
	public $my_old_prefix = "temp";
	public $my_parent_folder_name = null;

	function __construct( $the_root_folder, $the_prefix, $the_old_prefix = null ) {
		$this->my_root_folder = $the_root_folder;
		$this->my_prefix = $the_prefix;
		if ( ! empty( $the_old_prefix ) ) {
			$this->my_old_prefix = $the_old_prefix;
		}
		if ( \is_dir( $this->my_root_folder ) ) {
			$this->rename_the_files( $this->my_root_folder );
		}
	}

	public function rename_the_files( $in_this_folder, $to_this_version = 1, $in_this_state = 1 ) {
		\chdir( $in_this_folder );
		$the_handle = \opendir( "." );
		if ( $the_handle !== FALSE ) {
			while ( FALSE !== ( $this_item = \readdir( $the_handle ) ) ) {
				if ( \preg_match( "/^[\.\_]/", $this_item ) === 1 ) {
					continue;
				}
				if ( \preg_match( "/(phpproj)|(README)|(LICENSE)|(\sln)|(xmlrpc)|(\.ico)|(manifest)|(\.ini)/", $this_item ) === 1 ) {
					continue;
				}

				if ( \preg_match( "/^($this->my_prefix\_)/", $this_item ) === 1 ) {
					continue;
				}
				if ( \mb_strpos( $this_item, "_" ) > 3 ) { // Prefixes are 2, 3, or 4 chars long and mandatory.
					$this->my_old_prefix = \mb_strstr( $this_item, "\_", TRUE );
				var_dump( $this->my_old_prefix );
					
				}
				if ( \is_dir( $this_item ) ) {
					$this->rename_the_files( $this_item, $to_this_version, $in_this_state );
				} else if ( \is_file( $this_item ) ) {
					$the_path_info = \pathinfo( $this_item );
					$the_extension = $the_path_info[ "extension" ];
					$this->my_dirname = \trim( $the_path_info[ "dirname" ], "\\_" );
					if ( \mb_strpos( $this->my_dirname, "." ) === 0 ) {
						$this->my_dirname = $in_this_folder;
					}
					$the_parents = explode( "\\", $this->my_dirname );
					$this->my_parent_folder_name = \array_pop( $the_parents );
					$this->my_parent_folder_name = \strtolower( $this->my_parent_folder_name );
					//var_dump( $this->my_old_prefix );
					 //var_dump( $this->my_parent_folder_name );
					//$this->my_parent_folder_name = \str_replace( $this->my_old_prefix, "", $this->my_parent_folder_name );
					// var_dump( $this->my_parent_folder_name );
					$the_filename = \trim( $the_path_info[ "filename" ], "\\_" );
					$the_filename = \strtolower( $the_filename );
					$the_strpos = (int) \mb_strpos( $the_filename, $this->my_parent_folder_name );
					if ( $the_strpos !== FALSE ) {
						if ( \mb_strpos( $the_filename, $this->my_parent_folder_name ) !== FALSE ) {
							$the_filename = \mb_substr( $the_filename, \mb_strlen( $this->my_parent_folder_name ) );
						}
					}
					$the_file_size = \filesize( $this_item );
					$the_finfo = \finfo_open();
					$the_finfo_string = \finfo_file( $the_finfo, $this_item );
					\finfo_close( $the_finfo );
					$the_current_file_data = [ $the_extension, $the_file_size, $the_finfo_string ];
					if ( $the_current_file_data === $this->my_last_file_data ) {
						\unlink( $this_item );
					} else {
						$the_tag = null;
						$the_image_size = \getimagesize( $this_item );
						if ( $the_image_size ) {
							$the_width = $the_image_size[0];
							$the_height = $the_image_size[1];
							$the_type = $the_image_size[2];
							$the_tag = $the_image_size[3];
							$the_file_dimensions = "x{$the_width}y{$the_height}";
							$the_new_name = "{$this->my_prefix}_{$this->my_parent_folder_name}_{$the_filename}_{$the_file_dimensions}_{$to_this_version}.{$in_this_state}.{$the_extension}";
						} else {
							$the_new_name = "{$this->my_prefix}_{$the_filename}_{$to_this_version}.{$in_this_state}.{$the_extension}";
						}					
						$the_new_name = \str_replace( "-", "_", $the_new_name );
						$the_new_name = \str_replace( "__", "_", $the_new_name );
						$the_new_name = \strtolower( $the_new_name );
						$the_new_path = "$this->my_dirname/$the_new_name";
						//echo $the_new_name . "<BR>";
						//\rename( $this_item, $the_new_name );
						$this->my_last_file_data = $the_current_file_data;
					}
				}
			} // while
				//var_dump( $the_new_path );
			\closedir( $the_handle );
			chdir( ".." );
		} // if
		//$in_this_folder = \str_replace( "$the_old_prefix\_", "", $in_this_folder );
		//\rename( $in_this_folder, \strtolower( "{$this->my_prefix}_{$in_this_folder}" ) );
	} // rename_the_files()
}