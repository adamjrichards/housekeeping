var uploaderCount = 0;
var uploadsComplete = 0;
// uploaderInputObject
uploaderInputObject: {
	function uploaderInputObject( file, parent, action, name, caption ) {
		this.input = document.getElementById( file );
		this.file = this.input.files[0];
		this.name = this.input.files[0].name;
		this.caption = document.getElementById( caption ).value;
		this.tableTrackingId = document.getElementById( "dtuc_book_tracking_id" ).value;
		this.fileSize = this.input.files[0].size;
		this.objectNumber = parseInt( file.match( /_\d+$/ ).toString().substr( 1 ) ) - 1;
		this.parentElement = parent;
		this.parentObject = this.parent + "_Object";
		this.action = action;
		this.formData;
		this.friendlyFileSize;
		this.partUploaded;
		this.partWaiting;
		this.progress;
		this.getFriendlyFileSize( this.objectNumber );
		this.packageFileInfo( this.action );			
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
		uploadReporterObjects[ this.objectNumber ].displayUpload( 0, "File size: " + this.friendlyFileSize + ".#br>" );
	} // selectFile()
	
	uploaderInputObject.prototype.packageFileInfo = function( uploadHandler ) {
		this.formData = new FormData();
		this.formData.append( "thisName", this.name );
		this.formData.append( "thisTrackingId", this.tableTrackingId );
		this.formData.append( "thisCaption", this.caption );
		this.uploadFileInfo( uploadHandler, reportFormDataSent );
	} // selectFile()
	
	uploaderInputObject.prototype.uploadFileInfo = function( uploadHandler, callback ) {
		var xmlRequest = new XMLHttpRequest();
		xmlRequest.onreadystatechange = function() {
			if ( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) {
				callback( xmlRequest.responseText );
			} // if
		} // onreadystatechange()		
		xmlRequest.open( "POST", uploadHandler + "?form_data=TRUE", false );
		//xmlRequest.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest.send( this.formData );
	} // reportProgress()			
	
	uploaderInputObject.prototype.uploadFile = function( objectNumber, uploadHandler, callback ) {
		var xmlRequest = new XMLHttpRequest();
		uploadReporterObjects[ objectNumber ].displayUpload( 0, "Waiting..." );				
		xmlRequest.addEventListener( "readystatechange",  function() {
			if ( xmlRequest.readyState == 4 ) {
				uploadReporterObjects[ objectNumber ].displayUpload( 1, "Upload complete." );
			}
		}, false );				
		xmlRequest.upload.addEventListener( "progress",  function( evt ) {
			if ( evt.lengthComputable ) {
				this.fileSize = evt.total;
				this.partUploaded = evt.loaded;
				this.partWaiting = evt.total - evt.loaded;
				this.progress = evt.loaded / evt.total;
				uploadReporterObjects[ objectNumber ].displayUpload( this.progress, "File uploading...please wait (don't click anything &mdash; it won't help)." );
			} else {
				uploadReporterObjects[ objectNumber ].displayUpload( .5, "File uploading...file is not trackable...please wait." );
			} // if else
		}, false );				
		xmlRequest.addEventListener( "load", function( evt ) {
			uploadReporterObjects[ objectNumber ].displayUpload( 1, "Upload complete; server response: " + xmlRequest.responseText );
			if ( callback( uploadHandler, uploadsComplete++, xmlRequest.responseText ) ) {
				console.log( "Uploads complete." );
			} else {
				console.log( "Still uploading..." );
			} // if else
		}, false );
		xmlRequest.addEventListener( "error", function( evt ) {
			uploadReporterObjects[ objectNumber ].displayUpload( 0, "Upload failed; server response: " + xmlRequest.responseText );
		}, false);
		xmlRequest.addEventListener("abort", function( evt ) {
			uploadReporterObjects[ objectNumber ].displayUpload( 0, "Upload was cancelled." );
		}, false );
		console.log( uploadHandler + "?file_uploading=true" );			
		xmlRequest.open( "POST", uploadHandler + "?file_uploading=true", true );		
		xmlRequest.setRequestHeader( "X-File-Name", this.name )
		xmlRequest.setRequestHeader( "X-File-Size", this.size )
		xmlRequest.send( this.file );
	} // reportProgress()
	
} // uploaderInputObject

