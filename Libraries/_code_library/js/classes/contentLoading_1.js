/*
1. Download the new document file.
2. Replace the inner html of the display panel.
*/

function contentObject( fileName ) {
	this.docTitle;
	this.docName;		
	this.filePath = "pages";
	this.fileName = fileName;
	this.author;
	this.publicationDate;
	this.baseId;
} // contentObject constructor

contentObject.prototype.downloadDocumentFile = function ( filePath, fileName ) {
	var xmlRequest = new XMLHttpRequest;
	var xmlRequestString = filePath + "/" + fileName;
	//console.log( xmlRequestString );
	xmlRequest.open( "GET", xmlRequestString, false );
	xmlRequest.send();
	this.checkReadiness = function() {
		if( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) return true;
	} // this.checkReadiness()
	//console.log( xmlRequest.readyState );
	if ( this.checkReadiness ) this.xmlDocumentString = String( xmlRequest.responseText );
	//console.log(  xmlRequest.responseText );
} // downloadDocumentFile()

contentObject.citationObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	this.author;
	this.publicationDate;
	this.source;
	this.pageNumbers;
	this.citationLink;	
} // contentObject.citation()

contentObject.blockquoteObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	this.text;
	this.author;
	this.publicationDate;
	this.source;
	this.pageNumbers;
	this.blockquoteLink;
	this.citeAttribute;	
} // contentObject.blockquote()

contentObject.linkObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	this.href;
	this.innerText;
	this.additionalJS;
	this.target;
} // contentObject.linkObject()

contentObject.figureObject = function() {
	this.name;
	this.id;
	this.className;
	this.src;
	this.caption;
	this.title;
	this.alt;
	this.width;
	this.height;
	this.href;	
} // contentObject.imageObject()

contentObject.imageObject = function() {
	this.name;
	this.id;
	this.className;
	this.src;
	this.caption;
	this.title;
	this.alt;
	this.width;
	this.height;
} // contentObject.imageObject()

contentObject.mediaObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	this.sourceURL;
	this.caption;
	this.width;
	this.height;
	this.type;
	this.citation;
	this.embedCode;
} // contentObject.mediaObject()

contentObject.orderedListObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	//this.olistItems = new Array();
} // contentObject.orderedListObject()
contentObject.unorderedListObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
} // contentObject.unorderedListObject()
contentObject.listItemObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	this.listName;
	this.listId;
	this.listTitle;
	this.innerText;
} // contentObject.listItemObject()

contentObject.linkListObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	this.listName;
	this.listId;
	this.listTitle;
	this.listType;
	this.newStringArray = new Array();
} // contentObject.unorderedListObject()
contentObject.linkListItemObject = function() {
	this.name;
	this.id;
	this.className;
	this.title;
	this.text;
	this.href;
	this.target;
	this.additionalJS;
	this.comment;
	this.screenshot;
} // contentObject.listItemObject()

