class DOM_Menu {
	constructor( the_id, the_className, the_daddy ) {
	/*/ Makes a menu in the parent element with 'the_daddy',
	with the top element 'me', and appends 'the_className'. /*/
		/*/ this.me is the DOM menu /*/

		this.my_id = the_id;
		this.myself = _elementize( this.my_id );
		this.my_className = the_className;
		this.my_daddy = _elementize( the_daddy, "nav" );
		this.my_menu_items = {};
		
		
		if ( this.my_daddy ){
			this.my_daddy = document.getElementById( the_daddy );
		} else {
			this.my_daddy = document.body;	
		}
		
		if ( this.my_daddy != this.myself.parentElement ) {
			this.my_daddy.appendChild( this.myself );
		}
		if ( this.myself.id != this.my_id ) {
			this.myself.id = this.my_id;
		}
		
		if ( this.myself.firstElementChild !== null && this.myself.firstElementChild.tagName !== "ul" ) {
			this.myself.appendChild( document.createElement( "ul" ) ).className = this.my_className;			
		}
		this.myself.className = this.my_className;
		
	}
	get_my_menu_items() {
		return this.my_menu_items;	
	}
	set_my_id( the_id ) {
		this.myself.id = the_id;
	}
	set_my_className( the_className ) {
		this.myself.className = the_className;
	}
	get_my_me() {
		return this.me;
	}
}