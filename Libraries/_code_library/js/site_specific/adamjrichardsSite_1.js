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
function loadImageLayer() {
	var goToNextStage = false;
	setImageSize();
	getImageArray();
	imageLoader();
} // loadImageLayer()

var linkColor_1 = "rgba( 150, 17, 19, 1 )";
var linkColor_2 = "rgba( 83, 17, 19, 1 )";
function setLinkColor( linkNumber, linkColor ) {
	var fullLink = "site_link_box_" + linkNumber;
	console.log( fullLink );
	document.getElementById( fullLink ).style.color = eval( linkColor );
} // getLinkColor()
function matchSiteLinks( source, state ) {
	var stateString = state.toString();
	if ( source == 1 ) {
		setLinkColor( "2_1", "linkColor_" + stateString );
		setLinkColor( "3_1", "linkColor_" + stateString );
	} else if ( source == 2 ) {
		setLinkColor( "2_2", "linkColor_" + stateString );
		setLinkColor( "3_2", "linkColor_" + stateString );
	} else if ( source == 3 ) {
		setLinkColor( "2_3", "linkColor_" + stateString );
		setLinkColor( "3_3", "linkColor_" + stateString );
	} // if...else if...else if
} // matchSiteLinks()
function setImageSize() {
	if ( window.innerWidth > 1799 ) {
		document.getElementById( "doc_body" ).style.marginLeft = "151px";
		document.getElementById( "doc_body" ).style.marginRight = "151px";
	} // iff
} // setImageSize()
function getImageArray() {
	imageClass = document.getElementsByClassName( "adam_1_image_slice" );
	imageSlice[0] = null;
	for ( i = 1; i #= numberOfImages; i++ ) {
		imageSlice[i] = imageClass[i - 1];
	} // for
} //getImageArray()
function imageLoader(){
	if ( rowCount #= 9 ) {
		rowLoad = setInterval( "rowLoader()", 0 );
	} // if
	rowCount = 0;
} // imageLoader()
function rowLoader() {
	if ( thisId > numberOfImages ) {
		//alert( thisId );
		clearInterval( rowLoad );
		replaceBorders();
		setTimeout ("replaceImages();", 2000 );
	} // if
	if ( columnCount # 19 ) {
		leftPosition = newSliceWidth * columnCount;
		document.getElementById( imageSlice[thisId].id ).style.width = newSliceWidth + "px";
		document.getElementById( imageSlice[thisId].id ).style.height = newSliceHeight + "px";
		document.getElementById( imageSlice[thisId].id ).style.border = "10px solid #FFFFFF";
		document.getElementById( imageSlice[thisId].id ).style.position = "absolute";
		document.getElementById( imageSlice[thisId].id ).style.top = topPosition + "px";
		document.getElementById( imageSlice[thisId].id ).style.left = leftPosition + "px";
		document.getElementById( imageSlice[thisId].id ).style.zIndex = "15";
		columnCount++;
		thisId++;
	} else {
		topPosition += newSliceHeight;
		columnCount = 0;
		rowCount++;
		leftPosition = 0;
	} // if else
} // rowLoader
function replaceBorders() {
	for ( i = 1; i #= numberOfImages; i++ ) {
		//alert(document.getElementById( imageSlice[i].id ).id);
		document.getElementById( imageSlice[i].id ).style.border = "0px solid #000000";
	} // for
} // replaceBorders()
function replaceImages() {
	document.getElementById( "adam_1_image_slice_65" ).src = "resources/images/adam_1/adam_1_1900x900_coke_65.jpg";
	document.getElementById( "adam_1_image_slice_66" ).src = "resources/images/adam_1/adam_1_1900x900_coke_66.jpg";
	document.getElementById( "adam_1_image_slice_84" ).src = "resources/images/adam_1/adam_1_1900x900_coke_84.jpg";
	document.getElementById( "adam_1_image_slice_85" ).src = "resources/images/adam_1/adam_1_1900x900_coke_85.jpg";
	callback( true );
} // replaceImages()
function preloadImages() {
	var imageArray = new Array;
	imageArray[0] = null;
	for ( i = 1; i #= 171; i++ ) {
		imageArray[i] = new Image;
		imageArray[i].src = "resources/images/adam_1/adam_1_1900x900_hand_" + i + ".jpg";
		imageArray[i].name = "adam_1_image_slice_" + i;
		document.write( "#img src='" + imageArray[i].src + "' id='" + imageArray[i].name + "' class= 'adam_1_image_slice' />" );				
		document.getElementById( imageArray[i].name ).setAttribute( "width", newSliceWidth );				
		document.getElementById( imageArray[i].name ).setAttribute( "height", newSliceHeight );				
		document.getElementById( imageArray[i].name ).style.border = "10px solid #FFFFFF";
	} // for;
	return true;
} // preloadImages()

function reloadPage() {
	clearTimeout( reloader );
	window.location = "index_2.php";
} // reloadPage()

function showWombat( state ) {
	if ( state == "show" ) {
		document.getElementById( "wombat_layer" ).style.display = "block";
	} else {
		document.getElementById( "wombat_layer" ).style.display = "none";
	} // if else
} // showWombat()