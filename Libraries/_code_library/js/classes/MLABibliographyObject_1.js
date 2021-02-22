MLABibliography: {
	function MLABibliography( type, date, number ) {
		this.type = type;
		this.date = date;
		this.number = number;	
	} // MLABibliography()

	MLABibliography.prototype.packageFormData = function() {
		this.formData = new FormData();
		this.formData.append( "author", document.getElementById( "dtuc_mla_author" ).value );
		this.formData.append( "editor", document.getElementById( "dtuc_mla_editor" ).value );
		this.formData.append( "mainTitle", document.getElementById( "dtuc_mla_main_title" ).value );
		this.formData.append( "subtitle", document.getElementById( "dtuc_mla_subtitle" ).value );
		this.formData.append( "volume", document.getElementById( "dtuc_mla_volume" ).value );
		this.formData.append( "translator", document.getElementById( "dtuc_mla_translator" ).value );
		this.formData.append( "publisher", document.getElementById( "dtuc_mla_publisher" ).value );
		this.formData.append( "city", document.getElementById( "dtuc_mla_publisher_city" ).value );
		this.formData.append( "originalYear", document.getElementById( "dtuc_mla_original_publication_year" ).value );
		this.formData.append( "editionYear", document.getElementById( "dtuc_mla_edition_publication_year" ).value );
		this.formData.append( "ISBN", document.getElementById( "dtuc_mla_ISBN" ).value );
		this.formData.append( "pages", document.getElementById( "dtuc_mla_pages" ).value );
		this.formData.append( "type", document.getElementById( "dtuc_mla_type" ).value );
		this.formData.append( "stableLink", document.getElementById( "dtuc_mla_link" ).value );
		this.formData.append( "downloaded", document.getElementById( "dtuc_mla_downloaded" ).value );
		this.formData.append( "reasonAdded", document.getElementById( "dtuc_mla_reason_added" ).value );
		this.formData.append( "description", document.getElementById( "dtuc_mla_description" ).value );
		this.formData.append( "notes", document.getElementById( "dtuc_mla_notes" ).value );
	} // MLABibliography.prototype.packageFormData

	MLABibliography.prototype.getReadingListFromDB = function( callback ) {
		var xmlRequest_1 = new XMLHttpRequest();
		var selectElement = this.selectElement;
		xmlRequest_1.onreadystatechange = function() {
			if ( xmlRequest_1.readyState == 4 && xmlRequest_1.status == 200 ) {
				callback( xmlRequest_1.responseText );
			} // if
		} // onreadystatechange()
		this.packageFormData();
		xmlRequest_1.open( "POST", "../functions/mla_bibliography_request_1.1.1.php", true );
		//xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_1.send( this.formData );
	} // bookList.prototype.getListFromDB()
	
	MLABibliography.prototype.setReadingListSessionVariables = function( inputElement ) {
		var xmlRequest_2 = new XMLHttpRequest();
		xmlRequest_2.onreadystatechange = function() {
			if ( xmlRequest_2.readyState == 4 && xmlRequest_2.status == 200 ) {
				console.log( "Variables set. " + xmlRequest_2.responseText );
			} // if
		} // onreadystatechange()
		xmlRequest_2.open( "POST", "../functions/set_reading_list_session_variables_1.1.1.php", true );
		xmlRequest_2.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		xmlRequest_2.send( "readingList=" + inputElement.value );
	} // bookList.prototype.getListFromDB()
	
	MLABibliography.prototype.buildBibliography = function( response ) {
		console.log( response );
		if ( typeof bibliographyWindow == "undefined" ) {
			var bibliographyWindow = window.open( "../pages/user_tools/book_list_bibliography_1.2.1.php", "bibliographyWindow", "width=800,height=800,scrollbars=yes", false );
			bibliographyWindow.onload = function() {
				bibliographyWindow.document.getElementById( "mla_bibliography_output_box" ).innerHTML = response;
			} // onload
		} else {
			bibliographyWindow.document.getElementById( "mla_bibliography_output_box" ).innerHTML = response;
		} // if else
	} // bookList.prototype.displayList()
	
} // MLABibliography