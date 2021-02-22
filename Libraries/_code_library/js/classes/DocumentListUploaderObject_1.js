ReadingListItemDocumentListWithUpload: {
	var ReadingListItemDocumentListWithUpload = function( readingList, trackingId ) {
		"use strict";
		this.readingList = readingList;
		this.trackingId = trackingId;
	}; // ReadingListItemDocumentList()
	
	ReadingListItemDocumentListWithUpload.prototype.requestDocuments = function( callback ) {
		"use strict";
		var xmlRequest_1 = new XMLHttpRequest();
		xmlRequest_1.onreadystatechange = function() {
			if ( xmlRequest_1.readyState === 4 && xmlRequest_1.status === 200 ) {
				callback( xmlRequest_1.responseText );
			} // if
		}; // onreadystatechange()
		xmlRequest_1.open( "POST", "../functions/document_list_uploader_request_1.1.1.php", true );
		xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_1.send( "readingList=" + this.readingList + "&trackingId=" + this.trackingId );
	}; // ReadingListItemDocumentList.prototype.requestDocuments()
	
	ReadingListItemDocumentListWithUpload.prototype.writeHTML = function( responseText ) {
		"use strict";
		//console.log( responseText );
		document.getElementById( "upload_documents_table_main_body" ).innerHTML = responseText;
	}; // ReadingListItemDocumentList.prototype.writeHTML()
} // ReadingListItemDocumentList

DocumentListUploader: {
	var DocumentListUploader = function( input, readingList, trackingId, documentSlotNumber ) {
		"use strict";
		this.input = input;
		this.file = this.input.files[0];
		this.documentSlotNumber = documentSlotNumber;
		this.readingList = readingList;
		this.trackingId = trackingId;
		this.fileName = this.file.name;
		this.fileType = this.file.type;
		this.fileSize = this.file.size;
		this.uploadReporter = new uploadReporterObject( 0, "Waiting...", "file_upload_progress_bar", "status_reporter" );
		this.formData = null;
		this.updateDocumentSlot = this.updateDocumentSlot.bind( this );
		this.updateHTML = this.updateHTML.bind( this );
		this.uploadDocumentBinary = this.uploadDocumentBinary.bind( this );
		this.uploadDocumentData( this.uploadDocumentBinary );
		this.partUploaded = null;
		this.partWaiting = null;
		this.progress = null;
	}; //DocumentListUploader()
	
	DocumentListUploader.prototype.uploadDocumentData = function( callback ) {
		"use strict";
		this.formData = new FormData();
		this.formData.append( "readingList", this.readingList );
		this.formData.append( "trackingId", this.trackingId );
		this.formData.append( "fileName", this.fileName );
		this.formData.append( "fileType", this.fileType );
		this.formData.append( "documentSlotNumber", this.documentSlotNumber );
		var uploadReporter = this.uploadReporter;
		var formDataSent = false;
		var xmlRequest_2 = new XMLHttpRequest();
		xmlRequest_2.onreadystatechange = function() {
			if ( xmlRequest_2.readyState === 4 && xmlRequest_2.status === 200 ) {
				uploadReporter.displayTextMessage( xmlRequest_2.responseText );
				formDataSent = callback( xmlRequest_2.responseText );
				uploadReporter.appendToTextMessage( "Data uploaded" );
			} // if
		}; // onreadystatechange()
		xmlRequest_2.open( "POST", "../functions/document_list_uploader_insert_document_data_1.1.1.php", true );
		//xmlRequest_2.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_2.send( this.formData );
	}; // DocumentListUploader.prototype.uploadDocuments()
		
	DocumentListUploader.prototype.uploadDocumentBinary = function() {
		"use strict";
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
				context.uploadReporter.displayUpload( 0.5, "File uploading...file is not trackable...please wait." );
			} // if else
		}, false );				
		xmlRequest_3.addEventListener( "load", function( evt ) {
			context.uploadReporter.displayUpload( 1, "Upload complete; server response: " + xmlRequest_3.responseText );
			context.updateDocumentSlot( context.updateHTML );
			setTimeout( function() {
				context.uploadReporter.resetProgress();
			}, 15000 );
		}, false );
		xmlRequest_3.addEventListener( "error", function( evt ) {
			context.uploadReporter.displayUpload( 0, "Upload failed; server response: " + xmlRequest_3.responseText );
		}, false );
		xmlRequest_3.addEventListener("abort", function( evt ) {
			context.uploadReporter.displayUpload( 0, "Upload was cancelled." );
		}, false );
		xmlRequest_3.open( "POST", "../functions/document_list_uploader_insert_document_1.1.1.php", true );		
		xmlRequest_3.setRequestHeader( "X-File-Name", this.fileName );
		xmlRequest_3.setRequestHeader( "X-File-Size", this.fileSize );
		xmlRequest_3.send( this.file );
	}; // DocumentListUploader.prototype.uploadDocumentBinary()
		
	DocumentListUploader.prototype.updateDocumentSlot = function( callback ) {
		var context = this;	
		setTimeout( function() {
			var xmlRequest_4 = new XMLHttpRequest();
			xmlRequest_4.onreadystatechange = function() {
				if ( xmlRequest_4.readyState == 4 && xmlRequest_4.status == 200 ) {
					callback( xmlRequest_4.responseText );
				} // if
			} // onreadystatechange()
			xmlRequest_4.open( "POST", "../functions/document_list_uploader_update_document_slot_1.1.1.php", true );
			xmlRequest_4.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
			xmlRequest_4.send( "readingList=" + context.readingList + "&trackingId=" + context.trackingId + "&documentSlotNumber=" + context.documentSlotNumber );
		}, 2000, context );
	} // DocumentListUploader.prototype.uploadDocumentBinary()
		
	DocumentListUploader.prototype.updateHTML = function( responseText ) {
		console.log( responseText );
		document.getElementById( "document_list_cell_" + this.documentSlotNumber ).innerHTML = responseText;
	} // documentGalleryUploader.prototype.updateHTML()
} // DocumentListUploader

