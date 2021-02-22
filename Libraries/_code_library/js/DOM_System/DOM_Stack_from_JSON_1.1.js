class DOM_Stack {
	
	static the_stack_fetch( the_JSON_source, callback = null ) {
		const the_request = new Request( the_JSON_source );
		let the_fetch = fetch( the_request ).then(
			response => response.json()
		).then(
			data => {
				Object.defineProperty( ME.my_cargo, "my_reader", { writable: true, configurable: true, value:  new DOM_Listener_JSON_Reader( data ) } );
				Object.defineProperty( ME.my_cargo, "my_stack", { writable: true, configurable: true, value: ME.my_cargo.my_reader.get_my_new_stack() } );
				if ( callback ) { callback.call( ME.myself, ME.my_cargo.my_stack ) }
			}
		);
	}
	
}