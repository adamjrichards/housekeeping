<?php

namespace housekeeping\hk_files;

class HK_File_Comparator extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_regex;
	public $my_index_map;
	public $my_new_file_collection;

	function __construct( $the_root_folder, $the_regex, $the_maximum_filecount = -1 ) {
		parent::__construct( $the_root_folder, $the_maximum_filecount );
		$this->my_root_folder = $the_root_folder;
		$this->my_regex = $the_regex;
		$this->my_new_file_collection = new \Ds\Map();
		if ( \is_dir( $this->my_root_folder ) ) {
			$this->index_the_files_by_filesize( $this->my_root_folder );
			$this->collect_the_files();
		}
	}

	public function index_the_files_by_filesize( $in_this_folder  ) {
		\chdir( $in_this_folder );
		$the_candidate_folders = \scandir( "." );
		foreach ( $the_candidate_folders as $this_folder ) {
			if ( \preg_match( "/^[\.]/", $this_folder ) === 1 ) {
				continue;
			}
			if ( \preg_match( $this->my_regex, $this_folder ) ) {
				$the_candidate_files = \scandir( $this_folder );
				$the_folder_file_data = new \Ds\Map();
				foreach ( $the_candidate_files as $this_file ) {
					if ( \is_file( "$this_folder\\$this_file" ) ) {
						$the_candidate_id = \mb_strstr( $this_file, "_x", TRUE );
						$the_candidate_xy = \mb_strstr( $this_file, "x" );
						$the_candidate_size = \filesize( "$this_folder\\$this_file" );
						if ( $the_folder_file_data->hasKey( $the_candidate_id ) ) {
							if ( $the_candidate_size >= $the_folder_file_data->get( $the_candidate_id ) ) {
								$this->my_new_file_collection->put( $this_file, $the_candidate_size );
							}
						} else {
							$the_folder_file_data->put( $the_candidate_id, $the_candidate_size );
							$this->my_new_file_collection->put( $this_file, [ $this_folder, $the_candidate_id, $the_candidate_size ] );
						}
					}
				}
			}
		}
		\chdir( ".." );
	}
	public function collect_the_files() {
		$the_callback = function( $the_key, $the_value ) {
			\ln( __FILE__, __LINE__, $the_key, $the_value );
			
			if ( ! \is_dir( "$this->my_root_folder\\$the_value[0].collected" ) ) {
				\mkdir( "$this->my_root_folder\\$the_value[0].collected" );
			}
			if ( \is_file( "$this->my_root_folder\\$the_value[0]\\$the_key" ) ) {
				\copy( "$this->my_root_folder\\$the_value[0]\\$the_key", "$this->my_root_folder\\$the_value[0].collected\\$the_key" );
				//\ln( __LINE__, "$the_key.collected" );
			} 
		};
		$this->my_new_file_collection->apply( $the_callback );
		\chdir( ".." );
	}
}
