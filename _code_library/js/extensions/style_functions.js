function reset_the_zIndexes( of_these_elements, i_was_the_last_item_arranged ) {
	var my_zIndex = i_was_the_last_item_arranged.style.zIndex;
	var the_whole_tag_collection = document.getElementsByClassName( of_these_elements );
	for ( var this_tag of the_whole_tag_collection ) {
		this_tag.style.zIndex = "all:revert;";
	}	
	i_was_the_last_item_arranged.style.zIndex = my_zIndex;
}

var reset_all_the_styles_to_defaults = function() {
	document.documentElement.style = "all:revert;";
}

function move_me_to_the_root_zStack( me ){
	var the_old_me = me;
	var the_new_me = the_old_me.cloneNode( true );
	document.body.appendChild( the_new_me );
	the_old_me.parentElement.removeChild( me );		
	the_new_me.style.zIndex = parseInt( the_new_me.parentElement.style.zIndex ) + 100;
	me = the_new_me;
}