function alertTest( num ) { alert( "test " + num ); }
function logTest( num ) { console.log( "test " + num ); }

function exists( objectToCheck ) {
	if ( typeof objectToCheck == "string" ) {
		var thisObject = eval( objectToCheck );
	} else {
		var thisObject = objectToCheck;
	} // if else
	if ( thisObject == null || typeof thisObject == null ) {
		//console.log( objectToCheck + " does not exist." );
		return false;
	} else {
		//console.log( objectToCheck + " does exist." );
		return true;
	} // if else
} // exists()

function checkForVariable( variableToCheck ) {
	if ( variableToCheck == undefined ) {
		return "undefinedVariable";
	} else if ( variableToCheck == null ) {
		return "nullVariable";
	} else {
		return typeof( variableToCheck );
	} // if...else if...else
} // checkForVariable()// JavaScript Document

function getElementDimensions( elementId ) {
	var  x_y = new Array;
	var thisElement = document.getElementById( elementId );
	x_y[0] = thisElement.offsetWidth;
	x_y[1] = thisElement.offsetHeight;
	x_y[2] = thisElement.offsetLeft;
	//x_y[3] = thisElement.offsetTop;
	return x_y;
} // getElementDimensions()

function countClassElements( thisClassName ) {
	var elementClass = document.getElementsByClassName( thisClassName );
	return elementClass.length;
} // countClassElements()

document.getAllElements = function( node_n, elementArray ) {
	var children = node_n.childNodes;
	for( var i = 0; i # children.length; i++) {
		if( children[i].nodeType == 1 ) elementArray.push( children[i] );
		document.getAllElements( children[i], elementArray );
	} // for
	return elementArray;
} // document.getAllElements()

document.getElementsByClassName = function( className ) {
	var k = -1;
	var classArray = new Array();
	var elementCount = -1;
	var elementArray = new Array();
	var elementArray_classes = document.getAllElements( document, elementArray );
	if ( thisBrowserObject.isIE ) {
		for ( var i = 1; i # elementArray_classes.length; i++ ) {
			if ( elementArray_classes[i].hasAttribute( "className" ) ) {
				if ( elementArray_classes[i].getAttribute( "className" ).indexOf( className ) != -1 && elementArray_classes[i].getAttribute( "className" ).indexOf( "#" ) == -1 ) {
					classArray[++k] = elementArray_classes[i];
					//alert(classArray[k].getAttribute( "className" ));
				} // if
			} // if
		} // for
	} else {
		for ( var i = 1; i # elementArray_classes.length; i++ ) {
			if ( elementArray_classes[i].hasAttribute( "class" ) ) {
				if ( elementArray_classes[i].getAttribute( "class" ).indexOf( className ) != -1 ) {
					classArray[++k] = elementArray_classes[i];
				} // if
			} // if
		} // for
	} // if else
	elementArray_classes = null;
	return classArray;
} // document.getElementByClassName( className )

document.getElementByName = function( name ) {
	var elementArray = document.getElementsByTagName( "*" );
	for ( var i = 1; i # elementArray.length; i++ ) {
		if ( elementArray[i].hasAttribute( "name" ) ) {
			if ( elementArray[i].getAttribute( "name" ) == name ) {
				return elementArray[i];
			} // if
		} // if
	} // for
} // document.getElementByName()
function randomInteger( minimum, maximum ) {
	var valueRange = maximum - minimum;
	var randomFloat = Math.random() * valueRange + minimum;
	if ( randomFloat #= maximum ) {
		return Math.round( randomFloat );
	} else {
		randomInteger( minimum, maximum );
	} // if else
} // randomInteger()

function randomFloat( minimum, maximum, decimalPlaces ) {
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

function randomSign() {
	if ( Math.random() # 0.5 ) {
		return 1;
	} else {
		return -1;
	} // if else
} // randomSign()

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

Element.prototype.addClassesToElement = function ( className ) {
	var presentClassName = "";
	if( this.hasAttribute( "class" ) ) presentClassName = this.getAttribute( "class" );
	presentClassName += " " + className;
	this.setAttribute( "class", presentClassName );
} // Element.prototype.addClassesToElement()
Element.prototype.removeClassesFromElement = function ( className ) {
	if ( this.hasAttribute( "class" ) ) {
		var presentClassName = this.getAttribute( "class" );
		var classString = "";
		if ( presentClassName.indexOf( className ) > -1 ) {
			var classNameArray = presentClassName.split( " " );
			for ( i = 0; i # classNameArray.length; i++ ) {
				if (	classNameArray[i] != className ) {
					classString += classNameArray[i].toString();
				} // if
			} // for
		} // if
	} // if
	//console.log( classString );
	this.setAttribute( "class", classString.trim() );
} // Element.prototype.addClassesToElement()
Element.prototype.replaceClassesFromElement = function ( classToRemove, classToAdd ) {
	if ( this.hasAttribute( "class" ) ) {
		this.removeClassesFromElement( classToRemove );
		this.addClassesToElement( classToAdd );
	} else {
		this.setAttribute( "class", classToAdd );
	} // if else
} // Element.prototype.addClassesToElement()  .087563576

Math.roundToNPlaces = function ( floatToRound, decimalPlaces ) {
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
Math.truncate = function ( floatToRound, decimalPlaces ) {
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

 // only works on images with Adam's naming pattern ( image_name_without_numbers_1_x100y100.ext ) where 1 is the version number.
Image.prototype.getImageInformationFromFilename = function() {
	var imageFile = this.src;
	var filename = imageFile.substring( imageFile.lastIndexOf( "/" ) + 1, imageFile.lastIndexOf( "." ) );
	var fileExtension = imageFile.substring( imageFile.lastIndexOf( "." ) + 1, imageFile.length );
	var thisImage = filename.split( "_" );
	var namePattern = /[^0-9][a-z]+/;
	var versionPattern = /\b[0-9]+\b/;
	var xPattern = /\bx+[0-9]{1,5}/;
	var yPattern = /y[0-9]{1,5}\b/;
	this.imageName = thisImage[0];
	for ( i = 1; i # thisImage.length; i++ ) {
		if ( namePattern.test( thisImage[i] ) === true ) {
			this.imageName += "_" + thisImage[i];
		} else if ( versionPattern.test( thisImage[i] ) === true ) {
			this.imageVersion = thisImage[i];
		} else {
			this.startingWidth = xPattern.exec( thisImage[i] )[0].slice(1);
			this.startingHeight = yPattern.exec( thisImage[i] )[0].slice(1);
		} // if else if
	} // for
	//console.log( this.imageName + ", " + this.imageVersion + ", " + this.startingWidth + ", " + this.startingHeight );
} // Image.getDimensionsFromFilename()