<?php

namespace black_willow\bw_toolkit;

class BW_File_Handler {

	public $my_folder;
	public $my_files;
	public $my_prefix;
	public $my_filename_exclusion_list;
	public $my_prefix_exclusion_list;

	function __construct() {
		$this->my_filename_exclusion_list = new \Ds\Deque( [
			"..", ".", ".git", ".gitignore", "index.php", "index.html", "favicon.ico", "phpinfo.php",
			"_admin", "_assets", "_debug", "_notes", "_obsolete", "_resources",
			"Black Willow.ste", "Git black_willow.lnk", "nbproject"
			] );
		$this->my_prefix_exclusion_list = new \Ds\Deque( [
				"BW_", "bw_",
				"AJR_", "ajr_",
				"RG_", "rg_",
				"DT_", "dt_",
				"PUL_", "pul_",
				"BOF_", "bof_",
				"NGTQ_", "ngtq_",
				"DRPH_", "drph_",
				"STA_", "sta_",
				"AW_", "aw_",
				"PSYN_", "psyn_"
			] );
	}

	public function bw_add_the_prefix( $spelled_thusly, $to_this_file_or_folder ) {
		$this->my_prefix = $spelled_thusly;
		$this->my_folder = $to_this_file_or_folder;
		$this->my_files = new \Ds\Vector( \scandir( $this->my_folder ) );
		//\line_out( __FILE__, __LINE__, $this->my_files );
		$this->my_files->filter(
			function( $the_culprit ) {
				if ( $this->my_filename_exclusion_list->contains( $the_culprit ) ) {
					return FALSE;
				}
				$the_prefix = \substr( $the_culprit, 0, \strpos( $the_culprit, "_", 1 ) + 1 );
				if ( $this->my_prefix_exclusion_list->contains( $the_prefix ) ) {
					return FALSE;
				}

				if ( is_dir( "$this->my_folder\\$the_culprit" ) ) {
					$the_old_name = $this->my_folder;
					$this->bw_add_the_prefix( $this->my_prefix, "$this->my_folder\\$the_culprit" );
					$this->my_folder = $the_old_name;
				}
				\rename( "$this->my_folder\\$the_culprit", "$this->my_folder\\$this->my_prefix$the_culprit" );

				return TRUE;
			} );
	}

}