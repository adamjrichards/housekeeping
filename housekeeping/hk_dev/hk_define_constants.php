<?php

namespace raingarden\rg_init;
use black_willow\bw_toolbox as tkit;

function bw_define_constants( $from_this_list ) {
	// get the local BW server variables from http.conf and make them constants
	$the_server_variables = new \Ds\Map( $_SERVER );
	$the_callback = function( $the_property ) {
		return \strpos( $the_property, "MY_" ) === 0;
	};
	$the_constants = $the_server_variables->filter( $the_callback );
	$the_constants->map(
			function( $the_key, $the_value ) {
				define( $the_key, $the_value );
			} );
	return $the_constants;
}