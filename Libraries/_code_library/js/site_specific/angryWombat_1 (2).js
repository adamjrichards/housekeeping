var hide;
function showWombat( state, source ) {
	var wombatAnimated = document.getElementById( "wombat_animated" );
	if ( state == "show" ) {
		document.getElementById( "wombat_corner_box" ).style.display = "block";
		try {
			wombatAnimated.src = source;
			wombatAnimated.setAttribute( "class", "expand_from_corner" );
		} catch ( e ) {
			console.log( "e" );
			document.getElementById( "wombat_svg" ).src = source;
		} // try catch
	} else {
		hide = setTimeout( function() { 
			wombatAnimated.setAttribute( "class", "shrink_to_corner" );
			wombatAnimated.src = source;
		}, 1500 );
	} // if else
} // showWombat()

function goToWombat( source ) {
	document.getElementById( "wombat_animated" ).src = source;
	document.getElementById( "wombat_animated" ).setAttribute( "class", "expand_to_fill" );
	setTimeout( function() { window.location.assign( "http://adamserver2/angry_wombat/index.php?ref=ajrcom" ); }, 3000 );
} // goToWombat()
	