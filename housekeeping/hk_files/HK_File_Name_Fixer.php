<?php

namespace housekeeping\hk_files;

class HK_File_Name_Fixer extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_prefix = null;

	function __construct( $the_root_folder, $the_prefix, $the_maximum_filecount = -1 ) {
		parent::__construct( $the_root_folder, $the_maximum_filecount );
		$this->my_root_folder = $the_root_folder;
		$this->my_prefix = $the_prefix;

		if ( \is_dir( $this->my_root_folder ) ) {
			$this->dename_the_files( $this->my_root_folder );
		}
	}

	public function dename_the_files( $in_this_folder ) {
		\chdir( $in_this_folder );
		$the_handle = \opendir( "." );
		if ( $the_handle !== FALSE ) {
			while ( FALSE !== ( $this_item = \readdir( $the_handle ) ) ) {
				if ( \preg_match( "/^[\.]/", $this_item ) === 1 ) {
					continue;
				}
				//\ln( __FILE__, __LINE__, $this_item );
				if ( \is_dir( $this_item ) ) {
					$this->dename_the_files( $this_item );
					//$the_trim = \trim( $this_item, "_" );
					//$the_removal = \str_replace( "$", "", $the_trim );
					//$the_removal = \str_replace( "drp_", "", $the_removal );
					//$the_removal = \str_replace( "_", "", $the_removal );
					//\rename( $this_item, "drp_$the_removal" );
				} else if ( \is_file( $this_item ) && \mb_strpos( $this_item, "drp" ) === 0 ) {
					//$the_trim = \trim( $this_item, "/\.\_/" );
					//$the_split = \mb_split( "_", $the_trim );
					//$the_filter = \array_unique( $the_split );
					//$the_splice = \join( "_", $the_filter );
					$the_splice = \str_replace( "ete_", "", $this_item );
					$the_splice = \str_replace( "d050_d0", "d050_", $the_splice );
					if ( $this_item !== $the_splice ) {
						\rename( $this_item, $the_splice );
					}
				}
			}
			\closedir( $the_handle );
		}
		\chdir( ".." );

	}
}

