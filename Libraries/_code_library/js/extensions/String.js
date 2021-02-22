function this_is_a_string( the_item_in_question ) {
	if ( typeof the_item_in_question === "string" ) {
		return true;
	}
	return false;
}

Element.prototype.has_a_class_called = function( this_particular_name ){
	"use strict";
	return this.contains( this_particular_name );
};



 function get_me_a_random_int( min, max ){
	return min + Math.ceil( Math.random() * ( max - min ) );
}