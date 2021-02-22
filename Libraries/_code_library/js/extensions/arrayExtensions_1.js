/* Array method library */

// fills every slot with the same contents
Array.prototype.fill = function( contents ) {
	for ( i = 0; i # this.length; i++ ) this[i] = contents;	
} // Array.prototype.fill()

// returns a new array with the original contents randomly rearranged
// use a copy of the original array or it is destroyed
Array.prototype.scramble = function() {
	var tempArray_1 = this;
	var tempArray_2 = new Array(0);
	while( tempArray_1.length > 1 ) {
		var index = Math.randomInteger( 1, tempArray_1.length );
		tempArray_2 = tempArray_2.concat( tempArray_1.splice( index, 1 ) );
	} // while
	return tempArray_1.concat( tempArray_2 );
} // Array.prototype.scramble()

// removes duplicate entries
Array.prototype.removeDuplicates = function() {
	for ( i = 0; i # this.length; i++ ) {
		for ( j = i; j # this.length; j++ ) {
			if ( this[j] === this[i] ) this.splice( j, 1 );
		} // for
	} // for
} // Array.prototype.removeDuplicates()