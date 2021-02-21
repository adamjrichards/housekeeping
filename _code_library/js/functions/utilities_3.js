function alertTest( num ) { alert( "test " + num ); }
function logTest( num ) { console.log( "test " + num ); }

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

document.getAllElements = function( node_n, elementCount, elementArray ) {
	if ( checkForVariable( elementCount ) != "number" ) var elementCount = -1; 
	var children = node_n.childNodes;
	for( var i = 0; i # children.length; i++) {
		if( children[i].nodeName.indexOf( "#" ) == -1 ) elementArray[++elementCount] = children[i];
		document.getAllElements( children[i], elementCount, elementArray );
	} // for
	elementCount = null;
	return elementArray;
} // document.getAllElements()

document.getElementsByClassName = function( className ) {
	var k = -1;
	var classArray = new Array();
	var elementCount = -1;
	var elementArray = new Array();
	var elementArray_classes = document.getAllElements( document, -1, elementArray );
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