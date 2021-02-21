ReadingListItemImageGalleryWithUpload: {
	function ReadingListItemImageGalleryWithUpload( imagesX, imagesY, imageWidth, imageHeight, aspectPriority, readingList, trackingId ) {
		this.imagesX = imagesX;
		this.imagesY = imagesY;
		this.imageWidth = imageWidth;
		this.imageHeight = imageHeight;
		this.aspectPriority = aspectPriority;
		this.readingList = readingList;
		this.trackingId = trackingId;
	} // ReadingListItemImageGallery()
	
	ReadingListItemImageGalleryWithUpload.prototype.requestImages = function( callback ) {
		var xmlRequest_1 = new XMLHttpRequest();
		xmlRequest_1.onreadystatechange = function() {
			if ( xmlRequest_1.readyState == 4 && xmlRequest_1.status == 200 ) {
				callback( xmlRequest_1.responseText );
			} // if
		} // onreadystatechange()
		xmlRequest_1.open( "POST", "../functions/image_gallery_uploader_request_1.1.1.php", true );
		xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_1.send( "readingList=" + this.readingList + "&trackingId=" + this.trackingId );
	} // ReadingListItemImageGallery.prototype.requestImages()
	
	ReadingListItemImageGalleryWithUpload.prototype.writeHTML = function( responseText ) {
		//console.log( responseText );
		document.getElementById( "upload_images_table_main_body" ).innerHTML = responseText;
	} // ReadingListItemImageGallery.prototype.writeHTML()
} // ReadingListItemImageGallery

