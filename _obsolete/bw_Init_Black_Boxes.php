<?php

namespace init;

abstract class bw_Init_Black_Boxes {

###########################################################################################################
#			BW_Black_Boxes	("bbox")														 #
###########################################################################################################

	public static function get_me_the_splash_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_SPLASH";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "my_black_willow_splash",
			"the_title" => "The Black Willow Indigenous Dictionary Project",
			"the_type" => "dom_node black_box",
			"the_parent" => "MY_BODY_TAG",
			"the_left_sibling" => "append",
			"the_meta" => "default",
			"the_context" => "MY_PAGE",
			"the_template" => "BW_Splash.php",
			"the_css_source" => "",
			"the_node_opener" => "\n##!-------------------- MY_SPLASH begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_SPLASH ends here. -------------------->",
			"the_source_folder" => "BW_Splash",
			"the_owner" => "Black_Willow",
			"the_tagName" => "div",
			"the_id" => "the_black_willow_splash",
			"the_className" => "black_box splash",
			"the_src" => "black_willow_4.3_x1500y900.jpg",
			"the_inline_css" => "",
			"the_trigger" => "onload='close_me( this )'",
			"the_other_attributes" => "alt='The Black Willow Indigenous Dictionary Project'"
		];
	}

	public static function get_me_the_logo_params_array( $with_this_handle = null ) {
          if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_LOGO";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "my_black_willow_logo",
			"the_title" => "The Black Willow Project",
			"the_type" => "dom_node black_box",
			"the_parent" => "MY_BODY_TAG",
			"the_left_sibling" => "MY_SPLASH",
			"the_meta" => "logo_black_box.txt",
			"the_context" => "MY_PAGE",
			"the_template" => "BW_Logo.php",
			"the_css_source" => "",
			"the_node_opener" => "\n##!-------------------- MY_LOGO begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_LOGO ends here. -------------------->",
			// Only the black boxes
			"the_source_folder" => "BW_Logo",
			"the_owner" => "MY_SITE",
			"the_tagName" => "div",
			"the_id" => "the_black_willow_logo",
			"the_className" => "black_box logo",
			"the_src" => "black_willow_logo_4.5_x500y312.png",
			"the_inline_css" => "",
			"the_trigger" => "onmouseenter='add_my_listeners( this )'",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_banner_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_BANNER";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "my_black_willow_banner",
			"the_title" => "Black Willow",
			"the_type" => "dom_node component",
			"the_parent" => "MY_HEADER_TAG",
			"the_left_sibling" => "append",
			"the_meta" => "default",
			"the_context" => "MY_PAGE",
			"the_template" => "bw_components/BW_Banner.php",
			"the_css_source" => "bw_css/bw_Banner.css",
			"the_node_opener" => "\n##!-------------------- MY_BANNER begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_BANNER ends here. -------------------->",
			"the_source_folder" => "BW_Banner",
			"the_owner" => "MY_SITE",
			"the_tagName" => "div",
			"the_id" => "the_black_willow_banner",
			"the_className" => "dom_node black_box banner",
			"the_src" => "",
			"the_inline_css" => "",
			"the_trigger" => "onmouseenter='add_my_listeners( this )'",
			"the_other_attributes" => ""
		];
	}

	public static function get_me_the_hub_params_array( $with_this_handle = null ) {
		if ( is_null( $with_this_handle ) ) {
			$with_this_handle = "MY_HUB";
		}
		return [
			"the_handle" => $with_this_handle,
			"the_name" => "my_bw_hub",
			"the_title" => "The Black Willow Hub",
			"the_type" => "dom_node black_box",
			"the_parent" => "MY_PORTAL",
			"the_left_sibling" => "append",
			"the_meta" => "bw_black_boxes/BW_Hub/bw_hub.json",
			"the_context" => "MY_PORTAL",
			"the_template" => "bw_black_boxes/BW_Hub/BW_Hub.php",
			"the_css_source" => "bw_black_boxes/BW_Hub/bw_hubs.css",
			"the_node_opener" => "\n##!-------------------- MY_HUB begins here. -------------------->",
			"the_node_closer" => "\n##!-------------------- MY_HUB ends here. -------------------->",
			"the_source_folder" => "BW_Hub",
			"the_owner" => "MY_SITE",
			"the_tagName" => "div",
			"the_id" => "the_bw_hub",
			"the_className" => "dom_node black_box hub",
			"the_src" => "bw_black_boxes/BW_Hub/bw_hub_1.1.svg",
			"the_inline_css" => "",
			"the_trigger" => "onmouseenter='add_my_listeners( this )'",
			"the_other_attributes" => ""
		];
	}
}