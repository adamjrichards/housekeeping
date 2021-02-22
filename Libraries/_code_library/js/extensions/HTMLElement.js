// HTMLElement prototype extensions

HTMLElement.prototype.change_my_className = function( from_this, into_that ){
	if ( this.className.includes( from_this ) ) {
		this.className = this.className.replace( from_this, into_that );
	}
}

HTMLElement.prototype.has_a_class_called = function( this_particular_name ){
	"use strict";
	return this.classList.contains( this_particular_name );
};

HTMLElement.prototype.move_me_to_the_root_zStack = function( the_new_zIndex = 0 ){
	var the_new_me = this.cloneNode( true );
	document.body.appendChild( the_new_me );
	this.parentElement.removeChild( this );		
	the_new_me.style.zIndex = the_new_zIndex;
}
