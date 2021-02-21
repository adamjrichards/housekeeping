<?php

namespace housekeeping\hk_files;

class HK_File_Distributor extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_target_folder = null;
	public $my_criterion = null;
	public $my_counter = 0;
	public $my_folder_count = 1;
	public $my_file_count = 0;
	public $my_packages = 1;
	public $my_iterator;
	
	function __construct( $the_root_folder, $the_target_folder, $the_criterion, $the_prefix, $the_maximum_filecount = "no limit" ) {
		parent::__construct( $the_root_folder, $the_maximum_filecount );
		$this->my_root_folder = $the_root_folder;
		$this->my_target_folder = "$the_target_folder.distributed";
		$this->my_prefix = $the_prefix;
		$this->my_criterion = $the_criterion;
		$this->my_packages;
		$this->my_iterator = new \DirectoryIterator( $this->my_root_folder );
		if ( $the_maximum_filecount === "no limit" ) {
			$this->my_maximum_filecount = -1;
		} else {
			$this->my_maximum_filecount = $the_maximum_filecount;
		}
		if ( \is_dir( $this->my_root_folder ) ) {
			if ( ! \is_dir( $this->my_target_folder ) ) {
				\mkdir( $this->my_target_folder );
			}
			$this->count_the_files( $this->my_root_folder );
			//$this->distribute_the_files( $this->my_root_folder );
		}
	}

	public function count_the_files( $in_this_folder ) {
		\ln( __FILE__, __LINE__, $in_this_folder );
		$it = &$this->my_iterator;
		while( $it->valid() ) {
			if ( $it->isDir() ) {
				$its_name = $it->getFileName();
				if ( \preg_match( "/^[\.\_]/", $its_name ) === 1 ) {
					continue;
				}
				if ( \strpos( $its_name, "/.distributed/" ) !== FALSE ) {
					continue;
				}
				//\var_dump( __FILE__, __LINE__, $its_name );
				//$this->count_the_files( $its_name );
				$this->my_folder_count++;
			} else if ( $it->isFile() ) {
				$this->my_file_count++;
			}
			$it->next();
			if ( $counter++ === 10 ) {
				return;
			}
		}
		\ln( __FILE__, __LINE__, $this->my_file_count, $this->my_folder_count );
	}

	public function distribute_the_files( $in_this_folder ) {
		$the_items = new \Ds\Vector( \scandir( $in_this_folder ) );
		$the_filter = function( $the_value ) {
			return TRUE;
		};
		$the_file_list = $the_items->filter( $the_filter );
		$the_item_count = $the_items->capacity();
		$this->my_packages = \ceil( $the_item_count / $this->my_maximum_filecount );
		\ln( __FILE__, __LINE__, $this->my_packages );
		die();
		//\ln( __FILE__, __LINE__, $the_file_list );
		$the_apply = function( $the_value ) {
			if ( \is_dir( $the_value ) ) {
				return $this->distribute_the_files( $the_value );
			} else if ( \is_file( $the_value )) {
				\ln( $the_value, "$this->my_target_folder\\$the_value" );
			}
		};
		//$the_file_move = $the_file_list->apply( $the_apply );
	}
}