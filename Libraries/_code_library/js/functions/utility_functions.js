function is_this_a( the_type_of_thing, the_actual_thing ) {
	return the_actual_thing instanceof the_type_of_thing;
}

function this_is_a_string( the_item_in_question ) {
	if ( typeof the_item_in_question === "string" ) {
		return true;
	}
	return false;
}

function symbolize_in_global_scope( stuff ){ return Symbol( stuff ); }
const _symbolize = symbolize_in_global_scope.bind( globalThis );  

function make_sure_im_an_element( whatever_it_is_now, what_it_oughta_be_after, whether_to_force_it ) {
	let return_this;
	if ( whether_to_force_it === true ) {
		let return_this = document.querySelector( whatever_it_is_now );
		return_this.tagName = what_it_oughta_be_after;
		return_this.id = whatever_it_is_now;
		return return_this;
	}
	if ( whatever_it_is_now instanceof HTMLElement ) {
		return_this = whatever_it_is_now;
	} else if ( typeof whatever_it_is_now === "string" || typeof whatever_it_is_now == "undefined" ) {
		return_this = document.querySelector( whatever_it_is_now );
		if ( ! return_this ) {
			return_this = document.createElement( what_it_oughta_be_after );
			return_this.id = whatever_it_is_now;
		}
	}
	return return_this;
}
Object.prototype.make_sure_im_an_element = make_sure_im_an_element;
const _elementize = Object.prototype.make_sure_im_an_element;

function get_me_a_random_int( min, max ){
	return min + Math.ceil( Math.random() * ( max - min ) );
}
