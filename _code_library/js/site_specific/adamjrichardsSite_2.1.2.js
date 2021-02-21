var linkColor_down = "rgba( 220, 17, 19, 1 )";
var linkColor_over = "rgba( 159, 17, 19, 1 )";
var linkColor_up = "rgba( 123, 17, 19, 1 )";
var linkColor_out = "rgba( 83, 17, 19, 1 )";
var backgroundColor_down = "rgba( 0, 180, 150, 1 )";
var backgroundColor_over = "rgba( 255, 255, 255, 1 )";
var backgroundColor_up = "rgba( 255, 255, 255, .4 )";
var backgroundColor_out = "rgba( 255, 255, 255, 0 )";
var bottom_down = "4px";
var bottom_over = "2px";
var bottom_up = "0px";
var bottom_out = "0px";
var padding_down = "2px 2px 4px 2px";
var padding_over = "2px 2px 4px 2px";
var padding_up = "2px 2px 6px 2px";
var padding_out = "2px 2px 2px 2px";

function setLinkAction( linkNumber, linkColor, backgroundColor, bottom, padding ) {
	var linkColor_down = "rgba( 220, 17, 19, 1 )";
	var linkColor_over = "rgba( 159, 17, 19, 1 )";
	var linkColor_up = "rgba( 123, 17, 19, 1 )";
	var linkColor_out = "rgba( 83, 17, 19, 1 )";
	var backgroundColor_down = "rgba( 0, 180, 150, 1 )";
	var backgroundColor_over = "rgba( 255, 255, 255, 1 )";
	var backgroundColor_up = "rgba( 255, 255, 255, .4 )";
	var backgroundColor_out = "rgba( 255, 255, 255, 0 )";
	var bottom_down = "4px";
	var bottom_over = "2px";
	var bottom_up = "0px";
	var bottom_out = "0px";
	var padding_down = "2px 2px 4px 2px";
	var padding_over = "2px 2px 4px 2px";
	var padding_up = "2px 2px 6px 2px";
	var padding_out = "2px 2px 2px 2px";
	var i = 1;
	var linkId, thisLink;
	var delay = setInterval( function() {
		linkId = "site_link_box_" + i + "_" + linkNumber;
		thisLink = document.getElementById( linkId );
		thisLink.style.color = linkColor;
		thisLink.style.backgroundColor = backgroundColor;
		thisLink.style.bottom = bottom;
		thisLink.style.padding = padding;
		if ( i++ == 10 ) clearInterval( delay );		
	}, 80 );
} // getLinkColor()

function matchSiteLinks( source, state ) {
	switch( state ) {
		case "over":
			setLinkAction( source, linkColor_over, backgroundColor_over, bottom_over, padding_over );
			break;
		case "down":
			setLinkAction( source, linkColor_down, backgroundColor_down, bottom_down, padding_down );
			break;
		case "up":
			setLinkAction( source, linkColor_up, backgroundColor_up, bottom_up, padding_up );
			break;
		case "out":
			setLinkAction( source, linkColor_out, backgroundColor_out, bottom_out, padding_out );
			break;
		default:
			setLinkAction( source, linkColor_out, backgroundColor_out, bottom_out, padding_out );
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