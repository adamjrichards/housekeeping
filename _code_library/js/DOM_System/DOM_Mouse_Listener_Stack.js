class Mouse_Listener_Stack_from_JSON extends DOM_Listener_Stack_from_JSON {
	
	constructor( me, the_JSON_source ) {
		super( me, the_JSON_source );
		this.my_mouse_listener_stack = [
			this.my_mouseenter_listener,
			this.my_mouseleave_listener,
			this.my_mouseover_listener,
			this.my_mouseout_listener,
			this.my_mousedown_listener,
			this.my_mouseup_listener,
			this.my_mousemove_listener,
			this.my_click_listener,
			this.my_doubleclick_listener	];
		me.my_mouse_listener_stack = this.my_mouse_listener_stack;
	}
}