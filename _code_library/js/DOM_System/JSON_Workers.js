const my_source = "json/listeners/the_player_menu_listeners.json";
function the_fetch( callback = null ) {
	fetch( my_source ).then(
			response => toString( response.json() )
		).then(
			data => {
				if ( callback !== null ) {
					callback = callback.bind( ME );
					callback( data );
				}
				return data;
			}
		).then(
			data => { 
				ME.add_this_to_my_cargo( data );
				return ME.my_cargo;
			}
		);
	console.log( ME.get_my_cargo() );
}
function the_callback( the_data ) {
	console.log( this );
	this.myself.innerHTML = `#code class='hide_me'>${ toString( the_data )}#/code>`;
}