function ReadingListItemImageGallery( imagesX, imagesY, imageWidth, imageHeight, aspectPriority, readingList, trackingId ) {
	this.imagesX = imagesX;
	this.imagesY = imagesY;
	this.imageWidth = imageWidth;
	this.imageHeight = imageHeight;
	this.aspectPriority = aspectPriority;
	this.readingList = readingList;
	this.trackingId = trackingId;
} // ReadingListItemImageGallery()

ReadingListItemImageGallery.prototype.sendXHR = function( callback ) {
	var xmlRequest_1 = new XMLHttpRequest();
	xmlRequest_1.onreadystatechange = function() {
		if ( xmlRequest_1.readyState == 4 && xmlRequest_1.status == 200 ) {
			callback( xmlRequest_1.responseText );
		} // if
	} // onreadystatechange()
	xmlRequest_1.open( "POST", "../functions/reading_list_item_image_gallery_request_1.1.1.php", true );
	xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlRequest_1.send( "readingList=" + this.readingList + "&trackingId=" + this.trackingId );
} // ReadingListItemImageGallery.prototype.sendXHR()

ReadingListItemImageGallery.prototype.writeHTML = function( responseText ) {
	console.log( responseText );
	document.getElementById( "image_gallery_table_main_body" ).innerHTML = responseText;
} // ReadingListItemImageGallery.prototype.writeHTML()
		