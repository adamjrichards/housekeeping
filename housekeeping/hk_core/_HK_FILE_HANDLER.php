<?php

namespace housekeeping\hk_core;

class _HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_positives;
	public $my_negatives;
	public $my_maximum_filecount;

	function __construct( $the_root_folder, $the_maximum_filecount = -1 ) {
		ini_set( "max_execution_time", 0 );
		if ( \is_dir( $the_root_folder ) ) {
			$this->my_root_folder = $the_root_folder;
		} else {
			$this->my_root_folder = $the_root_folder;
		}
		$this->my_positives = new \Ds\Set();
		$this->my_negatives = new \Ds\Set();
		$this->my_maximum_filecount = $the_maximum_filecount;
	}
	public function my_root_folder() {
		return $this->my_root_folder;
	}
	public function get_my_positives() {
		return $this->my_positives;
	}
	public function get_my_negatives() {
		return $this->my_negatives;
	}
	
}