<?php

namespace housekeeping\hk_files;

class HK_File_Filter extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_regex;
	public $my_index_map;

	function __construct( $the_root_folder, $the_regex ) {
		$this->my_root_folder = $the_root_folder;
		$this->the_regex = $the_regex;
		if ( \is_dir( $this->my_root_folder ) ) {
			$this->filter_the_files( $this->my_root_folder );
		}
	}

	public function filter_the_files( $in_this_folder  ) {
		\chdir( $in_this_folder );
		$the_candidate_files = new Vector( \scandir( ".", TRUE ) );
		$the_candidate_ids = new Vector();
		$the_filter = function( $the_candidate ) {
			$the_candidates_new_id = \md5_file( $the_candidate );
			if ( $the_candidate_ids->contains( $the_candidates_new_id ) ) {
				return false;
			} else {
				$the_candidate_ids->push( $the_candidates_new_id );
				return TRUE;
			}
		};
		
		$the_approved_files = $the_candidate_files->filter( $the_filter );
		\chdir( ".." );
	}
}