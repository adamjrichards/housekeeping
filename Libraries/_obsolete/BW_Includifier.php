 <?php

abstract class bw_Includifier {

	public static function bw_load_my_includes( $from_this_list ) {
		where();
		$the_includes = \json_decode( \file_get_contents( "bw_json/$from_this_list.json" ) );
		\line_out( __FILE__, __LINE__, $the_includes );

	}
}
bw_Includes::bw_load_my_includes( "bw_initial_includes" );

function load_the_include( $from_this_folder, $with_this_name ) {
     switch ( $from_this_folder ) {
          case "bw_init"           :    $the_namespace = "init";
                                        break;
          case "bw_system"         :    $the_namespace = "sys";
                                        break;
          case "bw_containers"     :    $the_namespace = "cons";
                                        break;
          case "bw_framework"      :    $the_namespace = "frame";
                                        break;
          case "bw_components"     :    $the_namespace = "coms";
                                        break;
          case "bw_static_pages"   :    $the_namespace = "stats";
                                        break;
          case "bw_core"           :    $the_namespace = "core";
                                        break;
          case "bw_toolkit"        :    $the_namespace = "tkit";
                                        break;
          case "bw_wrappers"       :    $the_namespace = "wraps";
                                        break;
          case "bw_factories"      :    $the_namespace = "facs";
                                        break;
          case "bw_functions"      :    $the_namespace = "funcs";
                                        break;
          case "bw_data"           :    $the_namespace = "data";
                                        break;
          case "bw_assets"         :    $the_namespace = "asset";
                                        break;
          case "bw_black_boxes"    :    $the_namespace = "bboxs";
                                        break;
     }
	$the_class = "\\$the_namespace\\$with_this_name";
	$the_file = "$from_this_folder/$with_this_name.php";
	if ( ! class_exists( $the_class ) ) {
		require $the_file;
	}
}