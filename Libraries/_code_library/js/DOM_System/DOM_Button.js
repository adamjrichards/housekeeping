class Button {
	constructor( the_tagName, the_id, the_className, the_source, the_daddy ) {
		this.myself = _elementize( the_id, the_tagName );
		this.myself.className = the_className;
		this.myself.src = the_source;
		this.my_daddy = _elementize( the_daddy );
		this.my_daddy.appendChild( this.myself );
		this.myself.name = the_id.replace( "the", "my" );
	}
}

class DOM_Button extends Button { 
	
	constructor( the_tagName = "img", the_id_root, the_className = "dom_button", the_source = BUTTON_PLACEHOLDER_IMAGE, the_daddy = "body" ) {
		let the_id = `the_${the_id_root}_button`;
		super( the_tagName, the_id, the_className, the_source, the_daddy );
		this.my_listener_stack = [];
	}
	
	get_my_mouse_listener_stack() {
		return this.my_listener_stack;
	}
	update_my_listener_stack( the_listener_stack ) {
		this.my_listener_stack.push( the_listener_stack );
	}
	set_my_listener_stack( the_listener_stack ) {
		this.my_listener_stack = the_listener_stack;
	}
	
	set_my_button_id( the_id ) {
		this.my_id = the_id;
		this.myself.id = the_id;
	}
	set_my_button_className( the_className ) {
		this.my_className = the_className;
		this.myself.className = the_className;
	}
	get_my_button() {
		return this.myself;
	}
}