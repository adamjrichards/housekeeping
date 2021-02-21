<?php

namespace init;

abstract class bw_Init_Static_Pages {

###########################################################################################################
#			BW_Static_Pages ("stats")													 #
###########################################################################################################

	public static function get_me_the_smallprint_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_SMALLPRINT";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "my_smallprint",
			"the_title" => "The Black Willow Project smallprint",
			"the_type" => "dom_node static",
			"the_parent" => "MY_FOOTER_TAG",
			"the_left_sibling" => "append",
			"the_meta" => "default",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_components/BW_Smallprint.php",
			"the_css_source" => "",
			"the_node_opener" => "\n##!-------------------- MY_SMALLPRINT begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_SMALLPRINT ends here. -------------------->",
			"the_tagName" => "div",
			"the_id" => "the_smallprint",
			"the_className" => "black_willow component smallprint",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "onmouseenter='add_my_listeners( this )'",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_about_me_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_ABOUT_ME";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "my_black_willow_about_section",
			"the_title" => "About the Black Willow Project",
			"the_type" => "dom_node static_page",
			"the_parent" => "MY_RIGHT_SIDEBAR",
			"the_left_sibling" => "append",
			"the_meta" => "about.txt",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_static/BW_About.php",
			"the_css_source" => "",
			"the_node_opener" => "\n##!-------------------- MY_ABOUT_ME begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_ABOUT_ME ends here. -------------------->",
			"the_tagName" => "section",
			"the_id" => "the_black_willow_about",
			"the_className" => "portal static_page about",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "onmouseup='close_me( this )'",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_contact_me_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_SMALLPRINT";
		}
		return [
			"the_handle" => "MY_CONTACT_ME",
			"the_name" => "my_black_willow_contact_section",
			"the_title" => "About the Black Willow Project",
			"the_type" => "dom_node static_page",
			"the_parent" => "MY_RIGHT_SIDEBAR",
			"the_left_sibling" => "MY_ABOUT_ME",
			"the_meta" => "contact.txt",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_static/BW_About.php",
			"the_css_source" => "",
			"the_node_opener" => "\n##!-------------------- MY_CONTACT_ME begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_CONTACT_ME ends here. -------------------->",
			"the_tagName" => "section",
			"the_id" => "the_black_willow_about",
			"the_className" => "portal static_page contact",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "onmouseenter='add_my_listeners( this )'",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_meta_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_SMALLPRINT";
		}
		return [
			"the_handle" => "MY_META",
			"the_name" => "my_black_willow_meta_section",
			"the_title" => "About the Black Willow Project",
			"the_type" => "dom_node static_page",
			"the_parent" => "MY_RIGHT_SIDEBAR",
			"the_left_sibling" => "MY_CONTACT_ME",
			"the_meta" => "meta.txt",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_static/BW_About.php",
			"the_css_source" => "",
			"the_node_opener" => "\n##!-------------------- MY_META begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_META ends here. -------------------->",
			"the_tagName" => "section",
			"the_id" => "the_black_willow_meta",
			"the_className" => "portal static_page meta",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "onmouseenter='add_my_listeners( this )'",
			"the_other_attributes" => ""
		];
	}
}