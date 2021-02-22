/*
	Class DOM_Listener_JSON_Reader
	Listener_Group adds or removes the dynamic listeners from an object, such as a menu or a floating panel.
*/

class XHR_JSON_Reader {

	constructor( the_JSON_source = "", callback ) {
         
		this.me = me;
		this.my_tagName = me.tagName;
		this.my_id = me.id;
		this.my_className = me.className.substr( 0, me.className.lastIndexOf( " " ) ).replace( " ", "_" );
          this.my_JSON_request = new XMLHttpRequest();
          this.my_JSON_request.overrideMimeType("application/json");
          this.my_JSON_request.open("GET", file, true);
          this.my_JSON_request.onreadystatechange = function() {
               console.log( this.my_JSON_request );
             if ( this.my_JSON_request.readyState === 4 && this.my_JSON_request.status == "200" ) {
                 console.log( this.my_JSON_request.responseText );
                  callback( this.my_JSON_request.responseText );
             }
         }
     }
}