<?php

function bw_backtrace() {

	$the_debug_array = \debug_backtrace( DEBUG_BACKTRACE_PROVIDE_OBJECT );
	$the_css_file = \file_get_contents( "/Web/workspaces/black_willow/bw_css/bw_debug_styles.css" );
	$the_output_string = "<style>\n$the_css_file\n</style>
		<table class='debug_backtrace'>
			<th>Debug backtrace: <i>" . getcwd() . "</i></th>";

	foreach( $the_debug_array as $the_debug ) {
		$the_output_string .= "<tr>
							<td>
								<table class='inner'>";
		if ( ! empty( $the_debug[ "function" ] ) ) {
			$the_output_string .= "<tr><td>Function:</td><td>{$the_debug[ 'function' ]}()</td></tr>";
		}
		if ( ! empty( $the_debug[ "file" ] ) ) {
			$the_output_string .= "<tr><td>File:</td><td>{$the_debug[ 'file' ]}</td></tr>";
		}
		if ( ! empty( $the_debug[ "line" ] ) ) {
			$the_output_string .= "<tr><td>Line:</td><td>{$the_debug[ 'line' ]}</td></tr>";
		}
		if ( ! empty( $the_debug[ "args" ] ) ) {
			$the_output_string .= "<tr><td>Args:</td><td>{$the_debug[ 'function' ]}</td></tr>";
		}
		if ( ! empty( $the_debug[ "class" ] ) ) {
			$the_output_string .= "<tr><td>Class:</td><td>{$the_debug[ 'class' ]}</td></tr>";
		}
		if ( ! empty( $the_debug[ "object" ] ) ) {
			$the_object = var_export( $the_debug[ "object" ], TRUE );
			$the_output_string .= "<tr><td>Object:</td><td><pre>$the_object</pre></td></tr>";
		}
		if ( ! empty( $the_debug[ "type" ] ) ) {
			$the_output_string .= "<tr><td>Type:</td><td>{$the_debug[ 'type' ]}</td></tr>";
		}
		$the_output_string .= "</table>
						</td>
					</tr>";
	}
	$the_output_string .= "</table>";
	echo( $the_output_string );

}