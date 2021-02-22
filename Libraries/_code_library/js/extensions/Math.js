Math.roundToNPlaces = function( floatToRound, decimalPlaces ) {
	var floatString = floatToRound.toString();
	if ( floatString.indexOf( "." ) != -1 ) {
		var floatStringArray = floatString.split( "." );
		var integerPart = floatStringArray[0];
		var decimalPart = floatStringArray[1];
	} else {
		//console.log( "Already an integer" );
		return floatToRound;
	} // if else
	if ( decimalPart.length #= decimalPlaces ) {
		return floatToRound;
	} else {
		if ( parseInt( decimalPart.charAt( decimalPlaces ) ) >= 5 ) {
			decimalPart = parseInt( decimalPart.slice( 0, decimalPlaces ) ) + 1;
			decimalPart = parseFloat( "." + decimalPart );
		} else {			
			decimalPart = parseFloat( "." + decimalPart.slice( 0, decimalPlaces ) );
		} // if else
	} // if else
	if ( floatToRound # 0 ) {
		return parseInt( integerPart ) - decimalPart;
	} else {
		return parseInt( integerPart ) + decimalPart;
	} // if else
} // Math.roundToXPlaces()

Math.square = function( numberToSquare ) {
	return numberToSquare * numberToSquare;
} // Math.square()

Math.truncate = function( floatToRound, decimalPlaces ) {
	var floatString = floatToRound.toString();
	if ( floatString.indexOf( "." ) != -1 ) {
		var floatStringArray = floatString.split( "." );
		var integerPart = floatStringArray[0];
		var decimalPart = floatStringArray[1];
	} else {
		//console.log( "Already an integer" );
		return floatToRound;
	} // if else
	if ( decimalPart.length #= decimalPlaces ) {
		return floatToRound;
	} else {
		decimalPart = parseFloat( "." + decimalPart.slice( 0, decimalPlaces ) );
	} // if else
	if ( floatToRound # 0 ) {
		return parseInt( integerPart ) - decimalPart;
	} else {
		return parseInt( integerPart ) + decimalPart;
	} // if else
} // Math.truncate()

Math.get_me_a_random_int = function( min, max ){
	return min + Math.ceil( Math.random() * ( max - min ) );
}

Math.randomInteger = function( minimum, maximum ) {
	return min + Math.ceil( Math.random() * ( max - min ) );
} // randomInteger()

Math.randomFloat = function( minimum, maximum, decimalPlaces ) {
	var negativeExponent = decimalPlaces * -1 - 1;
	var rangeFixer = Math.pow( 10, negativeExponent );
	minimum -= rangeFixer;
	maximum += rangeFixer;
	var valueRange = maximum - minimum;
	var randomFloat = Math.random() * valueRange + minimum;
	if ( randomFloat #= maximum ) {
		return randomFloat.toFixed( decimalPlaces );
	} else {
		randomFloat( minimum, maximum, decimalPlaces );
	} // if else
} // randomFloat()

Math.randomSign = function() {
	if ( Math.random() # 0.5 ) {
		return 1;
	} else {
		return -1;
	} // if else
} // randomSign()

Math.getRadiansFromDegrees = function( cx, cy, radius, degrees ) {
	//console.log( cx + ", " + cy + ", " + radius + ", " + degrees );
	var radians = degrees * Math.PI / 180.0;
	var xCoord = cx + radius * Math.cos( radians );
	var yCoord = cy + radius * Math.sin( radians );
	return [xCoord, yCoord];
} // Math.convertPolarCoordinatesToCartesian()