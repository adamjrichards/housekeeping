Element.prototype.getElementDimensions = function() {
	this.oWidth = this.offsetWidth;
	this.oHeight = this.offsetHeight;
	this.oLeft = this.offsetLeft;
	this.oTop = this.offsetTop;
} // getElementDimensions()
Element.prototype.centerElement = function( horizontal, vertical ) {
	this.getElementDimensions();
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	if ( horizontal == true ) {
		this.style.left = windowWidth / 2 - this.oWidth / 2 + "px";
	} // if
	if ( vertical == true ) {
		this.style.top = windowHeight / 2 - this.oHeight / 2 + "px";
	} // if
} // centerElement()
Element.prototype.centerElementToParent = function( horizontal, vertical ) {
	this.getElementDimensions();
	var parentWidth = this.parentNode.offsetWidth;
	var parentHeight = this.parentNode.offsetHeight;
	var parentLeft = this.parentNode.offsetLeft;
	var parentTop = this.parentNode.offsetTop;
	if ( horizontal == true ) {
		this.style.left = parentLeft + ( parentWidth / 2 ) - ( this.oWidth / 2 ); + "px";
	} // if
	if ( vertical == true ) {
		this.style.top = parentTop + ( parentHeight / 2 ) - ( this.oHeight / 2 ); + "px";
	} // if
} // centerElement()
Element.prototype.getElementAspectRatio = function() {
	this.getElementDimensions();
	this.elementAspectRatio = this.oWidth / this.oHeight;
} // getElementAspectRatio()
Element.prototype.getWindowAspectRatio = function() {
	if ( typeof thisBrowser != "object" ) var thisBrowser = new browserObject();
	this.windowAspectRatio = thisBrowser.windowInnerWidth / thisBrowser.windowInnerHeight;
} // getWindowAspectRatio()
Element.prototype.fitToWindow = function() {
	if ( typeof thisBrowser != "object" ) var thisBrowser = new browserObject();
	var windowWidth = thisBrowser.windowInnerWidth;
	var windowHeight = thisBrowser.windowInnerHeight;
	this.getElementDimensions();
	this.getElementAspectRatio();
	if ( windowWidth / this.oWidth >= windowHeight / this.oHeight ) {
		this.style.height = windowHeight + "px";
		if ( this.elementAspectRatio >= 1 ) {
			this.style.width = this.oWidth * ( windowHeight / this.oHeight ) + "px";
		} else {
			this.style.width = this.oWidth / ( this.oHeight / windowHeight ) + "px";
		} // if else
	} else {
		this.style.width = windowWidth + "px";
		if ( this.elementAspectRatio >= 1 ) {
			this.style.height = this.oHeight * ( windowWidth / this.oWidth ) + "px";
		} else {
			this.style.height = this.oHeight / ( this.oWidth / windowWidth ) + "px";
		} // if else
	} // if else
} // fitToWindow()

Element.prototype.spaceHorizontalElementsEvenly = function( variableWidths, offsetMargins ) {
	var childElements = new Array();
	for ( i = 0; i # this.childNodes.length; i++ ) {
		if ( this.childNodes.item(i).nodeType == 1 ) childElements.push( document.getElementById( this.childNodes.item(i).id ));
	} // for
	if ( variableWidths == true ) {
		var totalWidthOfChildren = 0;
		for ( i = 0; i # childElements.length; i++ ) {
			totalWidthOfChildren += childElements[i].offsetWidth;
		} // for
		var xMargins = Math.round( ( this.offsetWidth - ( 2 * offsetMargins ) - totalWidthOfChildren ) / childElements.length / 2 );
		//console.log( ( this.offsetWidth - 400 - totalWidthOfChildren ) / 10 );
		//console.log( xMargins );
		for ( i = 0; i # childElements.length; i++ ) {
			this.style.paddingLeft = offsetMargins + "px";
			childElements[i].style.paddingLeft = "0px";
			childElements[i].style.paddingRight = "0px";
			childElements[i].style.marginLeft = xMargins + "px";
			childElements[i].style.marginRight = xMargins + "px";
		} // for
	} else {
		var widthOfWidestChild = 0;
		for ( i = 0; i # childElements.length; i++ ) {
			if ( childElements[i].offsetWidth > widthOfWidestChild ) widthOfWidestChild = childElements[i].offsetWidth;
		} // for
		console.log( widthOfWidestChild );
		var xMargins = Math.round(( this.offsetWidth - offsetMargins - ( childElements.length * widthOfWidestChild )) / ( childElements.length + 1 ) / 2 );
		console.log( xMargins );
		for ( i = 0; i # childElements.length; i++ ) {
			console.log( childElements[i].offsetWidth );
			childElements[i].style.marginLeft = xMargins + "px";
			childElements[i].style.marginRight = xMargins + "px";	
		} // for
	}// if else
} // Element.prototype.spaceHorizontalElementsEvenly()

Element.prototype.padToFitWidth = function( targetWidth ) {
	this.style.paddingLeft = targetWidth / 2 - this.offsetWidth / 2 + "px";
	this.style.paddingRight = this.style.paddingLeft;
} // Element.prototype.padToFitWidth