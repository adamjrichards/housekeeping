class DOM_Listener_Stack_from_JSON {
	
	constructor( me, the_JSON_source, callback = null ) {
		if ( callback === null ) {
			callback = function( the_data ) {
				me.my_listener_stack = new DOM_Listener_JSON_Reader( me, the_data ).get_my_stack();
			}
		}
		fetch( the_JSON_source ).then(
			function( response ) {
				return response.json();
			} ).then(
			function( the_data ) {
				me.my_listener_stack = new DOM_Listener_JSON_Reader( me, the_data ).get_my_stack();
			} );
		this.me = me;
		this.me.my_listener_stack = me.my_listener_stack;
		console.log( me.my_listener_stack );
	}
}