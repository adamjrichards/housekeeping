
class Mouse_Listener_Stack extends DOM_Listener {
	
	constructor( me, the_JSON_source ) {
		super( me, the_JSON_source );
          
          this.my_mouseenter;
          this.my_mouseleave;
          this.my_mouseover;
          this.my_mouseout;
          
          this.my_mousedown;
          this.my_mousemove;
          this.my_click;
          this.my_doubleclick;
          
          this.my_listener_stack = [
               this.my_mouseenter,
               this.my_mouseleave,
               this.my_mouseover,
               this.my_mouseout,
               this.my_mousedown,
               this.my_mousemove,
               this.my_click,
               this.my_doubleclick
          ];
		this.my_JSON;
	}
	
	my_mouseenter() {}
	my_mouseleave() {}
	my_mouseover() {}
	my_mouseout() {}
	my_mousedown() {}
	my_mouseup() {}
	my_mousemove() {}
	my_click() {}
	my_doubleclick() {}
	
	decipher_the_JSON( the_JSON_from_DOM_Listener ) {
		var my_JSON = the_JSON_from_DOM_Listener;
		var my_JSON_array = Object.entries( my_JSON );
		var my_stack_type = Object.keys( my_JSON )[0];
		var my_stack_array = Object.values( my_JSON )[0];
		var my_stack = Object.entries( my_stack_array );
		var my_listener_string = "";
		var my_listener_stack = [];
		function stack_it( the_stackable ) {
			var the_params = the_stackable.toString().split( " " );
			console.log( my_stack_array );
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
			my_listener_string = `${the_params[0]}EventListener( "${the_params[1]}", ${the_stackable[0]}, { ${the_params[2]}, ${the_params[3]} } );`;
			//console.log( my_listener_string );
			return my_listener_string;
		}
		for (  
		my_listener_stack.push( stack_it( my_stack[0] ) );
		my_listener_stack.push( stack_it( my_stack[1] ) );
		my_listener_stack.push( stack_it( my_stack[2] ) );
		my_listener_stack.push( stack_it( my_stack[3] ) );
	}
}