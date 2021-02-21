/*
	Class DOM_Listener
	
	Listener_Group adds or removes the dynamic listeners from an object, such as a menu or a floating panel.
*/
var the_transfer_element; 
class DOM_Listener {
	
	constructor( me, the_JSON_source ) {
		me.removeAttribute( "onmouseenter" );
		this.me = me;
		this.my_tagName = me.tagName;
		this.my_id = me.id;
		this.my_className = me.className.substr( 0, me.className.lastIndexOf( " " ) ).replace( " ", "_" );
          
          this.my_JSON_source = the_JSON_source;
          
          this.my_script_tag = document.createElement( "script" );
		this.my_script_tag.id = `the_${this.my_className}_listeners`;
		this.my_script_tag.type = "text/javascript";
          this.me.appendChild( this.my_script_tag );
		
          this.my_reader;
		this.my_JSON;
          this.my_transfer_element;
		if ( document.getElementById( this.my_id + "_transfer_element" ) ) {
			this.my_transfer_element = document.getElementById( this.my_id + "_transfer_element" );
		} else {
			this.my_transfer_element = document.createElement( "pre" );
			this.my_transfer_element.id =  this.my_id + "_transfer_element";
			this.my_transfer_element.style = "display: none;";
			me.appendChild( this.my_transfer_element );
		}
		var the_callback = function( the_response ) {
			// add functionality to the xhr response
			//console.log( JSON.parse( the_response ) );
          }
          this.my_reader = new XHR_JSON_Reader( me, this.my_JSON_source, this.my_transfer_element, the_callback );
	}
	
	
	get_my_JSON() {
		//console.log( this.my_transfer_element.innerHTML );
		
	} 
     
	destroy_me( me = this.me ) {
		//console.log( me );
	}
	
}