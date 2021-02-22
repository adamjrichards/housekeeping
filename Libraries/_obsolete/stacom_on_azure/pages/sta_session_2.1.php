<?php
	session_start();
	$GLOBALS[ "rightnow_time" ] = time();
	$_SESSION[ "expiry_date" ] = $GLOBALS[ "rightnow_time" ] + 2592000;
	function set_headers() {
		header( "Expiry: " . $_SESSION[ "expiry_date" ] );
		header( "Author: Adam J. Richards" );
		header( "Keywords: andrea charendoff, art therapy, niagara, st. catharines, psychotherapy, adhd, attention deficit disorder, attention deficit hyperactivity disorder" );
		header( "Description: Andrea combines professional psychotherapy with the creative process for adults, adolescents and children." );
		header( "Content-Type: text/html; charset=UTF-8" );
		header( "Robots: INDEX,ARCHIVE" );
		header( "googlebot: archive" );
	} // set_headers()
	
	set_headers();
	