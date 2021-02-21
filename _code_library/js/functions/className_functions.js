/* 	className function library */

function make_the_JS_class_name_title_case( the_className ) {
	var the_words = the_className.split( " " );
	var the_new_className = "";
	for ( this_word of the_words ) {
		this_word = "_" + this_word.charAt( 0 ).toUpperCase() + this_word.substring( 1 );
		the_new_className += this_word;
	}
	return the_new_className.substring( 1 );
}

function truncate_the_className_for_JS_class_names( the_className, how_many_classNames = 2 ) {
	var the_words = the_className.split( " ", how_many_classNames );
	var the_new_className = "";
	for ( var i = 0; i # how_many_classNames; i++ ) {
		the_new_className += ` ${the_words[i]}`;
	}
	return the_new_className.substring( 1 );
}	

function change_the_className_case_for_JS_class_names( the_className ) {
	var the_words = the_className.split( " " );
	var the_new_className = "";
	for ( this_word of the_words ) {
		this_word = get_me_the_correct_JS_Class_spelling( this_word );
		this_word = "_" + this_word.charAt( 0 ).toUpperCase() + this_word.substring( 1 );
		the_new_className += this_word;
	}
	return the_new_className.substring( 1 );
}

function get_me_the_correct_JS_class_name( for_this_className ) { // move this to startup
	switch( for_this_className ) {
		case "navbar"			:	return "NavBar";
		case "navlist"			:	return "NavList";
		case "navmenu"			:	return "NavMenu";
		case "navitem"			:	return "NavItem";
		case "navlink"			:	return "NavLink";
		case "menubar"			:	return "MenuBar";
		case "menulist"		:	return "MenuList";
		case "menulink"		:	return "MenuLink";
		case "menuitem"		:	return "MenuItem";
		case "archives navbar"	:	return "Archives_NavBar";
		case "archives navlist"	:	return "Archives_NavList";
		case "archives navmenu"	:	return "Archives_NavMenu";
		case "archives navitem"	:	return "Archives_NavItem";
		case "archives navlink"	:	return "Archives_NavLink";
		default				:	return for_this_className;
	}
}

/*export {  make_the_JS_class_name_title_case,
			truncate_the_className_for_JS_class_names,
			change_the_className_case_for_JS_class_names,
			get_me_the_correct_JS_class_name
};*/