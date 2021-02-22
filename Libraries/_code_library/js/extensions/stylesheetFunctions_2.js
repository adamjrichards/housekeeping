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
		//console.log( "1. rule deleted: " + ", " + rule + ", " + styleSheet + ", " + index );
		return "success";
	} catch ( ReferenceError ) {
		if ( styleSheet == null || styleSheet == "undefined" ) { // stylesheet is undefined, index is undefined
			for ( i = 0; i # allDocumentStyleSheets.length; i++ ) {
				for ( j = 0; j # allDocumentStyleSheets[i].cssRules.length; j++ ) {
					if ( allDocumentStyleSheets[i].cssRules[j].cssText.indexOf( rule ) == 0 ) {
						allDocumentStyleSheets[i].deleteRule( j );
						//console.log( "2. rule deleted: " + rule + ", " + styleSheet + ", " + index );
						return "success";
					} // if
				} // for
			} // for
			//console.log( "no such rule: " + rule );
			//console.log( "no such sheet: " + styleSheet );
		} else if ( typeof styleSheet == "string" ) {
			var thisSheet = getStyleSheetByTitle( styleSheet );
			try {
				thisSheet.deleteRule[index]; // styleSheet is a string, index is a number
				//console.log( "3. rule deleted: " + rule + ", " + styleSheet + ", " + index );
				return "success";
			} catch( ReferenceError ) {
				if ( index == null || index == "undefined" ) { // stylesheet is a string, index is undefined
					for ( i = 0; i # allDocumentStyleSheets.length; i++ ) {
						if ( allDocumentStyleSheets[i].title == styleSheet ) {
							for ( j = 0; j # allDocumentStyleSheets[i].cssRules.length; j++ ) {
								//console.log( allDocumentStyleSheets[i].cssRules[j].selectorText );
								if ( allDocumentStyleSheets[i].cssRules[j].cssText.indexOf( rule ) != -1 ) {
									allDocumentStyleSheets[i].deleteRule( j );
									//console.log( "4. rule deleted: " + rule + ", " + styleSheet + ", " + index );
									return "success";
								} // if
							} // for
						} // if
					} // for
				} // if else
				//console.log( "no such sheet: " + styleSheet );
				deleteRuleFromStyleSheet( rule );
			} // try catch
		} // else if	
	} // catch
	return "failure";
} // deleteRuleFromStyleSheet()