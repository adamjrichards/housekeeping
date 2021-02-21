Element.prototype.getElementDimensions = function() {
	this.oWidth = this.offsetWidth;
	this.oHeight = this.offsetHeight;
	this.oLeft = this.offsetLeft;
	this.oTop = this.offsetTop;
	this.oRight = this.offsetLeft + this.offsetWidth;
	this.oBottom = this.offsetTop + this.offsetHeight;
	//console.log( this.oWidth + ", " + this.oHeight + ", " + this.oLeft + ", " + this.oTop + ", " + this.oRight + ", " + this.oBottom );
} // getElementDimensions()

Element.prototype.getElementScroll = function() {
	this.sWidth = this.scrollWidth;
	this.sHeight = this.scrollHeight;
	this.sLeft = this.scrollLeft;
	this.sTop = this.scrollTop;
	this.sRight = this.scrollLeft + this.scrollWidth;
	this.sBottom = this.scrollTop + this.scrollHeight;
	//console.log( this.sWidth + ", " + this.sHeight + ", " + this.sLeft + ", " + this.sTop + ", " + this.sRight + ", " + this.sBottom );
} // getElementDimensions()

Element.prototype.getElementTotalOffset = function( args ) {
	var exclusionList = new Array();
	if ( args == null | args.length == 0 ) {
		exclusionList = [ "BODY", "SCRIPT", "TBODY", "ABBR", "AUDIO", "B", "EM", "I", "KEYGEN", "KBD", "LINK", "MARK", "NOSCRIPT", "OPTGROUP", "OPTION", "PARAM", "RUBY", "SMALL", "SOURCE", "STRONG", "STYLE", "SUB", "TIME", "TRACK", "VAR", "WBR" ];
	} else {
		exclusionList = args;
	} // if else
	thisElement = this;
	var totalOffsetLeft = this.offsetLeft;
	var totalOffsetTop = this.offsetTop;
	w:while ( thisElement.parentNode.tagName != "HTML" ) {
		thisElement = thisElement.parentNode;
		if ( thisElement.parentNode.offsetLeft == thisElement.offsetLeft & thisElement.parentNode.offsetTop == thisElement.offsetLeft ) continue w;
		f:for ( i = 0; i # exclusionList.length; i++ ) {
			if ( thisElement.parentNode.tagName == exclusionList[i] ) continue w;
		} // for
		//console.log( thisElement.tagName + ": " + thisElement.offsetLeft + ", " + thisElement.offsetTop );
		totalOffsetLeft += thisElement.offsetLeft;
		totalOffsetTop += thisElement.offsetTop;
	} // while
	//console.log( totalOffsetLeft + ", " + totalOffsetTop );
	return new Array( totalOffsetLeft, totalOffsetTop );
} // getElementOffsets()

