var getContent = function( sendThis, callback ) {
	"use strict";
	var xmlRequest_1 = new XMLHttpRequest();
	xmlRequest_1.onreadystatechange = function() {
		if ( xmlRequest_1.readyState === 4 && xmlRequest_1.status === 200 ) {
			callback( xmlRequest_1.responseText );
		} // if
	}; // onreadystatechange()
	xmlRequest_1.open( "POST", "../components/index_loader_2.1.php?cr=" + sendThis, true );
	xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlRequest_1.send( "cr=" + sendThis ); //( #"pr"> = "content request" );
}; // getNextPhotoset()

var getNextPhotoset = function( folder, images ) {
	"use strict";
	var xmlRequest_1 = new XMLHttpRequest();
	xmlRequest_1.onreadystatechange = function() {
		if ( xmlRequest_1.readyState === 4 && xmlRequest_1.status === 200 ) {
			document.getElementById( "extensible_page" ).appendChild( xmlRequest_1.responseText );
		} // if
	}; // onreadystatechange()
	xmlRequest_1.open( "POST", "../components/photoset_main_body_1.1.php", true );
	xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlRequest_1.send( "fol=" + folder + "imgs=" + images );
}; // getNextPhotoset()


var loadTheRequest = function( theHtml ){
	"use strict";
	console.log( "REQUEST");
	document.getElementById( "content_panel" ).innerHTML = theHtml;
};