contentObject.prototype.buildLinkList = function( convertedStringArray, startingIndex, listType ) {
	this.listCount++;
	this.headerCount++;
	var listIsOrdered = false;
	var linkList = new contentObject.linkListObject();
	var i = startingIndex + 1;
	while ( convertedStringArray[i].indexOf( "/ntgq_linkList" ) == -1 ) {
		switch ( convertedStringArray[i] ) {
			case "ntgq_ordered_list_title":
				linkList.title = convertedStringArray[i + 1];
				listIsOrdered = true;
				this.htmlString += "#div id=\"ntgq_" + this.baseId + "_container\">
#h1 class=\"ntgq_heading_1\" id=\"ntgq_heading_1_" + this.headingCount + "\">" + linkList.title + "#/h1>
";
				if ( listType == "simple" ) {
					this.htmlString += "#ol class=\"ntgq_linkList ntgq_linkList_" + this.docName + "\" id=\"ntgq_linkList_" + this.docName + "_" + this.listCount + "\">
";
				} else if ( listType == "table" ) {
					this.htmlString += "#table class=\"ntgq_linkTable ntgq_linkTable_" + this.docName + "\" id=\"ntgq_linkTable_" + this.docName + "_" + this.listCount + "\">
"; 
				} // if
				break;
			case "ntgq_unordered_list_title":
				linkList.title = convertedStringArray[i + 1];
				this.htmlString += "#div id=\"ntgq_" + this.baseId + "_container\">
#h1 class=\"ntgq_heading_1\" id=\"ntgq_heading_1_" + this.headingCount + "\">" + linkList.title + "#/h1>
";
				if ( listType == "simple" ) {
					this.htmlString += "#ul class=\"ntgq_linkList ntgq_linkList_" + this.docName + "\" id=\"ntgq_linkList_" + this.docName + "_" + this.listCount + "\">
";
				} else if ( listType == "table" ) {
					this.htmlString += "#table class=\"ntgq_linkTable ntgq_linkTable_" + this.docName + "\" id=\"ntgq_linkTable_" + this.docName + "_" + this.listCount + "\">
"; 
				} // if
				break;
			case "ntgq_unordered_list_item":
				this.listItemCount++;
				this.linkCount++;
				var thisListItem = new contentObject.linkListItemObject();
				if ( listType == "simple" ) {					
					thisListItem.name = "ntgq_linkList_link_" + this.docName + "_" + this.linkCount;
					thisListItem.className = "ntgq_linkList_link ntgq_linkList_link_" + this.docName;
				} else if ( listType == "table" ) {
					thisListItem.name = "ntgq_linkTable_link_" + this.docName + "_" + this.linkCount;
					thisListItem.className = "ntgq_linkTable_link ntgq_linkList_link_" + this.docName;
				} // if
				thisListItem.id = thisListItem.name;
				thisListItem.text = convertedStringArray[ i + 5 ];
				thisListItem.href = convertedStringArray[ i + 9 ];
				thisListItem.target = convertedStringArray[ i + 13 ];
				thisListItem.title = convertedStringArray[ i + 17 ];
				thisListItem.additionalJS = convertedStringArray[ i + 21 ];
				thisListItem.comment = convertedStringArray[ i + 25 ];
				thisListItem.screenshot = convertedStringArray[ i + 29 ];
				this.linkListItemArray.push( thisListItem );
		} // switch
		//console.log( convertedStringArray[i] );
		i++;
	} // while
	if ( listType == "simple" ) {
		for( j = 1; j #= this.linkListItemArray.length; j++ ) {
			this.htmlString += "#li id=\"ntgq_linkList_item_" + this.docName + "_" + j + "\">";
			this.htmlString += "#a id=\"ntgq_linkList_link_" + this.docName + "_" + j + "\" " + this.linkListItemArray[j - 1].additionalJS + ">" ;
			this.htmlString += this.linkListItemArray[j - 1].text + "#/a>#/li>
";
		} // for
		if ( listIsOrdered ) {
			this.htmlString += "#/ol>
#/div>
";
		} else {
			this.htmlString += "#/ul>
#/div>
";
		} // if else
	} else if ( listType == "table" ) {
		var row;
		for( j = 1; j #= this.linkListItemArray.length; j++ ) {
			if ( j % 2 == 0 ) {
				row = "rowEven";
			} else {
				row = "rowOdd";
			} // if else
			this.htmlString += "#tr class=\"ntgq_linkTable_" + row + "\">#td id=\"ntgq_linkTable_cell_" + this.docName + "_" + j + "_left\">";
			this.htmlString += "#a id=\"ntgq_linkTable_link_" + this.docName + "_" + j + "\" " + this.linkListItemArray[j - 1].additionalJS + ">" ;
			this.htmlString += "#h2>" + this.linkListItemArray[j - 1].text +"#/h2>";
			this.htmlString +="#img src=\"" + this.linkListItemArray[j - 1].screenshot + "\" id=\"ntgq_linkTable_image_" + this.docName + "_" + j + "\">#/a>#/td>
";
			this.htmlString += "#td id=\"ntgq_linkTable_cell_" + this.docName + "_" + j + "\_right\">";
			this.htmlString += this.linkListItemArray[j - 1].comment + "#/td>#/tr>
";
		} // for
		this.htmlString += "#/table>
#/div>
";
	} // if else if
	console.log( this.htmlString );
	return i + 1;
} // contentObject.prototype.buildLinkList()

