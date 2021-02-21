class Definable_Term {
	
	constructor( me ) {
		//cl("constructor");
		this.the_term;
		this.pinned_or_closed;
		this.the_mouseenter = false;
		this.the_mouseleave = false;
		this.the_mousedown = false;
		this.the_mouseup = false;
		this.the_click = false;
		// class vars
		this.the_trigger = me;
		this.the_trigger_id = this.the_trigger.id;
		this.the_element_id = this.the_trigger_id.substring( 0, this.the_trigger_id.indexOf( "_trigger" ) );
		this.the_element = document.getElementById( this.the_element_id );
		this.the_closer_id = this.the_element_id + "_closer";
		this.the_closer = document.getElementById( this.the_closer_id );

		// setup
		this.the_trigger.removeAttribute( 'onmouseenter' );
		this.pinned = "";

		// display the initial styles
		this.show_my_details( this.the_trigger, this.the_element  );

	
	}

	set_the_mousedown() {
		//cl("down");
		try {
			this.the_trigger.removeEventListener( "mousedown", () => { this.pinned = this.the_trigger; }, { once: true }, "false" );
			this.the_trigger.addEventListener( "mousedown", () => { this.pinned = this.the_trigger; }, { once: true }, "false" );
			this.the_mousedown = "true";		
		} catch ( e ) {
			this.the_mousedown = "false";
		}
	}
	set_the_mouseup() {
		//cl("up");
		try {
			this.the_trigger.removeEventListener( "mouseup", () => { this.pin_my_details( this.the_trigger, this.the_element ) }, { once: true }, "true" );
			this.the_trigger.addEventListener( "mouseup", () => { this.pin_my_details( this.the_trigger, this.the_element ) }, { once: true }, "true" );
			this.the_mouseup = "true";
		} catch ( e ) {
			this.the_mouseup = "false";
		}
		
	}
	set_the_mouseenter() {
		//cl("enter");
		try {
			this.the_trigger.removeEventListener( "mouseenter", () => { this.show_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
			this.the_trigger.addEventListener( "mouseenter", () => { this.show_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
			this.the_mouseenter = "true";		
		} catch ( e ) {
			this.the_mouseenter = "false";
		}
	}
	set_the_mouseleave() {
		//cl("leave");
		try {
			this.the_trigger.removeEventListener( "mouseleave", () => { this.hide_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
			this.the_trigger.addEventListener( "mouseleave", () => { this.hide_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
			this.the_mouseleave = "true";		
		} catch ( e ) {
			this.the_mouseleave = "false";
		}
	}
	set_the_click( pinned_or_closed ) {
		//cl("click");
		if ( pinned_or_closed === "closed" ) {
			try {
				this.the_trigger.removeEventListener( "click", () => { this.close_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
				this.the_trigger.removeEventListener( "click", () => { this.pin_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
				this.the_trigger.addEventListener( "click", () => { this.close_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
				this.the_click = "true";		
			} catch ( e ) {
				this.the_click = "false";
			}
		} else if ( pinned_or_closed === "pinned" ) {
			try {
				this.the_trigger.removeEventListener( "click", () => { this.close_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
				this.the_trigger.removeEventListener( "click", () => { this.pin_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
				this.the_trigger.addEventListener( "click", () => { this.pin_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
				this.the_click = "true";		
			} catch ( e ) {
				this.the_click = "false";
			}
		}		
	}

	remove_the_mousedown(){
		this.the_trigger.removeEventListener( "mousedown", () => { this.pinned = this.the_trigger; }, { once: true }, "false" );
	}
	remove_the_mouseup() {
		this.the_trigger.removeEventListener( "mouseup", () => { this.pin_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
	}
	remove_the_mouseenter() {
		this.the_trigger.removeEventListener( "mouseenter", () => { this.show_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
	}
	remove_the_mouseleave() {
		this.the_trigger.removeEventListener( "mouseleave", () => { this.hide_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
	}
	remove_the_click() {
		this.the_trigger.removeEventListener( "click", () => { this.close_my_details( this.the_trigger, this.the_element ) }, { once: true }, "false" );
	}

	hide_my_details() {
		if ( this.pinned === this.the_element ) { return; }
		this.the_element.style.visibility = "hidden";
		this.the_element.style.opacity = 0;

		this.the_mouseenter = this.set_the_mouseenter();
		//cl( "hide_my_details");
	}

	show_my_details() {

		if ( this.pinned === this.the_element ) { return; }

		this.the_element.style.visibility = "visible";
		this.the_element.style.opacity = 1;
		
		this.set_the_mouseleave();
		this.set_the_click( "pinned" );
		//cl( "show_my_details");
	}

	pin_my_details() {
		this.pinned = this.the_element;
		this.the_element.style.visibility =  "visible";
		this.the_element.style.opacity = 1;
		this.set_the_click( "closed" );

		this.the_closer.removeEventListener( "mouseup", () => { this.close_me( this.the_element ) }, { once: true }, "false" );
		this.the_closer.addEventListener( "mouseup", () => { this.close_me( this.the_element ) }, { once: true }, "false" );
	}

	close_my_details() {
		if ( ! this.pinned === this.the_element ) { return; }
		//cl( "close_my_details");
		this.pinned = "";
		this.the_element.style.visibility =  "hidden";
		this.the_element.style.opacity = 0;
		this.set_the_mouseenter();
	}

	close_me() {
		//cl( "close_me");
		this.pinned = "";
		this.the_element.style.opacity = "0";
		this.the_element.style.visibility =  "hidden";
		this.set_the_mouseenter();
	}

	show_my_group( them ) {
		var the_group = them.id;
		document.getElementById( "benefactive_purposive" ).style.opacity =  0;
		document.getElementById( "distributive_benefactive" ).style.opacity =  0;
		document.getElementById( "distributive_benefactive_purposive" ).style.opacity =  0;
		document.getElementById( "benefactive_purposive" ).style.opacity =  0;
		document.getElementById( "distributive_benefactive" ).style.visibility = "collapse";
		document.getElementById( "distributive_benefactive_purposive" ).style.visibility = "collapse";
		document.getElementById( "distributive_purposive" ).style.visibility = "collapse";
		document.getElementById( "distributive_purposive" ).style.visibility = "collapse";
		if ( the_group === "benefactive" ) {
			document.getElementById( "benefactive_purposive" ).style.opacity =  1;
			document.getElementById( "distributive_benefactive" ).style.opacity =  1;
			document.getElementById( "distributive_benefactive_purposive" ).style.opacity =  1;
			document.getElementById( "benefactive_purposive" ).style.visibility = "visible";
			document.getElementById( "distributive_benefactive" ).style.visibility = "visible";
			document.getElementById( "distributive_benefactive_purposive" ).style.visibility = "visible";
			return;
		}
		if ( the_group === "purposive" ) {
			document.getElementById( "benefactive_purposive" ).style.opacity =  1;
			document.getElementById( "distributive_benefactive_purposive" ).style.opacity =  1;
			document.getElementById( "benefactive_purposive" ).style.visibility = "visible";
			document.getElementById( "distributive_benefactive_purposive" ).style.visibility = "visible";
			return;
		}
		if ( the_group === "progressive" ) { return; }
		if ( the_group === "distributive" ) {
			document.getElementById( "distributive_purposive" ).style.opacity =  1;
			document.getElementById( "distributive_benefactive" ).style.opacity =  1;
			document.getElementById( "distributive_benefactive_purposive" ).style.opacity =  1;
			document.getElementById( "distributive_purposive" ).style.visibility = "visible";
			document.getElementById( "distributive_benefactive" ).style.visibility = "visible";
			document.getElementById( "distributive_benefactive_purposive" ).style.visibility = "visible";
			return;
		}
	}

}