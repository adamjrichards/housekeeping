<?php

namespace housekeeping\hk_files;

class HK_File_Hunter extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_dirname;
	public $my_last_file_data = [];
	public $my_prefix = null;

	function __construct( $the_root_folder, $the_prefix ) {
		$this->my_root_folder = $the_root_folder;
		$this->my_prefix = $the_prefix;

		if ( \is_dir( $this->my_root_folder ) ) {
			if ( $this->rename_the_files( $this->my_root_folder ) ) {
				//$this->delete_the_duplicate_files( $this->my_root_folder );
			}
		}
	}

	public function rename_the_files( $in_this_folder, $to_this_version = 1, $in_this_state = 1 ) {
		\chdir( $in_this_folder );
		$the_handle = \opendir( "." );
		if ( $the_handle !== FALSE ) {
			while ( FALSE !== ( $this_item = \readdir( $the_handle ) ) ) {
				if ( \preg_match( "/^[\.\_($this->my_prefix)]/", $this_item ) === 1 ) {
					continue;
				}
				if ( \is_dir( $this_item ) ) {
					//\ln( $this_item );
					$this->rename_the_files( $this_item );
				} else if ( \is_file( $this_item ) ) {
					$the_path_info = \pathinfo( $this_item );
					$the_extension = $the_path_info[ "extension" ];
					$this->my_dirname = \trim( $the_path_info[ "dirname" ], "\\_0" );
					if ( \mb_strpos( $this->my_dirname, "." ) === 0 ) {
						$this->my_dirname = $in_this_folder;
					}
					$the_parents = explode( "\\", $this->my_dirname );
					$this->my_parent_folder_name = \array_pop( $the_parents );
					$the_filename = \trim( $the_path_info[ "filename" ], "\\_0" );
					$the_strpos = (int) \mb_strpos( $the_filename, $this->my_parent_folder_name );
					if ( $the_strpos !== FALSE ) {
						$the_filename = \mb_substr( $the_filename, \mb_strlen( $this->my_parent_folder_name ) - 1 );
					}
					$the_image_size = \getimagesize( $this_item );
					$the_width = $the_image_size[0];
					$the_height = $the_image_size[1];
					$the_file_size = \filesize( $this_item );
					$the_finfo = \finfo_open();
					$the_finfo_string = \finfo_file( $the_finfo, $this_item );
					\finfo_close( $the_finfo );
					$the_current_file_data = [ $the_extension, $the_image_size[3], $the_file_size, $the_finfo_string ];
					if ( $the_current_file_data === $this->my_last_file_data ) {
						\unlink( $this_item );
						continue;
					} else {
						$the_file_dimensions = "x{$the_width}y{$the_height}";
						$the_new_name = "{$this->my_prefix}_{$this->my_parent_folder_name}_{$the_filename}_{$the_file_dimensions}_{$to_this_version}.{$in_this_state}.{$the_extension}";
						$the_new_name = \str_replace( "-", "_", $the_new_name );
						$the_new_name = \str_replace( "__", "_", $the_new_name );
						$the_new_name = \strtolower( $the_new_name );
						$the_new_path = "$this->my_dirname\\$the_new_name";
					}
					\rename( $this_item, $the_new_name );
					$this->my_last_file_data = $the_current_file_data;
				} else {
					continue;
				}
			}
			\closedir( $the_handle );
		}
		\chdir( ".." );
		if ( getcwd() !== $this->my_root_folder ) {
			\rename( $in_this_folder, \strtolower( "{$this->my_prefix}_{$this->my_parent_folder_name}" ) );
		} else {
			return TRUE;
		}
	}
	
	public function delete_the_duplicate_files( $in_this_folder ) {
		\chdir( $in_this_folder );
		$the_handle = \opendir( "." );
		if ( $the_handle !== FALSE ) {
			while ( FALSE !== ( $this_item = \readdir( $the_handle ) ) ) {
				if ( \preg_match( "/^[\.\_]/", $this_item ) === 1 ) {
					continue;
				}
				if ( \mb_strpos( $this_item, "DELETE" ) === 0 ) {
					\unlink( $this_item );
				}
				if ( is_dir( $this_item ) ) {
					$this->delete_the_duplicate_files( $this_item );
				}
			}
			\closedir( $the_handle );
		}
		
		\chdir( ".." );		
	}
}