ImageGalleryUploader: {
	function ImageGalleryUploader( input, readingList, trackingId, imageSlotNumber, caption ) {
		this.input = input;
		this.file = this.input.files[0];
		this.imageSlotNumber = imageSlotNumber;
		this.readingList = readingList;
		this.trackingId = trackingId;
		this.caption = caption;
		this.fileName = this.file.name;
		this.fileType = this.file.type;
		this.fileSize = this.file.size;
		this.uploadReporter = new uploadReporterObject( 0, "Waiting...", "file_upload_progress_bar", "status_reporter" );
		this.formData;
		this.updateImageSlot = this.updateImageSlot.bind( this );
		this.updateHTML = this.updateHTML.bind( this );
		this.uploadImageBinary = this.uploadImageBinary.bind( this );
		this.uploadImageData( this.uploadImageBinary );
		this.partUploaded;
		this.partWaiting;
		this.progress;
	} //ImageGalleryUploader()
	
	ImageGalleryUploader.prototype.uploadImageData = function( callback ) {
		this.formData = new FormData();
		this.formData.append( "readingList", this.readingList );
		this.formData.append( "trackingId", this.trackingId );
		this.formData.append( "fileName", this.fileName );
		this.formData.append( "fileType", this.fileType );
		this.formData.append( "imageSlotNumber", this.imageSlotNumber );
		this.formData.append( "caption", this.caption );
		var uploadReporter = this.uploadReporter;
		var formDataSent = false;
		var xmlRequest_2 = new XMLHttpRequest();
		xmlRequest_2.onreadystatechange = function() {
			if ( xmlRequest_2.readyState == 4 && xmlRequest_2.status == 200 ) {
				uploadReporter.displayTextMessage( xmlRequest_2.responseText );
				formDataSent = callback( xmlRequest_2.responseText );
				uploadReporter.appendToTextMessage( "Data uploaded" );
			} // if
		} // onreadystatechange()
		xmlRequest_2.open( "POST", "../functions/image_gallery_uploader_insert_image_data_1.1.1.php", true );
		//xmlRequest_2.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_2.send( this.formData );
	} // ImageGalleryUploader.prototype.uploadImages()
		
	ImageGalleryUploader.prototype.uploadImageBinary = function() {
		var xmlRequest_3 = new XMLHttpRequest();
		this.uploadReporter.displayUpload( 0, "Waiting..." );
		var context = this;			
		xmlRequest_3.upload.addEventListener( "progress",  function( evt ) {
			if ( evt.lengthComputable ) {
				context.fileSize = evt.total;
				context.partUploaded = evt.loaded;
				context.partWaiting = evt.total - evt.loaded;
				context.progress = evt.loaded / evt.total;
				context.uploadReporter.displayUpload( context.progress, "File uploading...please wait (don't click anything &mdash; it won't help)." );
			} else {
				context.uploadReporter.displayUpload( .5, "File uploading...file is not trackable...please wait." );
			} // if else
		}, false );				
		xmlRequest_3.addEventListener( "load", function( evt ) {
			context.uploadReporter.displayUpload( 1, "Upload complete; server response: " + xmlRequest_3.responseText );
			context.updateImageSlot( context.updateHTML );
		}, false );
		xmlRequest_3.addEventListener( "error", function( evt ) {
			context.uploadReporter.displayUpload( 0, "Upload failed; server response: " + xmlRequest_3.responseText );
		}, false );
		xmlRequest_3.addEventListener("abort", function( evt ) {
			context.uploadReporter.displayUpload( 0, "Upload was cancelled." );
		}, false );
		xmlRequest_3.open( "POST", "../functions/image_gallery_uploader_insert_image_1.1.1.php", true );		
		xmlRequest_3.setRequestHeader( "X-File-Name", this.fileName )
		xmlRequest_3.setRequestHeader( "X-File-Size", this.fileSize )
		xmlRequest_3.send( this.file );
	} // ImageGalleryUploader.prototype.uploadImageBinary()
		
	ImageGalleryUploader.prototype.updateImageSlot = function( callback ) {
		var context = this;	
		setTimeout( function() {
			var xmlRequest_4 = new XMLHttpRequest();
			xmlRequest_4.onreadystatechange = function() {
				if ( xmlRequest_4.readyState == 4 && xmlRequest_4.status == 200 ) {
					callback( xmlRequest_4.responseText );
				} // if
			} // onreadystatechange()
			xmlRequest_4.open( "POST", "../functions/image_gallery_uploader_update_image_slot_1.1.1.php", true );
			xmlRequest_4.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
			xmlRequest_4.send( "readingList=" + context.readingList + "&trackingId=" + context.trackingId + "&imageSlotNumber=" + context.imageSlotNumber );
		}, 2000, context );
	} // ImageGalleryUploader.prototype.uploadImageBinary()
		
	ImageGalleryUploader.prototype.updateHTML = function( responseText ) {
		var cell = document.getElementById( "image_gallery_cell_" + this.imageSlotNumber );
		cell.innerHTML = responseText;
		var newImage = document.createElement( "img" );
		newImage.setAttribute( "name", "dtuc_book_image_" + this.imageSlotNumber );
		newImage.setAttribute( "id", "dtuc_book_image_" + this.imageSlotNumber );
		newImage.setAttribute( "class", "image_gallery_item" );
		newImage.setAttribute( "src", "https://www.deeptext.ca/functions/show_gallery_image_1.1.1.php?img=dtuc_book_image_" + this.imageSlotNumber + "_thumbnail&list=" + this.readingList + "&id=" + this.trackingId + "&rand=" + Math.round( Math.random() * 1000 ) );
		newImage.setAttribute( "width", "200" );
		newImage.setAttribute( "alt", "No image "  + this.imageSlotNumber + " available" );
		cell.insertBefore( newImage, cell.childNodes[0] );
	} // imageGalleryUploader.prototype.updateHTML()
} // ImageGalleryUploader

