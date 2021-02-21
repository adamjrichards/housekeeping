var hide;
function showWombat( state, source ) {
	if ( state == "show" ) {
		document.getElementById( "wombat_corner_box" ).style.display = "block";
		try {
			document.getElementById( "wombat_animated" ).src = source;
			document.getElementById( "wombat_corner_box" ).setAttribute( "class", "expand_from_corner" );
		} catch ( e ) {
			console.log( "e" );
			document.getElementById( "wombat_svg" ).src = source;
		} // try catch
	} else {
		hide = setTimeout( function() { 
			document.getElementById( "wombat_corner_box" ).setAttribute( "class", "shrink_to_corner" );
			document.getElementById( "wombat_animated" ).src = source;
		}, 1500 );
	} // if else
} // showWombat()

function shrinkWombat() {
	wombat.setAttribute( "class", "wombat_small" );
} // shrinkWombat()

function goToWombat( source ) {
	document.getElementById( "wombat_animated" ).src = source;
	document.getElementById( "wombat_animated" ).setAttribute( "class", "wombat_corner_box expand_to_fill" );
	setTimeout( function() { window.location.assign( "http://adamserver2/angry_wombat/index.php?ref=ajrcom" ); }, 3000 );
} // goToWombat()