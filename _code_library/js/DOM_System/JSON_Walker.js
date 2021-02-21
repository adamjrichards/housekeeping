class JSON_Workers {
	
	class JSON_Fetch( the_JSON_source ) {
		
	}
	static JSON_Walk( the_JSON ) {
		var my_walker = { the_thing: "glop" };
		var my_fetch = JSON_Utilities.JSON_Fetch.call( my_walker, the_JSON );
	}
	
}