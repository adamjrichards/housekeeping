class DOM_Listener_JSON_Reader {

	constructor( the_JSON_from_DOM_Listener ) { 
		let my_JSON = the_JSON_from_DOM_Listener;
		let my_key = Object.keys( my_JSON )[0];
		this.my_events = my_JSON[ my_key ];
		this.my_listener_string = "";
		this.my_listener_stack = {};
	}
	get_my_new_stack(){
		var the_events = this.my_events;
		function dismantle_the_JSON( the_events ) {
			for ( let	this_event in the_events ) {
				let the_stack = the_events[ this_event ];
				console.log( the_stack );
				for( let this_item in the_stack ) {
					console.log( this_item );
							/*else {
								for ( let this_property in the_properties ) {
									let the_params = this_property.toString().split( " " );
									console.log( this_action );
								}
								if ( the_params[2] === "once" ) {
									the_params[2] = "once: true";
								} else {
									the_params[2] = "once: false";
								}
								if ( the_params[3] === "capture" ) {
									the_params[3] = "use_capture: true";
								} else {
									the_params[3] = "use_capture: false";
								}
							}
						}
					}*/
				}
				drill_down( the_actions );
				//this.my_listener_string = `${the_params[0]}EventListener( "${the_params[1]}", me.my_${the_params[1]}, { ${the_params[2]}, ${the_params[3]} } );
`;		
				//Object.defineProperty( this.my_listener_stack, `my_${the_params[1]}`, { configurable: true, value: this.my_listener_string } );
			}
		}
		dismantle_the_JSON( the_events );
		return this.my_listener_stack;
	}
	
	make_a_new_stack() {
		
	}
}