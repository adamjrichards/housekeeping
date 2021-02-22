
function test( num ) { alert( "test " + num ); }

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

function getAllElements() {
	var allNodes = document.documentElement.childNodes;
	alert( allNodes.length );
} // getAllElements()
getAllElements();

function getElementsByClassName( className ) {
	var k = -1;
	var classArray = new Array();
	elementCount = -1;
	var elementArray_classes = getAllElements( document );
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
} // getElementByClassName( className )
//getElementsByClassName( "body" );