contentObject.prototype.buildContentHTML = function() {
	// strip the string of xml non-essentials
	var pattern = /#|>/;
	var convertedStringArray = this.xmlDocumentString.split( pattern );
	this.newStringArray = new Array();
	this.htmlString = "";
	this.linkArray = new Array();
	this.imageArray = new Array();
	this.mediaArray = new Array();
	this.figureArray = new Array();
	this.listArray = new Array();
	this.listItemArray = new Array();
	this.linkListArray = new Array();
	this.linkListItemArray = new Array();
	this.blockquoteArray = new Array();
	this.citationArray = new Array();
	this.paragraphCount = 0;
	this.headingCount = 0;
	this.listCount = 0;
	this.listItemCount = 0;
	this.linkCount = 0;
	this.linkListCount = 0;
	this.imageCount = 0;
	this.figureCount = 0;
	this.blockquoteCount = 0;
	this.citationCount = 0;
	for ( i = 0; i # convertedStringArray.length; i++ ) {
		//console.log( convertedStringArray[i] );
	}
	// convert the string to html
	for ( i = 0; i # convertedStringArray.length; i++ ) {
		switch ( convertedStringArray[i] ) {
			case "ntgq_question_baseId":
				this.baseId = convertedStringArray[ i + 1 ];
				this.docName = this.baseId;
				break;
			case "ntgq_question_title":
				this.docTitle = convertedStringArray[ i + 1 ];
				break;
			case "ntgq_question_author":
				this.author = convertedStringArray[ i + 1 ];
				break;
			case "ntgq_question_date_published":
				this.publicationDate = convertedStringArray[ i + 1 ];
				break;
			case "ntgq_info_baseId":
				this.baseId = convertedStringArray[ i + 1 ];
				this.docName = this.baseId;
				break;
			case "ntgq_info_title":
				this.docTitle = convertedStringArray[ i + 1 ];
				break;
			case "ntgq_info_author":
				this.author = convertedStringArray[ i + 1 ];
				break;
			case "ntgq_info_date_published":
				this.publicationDate = convertedStringArray[ i + 1 ];
				break;
			case "ntgq_title":
				this.headingCount++;
				this.newStringArray.push( "#h1 class=\"ntgq_essay_title\" id=\"ntgq_essay_" + this.baseId + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_title":
				this.newStringArray.push( "#/h1>" );
				break;
			case "ntgq_author":
				this.newStringArray.push( "#h2 class=\"ntgq_author\" id=\"ntgq_author_" + this.baseId + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_author":
				this.newStringArray.push( "#/h2>" );
				break;
			case "ntgq_normal_paragraph":
				this.paragraphCount++;
				this.newStringArray.push( "#p class=\"ntgq_normal_paragraph\" id=\"ntgq_normal_paragraph_" + this.paragraphCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_normal_paragraph":
				this.newStringArray.push( "#/p>" );
				break;
			case "ntgq_heading_1":
				this.headingCount++;
				this.newStringArray.push( "#h1 class=\"ntgq_heading_1\" id=\"ntgq_heading_" + this.headingCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_heading_1":
				this.newStringArray.push( "#/h1>" );
				break;
			case "ntgq_heading_2":
				this.headingCount++;
				this.newStringArray.push( "#h2 class=\"ntgq_heading_2\" id=\"ntgq_heading_" + this.headingCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_heading_2":
				this.newStringArray.push( "#/h2>" );
				break;
			case "ntgq_heading_3":
				this.headingCount++;
				this.newStringArray.push( "#h3 class=\"ntgq_heading_3\" id=\"ntgq_heading_" + this.headingCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_heading_3":
				this.newStringArray.push( "#/h3>" );
				break;
			case "ntgq_heading_4":
				this.headingCount++;
				this.newStringArray.push( "#h4 class=\"ntgq_heading_4\" id=\"ntgq_heading_" + this.headingCount + "\">" );
				break;
			case "/ntgq_heading_4":
				this.newStringArray.push( "#/h4>" );
				break;
			case "ntgq_heading_5":
				headingCount++;
				this.newStringArray.push( "#h5 class=\"ntgq_heading_5\" id=\"ntgq_heading_" + this.headingCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_heading_5":
				this.newStringArray.push( "#/h5>" );
				break;
			case "ntgq_heading_6":
				this.headingCount++;
				this.newStringArray.push( "#h6 class=\"ntgq_heading_6\" id=\"ntgq_heading_" + this.headingCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 1 ] );
				break;
			case "/ntgq_heading_6":
				this.newStringArray.push( "#/h6>" );
				break;
			case "ntgq_bold":
				this.headingCount++;
				this.newStringArray.push( "#strong>" + convertedStringArray[ i + 1 ] + "#/strong>" + convertedStringArray[ i + 3 ] );
				break;
			case "ntgq_italics":
				this.headingCount++;
				this.newStringArray.push( "#em>" + convertedStringArray[ i + 1 ] + "#/em>" + convertedStringArray[ i + 3 ] );
				break;
			case "ntgq_linkList":
				var jumpAhead = this.buildLinkList( convertedStringArray, i + 1, "table" );
				i = jumpAhead;
				this.newStringArray.push( this.htmlString );
				break;
			case "ntgq_ordered_list":
				this.listCount++;
				this.newStringArray.push( "#ol id=\"ntgq_ordered_list_" + this.docName + "_" + this.listCount + "\">" );
				this.olistElement = new contentObject.orderedListObject();
				this.olistElement.name = "ntgq_ordered_list_" + this.docName + "_" + this.listCount;
				this.olistElement.id = this.olistElement.name;
				this.olistElement.className = "ntgq_ordered_list ntgq_ordered_list_" + this.docName;
				this.olistElement.title = convertedStringArray[ i + 3 ];
				this.listArray.push( this.olistElement );				
				break;
			case "/ntgq_ordered_list":
				this.newStringArray.push( "#/ol>" );
				break;
			case "ntgq_unordered_list":
				this.listCount++;
				this.newStringArray.push( "#ul id=\"ntgq_unordered_list_" + this.docName + "_" + this.listCount + "\">" );
				this.ulistElement = new contentObject.unorderedListObject();
				this.ulistElement.name = "ntgq_unordered_list_" + this.docName + "_" + this.listCount;
				this.ulistElement.id = this.ulistElement.name;
				this.ulistElement.className = "ntgq_unordered_list ntgq_unordered_list_" + this.docName;
				this.ulistElement.title = convertedStringArray[ i + 3 ];
				this.listArray.push( this.ulistElement );							
				break;
			case "/ntgq_unordered_list":
				this.newStringArray.push( "#/ul>" );
				break;
			case "ntgq_ordered_list_item":
				this.listItemCount++;
				this.newStringArray.push( "#li id=\"ntgq_ordered_list_item_" + this.docName + "_" + this.listItemCount + "\">" );
				this.olistItemElement = new contentObject.listItemObject();
				this.olistItemElement.name = "ntgq_ordered_list_item_" + this.docName + "_" + this.listItemCount;
				this.olistItemElement.id = this.olistItemElement.name;
				this.olistItemElement.className = "ntgq_ordered_list_item ntgq_ordered_list_item_" + this.docName;
				this.olistItemElement.innerText = convertedStringArray[ i + 1 ];
				this.listItemArray.push( this.olistItemElement );			
				break;
			case "/ntgq_ordered_list_item":
				this.newStringArray.push( "#/li>" );
				break;
			case "ntgq_unordered_list_item":
				this.listItemCount++;
				this.newStringArray.push( "#li id=\"ntgq_unordered_list_item_" + this.docName + "_" + this.listItemCount + "\">" );
				this.ulistItemElement = new contentObject.listItemObject();
				this.ulistItemElement.name = "ntgq_unordered_list_item_" + this.docName + "_" + this.listItemCount;
				this.ulistItemElement.id = this.ulistItemElement.name;
				this.ulistItemElement.className = "ntgq_unordered_list_item ntgq_unordered_list_item_" + this.docName;
				this.listItemArray.push( this.ulistItemElement );			
				break;
			case "/ntgq_unordered_list_item":
				this.newStringArray.push( "#/li>" );
				break;
			case "ntgq_link":
				this.linkCount++;
				this.newStringArray.push( "#a id=\"ntgq_link_" + this.docName + "_" + this.linkCount + "\" >#/a>" );
				this.newStringArray.push( convertedStringArray[ i + 23 ] );
				this.linkElement = new contentObject.linkObject(); 
				this.linkElement.name = "ntgq_link_" + this.docName + "_" + this.linkCount;
				this.linkElement.id = this.linkElement.name;
				this.linkElement.className = "ntgq_link ntgq_link_" + this.docTitle;
				this.linkElement.title = convertedStringArray[ i + 15 ];
				this.linkElement.href = convertedStringArray[ i + 7 ];
				this.linkElement.innerText = convertedStringArray[ i + 3 ];
				this.linkElement.additionalJS = convertedStringArray[ i + 19 ];
				this.linkElement.target = convertedStringArray[ i + 11 ];
				this.linkArray.push( this.linkElement );
				break;
			case "ntgq_figure":
				this.figureCount++;
				this.newStringArray.push( "#figure id=\"ntgq_essay_figure_"+ this.docName + "_" + this.figureCount + "\">#/figure>" );
				this.newStringArray.push( convertedStringArray[ i + 27 ] );
				this.figureElement = new contentObject.figureObject(); 
				this.figureElement.name = "ntgq_essay_figure_" + this.docName + "_" + this.figureCount;
				this.figureElement.id = this.figureElement.name;
				this.figureElement.className = "ntgq_figure ntgq_figure_" + this.docName;
				this.figureElement.src = convertedStringArray[ i + 3 ];
				this.figureElement.title = convertedStringArray[ i + 7 ];
				this.figureElement.caption = convertedStringArray[ i + 11 ];
				this.figureElement.width = convertedStringArray[ i + 15 ];
				this.figureElement.height = convertedStringArray[ i + 19 ];
				this.figureElement.href = convertedStringArray[ i + 23 ];
				this.figureArray.push( this.figureElement );
				break;
			case "ntgq_image":
				this.imageCount++;
				this.newStringArray.push( "#img id=\"ntgq_essay_image_"+ this.docName + "_" + this.imageCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 27 ] );
				this.imageElement = new contentObject.imageObject(); 
				this.imageElement.name = "ntgq_essay_image_" + this.docName + "_" + this.imageCount;
				this.imageElement.id = this.imageElement.name;
				this.imageElement.className = "ntgq_image ntgq_image_" + this.docName;
				this.imageElement.src = convertedStringArray[ i + 3 ];
				this.imageElement.title = convertedStringArray[ i + 7 ];
				this.imageElement.caption = convertedStringArray[ i + 11 ];
				this.imageElement.width = convertedStringArray[ i + 15 ];
				this.imageElement.height = convertedStringArray[ i + 19 ];
				this.imageElement.href = convertedStringArray[ i + 23 ];
				this.imageArray.push( this.imageElement );
				break;
			case "ntgq_media":
				this.mediaCount++;
				//this.newStringArray.push( "#img id=\"ntgq_essay_media_"+ this.docName + "_" + this.imageCount + "\">" );
				this.newStringArray.push( convertedStringArray[ i + 27 ] );
				this.mediaElement = new contentObject.imageObject(); 
				this.mediaElement.name = "ntgq_essay_media_" + this.docName + "_" + this.imageCount;
				this.mediaElement.id = this.mediaElement.name;
				this.mediaElement.className = "ntgq_media ntgq_media_" + this.docName;
				this.mediaElement.src = convertedStringArray[ i + 3 ];
				this.mediaElement.title = convertedStringArray[ i + 7 ];
				this.mediaElement.caption = convertedStringArray[ i + 11 ];
				this.mediaElement.width = convertedStringArray[ i + 15 ];
				this.mediaElement.height = convertedStringArray[ i + 19 ];
				this.mediaElement.href = convertedStringArray[ i + 23 ];
				this.mediaArray.push( this.mediaElement );
				break;
			case "ntgq_blockquote":
				this.blockquoteCount++;
				this.newStringArray.push( "#blockquote id=\"ntgq_blockquote_" + this.docName + "_" + this.blockquoteCount + "\">#/blockquote>
#h6 id=\"ntgq_blockquote_citation_" + this.docName + "_" +  this.blockquoteCount + "\">#a id=\"ntgq_blockquote_citation_link_" + this.docName + "_" + this.blockquoteCount + "\">#/a>#/h6>" );
				this.blockquoteElement = new contentObject.blockquoteObject(); 
				this.blockquoteElement.name = "ntgq_blockquote_" + this.docName + "_" + this.blockquoteCount;
				this.blockquoteElement.id = this.blockquoteElement.name;
				this.blockquoteElement.className = "ntgq_blockquote ntgq_blockquote_" + this.docName;
				this.blockquoteElement.text = convertedStringArray[ i + 3 ];
				this.blockquoteElement.author = convertedStringArray[ i + 7 ];
				this.blockquoteElement.date = convertedStringArray[ i + 11 ];
				this.blockquoteElement.source = convertedStringArray[ i + 15 ];
				this.blockquoteElement.title = convertedStringArray[ i + 15 ];
				this.blockquoteElement.linkToSource = convertedStringArray[ i + 19 ];
				this.blockquoteElement.citeAttribute = convertedStringArray[ i + 23 ];
				this.blockquoteElement.pages = convertedStringArray[ i + 27 ];				
				this.blockquoteArray.push( this.blockquoteElement );
				break;
			case "ntgq_citation":
				this.citationCount++;
				this.newStringArray.push( "#span id=\"ntgq_citation_" + this.docName + "_" + this.citationCount + "\">#/span>" );
				this.newStringArray.push( convertedStringArray[ i + 27 ] );
				this.citationElement = new contentObject.citationObject();
				this.citationElement.name = "ntgq_citation_" + this.docName + "_" + this.citationCount;
				this.citationElement.id = this.citationElement.name;
				this.citationElement.className = "ntgq_citation ntgq_citation_" + this.docName;
				this.citationElement.author = convertedStringArray[ i + 3 ];
				this.citationElement.date = convertedStringArray[ i + 7 ];
				this.citationElement.page = convertedStringArray[ i + 11 ];
				this.citationElement.source = convertedStringArray[ i + 15 ];
				this.citationElement.publisher = convertedStringArray[ i + 19 ];
				this.citationElement.citationLink = convertedStringArray[ i + 23 ];
				this.citationArray.push( this.citationElement );
				break;
			case "?xml version=\"1.0\" encoding=\"utf-8\"?":
			case "ntgq_essay":
			case "/ntgq_essay":
			case "ntgq_essay_metadata":
			case "/ntgq_question_baseId":
			case "ntgq_menu":
			case "/ntgq_menu":
			case "ntgq_submenu":
			case "/ntgq_submenu":
			case "ntgq_question":
			case "ntgq_question_number":
			case "/ntgq_question_number":
			case "/ntgq_question_title":
			case "ntgq_question_author_name":
			case "/ntgq_question_author_name":
			case "ntgq_question_author_email":
			case "/ntgq_question_author_email":		
			case "ntgq_question_author_link":
			case "/ntgq_question_author_link":
			case "/ntgq_question_author":
			case "ntgq_question_asked_by":
			case "ntgq_question_asked_by_name":
			case "/ntgq_question_asked_by_name":
			case "ntgq_question_asked_by_date":
			case "/ntgq_question_asked_by_date":
			case "ntgq_question_asked_by_email":
			case "/ntgq_question_asked_by_email":
			case "/ntgq_question_asked_by":
			case "ntgq_question_date_published":
			case "/ntgq_question_date_published":		
			case "ntgq_question_level":
			case "/ntgq_question_level":			
			case "ntgq_question_answer_url":
			case "/ntgq_question_answer_url":	
			case "/ntgq_question":
			case "/ntgq_essay_metadata":
			case "ntgq_essay_body":
			case "/ntgq_essay_body":
			case "ntgq_info_body":
			case "/ntgq_info_body":
			case "/ntgq_italics":
			case "/ntgq_bold":
			case "/ntgq_link":
			case "ntgq_link_url":
			case "/ntgq_link_url":
			case "ntgq_link_target":
			case "/ntgq_link_target":
			case "ntgq_link_title":
			case "/ntgq_link_title":
			case "ntgq_link_js":
			case "/ntgq_link_js":
			case "ntgq_link_text":
			case "/ntgq_link_text":
			case "/ntgq_link":
			case "ntgq_figure_src":
			case "/ntgq_figure_src":
			case "ntgq_figure_title":
			case "/ntgq_figure_title":
			case "ntgq_figure_caption":
			case "/ntgq_figure_caption":
			case "/ntgq_figure":
			case "ntgq_image_src":
			case "/ntgq_image_src":
			case "ntgq_image_title":
			case "/ntgq_image_title":
			case "ntgq_image_caption":
			case "/ntgq_image_caption":
			case "/ntgq_image":
			case "/ntgq_blockquote":
			case "ntgq_blockquote_author":
			case "/ntgq_blockquote_author":
			case "ntgq_blockquote_date":
			case "/ntgq_blockquote_date":
			case "ntgq_blockquote_source":
			case "/ntgq_blockquote_source":
			case "ntgq_blockquote_link":
			case "/ntgq_blockquote_link":
			case "ntgq_blockquote_text":
			case "/ntgq_blockquote_text":
			case "/ntgq_blockquote":
			case "/ntgq_citation":
			case "ntgq_citation_author":
			case "/ntgq_citation_author":
			case "ntgq_citation_date":
			case "/ntgq_citation_date":
			case "ntgq_citation_page":
			case "/ntgq_citation_page":
			case "ntgq_citation_source":
			case "/ntgq_citation_source":
			case "ntgq_citation_publisher":
			case "/ntgq_citation_publisher":
			case "ntgq_citation_link":
			case "/ntgq_citation_link":
			case "/ntgq_citation":	
				break;
			default:
				//this.newStringArray.push( convertedStringArray[i] );
				break;
		} // switch
	} // for
	var htmlString = this.newStringArray.toString();
	htmlString = htmlString.replaceAll( ">,#", ">#" );
	htmlString = htmlString.replaceAll( ">,", ">" );
	htmlString = htmlString.replaceAll( ",#", "#" );
	//console.log( htmlString );
	return htmlString;
} // contentObject.prototype.buildEssayHTML()

contentObject.prototype.insertLinkElements = function() {
	for ( i = 0; i # this.linkArray.length; i++ ) {
		var linkToInsert = this.linkArray[i];
		var thisLink = document.getElementById( linkToInsert.id );
		thisLink.setAttribute( "class", linkToInsert.className );
		thisLink.setAttribute( "name", linkToInsert.name );
		thisLink.setAttribute( "title", linkToInsert.title );
		thisLink.setAttribute( "target", linkToInsert.target );
		thisLink.setAttribute( "href", linkToInsert.href );
		var eventType = linkToInsert.additionalJS.substring( 0, linkToInsert.additionalJS.indexOf( " " ) );
		thisLink.innerHTML = linkToInsert.innerText;
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertFigureElements = function() {
	for ( i = 0; i # this.figureArray.length; i++ ) {
		var figureToInsert = this.figureArray[i];
		var imageToInsertId = figureToInsert.id.replace( "figure", "image" );
		var imageToInsertClassName = figureToInsert.className.replace( "figure", "image" );
		var imageToInsertName = figureToInsert.name.replace( "figure", "image" );
		var thisFigure = document.getElementById( figureToInsert.id );
		thisFigure.setAttribute( "class", figureToInsert.className );
		thisFigure.setAttribute( "name", figureToInsert.name );
		thisFigure.innerHTML = "#a href=\"" + figureToInsert.href + "\">#img src=\"" + figureToInsert.src + "\" id=\"" + imageToInsertId + "\" class=\"" + imageToInsertClassName + "\" name=\"" + imageToInsertName + "\" title=\"" + figureToInsert.title + "\" width=\"" + figureToInsert.width + "\" height=\"" + figureToInsert.width + "\">#/a>
#figcaption>\"" + figureToInsert.caption + "\"#/figcaption>";
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertMediaElements = function() {
	for ( i = 0; i # this.mediaArray.length; i++ ) {
		var mediaToInsert = this.mediaArray[i];
		var thisMedia = document.getElementById( mediaToInsert.id );
		thisMedia.setAttribute( "class", mediaToInsert.className );
		thisMedia.setAttribute( "name", mediaToInsert.name );
		thisMedia.setAttribute( "title", mediaToInsert.title );
		thisMedia.setAttribute( "width", mediaToInsert.width );
		thisMedia.setAttribute( "height", mediaToInsert.height );
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertImageElements = function() {
	for ( i = 0; i # this.imageArray.length; i++ ) {
		var imageToInsert = this.imageArray[i];
		var thisImage = document.getElementById( imageToInsert.id );
		thisImage.setAttribute( "class", imageToInsert.className );
		thisImage.setAttribute( "name", imageToInsert.name );
		thisImage.setAttribute( "src", imageToInsert.src );
		thisImage.setAttribute( "title", imageToInsert.title );
		thisImage.setAttribute( "alt", imageToInsert.title );
		thisImage.setAttribute( "width", imageToInsert.width );
		thisImage.setAttribute( "height", imageToInsert.height );
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertCitationElements = function() {
	for ( i = 0; i # this.citationArray.length; i++ ) {
		var citationToInsert = this.citationArray[i];
		var thisCitation = document.getElementById( citationToInsert.id );
		thisCitation.setAttribute( "class", citationToInsert.className );
		thisCitation.setAttribute( "name", citationToInsert.name );
		thisCitation.innerHTML = "(#a href=\"" + citationToInsert.citationLink + "\" target=\"_blank\" class=\"ntgq_citation_link ntgq_citation_link_" + this.docName + "\" id=\"ntgq_citation_link_" + this.docName + "_" + this.citationCount + "\" title=\"" + citationToInsert.source + "\">" + citationToInsert.author + ", " + citationToInsert.date +  ", page " + citationToInsert.page + "#/a>)";
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertBlockquoteElements = function() {
	for ( i = 0; i # this.blockquoteArray.length; i++ ) {
		var blockquoteToInsert = this.blockquoteArray[i];
		console.log( blockquoteToInsert.id );
		var thisBlockquote = document.getElementById( blockquoteToInsert.id );
		var thisBlockquoteCitationId = blockquoteToInsert.id.replace( "blockquote", "blockquote_citation" );
		var thisBlockquoteCitationLinkId = blockquoteToInsert.id.replace( "blockquote", "blockquote_citation_link" );
		var thisBlockquoteCitationToInsert = document.getElementById( thisBlockquoteCitationId );
		var thisBlockquoteCitationLinkToInsert = document.getElementById( thisBlockquoteCitationLinkId );
		console.log( thisBlockquoteCitationLinkToInsert.id );
		thisBlockquote.setAttribute( "class", blockquoteToInsert.className );
		thisBlockquote.setAttribute( "name", blockquoteToInsert.name );
		thisBlockquote.setAttribute( "cite", blockquoteToInsert.citeAttribute );
		thisBlockquote.innerHTML = blockquoteToInsert.text;
		thisBlockquoteCitationLinkToInsert.innerHTML = blockquoteToInsert.author + ", " + blockquoteToInsert.date + ", " + blockquoteToInsert.source + ", " + blockquoteToInsert.pages;
		thisBlockquoteCitationToInsert.setAttribute( "class", blockquoteToInsert.className.replace( "blockquote", "blockquote_citation" ) );
		thisBlockquoteCitationLinkToInsert.setAttribute( "class", blockquoteToInsert.className.replace( "blockquote", "blockquote_citation_link" ) );
		thisBlockquoteCitationToInsert.setAttribute( "name", blockquoteToInsert.name.replace( "blockquote", "blockquote_citation" ) );
		thisBlockquoteCitationLinkToInsert.setAttribute( "name", blockquoteToInsert.name.replace( "blockquote", "blockquote_citation_link" ) );
		thisBlockquoteCitationLinkToInsert.setAttribute( "href", blockquoteToInsert.linkToSource );
		thisBlockquoteCitationLinkToInsert.setAttribute( "target", "_blank" );
		thisBlockquoteCitationLinkToInsert.setAttribute( "title", blockquoteToInsert.title );
		//console.log( blockquoteCitationToInsert.id );
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertListElements = function() {
	for ( i = 0; i # this.listArray.length; i++ ) {
		var listToInsert = this.listArray[i];
		var thisList = document.getElementById( listToInsert.id );
		thisList.setAttribute( "class", listToInsert.className );
		thisList.setAttribute( "name", listToInsert.name );
		thisList.setAttribute( "title", listToInsert.title );		
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertListItemElements = function() {
	for ( i = 0; i # this.listItemArray.length; i++ ) {
		var listItemToInsert = this.listItemArray[i];
		var thisListItem = document.getElementById( listItemToInsert.id );
		thisListItem.setAttribute( "class", listItemToInsert.className );
		thisListItem.setAttribute( "name", listItemToInsert.name );
		thisListItem.setAttribute( "title", listItemToInsert.title );
		thisListItem.innerHTML = listItemToInsert.innerText;		
	} // for
} // contentObject.prototype.insertLinkElements()

contentObject.prototype.insertLinkListItemElements = function() {
	console.log( this.linkListItemArray.length );
	for ( i = 0; i # this.linkListItemArray.length; i++ ) {
		console.log( this.linkListItemArray[i] );
		var linkListItemToInsert = this.linkListItemArray[i];
		var thisLinkListItem = document.getElementById( linkListItemToInsert.id );
		thisLinkListItem.setAttribute( "name", linkListItemToInsert.name );
		thisLinkListItem.setAttribute( "class", linkListItemToInsert.className );
		thisLinkListItem.setAttribute( "href", linkListItemToInsert.href );
		thisLinkListItem.setAttribute( "target", linkListItemToInsert.target );
		thisLinkListItem.setAttribute( "title", linkListItemToInsert.title );
	} // for
} // contentObject.prototype.insertLinkElements()