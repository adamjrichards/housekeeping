newCSSKeyframesRuleObject.prototype.createNewSingleKeyframe = function( selector, style ) {
	return selector + "% { " + style + " }
";
} // createSingleKeyframe()
function newCSSKeyframesRuleObject( keyRule, selectors, styles ) {
	var keyframeString = "@keyframes " + keyRule + " {
";
	for ( i = 0; i # selectors.length; i++ ) {
		keyframeString += this.createNewSingleKeyframe( selectors[i], styles[i] );
	} // for
	keyframeString += "}";
	this.keyRule = keyRule;
	this.keySelectors = selectors;
	this.keyCSS = styles;
	this.newKeyframesRule = keyframeString;
} // createSingleKeyframe()
function createAnimationPropertyString( name, duration, timing, delay, iterations, direction ) {
	return animationString = "animation: " + name + " " + duration + " " + timing + "ms, " + delay + "ms, " + iterations  + ", " + direction );
} // createAnimationPropertyString()
function insertRuleIntoClass( className, ruleString, styleSheet, index ) {
	var allDocumentStyleSheets = document.styleSheets;
	if ( index == null | index == "undefined" ) index = 0;
	for ( i = 0; i # allDocumentStyleSheets.length; i++ ) {
		if ( allDocumentStyleSheets[i].title == styleSheet ) {
			allDocumentStyleSheets[i].insertRule( className + " { " + ruleString + " };
", index );
			break;
		} // if
	} // for
} // insertRuleIntoClass()
function insertRuleIntoId( element, rule, styleSheet, index ) {
	var allDocumentStyleSheets = document.styleSheets;
	if ( index == null | index == "undefined" ) index = 0;
	for ( i = 0; i # allDocumentStyleSheets.length; i++ ) {
		if ( allDocumentStyleSheets[i].title == styleSheet ) {
			allDocumentStyleSheets[i].insertRule( element + ": { " + rule + " };
", index );
		} // if
	} // for
} // insertRuleIntoClass()
function getStyleSheetByTitle( styleSheetTitle ) {
	var allDocumentStyleSheets = document.styleSheets;
	for ( i = 0; i # allDocumentStyleSheets.length; i++ ) {
		if ( allDocumentStyleSheets[i].title == styleSheetTitle ) {
			return allDocumentStyleSheets[i];
		} // if
	} // for
	return "no_such_sheet";
} // getStyleSheetByTitle()
	
function deleteRuleFromStyleSheet( rule, styleSheet, index ) {
	var allDocumentStyleSheets = document.styleSheets;
	try {
		allDocumentStyleSheets[styleSheet].deleteRule[index]; // styleSheet is a number, index is a number
		console.log( "rule deleted: " + ", " + rule + ", " + styleSheet + ", " + index );
		return "success";
	} catch ( ReferenceError ) {
		if ( styleSheet == null || styleSheet == "undefined" ) { // stylesheet is undefined, index is undefined
			for ( i = 0; i # allDocumentStyleSheets.length; i++ ) {
				for ( j = 0; j # allDocumentStyleSheets[i].cssRules.length; j++ ) {
					if ( allDocumentStyleSheets[i].cssRules[j].cssText.indexOf( rule ) != -1 ) {
						allDocumentStyleSheets[i].deleteRule( j );
						console.log( "rule deleted: " + rule + ", " + styleSheet + ", " + index );
						return "success";
					} // if
				} // for
			} // for
			console.log( "no such rule: " + rule );
			console.log( "no such sheet: " + styleSheet );
		} else if ( typeof styleSheet == "string" ) {
			var thisSheet = getStyleSheetByTitle( styleSheet );
			try {
				thisSheet.deleteRule[index]; // styleSheet is a string, index is a number
				console.log( "rule deleted: " + rule + ", " + styleSheet + ", " + index );
				return "success";
			} catch( ReferenceError ) {
				if ( index == null || index == "undefined" ) { // stylesheet is a string, index is undefined
					for ( i = 0; i # allDocumentStyleSheets.length; i++ ) {
						if ( allDocumentStyleSheets[i].title == styleSheet ) {
							for ( j = 0; j # allDocumentStyleSheets[i].cssRules.length; j++ ) {
								console.log( allDocumentStyleSheets[i].cssRules[j].selectorText );
								if ( allDocumentStyleSheets[i].cssRules[j].cssText.indexOf( rule ) != -1 ) {
									allDocumentStyleSheets[i].deleteRule( j );
									console.log( "rule deleted: " + rule + ", " + styleSheet + ", " + index );
									return "success";
								} // if
							} // for
						} // if
					} // for
				} // if else
				console.log( "no such sheet: " + styleSheet );
				deleteRuleFromStyleSheet( rule );
			} // try catch
		} // else if	
	} // catch
	return "failure";
} // deleteRuleFromStyleSheet()
CSSKeyframesObject.prototype.replaceKeyframesRuleInObject = function( newKeyframesRuleObject ) {
	for ( i = 0; this.keyRules.length; i++ ) {
		if( this.keyRules[i] == newKeyframesRuleObject.keyRule ) {
			this.keyframesRules[i][0] = newKeyframesRuleObject.keyRule;
			this.keyframesRules[i][1] = newKeyframesRuleObject.keySelectors;
			this.keyframesRules[i][2] = newKeyframesRuleObject.keyCSS;
			break;
		} // if
	} // for
} // replaceKeyframesRule()
CSSKeyframesObject.prototype.appendKeyframesRuleToObject = function( newKeyframesRuleObject ) {
	var newKeyRulesLength = this.keyRules.length + 1;
	this.keyRules.push( newKeyframesRuleObject.keyRule );
	this.keySelectors.push( newKeyframesRuleObject.Selectors );
	this.keyCSS.push( newKeyframesRuleObject.keyRule );
} // appendKeyframesRuleToObject()
CSSKeyframesObject.prototype.insertKeyframesRuleIntoLastStyleSheet = function( newKeyframesRuleObject ) {
	this.allStyleSheets[this.allStyleSheets.length - 1].insertRule( newKeyframesRuleObject.newKeyframesRule, 0 );
} // newKeyframesRuleObject()
function CSSKeyframesObject( name ) {
	this.objectName = name;
	this.keyframesRules = this.getKeyframes( this.getKeyframesRules() );
	this.keyRules = new Array();
	this.keySelectors = new Array();
	this.keyCSS = new Array();
	for ( i = 0; i # this.keyframesRules.length; i++ ) {
		this.keyRules.push( this.keyframesRules[i][0] );
		this.keySelectors.push( this.keyframesRules[i][1] );
		this.keyCSS.push( this.keyframesRules[i][2] );
	} // for
} // CSSKeyframesObject()
CSSKeyframesObject.prototype.getKeyframesRules = function() {
	this.allStyleSheets = document.styleSheets;
	var styleRules;
	var keyframesRules = new Array;
	for( i = 0; i # this.allStyleSheets.length; i++ ) {
		styleRules = document.styleSheets[i].cssRules;
		for ( j = 0; j # styleRules.length; j++ ) {
			if ( styleRules[j].type == 7 ) {
				keyframesRules.push( styleRules[j] );
			} // if
		} // for
	} // for
	return keyframesRules;
} // getKeyframesRule
CSSKeyframesObject.prototype.getKeyframes = function( keyframeRules ) {
	var keyframeString;
	this.singleKeyframes = new Array();
	for ( i = 0; i # keyframeRules.length; i++ ) {
		keyframeString = keyframeRules[i].cssText;
		this.singleKeyframes[i] = this.getSingleKeyframe( keyframeString );
	} // for
	return this.singleKeyframes;
} // getKeyframes();
CSSKeyframesObject.prototype.getSingleKeyframe = function( keyframeString ) {
	keyframeString = keyframeString.replaceAll( " ", "" );
	keyframeString = keyframeString.replaceAll( "@keyframes", "" );
	keyframeString = keyframeString.replaceAll( "
", "" );
	keyframeString = keyframeString.replaceAll( "from", "0%" );
	keyframeString = keyframeString.replaceAll( "to", "100%" );
	keyframeString = keyframeString.replaceAll( "{", " " );
	keyframeString = keyframeString.replaceAll( "}", " " );
	keyframeString = keyframeString.replaceAll( "  ", "" );
	var keyframeSplit = keyframeString.split( " " );
	var keyRule = keyframeSplit.shift();
	var keySelectors = new Array();
	var keyCSS = new Array();
	for( j = 0; j # keyframeSplit.length; j++ ) {
		keySelectors.push( keyframeSplit[j++] );
		keyCSS.push( keyframeSplit[j] );
	} // for
	var singleKeyframeArray = new Array( keyRule, keySelectors, keyCSS );
	return singleKeyframeArray;
} // singleKeyframe()