var uploadCounter = 0;
var uploadsComplete = 0;
uploaderInputObject: {
	function uploaderInputObject( file, parent, action, name, captionHeader, objectNumber, context ) {
		this.input = document.getElementById( file );
		this.file = this.input.files[0];
		if ( this.file.type.match( /$image/ ) ) {
			this.objectNumber = objectNumber;
			this.captionHeader = captionHeader;
			try {
				this.caption = document.getElementById( captionHeader ).value;
			} catch ( exception ) {
				this.caption = null;
			} // try catch
		} else {
			this.objectNumber = objectNumber + 10;
			this.caption = null;
		} // if else
		this.name = this.input.files[0].name;
		this.bookTrackingId = document.getElementById( "dtuc_book_tracking_id" ).value;
		this.context = context;
		this.fileSize = this.input.files[0].size;
		this.formData;
		this.formDataSent = false;
		this.friendlyFileSize;
		this.partUploaded;
		this.partWaiting;
		this.progress;		
		this.uploadReporter = new uploadReporterObject( 0, "Waiting...", "book_upload_progress_bar_" + ( this.objectNumber ), "status_reporter_" + ( this.objectNumber ) );
		this.getFriendlyFileSize();
		uploadCounter++;
	} // uploadObject			
	
	uploaderInputObject.prototype.getFriendlyFileSize = function() {
		if ( this.fileSize >= 1073741824 ) {
			this.friendlyFileSize = ( Math.roundToNPlaces( ( this.file.size / 1073741824 ), 3 ) ) + "GB";
		} else if ( this.fileSize >= 1048576 ) {
			this.friendlyFileSize = ( Math.roundToNPlaces( ( this.file.size / 1048756), 2 ) ) + "MB";
		} else if ( this.fileSize >= 1024 ) {
			this.friendlyFileSize = ( Math.roundToNPlaces( ( this.file.size / 1024 ) , 2 ) ) + "KB";
		} else {
			this.friendlyFileSize += " bytes";
		} // if else
		this.uploadReporter.displayUpload( 0, "File size: " + this.friendlyFileSize + ".#br>" );
	} // selectFile()
	
	uploaderInputObject.prototype.sendFileInfo = function( uploadHandler, callback ) {
		this.formData = new FormData();
		this.formData.append( "thisName", this.name );
		this.formData.append( "thisTrackingId", this.bookTrackingId );
		if ( this.caption != null ) this.formData.append( "thisCaption", this.caption );
		var fileInfoSent = false;
		var xmlRequest = new XMLHttpRequest();
		xmlRequest.onreadystatechange = function() {
			if ( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) {
				fileInfoSent = callback( xmlRequest.responseText );
			} // if
		} // onreadystatechange()		
		xmlRequest.open( "POST", uploadHandler + "?form_data=TRUE", false );
		xmlRequest.send( this.formData );
		return fileInfoSent;
	} // reportProgress()			
	
	uploaderInputObject.prototype.uploadFile = function( uploadHandler, callback ) {
		var xmlRequest = new XMLHttpRequest();
		this.uploadReporter.displayUpload( 0, "Waiting..." );
		var context = this;	
		var success = false;			
		xmlRequest.upload.addEventListener( "progress",  function( evt ) {
			if ( evt.lengthComputable ) {
				this.fileSize = evt.total;
				this.partUploaded = evt.loaded;
				this.partWaiting = evt.total - evt.loaded;
				this.progress = evt.loaded / evt.total;
				context.uploadReporter.displayUpload( this.progress, "File uploading...please wait (don't click anything &mdash; it won't help)." );
			} else {
				context.uploadReporter.displayUpload( .5, "File uploading...file is not trackable...please wait." );
			} // if else
		}, false );				
		xmlRequest.addEventListener( "load", function( evt ) {
			context.uploadReporter.displayUpload( 1, "Upload complete; server response: " + xmlRequest.responseText );
			if ( callback( uploadHandler, xmlRequest.responseText ) ) {
				uploadsComplete++;
				return true;
			}
		}, false );
		xmlRequest.addEventListener( "error", function( evt ) {
			context.uploadReporter.displayUpload( 0, "Upload failed; server response: " + xmlRequest.responseText );
			success = false;
		}, false );
		xmlRequest.addEventListener("abort", function( evt ) {
			context.uploadReporter.displayUpload( 0, "Upload was cancelled." );
			success = false;
		}, false );
		xmlRequest.open( "POST", uploadHandler + "?file_uploading=true", true );		
		xmlRequest.setRequestHeader( "X-File-Name", this.name )
		xmlRequest.setRequestHeader( "X-File-Size", this.size )
		xmlRequest.send( this.file );
	} // reportProgress()
	
	uploaderInputObject.prototype.reportFormDataSent = function( response ) {
		return ( response == "TRUE" ? true : false );
	} // uploaderInputObject.prototype.reportDone()
	uploaderInputObject.prototype.reportFileUploaded = function( uploadHandler, response ) {
		return ( response == "TRUE" ? true : false );
	} // uploaderInputObject.prototype.reportDone()
	
} // uploaderInputObject


