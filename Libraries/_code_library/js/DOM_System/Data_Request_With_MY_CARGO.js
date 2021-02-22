class Data_Request_With_MY_CARGO {
	constructor( the_codepage_we_want, the_new_cargos_label, where_to_put_it, callback ) {
		var request_this = new XMLHttpRequest();
		request_this.onreadystatechange = function() {
			if ( request_this.readyState === 4 && request_this.status === 200 ) {
				callback( request_this.responseText, the_new_cargos_label, where_to_put_it );
			} // if
		}; // onreadystatechange()
		request_this.open( "POST", the_codepage_we_want, true );
		request_this.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		request_this.send( the_new_cargos_label );	
	}
}