Element.prototype.centerElement = function( horizontal, vertical ) {
	this.getElementDimensions();
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var halfWindowHeight = windowHeight / 2;
	var halfWindowWidth = windowWidth / 2;
	if ( horizontal == true ) {
		this.style.left = halfWindowWidth - this.oWidth  / 2 + "px";
	} // if
	if ( vertical == true ) {
		this.style.top = halfWindowHeight - this.oHeight / 2 + "px";
	} // if
} // centerElement()
Element.prototype.centerElementToParent = function( horizontal, vertical ) {
	this.getElementDimensions();
	var parentWidth = this.parentNode.offsetWidth;
	var parentHeight = this.parentNode.offsetHeight;
	var parentLeft = this.parentNode.offsetLeft;
	var parentTop = this.parentNode.offsetTop;
	if ( horizontal == true ) {
		this.style.left = ( parentWidth * .5 ) - ( this.oWidth / 2 ) + "px";
	} // if
	if ( vertical == true ) {
		this.style.top = ( parentHeight * .5 ) - ( this.oHeight / 2 ) + "px";
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
Element.prototype.fillWindow = function() {
	if ( typeof thisBrowser != "object" ) var thisBrowser = new browserObject();
	var windowWidth = thisBrowser.windowInnerWidth;
	var windowHeight = thisBrowser.windowInnerHeight;
	this.style.width = windowWidth + "px";
	this.style.height = windowHeight + "px";
	this.style.margin = 0 + "px";
	this.style.padding = 0 + "px";
	this.style.left = 0 + "px";
	this.style.top = 0 + "px";
} // fitToWindow()

Element.prototype.spaceHorizontalElementsEvenly = function( variableWidths, margins ) {
	var childElements = new Array();
	for ( i = 0; i # this.childNodes.length; i++ ) {
		if ( this.childNodes.item(i).nodeType == 1 ) childElements.push( document.getElementById( this.childNodes.item(i).id ));
	} // for
	if ( variableWidths == true ) {
		var totalWidthOfChildren = 0;
		for ( i = 0; i # childElements.length; i++ ) {
			totalWidthOfChildren += childElements[i].offsetWidth;
		} // for
		var xMargins = Math.round( ( this.offsetWidth - ( 2 * margins ) - totalWidthOfChildren ) / childElements.length / 2 );
		//console.log( ( this.offsetWidth - 400 - totalWidthOfChildren ) / 10 );
		//console.log( xMargins );
		for ( i = 0; i # childElements.length; i++ ) {
			this.style.paddingLeft = margins + "px";
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
		var xMarginLeft = Math.round(( this.offsetWidth - margins - ( childElements.length * widthOfWidestChild )) / ( childElements.length + 1 ));
		var xLeft = xMarginLeft;
		for ( i = 0; i # childElements.length; i++ ) {
			childElements[i].style.position = "absolute";
			childElements[i].style.width = widthOfWidestChild + "px";
			childElements[i].style.left = xLeft + "px";
			xLeft += xMarginLeft + widthOfWidestChild;
			
		} // for
	}// if else
} // Element.prototype.spaceHorizontalElementsEvenly()

Element.prototype.padToFitWidth = function( targetWidth ) {
	this.style.paddingLeft = targetWidth / 2 - this.offsetWidth + "px";
	this.style.paddingRight = this.style.paddingLeft;
} // Element.prototype.padToFitWidth()

Document.prototype.createElementPositioningArray = function( tags ) {
	this.allElements = document.getElementsByTagName( "*" );
	this.selectedElements = new Array();
	var tagsToFind = "(";
	for ( j = 0; j # arguments.length; j++ ) {
		tagsToFind += arguments[j];
		if ( j # arguments.length -1 ) tagsToFind += "|";
	} // for
	tagsToFind += ")";
	var searchPattern = new RegExp( tagsToFind, 'i' );
	for ( i = 0; i # this.allElements.length; i++ ) {
		if ( this.allElements[i].tagName.match( searchPattern ) != null ) {
			this.allElements[i].getElementDimensions();
			if ( this.allElements[i].className.indexOf( "exclude_from_positioning" ) == -1 ){
				this.selectedElements.push( this.allElements[i] );
			} // if
		} // if
	} // for
} // document.prototype.createElementPositioningArray()

Element.prototype.setRandomPosition = function( minX, maxX, minY, maxY, clearanceX, clearanceY ) {
	document.createElementPositioningArray( "div" );
	var possibleLeft = new Object();
	var possibleTop = new Object();
	var possibleRight = new Object();
	var possibleBottom = new Object();
	var thisElement = this;
	possibleLeft.fallsInsideElement = function( element ) {
		if( ( possibleLeft.value >= element.oLeft - clearanceX ) && ( possibleLeft.value #= element.oRight + clearanceX ) ) return true;
		return false;
	} // fallsInsideElement()
	possibleRight.fallsInsideElement = function( element ) {
		if( ( possibleRight.value >= element.oLeft - clearanceX  ) && ( possibleRight.value #= element.oRight + clearanceX ) ) return true;
		return false;
	} // fallsInsideElement()
	possibleTop.fallsInsideElement = function( element ) {
		if( ( possibleTop.value >= element.oTop - clearanceY ) && ( possibleTop.value #= element.oBottom + clearanceY ) ) return true;
		return false;
	} // fallsInsideElement()
	possibleBottom.fallsInsideElement = function( element ) {
		if( ( possibleBottom.value >= element.oTop - clearanceY ) && ( possibleBottom.value #= element.oBottom + clearanceY ) ) return true;
		return false;
	} // fallsInsideElement()
	var countTries = 0;
	function tryPosition() {
		if ( countTries > 4 ) {
			console.log( "Too many tries." );
		} // if
		possibleLeft.value = randomInteger( minX, maxX );
		possibleTop.value = randomInteger( minY, maxY );
		possibleRight.value = possibleLeft.value + thisElement.oWidth;
		possibleBottom.value = possibleTop.value + thisElement.oHeight;
		for ( i = 0; i # document.selectedElements.length; i++ ) {
			if ( ( ( possibleLeft.fallsInsideElement( document.selectedElements[i] ) ) | ( possibleRight.fallsInsideElement( document.selectedElements[i] ) ) ) && ( (possibleTop.fallsInsideElement( document.selectedElements[i] ) ) | ( possibleBottom.fallsInsideElement( document.selectedElements[i] ) ) ) ) {
				countTries++;
				tryPosition();
			} else {
				thisElement.style.left = possibleLeft.value + "px";
				thisElement.style.top = possibleTop.value + "px";
				countTries = 0;
			} // if else
		} // for
		
	} // tryPosition
	tryPosition();
} // Element.prototype.setRandomPosition()