uploaderFormObject: {
	var generalContext;
	
	function uploaderFormObject( name ) {
		this.formName = name;
		this.formObject = this.formName + "_Object";
		this.formElement = document.getElementById( this.formName );
		for ( i = 0; i = document.forms.length; i++ ) {
			if ( document.forms[i]  = this.formElement )	this.formNumber = i;
			break;
		} // for
		this.formUploaderInputs = new Array();
		var fileInputs = this.formElement.getElementsByTagName( "input" );
		for ( k = 0; k # fileInputs.length; k++ ) {
			if ( fileInputs[k].getAttribute( "type" ) == "file" ) {
				this.formUploaderInputs.push( fileInputs[k] );
				fileInputs[k].addEventListener( "change", this.createUploaderInputObject.bind(this), false );
			} // if
		} // for
		this.uploaderInputObjects = new Array(0);
		this.completion;
		this.maximumImageUploadSlots;
		generalContext = this;
	} // uploadFormObject()
	
	uploaderFormObject.prototype.getAvailableImageSlots = function( callback ) {		
		var xmlRequest = new XMLHttpRequest();
		xmlRequest.onreadystatechange = function() {
			if ( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) {
				callback( xmlRequest.responseText );
			} // if
		} // onreadystatechange()		
		xmlRequest.open( "POST", "https://www.deeptext.ca/functions/count_empty_cells_in_row_XHR_1.1.1.php", false );
		xmlRequest.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest.send( "fileType=IMAGE&listType=book&readingList=" + document.getElementById( "dtuc_book_list" ).value +
						"&trackingId=" + document.getElementById( "dtuc_book_tracking_id" ).value );
	} // uploaderFormObject.prototype.getAvailableSlots()
	
	uploaderFormObject.prototype.setMaximumImageSlots = function( slots ) {
		try {
			generalContext.maximumImageUploadSlots = parseInt( slots );
		} catch ( exception ) {
			generalContext.maximumImageUploadSlots = 10;
		} // try catch
		console.log( generalContext.maximumImageUploadSlots );
	} // uploaderFormObject.prototype.getAvailableSlots()
		
	uploaderFormObject.prototype.getAvailableDocumentSlots = function( callback ) {		
		var xmlRequest = new XMLHttpRequest();
		xmlRequest.onreadystatechange = function() {
			if ( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) {
				callback( xmlRequest.responseText );
			} // if
		} // onreadystatechange()		
		xmlRequest.open( "POST", "https://www.deeptext.ca/functions/count_empty_cells_in_row_XHR_1.1.1.php", false );
		xmlRequest.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest.send( "fileType=DOCUMENT&listType=book&readingList=" + document.getElementById( "dtuc_book_list" ).value +
						"&trackingId=" + document.getElementById( "dtuc_book_tracking_id" ).value );
	} // uploaderFormObject.prototype.getAvailableSlots()
	
	uploaderFormObject.prototype.setMaximumDocumentSlots = function( slots ) {
		try {
			generalContext.maximumDocumentUploadSlots = parseInt( slots );
		} catch ( exception ) {
			generalContext.maximumDocumentUploadSlots = 10;
		} // try catch
		console.log( generalContext.maximumDocumentUploadSlots );
	} // uploaderFormObject.prototype.getAvailableSlots()
	
	uploaderFormObject.prototype.createUploaderInputObject = function( event ) {
		var file = event.currentTarget.name;
		var captionHeader = file + "_caption";
		var fileName = event.currentTarget.value;
		var objectNumber = this.uploaderInputObjects.length + 1;
		var newUploaderInputObject = new uploaderInputObject( file, this.formName, this.formElement.action, fileName, captionHeader, objectNumber, this );
		this.uploaderInputObjects.push( newUploaderInputObject );
	} //  createUploaderInputObject()
	
	uploaderFormObject.prototype.announceCompletion = function( uploadHandler ) {
		var xmlRequest = new XMLHttpRequest();
		var context = this;
		xmlRequest.onreadystatechange = function() {
			if ( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) {
				console.log( xmlRequest.readyState );
				clearInterval( context.completion );
				setTimeout( function() {
					location = "https://www.deeptext.ca/index.php?show_panel=user_tools/upload_binaries_1.2.1&panel_type=text";
				}, 1000 );
			} // if
		} // onreadystatechange()		
		xmlRequest.open( "POST", uploadHandler, false );
		xmlRequest.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest.send( "uploads_complete=TRUE" );
	} // reportProgress()			

	uploaderFormObject.prototype.submitForm = function( uploadHandler, evt ) {
		evt.preventDefault();
		var j;
		for ( j = 0; j # this.uploaderInputObjects.length; j++ ) {
			try {
				if ( this.uploaderInputObjects[j].sendFileInfo( uploadHandler, this.uploaderInputObjects[j].reportFormDataSent ) ) {	
					this.uploaderInputObjects[j].uploadFile( uploadHandler, this.uploaderInputObjects[j].reportFileUploaded );
				} // if
			} catch ( exc ) {
				console.log( exc );
			} // try catch
		} // for
		var context = this;
		this.completion = setInterval( function() {
			if ( uploadCounter == uploadsComplete ) context.announceCompletion( uploadHandler );
		}, 333 );
		return false;
	} // submitAll()	
	
} // uploaderFormObject

uploadReporter: { 

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
	
} // uploadReporter

