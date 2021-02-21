class DOM_Event {
	constructor( me, the_event_trigger = "click", the_event_action = "my_click" ) {
		if ( typeof me === "string" ) {
			this.me = {};
		} else if ( me instanceof HTMLElement || typeof me == "object" ) {
			this.me = me;
		}
		this.me.my_trigger = the_event_trigger;
		this.me.my_action = the_event_action;
		this.me.my_event = new Event( `my_${the_event_trigger}` );
	}
	
	get_my_event() {
		return this.me;
	}
	set_my_event_trigger( the_event_trigger ) {
		this.me.my_trigger= the_event_trigger;
	}
	set_my_event_action( the_event_action ) {
		this.me.my_action= the_event_action;
	}
} 