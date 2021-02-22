<?php

namespace housekeeping\hk_files;

class HK_File_Distributor_2 extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_target_folder = null;
	public $my_criterion = null;
	public $my_counter = 0;
	
	function __construct( $the_root_folder, $the_target_folder, $the_criterion, $the_prefix, $the_maximum_filecount = "no limit" ) {
		parent::__construct( $the_root_folder, $the_maximum_filecount );
		$this->my_root_folder = $the_root_folder;
		$this->my_target_folder = "$the_target_folder.distributed";
		$this->my_prefix = $the_prefix;
		$this->my_criterion = $the_criterion;
		if ( $the_maximum_filecount === "no limit" ) {
			$this->my_maximum_filecount = -1;
		} else {
			$this->my_maximum_filecount = $the_maximum_filecount;
		}
		if ( \is_dir( $this->my_root_folder ) ) {
			if ( ! \is_dir( $this->my_target_folder ) ) {
				\mkdir( $this->my_target_folder );
			}
			$this->distribute_the_files( $this->my_root_folder );
		}
	}

	public function distribute_the_files( $in_this_folder ) {
		$the_handle = \opendir( "." );
		if ( $the_handle !== FALSE ) {
			while ( FALSE !== ( $this_item = \readdir( $the_handle ) ) ) {
				if ( \preg_match( "/^[\.\_]/", $this_item ) === 1 ) {
					continue;
				}
				if ( \strpos( $this_item, "/.distributed/" ) !== FALSE ) {
					continue;
				}
				if ( \is_dir( $this_item ) ) {
					$this->distribute_the_files( $this_item );
				} else {
					$this->my_counter++;
				}
					/*else if ( \is_file( "$in_this_folder\\$this_item" ) && \preg_match( $this->my_criterion, $this_item ) === 1 ) {
					\preg_match( $this->my_criterion, $this_item, $the_matches );
					$the_new_folder_name = "$this->my_target_folder\\$the_matches[0].distributed";
					if ( ! is_dir( $the_new_folder_name ) ) {  
						//\mkdir( $the_new_folder_name );
						print "New folder $the_new_folder_name created\.\n";
					}
					$the_split = \preg_split( "/[\W]/", $this_item );
					$the_new_file_name = \array_shift( $the_split ) . "." . \array_pop( $the_split ) . ".distributed";
					$the_new_file = "$this->my_target_folder\\$the_new_folder_name\\$the_new_file_name";
					//\copy( $this_item, $the_new_file_name );
					print "File $this_item copied to $the_new_file\n";
					if ( \md5_file( $this_item ) === \md5_file( $the_new_file )) {
						//\unlink( $this_item );
						print "File $this_item deleted\,\n";
					}
				} */
			}
			\closedir( $the_handle );
		}
	}
}

