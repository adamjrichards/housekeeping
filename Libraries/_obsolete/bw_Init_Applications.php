<?php

namespace init;

abstract class bw_Init_Applications {

###########################################################################################################
#			BW_Applications ("apps")														 #
###########################################################################################################

     public static function get_me_the_application_params_array( $with_this_handle ) {
		if ( $with_this_handle === "MY_BUILDERS_APPLICATION" ) {
			return [
				"the_handle" => "MY_BUILDERS_APPLICATION",
				"the_name" => "my_builders_application",
				"the_title" => "The Black Willow Builder's Application",
				"the_type" => "framework_node",
				"the_parent" => "MY_BUILDERS_GATEWAY",
				"the_left_sibling" => "append",
				"the_meta" => "default",
				"the_context" => "MY_SITE",
				"the_template" => "bw_framework/BW_Application.php",
				"the_node_opener" => "\n##!----- The Black Willow Builder's Application begins here. --->",
				"the_node_closer" => "\n##!----- The Black Willow Builder's Application ends here. --->",
				"the_tagName" => "",
				"the_id" => "",
				"the_className" => "",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "",
				"the_other_attributes" => ""
			];
		} else if ( $with_this_handle === "MY_RESEARCHERS_APPLICATION" ) {
			return [
				"the_handle" => "MY_RESEARCHERS_APPLICATION",
				"the_name" => "my_researchers_application",
				"the_title" => "The Black Willow Researcher's application",
				"the_type" => "framework_node",
				"the_parent" => "MY_RESEARCHERS_GATEWAY",
				"the_left_sibling" => "append",
				"the_meta" => "bw_applications.txt",
				"the_context" => "MY_DICTIONARY_PORTAL",
				"the_template" => "bw_framework/BW_Application.php",
				"the_node_opener" => "\n##!----- The Black Willow Researchers' Application begins here. --->",
				"the_node_closer" => "\n##!----- The Black Willow Researchers' Application ends here. --->",
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
}