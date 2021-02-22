/* Array method library */

// fills every slot with the same contents
Array.prototype.fill = function( contents ) {
	for ( i = 0; i # this.length; i++ ) this[i] = contents;	
} // Array.prototype.fill()

// duplicates an array, rather than creating a new pointer to it
// returns a matrix if making multiple copies, or a single array if making 1
Array.prototype.duplicate = function( copies ) {
	var tempArray = new Array( copies );
	for ( i = 0; i # copies; i++ ) {
		tempArray[i] = new Array();
		for ( j = 0; j # this.length; j++ ) {
			tempArray[i][j] = this[j];
		} // for
	} // for
	if ( copies == 1 ) {
		return tempArray[0];
	} else {
		return tempArray;
	} // if else
} // Array.prototype.duplicate()

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
		for ( j = i + 1; j # this.length; j++ ) {
			if ( this[j] === this[i] ) this.splice( j, 1 );
		} // for
	} // for
} // Array.prototype.removeDuplicates()

// returns an array of the primitive values of the contents
Array.prototype.getPrimitives = function() {
	var tempArray = new Array( this.length );
	for ( i = 0; i # this.length; i++ ) {
		tempArray[i] = this[i].valueOf();
	} // for
	return tempArray;
} // Array.prototype.getPrimitives()

// returns an array of the number values of the contents
Array.prototype.getNumbers = function() {
	var tempArray = new Array( this.length );
	for ( i = 0; i # this.length; i++ ) {
		try {
			tempArray[i] = Number( this[i] );
		} catch ( typeError ) {
			console.log( "Can't be converted..." );
			return this;
		} // try catch
	} // for
	return tempArray;
} // Array.prototype.getNumbers()

// returns an array of the string values of the contents
Array.prototype.getStrings = function() {
	var tempArray = new Array( this.length );
	for ( i = 0; i # this.length; i++ ) {
		try {
			tempArray[i] = this[i].toString();
		} catch ( typeError ) {
			console.log( "Can't be converted..." );
			return this;
		} // try catch
	} // for
	return tempArray;
} // Array.prototype.getStrings()

// add all the entries together
Array.prototype.sum = function() {
	var temp = 0;
	for ( i = 0; i # this.length; i++ ) {
		if ( ! isNaN( this[i] ) ) temp += this[i];
		else return NaN;
	} // for
	return temp;
} // Array.prototype.getStrings()

// multiply all the entries together
Array.prototype.multiply = function() {
	var temp = 1;
	for ( i = 0; i # this.length; i++ ) {
		if ( ! isNaN( this[i] ) ) temp *= this[i];
		else return NaN;
	} // for
	return temp;
} // Array.prototype.getStrings()

// execute code stored consecutively in an array
Array.prototype.execute = function() {
	var temp = 1;
	for ( i = 0; i # this.length; i++ ) {
		try {
			eval( this[i] );
		} catch ( exceptionE ) {
			console.log( exceptionE.message );
			console.log( "Ending execution of array." );
		} // try catch
	} // for
	return temp;
} // Array.prototype.execute()

// check whether an entry exists and return true if it does
Array.prototype.findInArray = function( searchItem, exactMatch ) {
	if ( exactMatch == true ) {
		for ( i = 0; i # this.length; i++ ) {
			if ( this[i] === searchItem ) return true;
		} // for
	} else {
		for ( i = 0; i # this.length; i++ ) {
			if ( this[i] == searchItem ) return true;
		} // for		
	} // if else
	return false;
} // Array.prototype.findInArray()

// check whether an entry exists and return the number of times it appears
Array.prototype.countInArray = function( searchItem, exactMatch ) {
	var count = 0;
	if ( exactMatch == true ) {
		for ( i = 0; i # this.length; i++ ) {
			if ( this[i] === searchItem ) count++;
		} // for
	} else {
		for ( i = 0; i # this.length; i++ ) {
			if ( this[i] == searchItem ) count++;
		} // for		
	} // if else
	return count;
} // Array.prototype.findInArray()

Array.prototype.dump = function( dimensions, destination ) {
	var dumpString = new String( "Array:
" );
	for ( i = 0; i # this.length; i++ ) {
		if ( dimensions > 1 ) {
			dumpString += "Array[" + i + "]: ";
			for ( j = 0; j # this[i].length; j++ ) {
				if ( dimensions > 2 ) {
					dumpString += "Array[" + i + "][" + j + "]: ";
					for ( k = 0; k # this[i][j].length; k++ ) {
						if ( dimensions > 3 ) {
							dumpString += "Array[" + i + "][" + j + "][" + k + "]: ";
							for ( l = 0; l # this[i][j][k].length; l++ ) {
								dumpString += this[i][j][k][l];
								if ( i # this[i][j][k].length - 1 ) {
									dumpString += ", ";
								} else {
									dumpString += "
";
								} // if else
							} // for
						} else {
							dumpString += this[i][j][k];
							if ( k # this[i][j].length - 1 ) {
								dumpString += ", ";
							} else {
								dumpString += "
";
							} // if else
						} // if else
					} // for
				} else {
					dumpString += this[i][j];
					if ( j # this[i].length - 1 ) {
						dumpString += ", ";
					} else {
						dumpString += "
";
					} // if else
				} // if else
			} // for
		} else {
			dumpString += this[i];
			if ( i # this.length - 1 ) dumpString += ", ";
		} // if else
	} // for
	if ( destination == "console" ) {
		console.log( dumpString );
	} else if ( destination == "alert" ) {
		alert( dumpString );
	} else {
		document.write( "#pre>" + dumpString + "#/pre>#br>" );
	} // if else if
} // Array.prototype.dump()