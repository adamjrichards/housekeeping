class Mouse_Event extends DOM_Event {
	
	constructor( me, the_event = "click", the_event_action_params = "{ once: true, capture: true, passive: true }" ) {
		super( me, the_event, the_event_action_params  );
		this.me.my_event.my_action = null;			
		if ( the_event.indexOf( "mouse" ) > -1 || the_event.indexOf( "click" ) > -1 ) {
			this.me.my_event = the_event;
		}
	}
	get_my_mouse_event() {
		return this.me.my_event;
	}
	set_my_event_action( the_event_action ) {
		this.me.my_event.my_action= the_event_action;
	}
}