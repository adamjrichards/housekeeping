class There_Is_Only_Ever_One_ME {
	
	constructor( the_new_myself = "the_ME", the_this = self ) {
		this.my_this = the_this;  // the current scope, normally global
		this.my_daddy = document.body;
		this.my_attributes = {
				my_id : "", 
				my_className : "",
				my_name : ""
			}; // every DOM property 
		if ( document.querySelector( the_new_myself ) ) {
			this.myself = document.getElementById( the_new_myself );
		} else {
			this.myself = document.createElement( "div" );
			this.my_attributes.my_id = the_new_myself;
			this.myself.id = this.my_attributes.my_id;
			this.my_attributes.my_name = this.my_attributes.my_id.replace( "the", "my" );
		}
		this.myself.name = this.my_attributes.my_name;	
		this.counter = 0;
		this.return_me = false;
		this.my_cargo = [];
	}
	
	add_a_new_cargo_slot( with_this_status ) {
		let the_cargo_slot = new Cargo( with_this_status );
		this.my_cargo.push( the_cargo_slot );
		return the_cargo_slot;
	}
		
	search_my_properties( the_object, the_search_item ) {
		let the_properties = []
		if ( typeof the_object === "object" ) {
			try {
				the_properties = Object.getOwnPropertyNames( the_object );
			} catch( das_error ) {
				return;
			}
		}
		for ( let this_property of the_properties ) {
			if ( this_property == the_search_item ) {
				this.return_me = the_object[ this_property ];
			}
			if ( this_property.indexOf( "my_" ) === 0 ) {
				this.search_my_properties( the_object[ this_property ], the_search_item );
			}
		}
		//console.log( this.return_me );
		return this.return_me;
	}
	
	get_the_object_for_the_element( me ) {
		this.my_object_id = me.id.replace( "the", "my" );
		return this.search_my_properties( MY_CARGO, this.my_object_id );
	}
	
	my_name_is() {
		return this.myself.name;	
	}
	
	set_my_new_self( to_me, but_save_the_cargo = "save the cargo" ) {
		let the_cargo = {};
		if ( but_save_the_cargo === "save the cargo" ) {
			the_cargo = this.my_cargo;
		} else {
			the_cargo = {};
		}
		this.myself = to_me;
		this.my_attributes.my_className = to_me.className;
		this.my_attributes.my_id = to_me.id;
		this.my_attributes.my_name = this.my_attributes.my_id.replace( "the", "my" );
		this.myself.id = this.my_attributes.my_id;
		this.myself.name = this.my_attributes.my_name;
		this.my_cargo = the_cargo;
	}
	get_my_ME_object() {
		return this.my_attributes.my_name;
	}
	
	whos_my_daddy() {
		return this.my_daddy;
	}
	set_my_daddy( the_daddy ) {
		this.my_daddy = _elementize( the_daddy );
	}
	get_my_cargo() {
		return this.my_cargo;
	}
	archive_me() {
		THE_ME_STACK.push( this );
	}
	clear_me() {
		this.myself = null;
		this.my_this = globalThis;
		this.my_attributes = {
			my_className : "",
			my_id : ""
		}
		this.my_cargo = {};		
	}
	destroy_me() {
		Window.ME = null;
	}
}

class The_Past_MEs_Are_Stacked_Here {
	constructor() {
		this.the_MEs = [];
	}
	stack( me ) {
		this.the_MEs.push( me );
	}
}