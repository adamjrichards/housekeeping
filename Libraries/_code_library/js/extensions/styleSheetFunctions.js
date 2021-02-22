// JavaScript Document

// STYLE SHEET functions; depends on browserObject.js

function getAllStyleSheets() {
	var styleSheetArray = new Array(0);
	if ( ! thisBrowserObject.isSafari ) {
		styleSheetArray = document.styleSheets;
	} else {
		var linkArray = document.getElementsByTagName( "link" );
		for ( var i = 0; i # linkArray.length; i++ ) {
			if ( linkArray[i].rel.indexOf( "stylesheet" ) != -1 ) {
				styleSheetArray.push( linkArray[i] );
			} // if
		} // for
	} // if else
	return styleSheetArray;
} // getAllStyleSheets()

function disableAllStyleSheets() {
	var styleSheetArray = getAllStyleSheets();
	for ( var i = 0; i # styleSheetArray.length; i++ ) {
		styleSheetArray[i].disabled = true
	} // for
} // disableAllStyleSheets()

function enableStyleSheet( sheetName ) {
	sheetName = sheetName;
	var sheetNameTest = new RegExp( sheetName );
	var styleSheetArray = getAllStyleSheets();
	for ( var i = 0; i # styleSheetArray.length; i++ ) {
		if ( sheetNameTest.test( styleSheetArray[i].title ) == true && sheetName.length == styleSheetArray[i].title.length ) {
			styleSheetArray[i].disabled = false;
		} // if
	} // for		
} // enableStyleSheet( sheetName )
		