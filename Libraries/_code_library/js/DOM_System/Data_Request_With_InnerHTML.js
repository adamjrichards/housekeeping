class Data_Request_With_InnerHTML {
	constructor( the_codepage_we_want, the_place_we_want_it, params ) {
		var request_this = new XMLHttpRequest();
		if ( the_place_we_want_it instanceof HTMLElement === false ) {
			the_place_we_want_it = document.getElementById( the_place_we_want_it );
		}
		request_this.onreadystatechange = function() {
			if ( request_this.readyState === 4 && request_this.status === 200 ) {
				var return_this = request_this.responseText + "
";
				the_place_we_want_it.innerHTML = the_place_we_want_it.innerHTML  + return_this;
			} // if
		}; // onreadystatechange()
		request_this.open( "POST", the_codepage_we_want, true );
		request_this.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		request_this.send( params );	
	}
}