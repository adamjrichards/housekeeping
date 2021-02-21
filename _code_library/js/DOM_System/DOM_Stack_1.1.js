class DOM_Stack {
	
	constructor( me, the_JSON_source, callback = null ) {	
		this.my_request = new Request( the_JSON_source );
	}
	fetch_my_stack() {
		return fetch( this.my_request ).then(
			response => response.json()
		).then(
			data => {
				Object.defineProperty( ME.my_cargo, "my_reader", { writable: true, configurable: true, value:  new DOM_Listener_JSON_Reader( data ) } );
				Object.defineProperty( ME.my_cargo, "my_stack", { writable: true, configurable: true, value: ME.my_cargo.my_reader.get_my_new_stack() } );
			}
		);
	}
	fetch_my_stack_with_callback( the_this, callback ) {
		fetch( this.my_request ).then(
			response => response.json()
		).then(
			data => {
				let my_stack =  new DOM_Listener_JSON_Reader( data );
				callback.call( the_this, my_stack );
			}
		);
	}
	
}