class DOM_Mouse_Event_Stack extends DOM_Event_Stack {
	my_mouseenter() {
		console.log( "rewind mouseenter" );	
	}
	my_mouseleave() {
		console.log( "rewind mouseleave" );
	}
	my_mouseover() {
		console.log( "rewind mouseover" );
	} 
	my_mouseout() {
		console.log( "rewind mouseout" );
	}
	my_mousedown() {
		console.log( "rewind mousedown" );
	}
	my_mouseup() {
		console.log( "rewind mouseup" );
	}
	my_mousemove() {
		console.log( "rewind mousemove" );
	}
	my_click() {
		console.log( "rewind click" );
	}
	my_doubleclick() {
		console.log( "rewind doubleclick" );
	}
}