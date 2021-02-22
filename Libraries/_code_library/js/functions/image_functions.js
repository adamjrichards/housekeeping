function get_the_images_dimensions( the_filename ) {
	cl(the_filename, "the filename");
	var the_regex_pattern = /x\d{1,5}y\d{1,5}/;
	if( the_regex_pattern.test( the_filename ) ) {
		var the_x_index = the_filename.lastIndexOf( "x" );
		var the_y_index = the_filename.lastIndexOf( "y" );
		var the_dot_index = the_filename.lastIndexOf( "." );
		var the_image_width = the_filename.slice( the_x_index + 1, the_y_index );
		var the_image_height = the_filename.slice( the_y_index + 1, the_dot_index );
	}
	return [ the_image_width, the_image_height ];
}

function get_the_images_width( the_filename ) {
	return get_the_images_dimensions( the_filename )[0];
}
function get_the_images_height( the_filename ) {
	return get_the_images_dimensions( the_filename )[1];
}