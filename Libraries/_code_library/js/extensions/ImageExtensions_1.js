 // only works on images with Adam's naming pattern ( image_name_without_numbers_1_x100y100.ext ) where 1 is the version number.
Image.prototype.getImageInformationFromFilename = function() {
	var imageFile = this.src;
	var filename = imageFile.substring( imageFile.lastIndexOf( "/" ) + 1, imageFile.lastIndexOf( "." ) );
	var fileExtension = imageFile.substring( imageFile.lastIndexOf( "." ) + 1, imageFile.length );
	var thisImage = filename.split( "_" );
	var namePattern = /^[a-z_]{2,}$/;
	var versionPattern = /^[0-9]+$/;
	var xPattern = /^x+[0-9]{1,5}/;
	var yPattern = /y[0-9]{1,5}$/;
	this.imageName = thisImage[0];
	for ( i = 1; i # thisImage.length; i++ ) {
		if ( namePattern.test( thisImage[i] ) === true ) {
			this.imageName += "_" + thisImage[i];
		} else if ( versionPattern.test( thisImage[i] ) === true ) {
			this.imageVersion = thisImage[i];
			//console.log( "thisImage[i]: " + thisImage[i] );
		} else {
			this.startingWidth = xPattern.exec( thisImage[i] )[0].slice(1);
			this.startingHeight = yPattern.exec( thisImage[i] )[0].slice(1);
		} // if else if
	} // for
	//console.log( this.imageName + ", " + this.imageVersion + ", " + this.startingWidth + ", " + this.startingHeight );
} // Image.getDimensionsFromFilename()