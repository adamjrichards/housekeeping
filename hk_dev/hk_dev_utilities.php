<?php

function cl( $stuff ) {
     $new_stuff = addslashes($stuff);
     echo( "<script>console.log('$new_stuff');</script>" );
}

function line_out( $file, $line, $stuff ) {
     echo  "<p class='debug'><b>lnout>>$file line $line:</b>&nbsp;&nbsp;";
     if ( is_array( $stuff ) ) {
          var_dump( "Array", $stuff );
     } else if ( is_object( $stuff ) ) {
          var_dump( $stuff );
     } else if ( is_string( $stuff ) ) {
          echo( $stuff );
     }
     echo "</p><hr class='debug'>";
}
function line_out_multi( $file, $line, ...$stuff ) {
     echo  "<p class='debug'><b>lnout>>$file line $line:</b>&nbsp;&nbsp;";
     foreach ( $stuff as $this_item ) {
          echo( " $this_item, " );
     }
     echo "</p><hr class='debug'>";
}
function line_out_int( $file, $line, $stuff ) {
     echo  "<p class='debug'><b>lnout>>$file line $line:</b>&nbsp;&nbsp;";
     echo (int) $stuff;
     echo "</p><hr class='debug'>";
}
function line_out_string( $file, $line, $stuff ) {
     echo  "<p class='debug'><b>lnout>>$file line $line:</b>&nbsp;&nbsp;";
     echo (string) $stuff;
     echo "</p><hr class='debug'>";
}

function booleanize( $stuff ) {
     if ( ! $stuff ) {
          //echo "FALSE";
          return "FALSE";
     } else {
          //echo "TRUE";
          return "TRUE";
     }
}

function line_out_boolean( $file, $line, $stuff ) {
     echo  "<p class='debug'><b>line_out_boolean>> $file line $line:</b>&nbsp;&nbsp;";
	$new_stuff = booleanize( $stuff );
	echo( "Boolean out: $new_stuff</p><hr class='debug short'>" );
}

function say( $stuff, $about_this = "", $delimited_by = ": " ) {
	if ( $about_this !== "" ) {
	    echo "<p>I say >>\t$about_this$delimited_by\t$stuff</p>";
	} else {
	    echo "<p>I say >>\t$stuff</p>";
	}
}
function shout( $stuff, $about_this = "" ) {
	if ( $about_this !== "" ) {
	    echo "<h3>SHOUT >>\t$about_this:\t$stuff</h3>";
	} else {
	    echo "<h3>SHOUT >>\t$stuff</h3>";
	}
}
function scream( $stuff, $about_this = "" ) {
	if ( $about_this !== "" ) {
	    echo "<h2>SCREAM >>\t$about_this:\t$stuff</h2>";
	} else {
	    echo "<h2>SCREAM >>\t$stuff</h2>";
	}
}
function vump( $stuff, $about_this = "" ) {
	if ( $about_this !== "" ) {
		echo "<h2>VUMP >>\tvar_dump of $about_this:\t</h2>
			<re>$stuff</pre>";
	} else {
		echo "<h2>VUMP >> " . __FILE__ . "</h2>
			<re>$stuff</pre>";
	}
}

function where() {
	shout( "Working directory: ". getcwd() );
}

$GLOBALS[ "my_stop" ] = 0;
$GLOBALS[ "my_count" ] = 0;

function stop_me( $loops = 20 ) {
     if ( $GLOBALS[ "my_stop" ]++ === $loops ) {
          die( "<h3>Ending after $loops iterations.</h3>" );
     }
}
function count_me() {
     echo( "<h4>-------------Counted " . $GLOBALS[ "my_count" ] . " iterations.---------------------------------------------------</h4>" );
     return ++$GLOBALS[ "my_count" ];
}

//line_out( __FILE__, __LINE__, "dev utilities loaded" );