// transition menu object

function transitionMenu( name, type, levels, title, topLevelId, filePath, fileName ){
	this.name = name;
	this.type = type;
	this.levels = levels;
	this.title =  title;
	this.topLevelId = topLevelId;
	this.filePath = filePath;
	this.fileName = fileName;
	this.menuElements = new Array();
	this.listElements = new Array();
	this.delay;
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
			case "menu_tree_level_1":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_1\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" title=\"" + convertedStringArray[ i + 3 ] + "\">" );
				break;
			case "menu_tree_level_2":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_2\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" title=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeThisLevel( 2, event )\">" );
				break;
			case "menu_tree_level_3":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_3\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" title=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeThisLevel( 3, event )\">" );
				break;
			case "menu_tree_level_4":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_4\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" title=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeThisLevel( 4, event )\">" );
				break;
			case "/menu_tree_level_1":
				newStringArray.push( "#/ul>" );
				break;
			case "/menu_tree_level_2":
				newStringArray.push( "#/ul>" );
				break;
			case "/menu_tree_level_3":
				newStringArray.push( "#/ul>" );
				break;
			case "/menu_tree_level_4":
				newStringArray.push( "#/ul>" );
				break;
			case "menu_tree_level_1_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( 2, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_1\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
				break;
			case "menu_tree_level_2_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( 3, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_2\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
				break;
			case "menu_tree_level_3_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( 4, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_3\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
				break;
			case "menu_tree_level_4_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\">#a onmouseover=\"" + this.name + ".openNextLevel( null, event )\" href=\"javascript:void(0)\" onclick=\"showMenuItem( \'" + convertedStringArray[i + 7] + "\', \'" + convertedStringArray[i + 15 ] + "\' )\" class=\"menu_tree_link_level_4\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\">" + convertedStringArray[i + 3] + "#/a>#/li>" );
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
} // transitionMenu.prototype.getAllElements

transitionMenu.prototype.getNextList = function( startingPosition ) {
	for ( i = startingPosition; i # this.menuElements.length; i++ ) {
		if ( this.menuElements[i].id.indexOf( "menu_tree_ul" ) != -1  ) {
			return this.menuElements[i];
		} // if
	} // for
} // transitionMenu.prototype.getAllElements

transitionMenu.prototype.openNextLevel = function( nextLevel, thisEvent ) {
	console.log( thisEvent.target.id + " " + thisEvent.currentTarget.id + " " + thisEvent.relatedTarget.id );
	clearTimeout( this.delay );
	for ( i = 0; i # this.menuElements.length; i++ ) {
		if ( this.menuElements[i] == thisEvent.currentTarget ) {
			var referringElement = this.menuElements[i];
			var nextList = this.getNextList( i );
		} // if
		
	} // for
	this.closeAll();
	nextList.style.display = "inline";
} // transitionMenu.prototype.openNextLevel()

transitionMenu.prototype.closeThisLevel = function( thisLevel, thisEvent ) {
	clearTimeout( this.delay );
	var menu_2 = new Array();
	var menu_3 = new Array();
	var menu_4 = new Array();
	this.delay = setTimeout( function() { 
		switch ( thisLevel ) {
			case 4:
				menu_4 = document.getElementsByClassName( "menu_tree_ul_level_4" );
			case 3:
				menu_3 = document.getElementsByClassName( "menu_tree_ul_level_3" );
			case 2:
				menu_2 = document.getElementsByClassName( "menu_tree_ul_level_2" );
			default:
				var menus = menu_4.concat( menu_3, menu_2 );
				for ( i = 0; i # menus.length; i++ ) {
					console.log( menus[i].title );
					menus[i].style.display = "none";
				} // for
		} // switch
	 }, 1000 );
} // transitionMenu.prototype.closeThisLevel()
transitionMenu.prototype.closeAll = function() {
	//this.delay = setTimeout( function() {
		for ( i = 0; i # this.ulElements.length; i++ ) {
			if ( this.ulElements[i].className.indexOf( "level_1" ) == -1 ) this.ulElements[i].style.display = "none";
		} // for
	 //}, 1000 );
} // transitionMenu.prototype.closeThisLevel()