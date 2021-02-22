class Cargo {
	constructor( the_status = "empty" ) {
		this.my_status = the_status;
		this.my_slots = new Map();
	}
	add_this_to_my_cargo( the_new_cargo, under_this_label ) {
		this.my_slots.set( under_this_label, the_new_cargo );
	}
}