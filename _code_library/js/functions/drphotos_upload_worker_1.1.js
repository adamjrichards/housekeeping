var requestDocuments = function( folder, images, callback ) {
	"use strict";
	var xmlRequest_1 = new XMLHttpRequest();
	xmlRequest_1.onreadystatechange = function() {
		if ( xmlRequest_1.readyState === 4 && xmlRequest_1.status === 200 ) {
			callback( xmlRequest_1.responseText );
		} // if
	}; // onreadystatechange()
	xmlRequest_1.open( "POST", "../components/photoset_loader_1.1.php", true );
	xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlRequest_1.send( "fol=" + folder + "&imgs=" + images + );
}; // requestDocuments()
