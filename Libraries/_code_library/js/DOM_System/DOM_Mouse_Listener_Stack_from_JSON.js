class DOM_Mouse_Listener_Stack_from_JSON extends DOM_Listener_Stack_from_JSON {
	
	constructor( the_JSON_source ) {
		super( the_JSON_source );
		/*this.my_mouse_listener_stack = {
			my_mouseenter_listener: null,
			my_mouseleave_listener: null,
			my_mouseover_listener: null,
			my_mouseout_listener: null,
			my_mousedown_listener: null,
			my_mouseup_listener: null,
			my_mousemove_listener: null,
			my_click_listener: null,
			my_doubleclick_listener: null
		}
		//ME.myself.my_mouse_listener_stack = this.my_mouse_listener_stack;*/
	}
	get_my_mouse_listener_stack() {
		return this.my_mouse_listener_stack;
	}
		
}