Object.am_i_a = function( type_of_thing ) {
	return this.is( type_of_thing );
}



 function get_me_a_random_int( min, max ){
	return min + Math.ceil( Math.random() * ( max - min ) );
}