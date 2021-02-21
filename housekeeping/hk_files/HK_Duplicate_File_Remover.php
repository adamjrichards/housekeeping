<?php

namespace housekeeping\hk_files;

class HK_Duplicate_File_Remover extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_file_data;
	public $my_folders;

	function __construct( $the_root_folder, $the_maximum_filecount ) {
		parent::__construct( $the_root_folder, $the_maximum_filecount );
		$this->my_file_data = new \Ds\Map();
		$this->my_folders = new \Ds\Queue();
		$this->my_folders->push( $the_root_folder );
		if ( \is_dir( $this->my_root_folder ) ) {
			$this->delete_the_duplicate_files( $this->my_root_folder );
		}
	}

	public function delete_the_duplicate_files( $in_this_folder ) {
		\chdir( $in_this_folder );
		$the_handle = \opendir( "." );
		if ( $the_handle !== FALSE ) {
			while ( FALSE !== ( $this_item = \readdir( $the_handle ) ) ) {
				//\ln( __LINE__, $this->my_maximum_filecount, $this_item );
				if ( \preg_match( "/^[\.\_]/", $this_item ) === 1 ) {
					continue;
				}
				
				if ( $this->my_maximum_filecount !== -1 ) {
					if ( ! --$this->my_maximum_filecount >= 0 ) {
						return "Maximum files processed";
					}
				}
				//var_dump( $this_item );
				if ( \is_dir( $this_item ) ) {
					$this->delete_the_duplicate_files( $this_item );
					$this->my_folders->push( $this_item );
				} else if ( \is_file( $this_item ) ) {
					$the_path_info = \pathinfo( $this_item );
					$the_extension = $the_path_info[ "extension" ];
					$the_file_size = \filesize( $this_item );
					$the_finfo = \finfo_open();
					$the_finfo_string = \finfo_file( $the_finfo, $this_item );
					\finfo_close( $the_finfo );
					$the_current_file_data = [ $the_extension, $the_file_size, $the_finfo_string ];
					
					if ( $this->my_file_data->hasValue( $the_current_file_data ) ) {
						$this->my_negatives->add( $this_item );
					} else {
				 		$the_new_name = \preg_replace( "/\(\d\)/", "", $this_item );
						$the_new_name = \preg_replace( "/(\s*Copy\s*)*-*\s*/", "", $the_new_name );
						try {
							$the_renamed_file = \rename( $this_item, $the_new_name );
						} catch ( ErrorException $file_error ) {
							$the_renamed_file = null;
						}
						$this->my_positives->add( $the_renamed_file );
						$this->my_file_data->put( $the_renamed_file, $the_current_file_data );
					}
				}
			}
			\closedir( $the_handle );
		}
		\chdir( ".." );
	}
}