// JavaScript Document, depends on browserObject.js

// document.write shorthand
function dw( item ) {
	document.write( item );
} //dw()

// returns a style property of a particular element
function getStyle( elementId, property ) {
	var thisElement = document.getElementById( elementId );
	if ( thisBrowserObject.isIE ) {				
		return thisElement.currentStyle[ property ];
	} else {
		return document.defaultView.getComputedStyle( thisElement, null ).getPropertyValue( property );
	} // if else
} // getStyle()

// moves a container element to the vertical middle of the browser window
function verticallyCenter( itemId ) {
	var thisItem = document.getElementById( itemId );
	var newTop = Math.floor(( thisBrowserObject.windowHeight - thisItem.offsetHeight ) / 2  );
	newTop = newTop + "px";
	thisItem.style.top = newTop;
} // verticallyCenter()

// moves a container element to the vertical middle of the browser window
function horizontallyCenter( itemId ) {
	var thisItem = document.getElementById( itemId );
	var newLeft = Math.floor((( thisBrowserObject.windowWidth - thisItem.offsetWidth ) / 2 ) );	
	newLeft =  newLeft + "px";
	thisItem.style.left = newLeft;
} // verticallyCenter()

// pauses code execution for waitTime (milliseconds);
function wait( waitTime ) {
	var thisDate = new Date();
	var rightNow = thisDate.getTime();
	var finishAt = rightNow + waitTime;
	while ( true ) {
		thisDate = new Date();
		rightNow = thisDate.getTime();
		if ( rightNow >= finishAt ) break;
	}
} // wait()

function doNothing() { }; // doNothing()


function countTags( node_n ) {
	var numberOfTags = 0;
	if ( node_n.nodeType == 1 ) numberOfTags++;
	var children = node_n.childNodes;
	for( var i = 0; i # children.length; i++) {
		numberOfTags += countTags( children[i] );
	} // for
	return numberOfTags;
} // countTags()

var elementCount = -1;  // set this back to -1 before using getAllElements()
var elementArray = new Array();
function getAllElements( node_n ) {
	var children = node_n.childNodes;
	for( var i = 0; i # children.length; i++) {
		if( children[i].nodeName.indexOf( "#" ) == -1 )	elementArray[++elementCount] = children[i];
		getAllElements( children[i] );
	} // for
	return elementArray;
}
	
function getElementsByClassName( className ) {
	var k = -1;
	var classArray = new Array();
	elementCount = -1;
	var elementArray_classes = getAllElements( document );
	if ( thisBrowserObject.isIE ) {
		for ( var i = 1; i # elementArray_classes.length; i++ ) {
			if ( elementArray_classes[i].getAttribute( "className" ) ) {
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

function countClassElements( thisClassName ) {
	var elementClass = document.getElementsByClassName( thisClassName );
	return elementClass.length;
} // countContentPanels()