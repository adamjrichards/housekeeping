function cl( stuff, label ){ if(label){console.log(label + ": " + stuff);}else{console.log(stuff)}}

function _get( this_in_particular ) {
	return document.getElementById( this_in_particular );
}

function _tags( the_grand_daddy_tag ) {
	//cl( the_grand_daddy_tag, "the_grand_daddy_tag" );
	var the_grand_daddy_element;
	if ( document.getElementsByTagName( the_grand_daddy_tag ).length !== 0 ) {
		the_grand_daddy_element = document.getElementsByTagName( the_grand_daddy_tag ).item(0);
	} else if ( typeof document.getElementById( the_grand_daddy_tag ) === "object" ) {
		the_grand_daddy_element = document.getElementById( the_grand_daddy_tag );
	} else {
		return false;
	}
	return the_grand_daddy_element.children;
}