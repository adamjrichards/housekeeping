<?php

namespace housekeeping\hk_files;

class HK_Image_Converter extends \housekeeping\hk_core\_HK_FILE_HANDLER {
	
	/* Renames all the files in a folder to the BW standard format. */
	public $my_root_folder = null;
	public $my_input_filetype;
	public $my_output_filetype;

	function __construct( $the_root_folder, $the_maximum_filecount, $the_input_filetype, $the_output_filetype ) {
		ini_set( "max_execution_time", 3600 );
		parent::__construct( $the_root_folder, $the_maximum_filecount );
		$this->my_output_files = new \Ds\Queue();
		$this->my_input_files = new \Ds\Queue();
		$this->my_input_filetype = $the_input_filetype;
		$this->my_output_filetype = $the_input_filetype;
		if ( \is_dir( $this->my_root_folder ) ) {
			$this->convert_the_image_files( $this->my_root_folder );
		}
	}

	public function convert_the_image_files( $in_this_folder ) {
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
				var_dump( $this_item );
				if ( \is_dir( $this_item ) ) {
					$the_renamed_input_folder = "{$this_item}_{$this->my_input_filetype}";
					\mkdir( $the_new_input_folder );
					$the_new_output_folder = "{$this_item}_{$this->my_output_filetype}";
					\mkdir( $the_new_output_folder );
					$this->convert_the_image_files( $this_item );
					$this->my_folders->push( $this_item );
				} else if ( \is_file( $this_item ) && \pathinfo( $this_item, PATHINFO_EXTENSION ) === $this->my_input_filetype ) {
					$the_image = new \Imagick( $this_item );
					$the_image->flattenImages();
					$the_image->setImageFormat( $this->my_output_filetype );
					$the_image_filename = \basename( $this_item );
					$the_image->writeImage( "$the_new_output_folder\\$the_image_filename.$this->my_output_filetype" );
					\rename( $this_item, "$the_renamed_input_folder\\$the_image_filename.$this->my_input_filetype" );
				}
			}
			\closedir( $the_handle );
		}
		\chdir( ".." );
	}
}