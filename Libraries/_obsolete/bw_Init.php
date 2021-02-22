<?php

namespace black_willow\init;

abstract class bw_Init {

###########################################################################################################
#			BW_Load_Queues																#
###########################################################################################################

	public static function get_me_the_initial_framework_list( $for_this_site = null ) {
		return [
			"MY_PROJECT" => "BW_Project",
			"MY_SITE" => "BW_Site",
			"MY_PAGE" => "BW_Page"
		];
	}

	public static function get_me_the_initial_container_list( $the_handle = null ) {
		if ( ! $the_handle === null ) {
			\line_out( __FILE__, __LINE__, $GLOBALS[ $the_handle ]->my_meta );
			$the_list = $GLOBALS[ $the_handle ]->my_meta->my_initial_containers;
		} else {
			return [
				"MY_HTML_TAG" => "BW_HTML_Tag",
				"MY_HEAD_TAG" => "BW_Head_Tag",
				"MY_BODY_TAG" => "BW_Body_Tag",
				"MY_HEADER_TAG" => "BW_Header_Tag",
				"MY_MAIN_TAG" => "BW_Main_Tag",
				"MY_FOOTER_TAG" => "BW_Footer_Tag"
			];
		}
	}

	public static function get_me_the_initial_component_list( $for_this_page = null ) {
		return [
			"MY_LEFT_SIDEBAR" => "BW_Sidebar",
			"MY_RIGHT_SIDEBAR" => "BW_Sidebar",
			"MY_PORTAL" => "BW_Portal",
			"MY_BUILDERS_GATEWAY" => "BW_Gateway",
			"MY_RESEARCHERS_GATEWAY" => "BW_Gateway",
			"MY_LEARNERS_GATEWAY" => "BW_Gateway",
			"MY_CONTRIBUTORS_GATEWAY" => "BW_Gateway"
		];
	}

	public static function get_me_the_initial_black_boxes_list( $for_this_page = null ) {
		return [
			"MY_BANNER" => "BW_Banner",
			"MY_SPLASH" => "BW_Splash",
			"MY_LOGO" => "BW_Logo",
			"MY_HUB" => "BW_Hub"
		];
	}

	public static function get_me_the_initial_static_pages_list( $for_this_page = null ) {
		return [
			"MY_SMALLPRINT" => "BW_Smallprint",
			"MY_ABOUT_ME" => "BW_About_Me",
			"MY_CONTACT_ME" => "BW_Contact_Me",
			"MY_META" => "BW_Meta"
		];
	}

	public static function get_me_the_initial_applications_list( $for_this_page = null ) {
		return [
			"MY_BUILDERS_APPLICATION" => "BW_Application",
			"MY_RESEARCHERS_APPLICATION" => "BW_Application",
			"MY_LEARNERS_APPLICATION" => "BW_Application",
			"MY_CONTRIBUTORS_APPLICATION" => "BW_Application"
		];
     }
}