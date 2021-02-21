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

function countClassElements( thisClassName ) {
	var elementClass = document.getElementsByClassName_custom( thisClassName );
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

document.getElementsByClassName_custom = function( className ) {
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

Element.prototype.addClassesToElement = function ( className ) {
	var presentClassName = "";
	if( this.hasAttribute( "class" ) ) presentClassName = this.getAttribute( "class" );
	var pattern = new RegExp( className, "g" );
	if ( pattern.test( presentClassName ) == false ) presentClassName += " " + className;
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