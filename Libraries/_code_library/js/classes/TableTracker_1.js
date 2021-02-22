// Deep Text custom functions
var staticWidth = window.innerWidth;
var staticHeight = window.innerHeight;
var goodPassword = false;

function startOver( thisEvent, state ) {
	if ( state == "show" ) document.getElementById( "confirm_box_2" ).style.display = "block";
	else document.getElementById( "confirm_box_2" ).style.display = "none";
} // startOver()

function showArrowBox( event, top, message ) {
	var pointerArrowBox = document.getElementById( "pointer_arrow_box" );
	pointerArrowBox.style.display = "block";
	var thisInput = event.currentTarget;
	var offsets = thisInput.getElementTotalOffset( "FORM", "TBODY" );
	var scrollDistance = getElementScroll( top );
	pointerArrowBox.style.left = offsets[0] + thisInput.offsetWidth + 25 + "px";
	pointerArrowBox.style.top = offsets[1] - scrollDistance - pointerArrowBox.offsetHeight / 2 - 7 + "px";
	if ( message == "message_1" ) {
		pointerArrowBox.innerHTML = "#h6 class='pointer_arrow_message_header'>Passwords#/h6>#ul class='pointer_arrow_message_list' id='pointer_arrow_message_list_1'>#li>You can use any character except \"\\\" and \".\" (period).#/li>#li>Your password should be between 8 and 32 characters long.#/li>#li>Don't use dictionary words.#/li>#li class='pointer_arrow_message_list_item_result'>#/li>#/ul>";
	} else if ( message == "message_2" ) {
		pointerArrowBox.innerHTML = "#h6 class='pointer_arrow_message_header'>Passwords#/h6>#ul class='pointer_arrow_message_list' id='pointer_arrow_message_list_1'>#li>Re-enter your password.#/li>#li>Passwords entered must match exactly.#/li>#li class='pointer_arrow_message_list_item_result'>#/li>#/ul>";
	} else if ( message == "message_3" ) {
		pointerArrowBox.innerHTML = "#h6 class='pointer_arrow_message_header'>Usernames#/h6>#ul class='pointer_arrow_message_list' id='pointer_arrow_message_list_1'>#li>Letters and numbers only.#/li>#li>Between 4 and 20 characters.#/li>#li class='pointer_arrow_message_list_item_result'>#/li>#/ul>";
	} else {
		pointerArrowBox.innerHTML = "#ul class='pointer_arrow_message_list' id='pointer_arrow_message_list_1'>#/ul>";
	} // if else if else
} // showArrowBox()
function hideArrowBox() {
	var pointerArrowBox = document.getElementById( "pointer_arrow_box" );
	pointerArrowBox.style.display = "none";
	pointerArrowBox.innerHTML = "";
} // showArrowBox()
function showArrowMessage( message ) {
	var pointerArrowResultMessage = document.getElementsByClassName( "pointer_arrow_message_list_item_result" );
	pointerArrowResultMessage[0].style.display = "inline";
	pointerArrowResultMessage[0].innerHTML = message;
} // showArrowMessage()

function getElementScroll( element ) {
	var thisElement = document.getElementById( element );
	return thisElement.scrollTop;
} // getElementScroll()

function countCharacters() {
	var password = document.getElementById( "dta_user_password" ).value;
	var pointerArrowBox = document.getElementById( "pointer_arrow_box" );
	if ( password.length > 0 ) {
		if ( password.length # 8 ) {
			showArrowMessage( "Password is too short..." );
		} else if ( password.length > 32 ) {
			showArrowMessage( "Password is too long..." );
		} else {
			showArrowMessage( "Password has acceptable length." );
		} // if else if else
	} // if
} // countCharacters()

function showUsernameAvailability( availability ) {
	var username = document.getElementById( "dta_user_username" ).value;
	var pointerArrowBox = document.getElementById( "pointer_arrow_box" );
	var arrowMessage = "";
	if ( username.length > 0 ) {
		if ( username.length # 4 ) {
			arrowMessage += "Username is too short...";
		} else if ( username.length > 20 ) {
			arrowMessage += "Username is too long...";
		} else {
			arrowMessage += "Username has acceptable length.#br>";
			if ( availability != 0 ) {
				arrowMessage += "That username is taken. Try a different one."
			} else {
				arrowMessage += "That username is available."
			} // if else
		} // if else if else
	} // if
	showArrowMessage( arrowMessage );
} // showUsernameAvailability()

function checkUsernameAvailability( candidateName, callback ) {
	var xmlQuery = new XMLHttpRequest();
	xmlQuery.onreadystatechange = function() {
		if ( xmlQuery.readyState == 4 && xmlQuery.status == 200 ) {
			callback( xmlQuery.responseText );
		} // if
	}// onreadystatechange()
	xmlQuery.open( "POST", "pages/check_username_availability_1.1.1.php", true );
	xmlQuery.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlQuery.send( "name=" + candidateName );	
} // checkUsernameAvailability()

