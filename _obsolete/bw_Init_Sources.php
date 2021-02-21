<?php

namespace init;

abstract class bw_Init_Sources {

	public static function get_me_the_script_group( $with_this_handle ) {
		return [
               "the_handle" => $with_this_handle,
               "the_name" => "initial_script_group",
               "the_type" => "framework abstract container",
               "the_parent" => "MY_HEAD_TAG",
               "the_left_sibling" => "append",
               "the_context" => "MY_PAGE",
               "the_template" => "bw_framework/BW_Script_Group.php",
               "MIMEType" => "text/javascript",
               "the_folders" => [ "bw_js/bw_system/bw_core/", "bw_js/bw_system/bw_functions/" ]
          ];
     }

	public static function get_me_the_link_group( $with_this_handle = null ) {
		return [
               "the_handle" => $with_this_handle,
               "the_name" => "initial_link_group",
               "the_type" => "framework abstract container",
               "the_parent" => "MY_HEAD_TAG",
               "the_left_sibling" => "append",
               "the_context" => "MY_PAGE",
               "the_template" => "bw_framework/BW_Link_Group.php",
               "MIMEType" => "text/javascript",
               "the_json_file" => "bw_json/bw_initial_link_group.json"
          ];
     }

	public static function get_me_the_meta_group( $with_this_handle = null ) {
		return [
               "the_handle" => $with_this_handle,
               "the_name" => "initial_meta_group",
               "the_type" => "framework abstract container",
               "the_parent" => "MY_HEAD_TAG",
               "the_left_sibling" => "append",
               "the_context" => "MY_PAGE",
               "the_template" => "bw_framework/BW_Meta_Group.php",
               "MIMEType" => "text/javascript",
               "the_json_file" => "bw_json/bw_initial_meta_group.json"
          ];
     }
}