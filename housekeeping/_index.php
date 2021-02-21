<?php

namespace housekeeping;

use \Ds;


$the_core_folder = "hk_core";
$the_dev_folder = "hk_dev";
$the_files_folder = "hk_files";

$the_load_queue = new Ds\Map();
$the_core_files = new \Ds\Vector( \scandir( $the_core_folder ) );
$the_dev_files = new \Ds\Vector( \scandir( $the_dev_folder ) );
$the_files_files = new \Ds\Vector( \scandir( $the_files_folder ) );

function filter_this( $the_value ) {
	if ( \mb_strpos( $the_value, "." ) === 0 ) {
		return (bool) \mb_strpos( $the_value, "." );
	} else {
		return TRUE;
	}
}

$the_core_files = $the_core_files->filter( "housekeeping\\filter_this" );
$the_dev_files = $the_dev_files->filter( "housekeeping\\filter_this" );
$the_files_files = $the_files_files->filter( "housekeeping\\filter_this" );
$the_load_queue->putAll( [
	$the_core_folder=>$the_core_files,
	$the_dev_folder=>$the_dev_files,
	$the_files_folder=>$the_files_files ] );

foreach ( $the_load_queue as $this_key => $this_value_set ) {
	foreach ( $this_value_set as $this_value ) {
		if ( \is_file( "$this_key\\$this_value" ) ) {
			//print( "$this_key\\$this_value<br>");
			include "$this_key\\$this_value";
		}
	}
}
$the_prefixer = new hk_files\HK_File_Prefixer( "C:/Github/Agence_Lison/chateau_dencre", "cde", "" );
//$the_deleter = new housekeeping\hk_files\HK_Duplicate_File_Remover( "W:\\drphotos\\_work_files\\drphotos_psd\\Group_D001_to_D100", -1 );
//$the_name_fixer = new housekeeping\hk_files\HK_File_Name_Fixer( "W:\\drphotos\\_work_files\\drphotos_psd\\Group_D001_to_D100\\drp_d050", -1 );
//$the_comparator = new housekeeping\hk_files\HK_File_Comparator( "W:\\drphotos\\_work_files\\drphotos_psd\\Group_D001_to_D100", "/drp_d050_\d*/", -1 );
 