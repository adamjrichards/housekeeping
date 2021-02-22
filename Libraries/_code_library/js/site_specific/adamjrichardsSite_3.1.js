var imageClass = new Array;
var imageSlice = new Array;
var topPosition = 0;
var leftPosition = 0;
var newSliceWidth = Math.ceil( window.innerWidth / 19 );
var newSliceHeight = Math.ceil( window.innerHeight / 9 );
var thisId = 1;
var numberOfImages = 171;
var rowCount = 0;
var columnCount = 0;	
var rowLoad, imageLoad; // intervals

var linkColor_down = "rgba( 220, 17, 19, 1 )";
var linkColor_over = "rgba( 159, 17, 19, 1 )";
var linkColor_up = "rgba( 123, 17, 19, 1 )";
var linkColor_out = "rgba( 83, 17, 19, 1 )";

function setLinkColor( linkNumber, linkColor ) {
	for ( i = 2; i #= 4; i++ ) {
		var primaryLink = "site_link_box_1_" + linkNumber;
		var secondaryLink = "site_link_box_" + i + "_" + linkNumber;
		document.getElementById( primaryLink ).style.color = linkColor;
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

function playSoundEffects( element ) {
	clearInterval( wait );
	var soundEffect = document.getElementById( element );
	if ( soundEffect.canPlayType ) soundEffect.play();	
}

function showWombat( state ) {
	if ( state == "show" ) {
		document.getElementById( "wombat_box" ).style.display = "block";
	} else {
		document.getElementById( "wombat_box" ).style.display = "none";
	} // if else
} // showWombat()