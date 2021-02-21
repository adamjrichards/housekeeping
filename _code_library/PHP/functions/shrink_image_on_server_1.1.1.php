<?php
	function shrink_image_on_server( $original_file, $new_file, $aspect_priority, $new_width, $new_height ) {
		list( $original_width, $original_height, $original_imagetype ) = getimagesize( $original_file );
		$mime_type = image_type_to_mime_type( $original_imagetype );
		$shrink_factor_x = $new_width / $original_width;
		$shrink_factor_y = $new_height / $original_height;
		if ( $aspect_priority == "width" ) {
			$new_height = round( $original_height * $shrink_factor_x );
		} else if ( $aspect_priority == "height" ) {
			$new_width = round( $original_width * $shrink_factor_y );
		} // if else if
		$image_box = imagecreatetruecolor( $new_width, $new_height );
		if ( $mime_type == "image/jpeg" ) {
			$new_image = imagecreatefromjpeg( $original_file );
		} else if ( $mime_type == "image/png" ) {
			$new_image = imagecreatefrompng( $original_file );
		} else if ( $mime_type == "image/bmp" ) {
			$new_image = imagecreatefromwbmp( $original_file );
		} else if ( $mime_type == "image/gif" ) {
			$new_image = imagecreatefromgif( $original_file );
		} // if else if
		imagecopyresampled( $image_box, $new_image, 0, 0, 0, 0, $new_width, $new_height, $original_width, $original_height );
		if ( $mime_type == "image/jpeg" ) {
			imagejpeg( $image_box, $new_file . "jpg", 100 );
			return $new_file . "jpg";
		} else if ( $mime_type == "image/png" ) {
			imagepng( $image_box, $new_file . "png", 0 );
			return $new_file . "png";
		} else if ( $mime_type == "image/bmp" ) {
			imagewbmp( $image_box, $new_file . "bmp" );
			return $new_file . "bmp";
		} else if ( $mime_type == "image/gif" ) {
			imagegif( $image_box, $new_file . "gif" );
			return $new_file . "gif";
		} // if else if
	} // shrink_image_on_server()