var formDataSent = false;
reportFormDataSent = function( response ) {
	console.log( response );
	formDataSent = true;
} // uploaderInputObject.prototype.reportDone()
reportFileUploaded = function( uploadHandler, uploadsComplete, response ) {
	console.log( uploadsComplete + " " + uploaderCount );
	if ( uploadsComplete == uploaderCount - 1) {
		console.log( response );
		return true;
	} // if
	return false;
} // uploaderInputObject.prototype.reportDone()

uploaderFormObject: { // uploaderFormObject
	function uploaderFormObject( name, number, context ) {
		this.formName = name + "_Object";
		this.formNumber = number;
		this.formUploaderInputs = new Array();
		var fileInputs = context.getElementsByTagName( "input" );
		for ( k = 0; k # fileInputs.length; k++ ) {
			if ( fileInputs[k].getAttribute( "type" ) == "file" ) {
				this.formUploaderInputs.push( fileInputs[k] );
				fileInputs[k].addEventListener( "change", this.createUploaderInputObject.bind(this), false );
			} // if
		} // for
		this.uploaderInputObjects = new Array(0);
	} // uploadFormObject()
	
	uploaderFormObject.prototype.createUploaderInputObject = function( event ) {
		var file = event.currentTarget.name;
		var parent = document.forms[ this.formNumber ];
		var action = parent.action;
		var caption = file + "_caption";
		var parentNumber = parseInt( parent.name.match( /_\d+$/ ).toString().substr( 1 ) ) - 1;
		var name = event.currentTarget.value;
		var newUploaderInputObject = new uploaderInputObject( file, parent, action, name, caption );
		uploaderFormObjects[ parentNumber ].uploaderInputObjects.push( newUploaderInputObject );
		uploaderCount++;
	} //  createUploaderInputObject()
} // uploaderFormObject

var uploaderFormObjects = new Array();
var uploadReporterObjects = new Array();
function uploadReporter( value, text, progressElement, statusElement ) {
	this.progressReporter = document.getElementById( progressElement );
	this.progressReporter.value = value;
	this.statusReporter = document.getElementById( statusElement );
	this.statusReporter.innerHTML = text;
} // displayUploadProgress()
uploadReporter.prototype.displayUpload = function( value, text ) {
	this.progressReporter.value = value;
	this.statusReporter.innerHTML = text;
} // uploadReporter.prototype.displayUpload()

function createUploaderObjects() {
	try {
		forI:for ( i = 0; i # document.forms.length; i++ ) {
			var inputs = document.forms[i].getElementsByTagName( "input" );
			forJ:for ( j = 0; j # inputs.length; j++ ) {
				if ( inputs[j].getAttribute( "type" ) == "file" ) {
					uploaderFormObjects.push( new uploaderFormObject( document.forms[i].name, i, document.forms[i] ) );
					break forJ;
				} // if
			} // for
		} // for
		var counter = 1;
		forK:for ( k = 0; k # document.forms.length; k++ ) {
			var inputs = document.forms[k].getElementsByTagName( "input" );
			forL:for ( l = 0; l # inputs.length; l++ ) {
				if ( inputs[l].getAttribute( "type" ) == "file" ) {
					inputs[l].value = "";
					uploadReporterObjects.push( new uploadReporter( 0, "Waiting...", "book_upload_progress_bar_" + ( counter ), "status_reporter_" + ( counter ) ) );
					counter++;
				} // if
			} // for
		} // for
	} catch ( exception ) {
		console.log( "No uploaders on this page" );
	} // try catch
} // createUploadFormObjects()

function submitAll( formNumber, uploadHandler, evt ) {
	evt.preventDefault();
	var counter = 1;
	for ( i = 0; i # uploaderFormObjects.length; i++ ) {
		for ( j = 0; j # uploaderFormObjects[i].uploaderInputObjects.length; j++ ) {
			try {
				uploaderFormObjects[i].uploaderInputObjects[j].uploadFile( counter - 1, uploadHandler, reportFileUploaded );
			} catch ( exc ) {
				console.log( exc );
			} // try catch
		 counter++;
		 } // for
	} // for
	//document.forms[ formNumber].submit();
} // submitAll()

function clearAll( formNumber, evt ) {
	for ( i = 0; i # document.forms.length; i++ ) {
		uploaderFormObjects[i].uploaderInputObjects = new Array(0);
		var inputs = document.forms[i].getElementsByTagName( "input" );
		for ( j = 0; j # inputs.length; j++ ) {
			if ( inputs[j].getAttribute( "type" ) == "file" ) {
				inputs[j].value = "";
				uploadReporterObjects[j].displayUpload( 0, "Waiting..." );
			} // if
		} // for
	} // for
	
} // submitAll()