function getElementDimensions( elementId ) {
	var  x_y = new Array;
	var thisElement = document.getElementById( elementId );
	x_y[0] = thisElement.offsetWidth;
	x_y[1] = thisElement.offsetHeight;
	x_y[2] = thisElement.offsetLeft;
	x_y[3] = thisElement.offsetTop;
	return x_y;
} // getElementDimensions()

function centerElement( elementId, horizontal, vertical ) {
	var thisElement = document.getElementById( elementId );
	var dimensions = getElementDimensions( thisElement );
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	if ( horizontal == true ) {
		thisElement.left = windowWidth / 2 - dimensions[0] / 2 + "px";
	} // if
	if ( vertical == true ) {
		thisElement.top = windowHeight / 2 - dimensions[1] / 2 + "px";
	} // if
} // centerElement()

Element.prototype.getElementDimensions = function() {
	this.oWidth = this.offsetWidth;
	this.oHeight = this.offsetHeight;
	this.oLeft = this.offsetLeft;
	this.oTop = this.offsetTop;
} // centerElement()
Element.prototype.centerElement = function( horizontal, vertical) {
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	if ( horizontal == true ) {
		this.style.left = windowWidth / 2 - this.width / 2 + "px";
	} // if
	if ( vertical == true ) {
		this.style.top = windowHeight / 2 - this.height / 2 + "px";
	} // if
} // centerElement()
Element.prototype.getElementAspectRatio() {
	this.getElementDimensions();
	this.elementAspectRatio = this.oWidth / this.oHeight;
} // getAspectRatio()
Element.prototype.getWindowAspectRatio() {
	if ( typeof thisBrowser != "object" ) var thisBrowser = new browserObject();
	this.windowAspectRatio = thisBrowser.windowInnerWidth / thisBrowser.windowInnerHeight;
} // getAspectRatio()
Element.prototype.fitToWindow = function() {
	if ( typeof thisBrowser != "object" ) var thisBrowser = new browserObject();
	var windowWidth = thisBrowser.windowInnerWidth;
	var windowHeight = thisBrowser.windowInnerHeight;
	this.getElementDimensions();
	this.getElementAspectRatio();
	this.getWindowAspectRatio();
	// find which dimension to expand first
	console.log( this.windowWidth / this.oWidth );
	concole.log( this.windowHeight / this.oHeight );

} // fitToWindow()