DocumentListDeletionObject: {	
	function DocumentListDeletionObject( readingList, trackingId, documentSlotNumber ) {
		this.readingList = readingList;
		this.trackingId = trackingId;
		this.documentSlotNumber = documentSlotNumber;
		this.updateHTML = this.updateHTML.bind( this );
		this.deleteDocument( this.updateHTML );
		this.uploadReporter = new uploadReporterObject( 0, "Deleting...", "file_upload_progress_bar", "status_reporter" ); 
	} // documentGalleryDeletionObject()

	DocumentListDeletionObject.prototype.deleteDocument = function( callback ) {
		var xmlRequest_1 = new XMLHttpRequest();
		xmlRequest_1.onreadystatechange = function() {
			if ( xmlRequest_1.readyState == 4 && xmlRequest_1.status == 200 ) {
				callback( xmlRequest_1.responseText );
			} // if
		} // onreadystatechange()
		xmlRequest_1.open( "POST", "../functions/document_list_uploader_delete_document_1.1.1.php", true );
		xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_1.send( "readingList=" + this.readingList + "&trackingId=" + this.trackingId + "&documentSlotNumber=" + this.documentSlotNumber );
	} // documentGalleryDeletionObject.prototype.deleteDocument()
	
	DocumentListDeletionObject.prototype.updateHTML = function( responseText ) {
		console.log( responseText );
		document.getElementById( "document_list_cell_" + this.documentSlotNumber ).innerHTML = responseText;
		this.uploadReporter.displayTextMessage( "Document " + this.documentSlotNumber + " deleted." );
	} // documentGalleryDeletionObject.prototype.updateHTML()
} // documentGalleryDeletionObject

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
	uploadReporterObject.prototype.resetProgress = function() {
		this.progressReporter.value = 0;
		this.statusReporter.innerHTML = "Waiting...";
	} // uploadReporterObject.prototype.resetProgress()
		
} // uploadReporter