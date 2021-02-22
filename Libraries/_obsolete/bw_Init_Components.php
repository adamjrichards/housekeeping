<?php

namespace init;

abstract class bw_Init_Components {

###########################################################################################################
#			BW_Components ("coms")														 #
###########################################################################################################


	public static function get_me_the_portal_params_array( $with_this_handle = "MY_PORTAL" ) {
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "my_portal",
			"the_title" => "Black Willow",
			"the_type" => "dom_node",
			"the_parent" => "MY_MAIN_TAG",
			"the_left_sibling" => "MY_LEFT_SIDEBAR",
			"the_meta" => "bw_portal.txt",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_components/BW_Portal.php",
			"the_node_opener" => "\n##!----- The Black Willow Portal begins here. --->",
			"the_node_closer" => "\n##!----- The Black Willow Portal ends here. --->",
			"the_tagName" => "section",
			"the_id" => "the_black_willow_portal",
			"the_className" => "dom_node component portal",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_sidebar_params_array( $with_this_handle ) {
		if ( $with_this_handle === "MY_LEFT_SIDEBAR" ) {
			return [
				"the_handle" => $with_this_handle,
				"the_name" => "my_black_willow_left_sidebar",
				"the_title" => "The Black Willow Indigenous Dictionary Project",
				"the_type" => "dom_node component",
				"the_parent" => "MY_MAIN_TAG",
				"the_left_sibling" => "append",
				"the_meta" => "default",
				"the_context" => "MY_PAGE",
				"the_template" => "bw_components/BW_Sidebar.php",
				"the_css_source" => "bw_css/bw_sidebar.css",
				"the_node_opener" => "\n##!-------------------- MY_LEFT_SIDEBAR begins here. -------------------->",
				"the_node_closer" => "\n##!-------------------- MY_LEFT_SIDEBAR ends here. -------------------->",
				"the_tagName" => "aside",
				"the_id" => "the_black_willow_left_sidebar",
				"the_className" => "dom_node component sidebar left",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "onmouseenter='add_my_listeners( this )'",
				"the_other_attributes" => ""
			];
		} else if ( $with_this_handle === "MY_RIGHT_SIDEBAR" ) {
			return [
				"the_handle" => $with_this_handle,
				"the_name" => "my_black_willow_right_sidebar",
				"the_title" => "The Black Willow Indigenous Dictionary Project",
				"the_type" => "dom_node component",
				"the_parent" => "MY_MAIN_TAG",
				"the_left_sibling" => "MY_PORTAL",
				"the_context" => "MY_PAGE",
				"the_meta" => "default",
				"the_template" => "bw_components/BW_Sidebar.php",
				"the_css_source" => "bw_css/bw_sidebar.css",
				"the_node_opener" => "\n##!-------------------- MY_RIGHT_SIDEBAR begins here. -------------------->",
				"the_node_closer" => "\n##!-------------------- MY_RIGHT_SIDEBAR ends here. -------------------->",
				"the_tagName" => "aside",
				"the_id" => "the_black_willow_right_sidebar",
				"the_className" => "dom_node component sidebar right",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "onmouseenter='add_my_listeners( this )'",
				"the_other_attributes" => ""
			];
		}
	}

	public static function get_me_the_gateway_params_array( $with_this_handle ) {
		if ( $with_this_handle === "MY_BUILDERS_GATEWAY" ) {
			return [
				"the_handle" => $with_this_handle,
				"the_name" => "my_builders_gateway",
				"the_title" => "The Black Willow Builder's Gateway",
				"the_type" => "dom_node component",
				"the_parent" => "MY_HUB",
				"the_left_sibling" => "append",
				"the_meta" => "uses_BW_Hub",
				"the_context" => "MY_PORTAL",
				"the_template" => "bw_components/BW_Gateway.php",
				"the_css_source" => "",
				"the_node_opener" => "\n##!-------------------- MY_BUILDERS_GATEWAY begins here. -------------------->",
				"the_node_closer" => "\n##!-------------------- MY_BUILDERS_GATEWAY ends here. -------------------->",
				"the_tagName" => "section",
				"the_id" => "the_builders_gateway",
				"the_className" => "component gateway builders",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "onmouseenter='add_my_listeners( this )'",
				"the_other_attributes" => "",
			];
		} else if ( $with_this_handle === "MY_RESEARCHERS_GATEWAY" ) {
			return [
				"the_handle" => "MY_RESEARCHERS_GATEWAY",
				"the_name" => "my_researchers_gateway",
				"the_title" => "The Black Willow Researcher's Gateway",
				"the_type" => "dom_node component",
				"the_parent" => "MY_HUB",
				"the_left_sibling" => "MY_BUILDERS_GATEWAY",
				"the_meta" => "uses_BW_Hub",
				"the_context" => "MY_HUB",
				"the_template" => "bw_components/BW_Gateway.php",
				"the_css_source" => "",
				"the_node_opener" => "\n##!-------------------- MY_RESEARCHERS_GATEWAY begins here. -------------------->",
				"the_node_closer" => "\n##!-------------------- MY_RESEARCHERS_GATEWAY ends here. -------------------->",
				"the_tagName" => "section",
				"the_id" => "the_researchers_gateway",
				"the_className" => "component gateway researchers",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "onmouseenter='add_my_listeners( this )'",
				"the_other_attributes" => ""
			];
		} else if ( $with_this_handle === "MY_LEARNERS_GATEWAY" ) {
			return [
				"the_handle" => "MY_LEARNERS_GATEWAY",
				"the_name" => "my_learners_gateway",
				"the_title" => "The Black Willow Learner's Gateway",
				"the_type" => "dom_node component",
				"the_parent" => "MY_HUB",
				"the_left_sibling" => "MY_RESEARCHERS_GATEWAY",
				"the_meta" => "uses_BW_Hub",
				"the_context" => "MY_PORTAL",
				"the_template" => "bw_components/BW_Gateway.php",
				"the_css_source" => "",
				"the_node_opener" => "\n##!-------------------- MY_LEARNERS_GATEWAY begins here. -------------------->",
				"the_node_closer" => "\n##!-------------------- MY_LEARNERS_GATEWAY ends here. -------------------->",
				"the_tagName" => "section",
				"the_id" => "the_learners_gateway",
				"the_className" => "component gateway learners",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "onmouseenter='add_my_listeners( this )'",
				"the_other_attributes" => ""
			];
		} else if ( $with_this_handle === "MY_CONTRIBUTORS_GATEWAY" ) {
			return [
				"the_handle" => "MY_CONTRIBUTORS_GATEWAY",
				"the_name" => "my_contributors_gateway",
				"the_title" => "The Black Willow Contributors Gateway",
				"the_type" => "dom_node component",
				"the_parent" => "MY_HUB",
				"the_left_sibling" => "MY_LEARNERS_GATEWAY",
				"the_meta" => "uses_BW_Hub",
				"the_context" => "MY_PORTAL",
				"the_template" => "bw_components/BW_Gateway.php",
				"the_css_source" => "",
				"the_node_opener" => "\n##!-------------------- MY_CONTRIBUTORS_GATEWAY begins here. -------------------->",
				"the_node_closer" => "\n##!-------------------- MY_CONTRIBUTORS_GATEWAY ends here. -------------------->",
				"the_tagName" => "section",
				"the_id" => "the_contributors_gateway",
				"the_className" => "component gateway contributors",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "onmouseenter='add_my_listeners( this )'",
				"the_other_attributes" => ""
			];
		}
	}
}