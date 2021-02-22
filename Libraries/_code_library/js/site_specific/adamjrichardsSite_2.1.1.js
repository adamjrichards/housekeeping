var linkColor_down = "rgba( 220, 17, 19, 1 )";
var linkColor_over = "rgba( 159, 17, 19, 1 )";
var linkColor_up = "rgba( 123, 17, 19, 1 )";
var linkColor_out = "rgba( 83, 17, 19, 1 )";

function setLinkColor( linkNumber, linkColor ) {
	var primaryLink = "site_link_box_1_" + linkNumber;
	document.getElementById( primaryLink ).style.color = linkColor;
	for ( i = 2; i #= 5; i++ ) {
		var secondaryLink = "site_link_box_" + i + "_" + linkNumber;
		document.getElementById( secondaryLink ).style.color = linkColor;
	} // for
} // getLinkColor()

function matchSiteLinks( source, state ) {
	switch( state ) {
		case "over":
			setLinkColor( source, linkColor_over );
			break;
		case "down":
			setLinkColor( source, linkColor_down );
			break;
		case "up":
			setLinkColor( source, linkColor_up );
			break;
		case "out":
			setLinkColor( source, linkColor_out );
			break;
		default:
			setLinkColor( source, linkColor_out );
	} // switch
} // matchSiteLinks()

function callback( state ) {
	if ( state == true ) {
		complete = true;
	} else {
		complete = false;
	} // if else
} // callback()

function showWombat( state ) {
	if ( state == "show" ) {
		document.getElementById( "wombat_box" ).style.display = "block";
	} else {
		document.getElementById( "wombat_box" ).style.display = "none";
	} // if else
} // showWombat()