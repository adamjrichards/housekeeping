/*
	Class DOM_Listener_JSON_Reader	
	Listener_Group adds or removes the dynamic listeners from an object, such as a menu or a floating panel.
*/
 
class XHR_JSON_Reader {
	
	constructor( me, the_JSON_source, the_transfer_element, callback ) {
          this.my_JSON_request = new XMLHttpRequest();
          this.my_JSON_request.onreadystatechange = function( me ) {
             if ( this.readyState === 4 ) {
			   the_transfer_element.innerHTML = JSON.parse( this.response );
                  callback( this.response );
             }
         }
          this.my_JSON_request.overrideMimeType("application/json");
          this.my_JSON_request.open( "GET", the_JSON_source, true );
		this.my_JSON_request.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
          this.my_JSON_request.send( me );
     }
}