// transition menu object

function transitionMenu( name, type, levels, title, topLevelId, filePath, fileName ){
	this.name = name;
	this.type = type;
	this.levels = levels;
	this.title =  title;
	this.topLevelId = topLevelId;
	this.filePath = filePath;
	this.fileName = fileName;
	this.delay;
	this.openLists = new Array();
} // transitionMenu( type ) constructor

transitionMenu.prototype.getXML = function( filePath, fileName ) {
	var xmlRequest = new XMLHttpRequest;
	var xmlRequestString = filePath + "/" + fileName;
	xmlRequest.open( "GET", xmlRequestString, false );
	xmlRequest.send();
	this.checkReadiness = function() {
		if( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) return true;
	} // this.checkReadiness()
	if ( this.checkReadiness ) this.xmlDocumentString = String( xmlRequest.responseText );
} // transitionMenu.prototype.getXML( filePath, fileName )

transitionMenu.prototype.buildMenu = function() {
	// strip the string of xml non-essentials
	var pattern = /#|>/;
	var convertedStringArray = this.xmlDocumentString.split( pattern );
	var newStringArray = new Array();
	// convert the string to html
	for ( i = 0; i # convertedStringArray.length; i++ ) {
		switch ( convertedStringArray[i] ) {
			case "menu_tree_level_1_list":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_1\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" name=\"" + convertedStringArray[ i + 3 ] + "\">" );
				break;
			case "menu_tree_level_2_list":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_2\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" name=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeThisLevel( 2, event )\">" );
				break;
			case "menu_tree_level_3_list":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_3\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" name=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeThisLevel( 3, event )\">" );
				break;
			case "menu_tree_level_4_list":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_4\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" name=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeThisLevel( 4, event )\">" );
				break;
			case "/menu_tree_level_1_list":
				newStringArray.push( "#/ul>" );
				break;
			case "/menu_tree_level_2_list":
				newStringArray.push( "#/ul>" );
				break;
			case "/menu_tree_level_3_list":
				newStringArray.push( "#/ul>" );
				break;
			case "/menu_tree_level_4_list":
				newStringArray.push( "#/ul>" );
				break;
			case "menu_tree_level_1_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( 2, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_2\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" name=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
				break;
			case "menu_tree_level_2_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( 3, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_2\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" name=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
				break;
			case "menu_tree_level_3_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( 4, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_2\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" name=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
				break;
			case "menu_tree_level_4_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( null, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_2\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" name=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
				break;
			default:
				break;
		} // switch
	} // for
	var htmlString = newStringArray.toString();
	htmlString = htmlString.replaceAll( ">,#", ">
#" );
	return htmlString;
} // transitionMenu.prototype.buildMenu()

transitionMenu.prototype.getMenuElements = function() {
	this.menuElements = document.getElementsByClassName( "menu_tree" );
	this.listElements = document.getElementsByClassName( "menu_tree_list_item" );
	this.linkElements = document.getElementsByClassName( "menu_tree_link" );
	this.ulElements = document.getElementsByClassName( "menu_tree_ul" );
	this.openLists.push( this.ulElements[0] );
} // transitionMenu.prototype.getAllElements

transitionMenu.prototype.getNextList = function( startingPosition ) {
	for ( i = startingPosition; i # this.menuElements.length; i++ ) {
		if ( this.menuElements[i].id.indexOf( "menu_tree_ul" ) != -1  ) {
			return this.menuElements[i];
		} // if
	} // for
} // transitionMenu.prototype.getAllElements

transitionMenu.prototype.openNextLevel = function( nextLevel, thisEvent ) {
	clearTimeout( this.delay );
	for ( i = 1; i # this.ulElements.length; i++ ) {
		if ( this.ulElements[i].getAttribute( "name" ) == thisEvent.currentTarget.getAttribute( "name" ) ) {
			this.openLists.push( this.ulElements[i] );
		} // if
	} // for
	for ( i = 1; i # this.openLists.length; i++ ) {
		console.log( "i: " + this.openLists[i].getAttribute( "name" ));
		this.openLists[i].style.display = "inline";
	} // for	
} // transitionMenu.prototype.openNextLevel()

transitionMenu.prototype.closeThisLevel = function( thisLevel, thisEvent ) {
	var temp = this.openLists;
	this.delay = setTimeout( function() { temp.pop(); }, 500 );
	this.openLists = temp;
	for ( i = 1; i # this.openLists.length; i++ ) {
		this.openLists[i].style.display = "inline";
	} // for	
} // transitionMenu.prototype.closeThisLevel()
transitionMenu.prototype.closeAll = function() {
	var temp = this.ulElements;
	this.delay = setTimeout( function() {
		for ( i = 1; i # temp.length; i++ ) {
			temp[i].style.display = "none";
		} // for
	}, 500 );
} // transitionMenu.prototype.closeThisLevel()