<?php

function ln( ...$items ) {
	$the_backtrace = \debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
	$the_frame = $the_backtrace[1];
	$the_file = "default";
	$the_class = "default";
	$the_line = "default";
	$the_function = "default";
	$the_type = "default";
	if ( isset( $the_frame[ "file" ] ) ) {
		$the_file = $the_frame[ "file" ];
	}
	if ( isset( $the_frame[ "class" ] ) ) {
		$the_class = $the_frame[ "class" ];
	}
	if ( isset( $the_frame[ "line" ] ) ) {
		$the_line = (string) $the_frame[ "line" ];
	}
	if ( isset( $the_frame[ "function" ] ) ) {
		$the_function = $the_frame[ "function" ];
	}
	if ( isset( $the_frame[ "type" ] ) ) {
		if ( $the_frame[ "type" ] === "=>" ) {
			$the_type = "Method call";
		} else if ( $the_frame[ "type" ] === "::" ) {
			$the_type = "Static method call";
		} else {
			$the_type = "Function call";
		}
	}
	$the_out = "<pre style='color:#993333;tab-size:10;white-space:pre;'>\n"
				. "File:&#0009;$the_file\n"
				. "Class:&#0009;$the_class\n"
				. "Function:&#0009;$the_function\n"
				. "Type:&#0009;$the_type\n"
				. "Line:&#0009;$the_line</pre>";

	$the_out .= "<ul style='max-width: 100%;line-height:1.5em; padding:0.5em 0.5em 0.5em 2em; background:#444455;list-style:none;overflow-wrap:anywhere'>";

	while ( $items ) {
		$the_next_item = \array_shift( $items );
		if ( \is_bool( $the_next_item ) ) {
			if ( $the_next_item ) {
				$the_out .= "<li style='width:8em;color:#ffffff;background:#000000;padding: 2px;overflow-wrap:anywhere'>(Boolean)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FALSE</li>";
			} else {
				$the_out .= "<li style='width:8em;color:#000000;background:#ffffff;padding: 2px''>(Boolean)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRUE</li>";
			}
		} else if ( \is_array( $the_next_item ) ) {
			$the_item_string = \var_export( $the_next_item, TRUE );
			$the_out .= "<li style='max-width: 100%;color:#ee9966'>(Array)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><pre>$the_item_string</pre><br></li>";
		} else if ( \is_numeric( $the_next_item ) ) {
			$the_out .= "<li style='max-width: 100%;color:#000088'>(Num)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . (string) $the_next_item . "</li>";
		} else if ( \is_object( $the_next_item ) ) {
			$the_out .= "<li style='max-width: 100%;color:#00aa00'>(Object)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . \serialize( $the_next_item ) . "</li>";
		} else if ( \is_string( $the_next_item ) ) {
			$the_out .= "<li style='max-width: 100%;color:#00bb00'>(String)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$the_next_item</li>";
		}
	}
	$the_out .= "</ul>";
	print( $the_out );
}