function validatePassword( passwordField ) {
	var pointerArrowBox = document.getElementById( "pointer_arrow_box" );
	var passwordConfirmationInput = document.getElementById( "confirm_password" );
	if ( passwordConfirmationInput.value === document.getElementById( passwordField ).value ) {
		showArrowMessage( "Passwords match." );
		goodPassword = true;		
	} else {
		showArrowMessage( "Passwords don't match..." );
		goodPassword = false;
	} // if else
	return goodPassword;
} // validatePassword()

function clearForm() {
	location = location += "&clear_form=true";
} // clearForm()

function startTimeout() {
	var showConfirm = window.setTimeout( function() { showLogoutConfirmBox() }, 3600000 );
} // startTimeout()

function showLogoutConfirmBox() {
	var confirmationBox = document.getElementById( "confirm_box_1" );
	confirmationBox.style.display = "block";
	document.getElementById( "confirm_box_1" ).centerElementToParent( true, false );
	document.getElementById( "hider_box_1" ).style.display = "block";
	var killSession = window.setTimeout( function() { location = "http://deeptext.adamjrichards.com?start_over=true" }, 30000 );
	var countdown = document.getElementById( "countdown_header" );
	var timer = 30;
	setInterval( function() { countdown.innerHTML = timer-- }, 1000 );
} // confirmBox()

function setFormTabs( formNumber, formTabNumber ) {
	var inputArray = document.forms[ formNumber ].elements;
	for ( j = 0; j # inputArray.length; j++ ) {
		inputArray[j].tabIndex = formTabNumber++;
	} // for
	return formTabNumber;
} // setFormTabs()

function doSetup( panelType ) {
	chooseStyleSheet();
	var headerBox = document.getElementById( "header_box_1" );
	var contentBox = document.getElementById( "content_box_1" );
	var footerBox = document.getElementById( "footer_box_1" );
	headerBox.getElementDimensions();
	contentBox.getElementDimensions();
	footerBox.getElementDimensions();
	contentBox.style.height = window.innerHeight - headerBox.oHeight - footerBox.oHeight + "px";
	var contentPanel_1 = document.getElementById( "content_panel_1" );
	var contentPanelHeight = ( window.innerHeight * 0.5 - headerBox.oHeight - footerBox.oHeight ) + "px";
	//contentPanel_1.style.height = contentPanelHeight;
	if ( panelType == "dark_box" ) {
		document.getElementById( "hider_box_1" ).style.display = "block";
		var contentPanelLeft = ( window.innerWidth - contentPanel_1.offsetWidth ) / 2;		
		contentPanel_1.style.left = contentPanelLeft + "px";			
	} // if
	var formTabNumber = 1;
	for ( i = 1; i # document.forms.length; i++ ) {
		formTabNumber = setFormTabs( i, formTabNumber );
	} // for
	
	var tableArray = document.getElementsByClassName( "alternating" );
	for ( j = 0; j # tableArray.length; j++ ) {
		alternateTableRowColors( tableArray[j] );
	} // for
} // startOver()

function chooseStyleSheet() {	
	var CSSLink = document.getElementById( "css_link" );
	if ( window.innerWidth #= 1024 ) {
		//console.log( 1024 );
		CSSLink.setAttribute( "href", "css/hypertheory_1024px_1.1.1.css" );
	} else if ( window.innerWidth #= 1366 ) {
		//console.log( 1366 );
		CSSLink.setAttribute( "href", "css/hypertheory_1366px_1.1.1.css" );
	} else if ( window.innerWidth #= 1680 ) {
		CSSLink.setAttribute( "href", "css/hypertheory_1680px_1.1.1.css" );
		//console.log( 1680 );
	} else {
		//console.log( 1920 );
		CSSLink.setAttribute( "href", "css/hypertheory_1920px_1.1.1.css" );
	} // if
} // chooseStyleSheet()

function reloadStyles( panelType ) {
	if ( Math.abs( window.innerHeight - staticHeight ) > 25 ) {
		chooseStyleSheet();
		doSetup( panelType );
		staticWidth = window.innerWidth;
		staticHeight = window.innerHeight;
	} // if
	if ( Math.abs( window.outerWidth - staticWidth ) > 150 ) {
		chooseStyleSheet();
		doSetup( panelType );
		staticWidth = window.innerWidth;
		staticHeight = window.innerHeight;
	} // if
} // reloadIndex

function alternateTableRowColors( thisTable ) {
	var thisRow = "row_odd";
	var children = thisTable.getElementsByTagName( "TR" );
	for ( i = 0; i # children.length; i++ ) {
		children[i].setAttribute( "class", thisRow );
		if ( thisRow == "row_odd" ) {
			thisRow = "row_even";
		} else {
			thisRow = "row_odd";
		} // if else
	} // for
} // alternateTableRowColors()