<?php

namespace black_willow\init;
abstract class bw_Init_Framework {

###########################################################################################################
#			BW_Framework ("frame")														 #
###########################################################################################################

	public static function get_me_the_project_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_PROJECT";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "Black Willow",
			"the_title" => "Black Willow",
			"the_type" => "framework_node",
			"the_parent" => "self",
			"the_left_sibling" => "append",
			"the_meta" => "Site default",
			"the_context" => "Black Willow",
			"the_template" => "bw_framework/BW_Project.php",
			"the_node_opener" => "\n##!----- The Black Willow project begins here. --->",
			"the_node_closer" => "\n##!----- The Black Willow project ends here. --->",
			// Only in BW_Site
			"the_namespace" => "Black_Willow",
			"the_home_folder" => "W:/vhosts/black_willow",
			"the_manifest" => "W:/vhosts/black_willow",
			"the_index_page" => "",
			"the_tagName" => "ggg",
			"the_id" => "",
			"the_className" => "",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_site_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_SITE";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "Black Willow",
			"the_title" => "Black Willow",
			"the_type" => "framework_node",
			"the_parent" => "MY_PROJECT",
			"the_left_sibling" => "append",
			"the_meta" => "Site default",
			"the_context" => "MY_PROJECT",
			"the_template" => "framework/BW_Site.php",
			"the_node_opener" => "\n##!----- The Black Willow website begins here. --->",
			"the_node_closer" => "\n##!----- The Black Willow website ends here. --->",
			// Only in BW_Site
			"the_namespace" => "Black_Willow",
			"the_home_folder" => "C:/Web/vhosts/black_willow",
			"the_manifest" => "C:/Web/vhosts/black_willow",
			"the_index_page" => "index.php",
		    // Global
			"the_tagName" => "vvv",
			"the_id" => "",
			"the_className" => "",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_page_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_PAGE";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "The Black Willow Project",
			"the_title" => "The Black Willow Project",
			"the_type" => "framework_node",
			"the_parent" => "MY_SITE",
			"the_left_sibling" => "append",
			"the_meta" => "Site default",
			"the_context" => "MY_SITE",
			"the_template" => "bw_framework/BW_Page.php",
			"the_node_opener" => "\n##!----- The Black Willow index page begins here. --->",
			"the_node_closer" => "\n##!----- The Black Willow index page ends here. --->",
			"the_tagName" => "",
			"the_id" => "",
			"the_className" => "",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}
}