String.prototype.replaceAll = function( targetString, replacementString ) {
	var newString = new String( this );
	stripString();
	function stripString() {
		try {
			if ( newString.indexOf( targetString ) !=  -1 ) {				
				newString = newString.replace( targetString, replacementString );
				stripString();
			} else {
				return;
			} // if
		} catch ( conversionError ) {
			alert( error.msg );
		}// try catch
	} // stripString()
	return newString;
} // replaceAll

String.prototype.replaceAll_noRecursion = function( targetString, replacementString ) {
	var newString = new String( this );
	while( newString.indexOf( targetString ) !=  -1 ) {				
		newString = newString.replace( targetString, replacementString );
	} // while
	return newString;
} // replaceAll

String.prototype.trim = function() {
	var newString = this;
	function trimString( newString ) {
		if ( newString.indexOf( " " ) == 0 ) {
			newString = newString.slice( 1, newString.length );
		} // if	
		if ( newString.lastIndexOf( " " ) == newString.length ) {
			newString = newString.slice( 0, newString.length - 1 );
		} // if		
	} // trimString()
	if ( ( newString.indexOf( " " ) == 0 ) | ( newString.lastIndexOf( " " ) == newString.length ) ) {
		trimString( newString );
	} else {
		return newString;
	} // if else
} // String.prototype.trim();

String.prototype.parseForNumber = function() {
	var pattern = /\-?\d*\.?\d+/g;
	return ( parseFloat( this.match( pattern ) ) );
} // String.prototype.parseForNumber