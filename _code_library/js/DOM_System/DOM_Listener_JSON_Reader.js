class DOM_Listener_JSON_Reader {

	constructor( the_JSON_from_DOM_Listener ) { 
		let my_JSON = the_JSON_from_DOM_Listener;
		this.my_root = Object.keys( my_JSON )[0];
		this.my_events = my_JSON[ this.my_root ];
		this.my_element = {};
		this.my_listener_map = new Map();
		this.my_listener_map.set( "listener_map", this.my_root );
		this.my_listener_string = "";
		this.my_listener_stack = [];
	}
	
	_is_a_string( the_object ) {
		if ( typeof the_object === "string" ) {
			//console.log( "The object is a String" );
			return true;
		} else {
			return false;
		}
	}
	_is_an_object( the_object ) {
		if ( typeof the_object === "object" ) {
			//console.log( "The object is an Object" );
			return true;
		} else {
			return false;
		}
	}
	_is_an_array( the_object ) {
		if ( Array.isArray( the_object ) ) {
			//console.log( "The object is an Array" );
			return true;
		} else {
			return false;
		}
	}
	_is_a_what( the_object ) {
		if ( this._is_a_string( the_object ) ) {
			return "string";
		} else if ( this._is_an_array( the_object ) ) {			
			if ( this._is_an_array ) {
				return "array";
			} else {
				return "object";
			}
		}
	}
	dismantle_the_JSON( the_object ) {		
		for ( let this_property in the_object ) {
			if ( ! isNaN( this_property ) ) {
				continue;
			}
			this.my_listener_map.set( this_property, the_object[ this_property ] );
			
			if ( this._is_an_object( the_object[ this_property ] ) ) {
				this.dismantle_the_JSON( the_object[ this_property ], this_property );
			}
		}
	}
	recurse( the_element, the_entries, the_handler = null ) {
		//console.log( the_element );
		if ( ! the_handler ) {
			the_handler = Object.keys( the_entries )[0];
		}
		if ( this._is_an_array( the_entries ) ) {
			for ( let this_entry of the_entries ) {
				this.recurse( the_element, this_entry, the_handler );
			}
		} else if ( this._is_an_object( the_entries ) ) {			
			for ( let this_entry in the_entries ) {
				if( isNaN( this_entry ) ) {
					the_handler = this_entry;
				}
				if ( this_entry.indexOf( "my_" ) === 0 ) {
					this.recurse( the_element, the_entries[ this_entry ], the_handler );
				}
			}
		} else if ( this._is_a_string( the_entries ) ) {
			this.my_listener_string += this.make_a_new_listener_string( the_element, the_entries, the_handler ) + "\;
";
			this.my_listener_stack.push( this.make_a_new_listener_string( the_element, the_entries, the_handler ) + "\;" );
		}
	}
	
	make_a_new_listener_string( the_element, the_params, the_handler ) {
		the_params = the_params.split( " " );
		let the_new_string = "";
		let the_trigger = the_handler.substring( 3, the_handler.indexOf( "_action" ) );
		let once;
		let capture;
		if ( the_params[2] === "once" ) {
			once = true;
		} else {
			once = false;
		}
		if ( the_params[3] === "capture" ) {
			capture = true;
		} else {
			capture = false;
		}
		//console.log( ME );
		the_new_string = `${the_element.id}.${the_params[0]}EventListener( "${the_trigger}", this.${the_handler}, { once: ${once}, capture: ${capture}, passive: true } )`;
		return the_new_string;		
	}
	
	build_the_new_listeners() {
		for( let this_listener of this.my_listener_map ) {
			let the_element_name = `${this_listener[0].replace("my", "the")}_button`;
			this.my_element = document.getElementById( the_element_name );
			if ( this.my_element instanceof HTMLElement ) {
				this.recurse( this.my_element, this_listener[1] );
			}
		}
	}
	
	get_my_new_stack(){
		this.dismantle_the_JSON( this.my_events );
		this.build_the_new_listeners();
		//console.log( this.my_listener_stack );
		return this.my_listener_stack;
	}
} 