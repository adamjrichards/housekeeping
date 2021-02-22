class Data_Request_With_Callback {
	constructor( the_codepage_we_want, params, callback ) {
		var request_this = new XMLHttpRequest();
		request_this.onreadystatechange = function() {
			if ( request_this.readyState === 4 && request_this.status === 200 ) {
				console.log( request_this.response );
				callback( request_this.response, params[1] );
			} // if
		} // onreadystatechange()
		request_this.open( "POST", the_codepage_we_want, true );
		request_this.overrideMimeType( "text/html" );
		request_this.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		request_this.send( params );	
	}
}
//console.log( "Data_Request_With_Callback class loaded" );