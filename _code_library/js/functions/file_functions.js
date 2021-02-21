/* 	File function library */

function load_the_JS_file_called( the_filename ) {
	if ( typeof Data_Request !== "function" ) {
		enable_Data_Request();
	}
	var all_the_script_files = document.getElementsByTagName( "script" );
	for ( var this_particular_file in all_the_script_files ) {
		if ( this_particular_file.src === the_filename ) {
			var the_ID = `the_${ the_filename.replace( ".", "_" ) }_script`;
			document.getElementById( the_ID ).remove();
			var my_script = document.createElement( "script" );
			my_script.id = the_ID;
			my_script.type = "text/javascript";
			my_script.src = the_filename;	
			document.head.appendChild( my_script );
		}
	}
}