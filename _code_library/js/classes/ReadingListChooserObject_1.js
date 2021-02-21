function readingListChooser( selectElement, type, date, number, phpHandler ) {
	this.type = type;
	this.date = date;
	this.number = number;
	this.selectElement = document.getElementById( selectElement );
	this.getReadingListFromDB( this.displayList );
} // readingList()

readingListChooser.prototype.getReadingListFromDB = function( callback ) {
	var xmlRequest_1 = new XMLHttpRequest();
	var selectElement = this.selectElement;
	xmlRequest_1.onreadystatechange = function() {
		if ( xmlRequest_1.readyState == 4 && xmlRequest_1.status == 200 ) {
			callback( xmlRequest_1.responseText, selectElement );
		} // if
	} // onreadystatechange()
	xmlRequest_1.open( "POST", "../functions/reading_list_request_1.1.1.php", true );
	xmlRequest_1.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlRequest_1.send( "type=" + this.type + "&date=" + this.date + "&number=" + this.number );
} // bookList.prototype.getListFromDB()

readingListChooser.prototype.setReadingListSessionVariables = function( inputElement ) {
	var xmlRequest_2 = new XMLHttpRequest();
	xmlRequest_2.onreadystatechange = function() {
		if ( xmlRequest_2.readyState == 4 && xmlRequest_2.status == 200 ) {
			//console.log( xmlRequest_2.responseText );
		} // if
	} // onreadystatechange()
	xmlRequest_2.open( "POST", "../functions/set_reading_list_session_variables_1.1.1.php", true );
	xmlRequest_2.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlRequest_2.send( "readingList=" + inputElement.value );
} // bookList.prototype.getListFromDB()

readingListChooser.prototype.displayList = function( response, selectElement ) {
	selectElement.innerHTML = response;
} // bookList.prototype.displayList()