ImageGalleryDeletionObject: {	
	function ImageGalleryDeletionObject( readingList, trackingId, imageSlotNumber ) {
		this.readingList = readingList;
		this.trackingId = trackingId;
		this.imageSlotNumber = imageSlotNumber;
		this.updateHTML = this.updateHTML.bind( this );
		this.deleteImage( this.updateHTML );
		this.uploadReporter = new uploadReporterObject( 0, "Deleting...", "file_upload_progress_bar", "status_reporter" ); 
	} // imageGalleryDeletionObject()

	ImageGalleryDeletionObject.prototype.deleteImage = function( callback ) {
		var xmlRequest_1 = new XMLHttpRequest();
		xmlRequest_1.onreadystatechange = function() {
			if ( xmlRequest_1.readyState == 4 && xmlRequest_1.status == 200 ) {
				callback( xmlRequest_1.responseText );
			} // if
		} // onreadystatechange()
		xmlRequest_1.open( "POST", "../functions/image_gallery_uploader_delete_image_1.1.1.php", true );
		xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_1.send( "readingList=" + this.readingList + "&trackingId=" + this.trackingId + "&imageSlotNumber=" + this.imageSlotNumber );
	} // imageGalleryDeletionObject.prototype.deleteImage()
	
	ImageGalleryDeletionObject.prototype.updateHTML = function( responseText ) {
		document.getElementById( "image_gallery_cell_" + this.imageSlotNumber ).innerHTML = responseText;
		this.uploadReporter.displayTextMessage( "Image " + this.imageSlotNumber + " deleted." );
	} // imageGalleryDeletionObject.prototype.updateHTML()
} // imageGalleryDeletionObject

CaptionUpdateObject: {	
	function CaptionUpdateObject( readingList, trackingId, imageSlotNumber, caption ) {
		this.readingList = readingList;
		this.trackingId = trackingId;
		this.imageSlotNumber = imageSlotNumber;
		this.caption = caption;
		this.updateCaption = this.updateCaption.bind( this );
		this.updateHTML = this.updateHTML.bind( this );
		this.updateCaption( this.updateHTML );
		this.uploadReporter = new uploadReporterObject( 0, "Sending...", "file_upload_progress_bar", "status_reporter" ); 
	} // CaptionUpdateObject()

	CaptionUpdateObject.prototype.updateCaption = function( callback ) {
		var xmlRequest_1 = new XMLHttpRequest();
		xmlRequest_1.onreadystatechange = function() {
			if ( xmlRequest_1.readyState == 4 && xmlRequest_1.status == 200 ) {
				callback( xmlRequest_1.responseText );
			} // if
		} // onreadystatechange()
		xmlRequest_1.open( "POST", "../functions/image_gallery_uploader_update_caption_1.1.1.php", true );
		xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_1.send( "readingList=" + this.readingList + "&trackingId=" + this.trackingId + "&imageSlotNumber=" + this.imageSlotNumber + "&caption=" + this.caption );
	} // CaptionUpdateObject.prototype.updateCaption()
	
	CaptionUpdateObject.prototype.updateHTML = function( responseText ) {
		console.log( this.imageSlotNumber );
		document.getElementById( "dtuc_book_image_" + this.imageSlotNumber + "_caption" ).value = this.caption;
		this.uploadReporter.displayTextMessage( "Caption " + this.imageSlotNumber + " updated to \"" + this.caption + "\"" );
	} // CaptionUpdateObject.prototype.updateHTML()
} // CaptionUpdateObject

uploadReporterObject: {
	function uploadReporterObject( value, text, progressElement, statusElement ) {
		this.progressReporter = document.getElementById( progressElement );
		this.progressReporter.value = value;
		this.statusReporter = document.getElementById( statusElement );
		this.statusReporter.innerHTML = text;
	} // displayUploadProgress()
	uploadReporterObject.prototype.displayUpload = function( value, text ) {
		this.progressReporter.value = value;
		this.statusReporter.innerHTML = text;
	} // uploadReporter.prototype.displayUpload()
	uploadReporterObject.prototype.displayTextMessage = function( text ) {
		this.statusReporter.innerHTML = text;
	} // uploadReporter.prototype.displayTextMessage()
	uploadReporterObject.prototype.appendToTextMessage = function( text ) {
		this.statusReporter.innerHTML += text;
	} // uploadReporter.prototype.appendToTextMessage()
	
} // uploadReporter