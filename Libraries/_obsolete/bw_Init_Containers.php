<?php

namespace black_willow\init;

class BW_Init_Container extends \bw\core\_BW_INIT {

	public static function get_me_the_html_tag_params_array( $with_this_handle = null ) {
		if ( ! is_null( $with_this_handle ) ) {
			return $GLOBALS[ $the_handle ]->my_meta->my_initial_containers->my_html_tag_params_array;
		} else {
			return [
				"the_handle" => "MY_HTML_TAG",
				"the_name" => "my_html_tag",
				"the_title" => "Black Willow",
				"the_type" => "dom_node container",
				"the_parent" => "MY_PAGE",
				"the_left_sibling" => "append",
				"the_meta" => "Site default",
				"the_context" => "MY_PAGE",
				"the_template" => "bw_containers/BW_HTML_Tag.php",
				"the_css_source" => "",
				"the_node_opener" => "",
				"the_node_closer" => "",
				"the_tagName" => "html",
				"the_id" => "the_black_willow_page",
				"the_className" => "black_willow",
				"the_src" => "",
				"the_inline_css" => "",
				"the_trigger" => "",
				"the_other_attributes" => "lang=en/CA"
			];
		}
	}

	public static function get_me_the_head_tag_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "";
		}
		return [
			"the_handle" => "MY_HEAD_TAG",
			"the_name" => "my_head_tag",
			"the_title" => "Black Willow",
			"the_type" => "dom_node container",
			"the_parent" => "MY_HTML_TAG",
			"the_left_sibling" => "append",
			"the_meta" => "bw_head_tag.txt",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_containers/BW_Head_Tag.php",
			"the_css_source" => "",
			"the_node_opener" => "",
			"the_node_closer" => "",
			"the_tagName" => "head",
			"the_id" => "the_bw_head_tag",
			"the_className" => "black_willow",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => "",
               "the_charset" => "utf-8",
               "the_base_url" => "http://black_willow/"
		];
	}

	public static function get_me_the_body_tag_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "";
		}
		return [
			"the_handle" => "MY_BODY_TAG",
			"the_name" => "my_body_tag",
			"the_title" => "Black Willow",
			"the_type" => "dom_node container",
			"the_parent" => "MY_HTML_TAG",
			"the_left_sibling" => "MY_HEAD_TAG",
			"the_meta" => "default",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_containers/BW_Body_Tag.php",
			"the_css_source" => "",
			"the_node_opener" => "",
			"the_node_closer" => "",
			"the_tagName" => "body",
			"the_id" => "the_bw_body_tag",
			"the_className" => "black_willow container full_screen",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "onload='on_body_load()' onunload='on_body_unload()'",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_header_tag_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "";
		}
		return [
			"the_handle" => "MY_HEADER_TAG",
			"the_name" => "my_header_tag",
			"the_title" => "The Black Willow Dictionary Project",
			"the_type" => "dom_node container",
			"the_parent" => "MY_BODY_TAG",
			"the_left_sibling" => "MY_LOGO",
			"the_meta" => "default",
			"the_context" => "MY_SITE",
			"the_template" => "bw_containers/BW_Header_Tag.php",
			"the_css_source" => "",
			"the_node_opener" => "",
			"the_node_closer" => "",
			"the_tagName" => "header",
			"the_id" => "the_header",
			"the_className" => "black_willow container full_width",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => "",
		];
	}

	public static function get_me_the_main_tag_params_array( $with_this_handle = null ) {
		return [
			"the_handle" => "MY_MAIN_TAG",
			"the_name" => "my_main_tag",
			"the_title" => "The Black Willow Dictionary Project Portal",
			"the_type" => "dom_node container",
			"the_parent" => "MY_BODY_TAG",
			"the_left_sibling" => "MY_HEADER_TAG",
			"the_meta" => "default",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_containers/BW_Main_Tag.php",
			"the_css_source" => "",
			"the_node_opener" => "",
			"the_node_closer" => "",
			"the_tagName" => "main",
			"the_id" => "the_main_tag",
			"the_className" => "black_willow container full_width",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}
	public static function get_me_the_footer_tag_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "";
		}
		return [
			"the_handle" => "MY_FOOTER_TAG",
			"the_name" => "my_footer_tag",
			"the_title" => "The Black Willow Dictionary Project",
			"the_type" => "dom_node container",
			"the_parent" => "MY_BODY_TAG",
			"the_left_sibling" => "MY_MAIN_TAG",
			"the_meta" => "default",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_containers/BW_Footer_Tag.php",
			"the_css_source" => "",
			"the_node_opener" => "",
			"the_node_closer" => "",
			"the_tagName" => "footer",
			"the_id" => "the_footer",
			"the_className" => "black_willow container full_width",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}
}