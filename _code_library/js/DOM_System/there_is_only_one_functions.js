// Global variables

var this_is_the_draggable_element_now = "";
var this_is_the_draggable_widget_now = "";
var this_is_the_floating_element_now = "";
var this_is_the_floating_index_now = "";
var this_is_the_floating_post_now = "";
var the_highest_zIndex_so_far = 100;

function make_sure_all_the_others_are_dead(){	
	this_is_the_floating_element_now = "";
	this_is_the_draggable_element_now = "";
	this_is_the_draggable_widget_now = "";
	this_is_the_floating_index_now = "";
}

function there_is_only_one_draggable_element_at_a_time( me ) {
	make_sure_all_the_others_are_dead();
	this_is_the_draggable_element_now = new Draggable_Element( me );
	var the_draggee = this_is_the_draggable_element_now;
	if( typeof this_is_the_draggable_element_now === "object" ) {
		this_is_the_draggable_element_now.bring_me_to_the_front();
	}
}

function there_is_only_one_draggable_widget_at_a_time( me ) {
	make_sure_all_the_others_are_dead();
	this_is_the_draggable_widget_now = new Draggable_Element( me );
	if( typeof this_is_the_draggable_widget_now === "object" ) {
		this_is_the_draggable_widget_now.bring_me_to_the_front();
	}
}

function there_is_only_one_floating_element_at_a_time( me ) {
	make_sure_all_the_others_are_dead();
	this_is_the_floating_element_now = new Floating_Element( me );
	if( typeof this_is_the_floating_element_now === "object" ) {
		this_is_the_floating_element_now.move_me_to_the_root_zStack( me );
	}
}

function there_is_only_one_floating_post_at_a_time( me ) {
	make_sure_all_the_others_are_dead();
	this_is_the_floating_post_now = new Floating_Element( me );
	if( typeof this_is_the_floating_post_now === "object" ) {
		this_is_the_floating_post_now.move_me_to_the_root_zStack( me );
	}
}

function there_is_only_one_floating_index_at_a_time( me ) {
	make_sure_all_the_others_are_dead();
	this_is_the_floating_index_now = new Floating_Index( me );
	if( me.parentElement.tagName !== "BODY" ) {
		this_is_the_floating_index_now.move_me_to_the_root_zStack( me );
	}
}

