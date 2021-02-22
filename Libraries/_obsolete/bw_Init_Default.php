<?php

namespace black_willow\init;

abstract class bw_Init_Default {

###########################################################################################################
#			Default params array													 #
###########################################################################################################

	public static function get_me_the_default_params_array( $with_this_handle = "default" ) {
		return [
			"the_handle" => "MY_GENERIC_TAG_$the_random",
			"the_name" => "my_generic_name_$the_random",
			"the_title" => "my_generic_title_$the_random",
			"the_type" => "BW_Inline_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_system/BW_Inline_Node.php",
			"the_node_opener" => "\n##!----- A default generic node begins here. --->",
			"the_node_closer" => "\n##!----- An default generic node ends here. --->",
			"the_tagName" => "span",
			"the_id" => "my_generic_id_$the_random",
			"the_className" => "dom_node inline default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}
	public static function get_me_the_default_inline_params_array() {
		$the_random = \random_int( 1000, 9999 );
		return [
			"the_handle" => "MY_GENERIC_TAG_$the_random",
			"the_name" => "my_generic_name_$the_random",
			"the_title" => "my_generic_title_$the_random",
			"the_type" => "BW_Inline_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_system/BW_Inline_Node.php",
			"the_node_opener" => "\n##!----- A default generic node begins here. --->",
			"the_node_closer" => "\n##!----- An default generic node ends here. --->",
			"the_tagName" => "span",
			"the_id" => "my_generic_id_$the_random",
			"the_className" => "dom_node inline default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}
	public static function get_me_the_default_image_params_array() {
		$the_random = \random_int( 1000, 9999 );
		return [
			"the_handle" => "MY_IMAGE_TAG_$the_random",
			"the_name" => "my_image_name_$the_random",
			"the_title" => "my_image_title_$the_random",
			"the_type" => "BW_Inline_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_inline_tags/BW_Image_Tag.php",
			"the_node_opener" => "\n##!----- A default image node begins here. --->",
			"the_node_closer" => "\n##!----- An default image node ends here. --->",
			"the_tagName" => "img",
			"the_id" => "my_image_id_$the_random",
			"the_className" => "dom_node inline default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_default_audio_params_array( $with_this_path, $with_this_handle = "default" ) {
		$the_random = \random_int( 1000, 9999 );
		return [
			"the_handle" => "MY_AUDIO_TAG_$the_random",
			"the_name" => "my_audio_name_$the_random",
			"the_title" => "my_audio_title_$the_random",
			"the_type" => "BW_Inline_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_inline_tags/BW_Audio_Tag.php",
			"the_node_opener" => "\n##!----- A default audio node begins here. --->",
			"the_node_closer" => "\n##!----- An default audio node ends here. --->",
			"the_tagName" => "",
			"the_id" => "my_audio_id_$the_random",
			"the_className" => "dom_node inline default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}
	public static function get_me_the_default_video_params_array( $with_this_path, $with_this_handle = "default" ) {
		$the_random = \random_int( 1000, 9999 );
		return [
			"the_handle" => "MY_VIDEO_TAG_$the_random",
			"the_name" => "my_video_name_$the_random",
			"the_title" => "my_video_title_$the_random",
			"the_type" => "BW_Inline_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_inline_tags/BW_Video_Tag.php",
			"the_node_opener" => "\n##!----- A default video node begins here. --->",
			"the_node_closer" => "\n##!----- An default video node ends here. --->",
			"the_tagName" => "",
			"the_id" => "my_video_id_$the_random",
			"the_className" => "dom_node inline default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_default_dom_object_params_array() {
		$the_random = \random_int( 1000, 9999 );
		return [
			"the_handle" => "MY_DOM_OBJECT_$the_random",
			"the_name" => "my_dom_object_name_$the_random",
			"the_title" => "my_dom_object_title_$the_random",
			"the_type" => "BW_Object_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_inline_tags/BW_Object_Node.php",
			"the_node_opener" => "\n##!----- A default dom_object node begins here. --->",
			"the_node_closer" => "\n##!----- An default dom_object node ends here. --->",
			"the_tagName" => "div",
			"the_id" => "my_dom_object_id_$the_random",
			"the_className" => "dom_node inline default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => "",
			"the_mimetype" => ""
		];
	}

	public static function get_me_the_default_wrapper_params_array() {
		$the_random = \random_int( 1000, 9999 );
		return [
			"the_handle" => "MY_WRAPPER_$the_random",
			"the_name" => "my_wrapper_name_$the_random",
			"the_title" => "my_wrapper_title_$the_random",
			"the_type" => "BW_Wrapper_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "",
			"the_node_opener" => "\n##!----- A default wrapper node begins here. --->",
			"the_node_closer" => "\n##!----- An default wrapper node ends here. --->",
			"the_tagName" => "div",
			"the_id" => "my_wrapper_id_$the_random",
			"the_className" => "dom_node wrapper default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => "",
			"the_mimetype" => ""
		];
	}
}
	/*
	public static function get_me_the_default__params_array( $with_this_path, $with_this_handle = "default" ) {
		$the_random = \random_int( 1000, 9999 );
		return [
			"the_handle" => "MY__$the_random",
			"the_name" => "my__name_$the_random",
			"the_title" => "my__title_$the_random",
			"the_type" => "BW_Inline_Node",
			"the_parent" => "",
			"the_left_sibling" => "append",
			"the_meta" => "",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_inline_tags/BW__Tag.php",
			"the_node_opener" => "\n##!----- A default  node begins here. --->",
			"the_node_closer" => "\n##!----- An default  node ends here. --->",
			"the_tagName" => "",
			"the_id" => "my__id_$the_random",
			"the_className" => "dom_node inline default",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "",
			"the_other_attributes" => ""
		];
	}
	 */