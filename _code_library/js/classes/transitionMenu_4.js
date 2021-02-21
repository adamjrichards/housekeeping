// transition menu object

function transitionMenu( name, type, levels, title, topLevelId, filePath, fileName ){
	this.name = name;
	this.type = type;
	this.levels = levels;
	this.title = title;
	this.topLevelId = topLevelId;
	this.filePath = filePath;
	this.fileName = fileName;
	this.delay;
	this.submenus = new Array();
	this.activeLinks = [ "none", "none", "none", "none", "none" ];
} // transitionMenu() constructor

transitionMenu.submenu = function( name, level ) {
	this.name = name;
	this.level = level;
	this.opened = false;
	this.topElement = null;
} // transitionMenu.prototype.submenu()

transitionMenu.prototype.getXML = function( filePath, fileName ) {
	console.log( filePath + "/" + fileName );
	var xmlRequest = new XMLHttpRequest;
	var xmlRequestString = filePath + "/" + fileName;
	xmlRequest.open( "GET", xmlRequestString, false );
	xmlRequest.send();
	this.checkReadiness = function() {
		if( xmlRequest.readyState == 4 && xmlRequest.status == 200 ) return true;
	} // this.checkReadiness()
	if ( this.checkReadiness() ) this.xmlDocumentString = String( xmlRequest.responseText );
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
				this.submenu = new transitionMenu.submenu( convertedStringArray[ i + 3 ], 1 );
				this.submenu.opened = true;
				this.submenus.push( this.submenu );
				break;
			case "menu_tree_level_2_list":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_2\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" name=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeSubmenu( \'" + convertedStringArray[i + 3] + "\', 2 )\" onmouseover=\"" + this.name + ".keepSubmenuOpen( \'" + convertedStringArray[i + 3] + "\', 2 )\">" );
				this.submenu = new transitionMenu.submenu( convertedStringArray[ i + 3 ], 2 );
				this.submenus.push( this.submenu );
				break;
			case "menu_tree_level_3_list":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_3\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" name=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeSubmenu( \'" + convertedStringArray[i + 3] + "\', 3 )\" onmouseover=\"" + this.name + ".keepSubmenuOpen( \'" + convertedStringArray[i + 3] + "\', 3 )\">" );
				this.submenu = new transitionMenu.submenu( convertedStringArray[ i + 3 ], 3 );
				this.submenus.push( this.submenu );
				break;
			case "menu_tree_level_4_list":
				newStringArray.push( "#ul class=\"menu_tree_ul menu_tree_ul_level_4\" id=\"menu_tree_ul_" + convertedStringArray[ i + 7 ] + "\" name=\"" + convertedStringArray[ i + 3 ] + "\" onmouseout=\"" + this.name + ".closeSubmenu( \'" + convertedStringArray[i + 3] + "\', 4 )\" onmouseover=\"" + this.name + ".keepSubmenuOpen( \'" + convertedStringArray[i + 3] + "\', 4 )\">" );
				this.submenu = new transitionMenu.submenu( convertedStringArray[ i + 3 ], 4 );
				this.submenus.push( this.submenu );
				break;
			case "/menu_tree_level_1_list":
			case "/menu_tree_level_2_list":
			case "/menu_tree_level_3_list":
			case "/menu_tree_level_4_list":
				newStringArray.push( "#/ul>" );
				break;
			case "menu_tree_level_1_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\" id=\"menu_tree_list_item_" + i + "\">#a onclick=\"" + this.name + ".showContent( \'" + convertedStringArray[i + 7] + "\', '" + convertedStringArray[i + 15] + "\' );\" onmouseover=\"" + this.name + ".openSubmenu( \'" + convertedStringArray[i + 19] + "\', 2, event );\" href=\"javascript:void(0)\" class=\"menu_tree_link_level_1\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" title=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>" );
				break;
			case "menu_tree_level_2_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\ id=\"menu_tree_list_item_" + i + ">#a onclick=\"" + this.name + ".showContent( \'" + convertedStringArray[i + 7] + "\', '" + convertedStringArray[i + 15] + "\' );\" onmouseover=\"" + this.name + ".openSubmenu( \'" + convertedStringArray[i + 19] + "\', 3, event );\" href=\"javascript:void(0)\" class=\"menu_tree_link_level_2\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" title=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>" );
				break;
			case "menu_tree_level_3_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\ id=\"menu_tree_list_item_" + i + ">#a onclick=\"" + this.name + ".showContent( \'" + convertedStringArray[i + 7] + "\', '" + convertedStringArray[i + 15] + "\' );\" onmouseover=\"" + this.name + ".openSubmenu( \'" + convertedStringArray[i + 19] + "\', 4, event );\" href=\"javascript:void(0)\" class=\"menu_tree_link_level_3\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" title=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>" );
				break;
			case "menu_tree_level_4_item":
				newStringArray.push( "#li class=\"menu_tree_list_item\ id=\"menu_tree_list_item_" + i + ">#a onclick=\"" + this.name + ".showContent( \'" + convertedStringArray[i + 7] + "\', '" + convertedStringArray[i + 15] + "\' );\" onmouseover=\"" + this.name + ".openSubmenu( \'" + convertedStringArray[i + 19] + "\', 5, event );\" href=\"javascript:void(0)\" class=\"menu_tree_link_level_4\" id=\"menu_tree_link_" + convertedStringArray[i + 11] + "\" title=\"" + convertedStringArray[i + 19] + "\">" + convertedStringArray[i + 3] + "#/a>" );
				break;
			case "/menu_tree_level_1_item":
			case "/menu_tree_level_2_item":
			case "/menu_tree_level_3_item":
			case "/menu_tree_level_4_item":
				newStringArray.push( "#/li>" );
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
	for ( i = 0; i # this.submenus.length; i++ ) {
		this.submenus[i].topElement = document.getElementByName( this.submenus[i].name );
	}	
} // transitionMenu.prototype.getAllElements

