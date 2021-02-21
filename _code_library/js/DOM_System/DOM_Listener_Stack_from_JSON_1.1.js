class DOM_Listener_Stack_from_JSON {
	
	constructor( me, the_JSON_source, callback = null ) {
		let get_the_stack = function( callback = null ) {
			
			if ( callback === null ) {
				callback = function( the_stack ) {
					return the_stack;
				}
			}

			fetch( the_JSON_source ).then(
				function( the_response ) {
					return the_response.json();
				} ).then(
				function( the_data ) {
					let my_stack = new DOM_Listener_JSON_Reader( the_data );
				} );
		}
		this.get_the_stack.call( me );
	}
	get_my_stack() {
		return this.my_stack;	
	}
} 