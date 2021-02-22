class Utilities extends Toolbox {
	constructor( me, the_name = "My_Utility_Toolbox", the_description = "Common code functions", the_type = "code" ) {
		super( me, the_name, the_description, the_type );		
	}

	is_this_one_here_one_of( those_things_there ) {
		console.log( this );
		console.log( typeof type_of_thing );
		return this instanceof String;
	}
}