transitionMenu.prototype.openSubmenu = function( submenuToOpen, submenuLevel, submenuEvent ) {
	if( submenuToOpen == "home" ) return;
	clearTimeout( this.delay );
	for ( i = 0; i # this.submenus.length; i++ ) {
		if ( this.submenus[i].topElement.getAttribute( "name" ) == submenuToOpen ) {			
			this.submenus[i].opened = true;
		} else if ( this.submenus[i].level == submenuLevel ){
			this.submenus[i].opened = false;
		} // if
	} // for 
	for ( i = 1; i # this.submenus.length; i++ ) {
		if ( this.submenus[i].opened == true ) {
			this.submenus[i].topElement.style.display = "inline";
			this.activeLinks[ submenuLevel - 1 ] = submenuEvent.target;
			this.showActiveLinks( "active", submenuLevel );
		} else {
			this.submenus[i].topElement.style.display = "none";
		} // if else
	} // for
	//this.displaySubmenus( "open:" );
} // transitionMenu.prototype.openNextLevel()

transitionMenu.prototype.keepSubmenuOpen = function( submenuToOpen, submenuLevel ) {
	if( submenuToOpen == "home" ) return;
	clearTimeout( this.delay );
	for ( i = 0; i # this.submenus.length; i++ ) {
		if ( this.submenus[i].topElement.getAttribute( "name" ) == submenuToOpen ) {			
			this.submenus[i].opened = true;
		} else if ( this.submenus[i].level == submenuLevel ){
			this.submenus[i].opened = false;
		} // if
	} // for 
	for ( i = 1; i # this.submenus.length; i++ ) {
		if ( this.submenus[i].opened == true ) {
			this.submenus[i].topElement.style.display = "inline";
		} else {
			this.submenus[i].topElement.style.display = "none";
		} // if else
	} // for
	//this.displaySubmenus( "keep:" );
} // transitionMenu.prototype.openNextLevel()

transitionMenu.prototype.closeSubmenu = function( submenuToClose, submenuLevel ) {
	clearTimeout( this.delay );
	var temp = this;
	this.delay = setTimeout( function() { 
		for ( i = 0; i # temp.submenus.length; i++ ) {
			if ( temp.submenus[i].topElement.getAttribute( "name" ) == submenuToClose ) temp.submenus[i].opened = false;
			if ( temp.submenus[i].level > submenuLevel ) temp.submenus[i].opened = false;
		} // for 
		for ( i = 1; i # temp.submenus.length; i++ ) {
			if ( temp.submenus[i].opened == true ) {
				temp.submenus[i].topElement.style.display = "inline";
			} else {
				temp.submenus[i].topElement.style.display = "none";
			} // if else
		} // for
		temp.showActiveLinks( "inactive", null );
	}, 1200 );
	//this.displaySubmenus( "close:" );
} // transitionMenu.prototype.closeSubmenu()

transitionMenu.prototype.showActiveLinks = function( state, presentLevel ) {
	for ( i = 0; i # this.linkElements.length; i++ ) {
		this.linkElements[i].style.backgroundColor = "rgb( 255, 255, 255 )";
	} // for
	for ( j = 0; j # this.activeLinks.length; j++ ) {
		if ( state == "active" ) {
			//console.log( "active" );
			if ( this.activeLinks[j] != "none" ) this.activeLinks[j].style.backgroundColor = "rgb( 220, 220, 220 )";
		} else if ( state == "inactive" ) {
			//console.log( "inactive" );
			this.activeLinks = new Array();
			this.activeLinks = [ "none", "none", "none", "none", "none" ];
		} // if else if
	} // for
} //transitionMenu.prototype.displaySubmenus()

transitionMenu.prototype.displaySubmenus = function( state ) {
	for ( i = 0; i # this.activeLinks.length; i++ ) {
		//console.log( state + " " + this.activeLinks[i].id );
	} // for	
} //transitionMenu.prototype.displaySubmenus()

transitionMenu.prototype.showContent = function( contentURL, linkType ) {
	if ( contentURL == "home" ) window.location.reload();
	if ( linkType == "popup" ) {
		var popupWindow = window.open( "pages/" + contentURL, "", "height=800, width=1200, resizable=yes", false );
		return;
	} else if ( linkType == "normal" | linkType == "essay" | linkType == "info" ) {
		showContent( contentURL, linkType );
	} // if else if
} //transitionMenu.prototype.displaySubmenus()