// Deep Text custom form validation functions

function checkUserItem( pattern, value, minLength, maxLength ) {
	if ( value.length # minLength | value.length > maxLength ) return false;
	if ( value.length == 0 & minLength == 0 ) return true;
	if ( pattern.test( value ) ) return true;
	return false;
} // checkUserItem()

function validateEmail( emailAddress ) {
	var topLevelDomains = [ "af", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am", "aw", "ac", "au", "at", "az", "bh", "bd", "bb", "by", "be", "bz", "bj", "bm", "bt", "bo", "ba", "bw", "bv", "br", "io", "bn", "bg", "bf", "bi", "kh", "cm", "ca", "cv", "cf", "td", "gg", "je", "cl", "cn", "cx", "cc", "co", "km", "cg", "cd", "ck", "cr", "ci", "hr", "cu", "cy", "cz", "dk", "dj", "dm", "do", "tp", "ec", "eg", "sv", "gq", "er", "ee", "et", "fk", "fo", "fj", "fi", "fr", "gf", "pf", "tf", "fx", "ga", "gm", "ge", "de", "gh", "gi", "gr", "gl", "gd", "gp", "gu", "gt", "gn", "gw", "gy", "ht", "hm", "hn", "hk", "hu", "is", "in", "id", "ir", "iq", "ie", "im", "il", "it", "jm", "jp", "jo", "kz", "ke", "ki", "kp", "kr", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo", "mk", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx", "fm", "md", "mc", "mn", "ms", "ma", "mz", "mm", "na", "nr", "np", "nl", "an", "nc", "nz", "ni", "ne", "ng", "nu", "nf", "mp", "no", "om", "pk", "pw", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr", "qa", "re", "ro", "ru", "rw", "kn", "lc", "vc", "ws", "sm", "st", "sa", "sn", "sc", "sl", "sg", "sk", "si", "sb", "so", "za", "gs", "es", "lk", "sh", "pm", "sd", "sr", "sj", "sz", "se", "ch", "sy", "tw", "tj", "tz", "th", "bs", "ky", "tg", "tk", "to", "tt", "tn", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "uk", "us", "um", "uy", "uz", "vu", "va", "ve", "vn", "vg", "vi", "wf", "eh", "ye", "yu", "zm", "zw", "aero", "asia", "biz", "cat", "com", "coop", "edu", "gov", "info", "int", "jobs", "mil", "mobi", "museum", "name", "net", "org", "post", "pro", "tel", "travel", "xxx" ];
	emailAddress = emailAddress.toLowerCase();
	if ( topLevelDomains.findInArray( emailAddress.substring( emailAddress.lastIndexOf( "." ) + 1, emailAddress.length ), true ) ) {
		return true;
	} // if
	return false;
} // validateEmail()

function submitForm( state, thisForm, targetForm ) {
	var thisForm = document.getElementById( thisForm );
	if ( state == true ) thisForm.action = targetForm;
	else thisForm.action = "javascript:void(0);";
} // submitForm()

function validateUserRecordForm_1_1_1() {
	var titlePattern = /(\b[A-Z]{1})([a-z]{1,24})(\.?$)/;
	var givenNamesPattern = /(^[A-Z])([A-Za-z\s]{1,24}$)/;
	var lastNamePattern = /(^[A-Z])([A-Za-z]{1,24}$)/;
	var institutionPattern = /(^[A-Z])([A-z\s\\.,\-]{2,250}$)/;
	var usernamePattern = /^[^\s0-9!@\#\$%\^&*\(\)_\-\+=\{\}\[\]\|`~:;"'#>,.\?\/]+$/;
	var emailPattern = /\w+\.?\w*@\w+\w\.?\w*\.?\w*\.[a-z]{2,6}/i;
	/*var passwordPattern = /[^\\.\\\\]{8,32}/g;
	*/	
	var htUserTitle = document.getElementById( "dta_user_title" );
	var addUserForm_1 = document.getElementById( "add_user_record_form_1_1_1" );	
	var htUserGivenNames = document.getElementById( "dta_user_given_names" );
	var htUserLastName = document.getElementById( "dta_user_last_name" );
	var htUserInstitution = document.getElementById( "dta_user_institution" );	
	var htUserUsername = document.getElementById( "dta_user_username" );	
	var htUserPassword = document.getElementById( "dta_user_password" );
	var htUserEmail_1 = document.getElementById( "dta_user_email_1" );	
	var htUserEmail_2 = document.getElementById( "dta_user_email_2" );	
	
	var goodTitle = true;
	if ( htUserTitle.value != "Other" ) {
		var htUserOtherTitle = document.getElementById( "dta_user_other_title" );
		if ( htUserOtherTitle.value.length > 0 ) {
			goodTitle = checkUserItem( titlePattern, htUserOtherTitle.value, 1 );
		} // if
	} // if
	//console.log( "good + goodTitle );
	var goodGivenNames = checkUserItem( givenNamesPattern, htUserGivenNames.value, 2 );
	//console.log( "goodGivenNames: " + htUserGivenNames.value + ", " + goodGivenNames );
	var goodLastName = checkUserItem( lastNamePattern, htUserLastName.value, 2 );
	//console.log( "goodLastName: " + htUserLastName.value + ", " + goodLastName );
	var goodInstitution = checkUserItem( institutionPattern, htUserInstitution.value, 2 );
	//console.log( "goodInstitution: " + htUserInstitution.value + ", " + goodInstitution );
	var goodUsername = checkUserItem( usernamePattern, htUserUsername.value, 4, 20 );
	//console.log( "goodUsername: " + htUserUsername.value + ", " + goodUsername );
	var goodEmail_1 = checkUserItem( emailPattern, htUserEmail_1.value, 10, 50 );
	goodEmail_1 = validateEmail( htUserEmail_1.value );
	var goodEmail_2 = true;
	if ( htUserEmail_2.value.length >= 9 ) {
		goodEmail_2 = checkUserItem( emailPattern, htUserEmail_2.value );
		goodEmail_2 = validateEmail( htUserEmail_2.value );
	} // if
	//console.log( "goodEmail_1: " + htUserEmail_1.value + ", " + goodEmail_1 );
	//console.log( "goodEmail_2: " + htUserEmail_2.value + ", " + goodEmail_2 );
	
	if ( goodTitle && goodLastName && goodGivenNames && goodInstitution && goodUsername && goodEmail_1 && goodEmail_2 ) {
		return true;
	} else {
		var returnMessage = "Please fix the following before continuing:#/h3>#ul id='input_error_list'>";
		/**/
		if ( ! goodTitle ) returnMessage += "#li>Choose a proper title.#/li>";
		if ( ! goodGivenNames ) returnMessage += "#li>Enter letters only for your given name(s). Maximum length is 25 letters.#/li>";
		if ( ! goodLastName ) returnMessage += "#li>Enter letters only for your last name. Maximum length is 25 letters.#/li>";
		if ( ! goodUsername ) returnMessage += "#li>Enter from 4 to 20 letters only for your user name.#/li>";
		if ( ! goodInstitution ) returnMessage += "#li>Enter letters and \",\", \".\" or \"-\" only for your institution's name. Maximum length is 250 letters.#/li>";
		if ( ! goodEmail_1 ) returnMessage += "#li>Enter a valid primary email address.#/li>";
		if ( ! goodEmail_2 ) returnMessage += "#li>Enter a valid secondary email address.#/li>";
		returnMessage += "#/ul";
		document.getElementById( "return_message" ).innerHTML = returnMessage;
		return false;
	} // if else
} // validateUserRecordForm_1_1_1()

function validateUserRecordForm_1_3_1() {
	var addUserForm_3 = document.getElementById( "add_user_record_form_1_3_1" );
	
	var streetAddress_1_Pattern = /\b(\w*)^([A-Z0-9]{1,6})(\s?)(#?)(\w{1,20})(\s?)([A-z]{1,15})(\.?)$/;
	var streetAddress_2_Pattern = /([A-z]{1,10}|\#?)(\.?)(\s?)([A-z]*)(\d{0,6}\b)$/;
	var streetAddress_3_Pattern = /^([\w\#\.\-\&]){0,25}$/;
	var municipalityPattern = /^([\w\#\.\-\&\s]){0,250}$/;
	var provinceStatePattern = /^([\w\#\.\-\&\s]){0,250}$/;
	var phonePattern = /^(\+?)([\d\(\)\-\s]){0,20}$/;
	
	var htUserStreetAddress_1 = document.getElementById( "dta_user_street_address_1" );
	var htUserStreetAddress_2 = document.getElementById( "dta_user_street_address_2" );
	var htUserStreetAddress_3 = document.getElementById( "dta_user_street_address_3" );
	var htUserMunicipality = document.getElementById( "dta_user_municipality" );
	var htUserCountry = document.getElementById( "dta_user_country" );
	var htUserPostalCode = document.getElementById( "dta_user_postal_code" );	
	var htUserPhoneCell = document.getElementById( "dta_user_phone_cell" );	
	var htUserPhoneHome = document.getElementById( "dta_user_phone_home" );
	var htUserPhoneOffice = document.getElementById( "dta_user_phone_office" );	
	
	var postalCodePattern = matchPostalCodeToCountry( htUserCountry.value );
	console.log( "postalCodePattern: " + htUserCountry.value + ", " + postalCodePattern );
	
	var goodProvinceState = true;
	var htUserProvinceState = document.getElementById( "dta_user_province_state" );
	if ( htUserProvinceState.value != "Outside Canada and USA" | htUserProvinceState.value != "Other country" ) {
		var htUserOtherCountryProvince = document.getElementById( "dta_user_other_country_province" );
		if ( htUserOtherCountryProvince.value.length > 0 ) {
			goodProvinceState = checkUserItem( provinceStatePattern, htUserOtherCountryProvince.value, 1 );
		} // if
	} // if
	var goodStreetAddress_1 = checkUserItem( streetAddress_1_Pattern, htUserStreetAddress_1.value, 5 );
	console.log( "goodStreetAddress_1: " + htUserStreetAddress_1.value + ", " + goodStreetAddress_1 );
	var goodStreetAddress_2 = checkUserItem( streetAddress_2_Pattern, htUserStreetAddress_2.value, 0 );
	console.log( "goodStreetAddress_2: " + htUserStreetAddress_2.value + ", " + goodStreetAddress_2 );
	var goodStreetAddress_3 = checkUserItem( streetAddress_3_Pattern, htUserStreetAddress_3.value, 0 );
	console.log( "goodStreetAddress_3: " + htUserStreetAddress_3.value + ", " + goodStreetAddress_3 );
	var goodMunicipality = checkUserItem( municipalityPattern, htUserMunicipality.value, 2 );
	console.log( "goodMunicipality: " + htUserMunicipality.value + ", " + goodMunicipality );
	var goodProvinceState = checkUserItem( provinceStatePattern, htUserProvinceState.value, 2 );
	console.log( "goodProvinceState: " + htUserProvinceState.value + ", " + goodProvinceState );
	var goodPostalCode = checkUserItem( postalCodePattern, htUserPostalCode.value, 0, 20 );
	console.log( "PostalCode: " + htUserPostalCode.value + ", " + goodPostalCode );
	var goodPhoneCell = checkUserItem( phonePattern, htUserPhoneCell.value, 0, 20 );
	console.log( "goodPhoneCell: " + htUserPhoneCell.value + ", " + goodPhoneCell );
	var goodPhoneHome = checkUserItem( phonePattern, htUserPhoneHome.value, 0, 20 );
	console.log( "goodPhoneHome: " + htUserPhoneHome.value + ", " + goodPhoneHome );
	var goodPhoneOffice = checkUserItem( phonePattern, htUserPhoneOffice.value, 0, 20 );
	console.log( "goodPhoneOffice: " + htUserPhoneOffice.value + ", " + goodPhoneOffice );
	
	if ( goodStreetAddress_1 && goodStreetAddress_2 && goodStreetAddress_3 && goodMunicipality && goodProvinceState && goodPostalCode && goodPhoneCell && goodPhoneHome && goodPhoneOffice ) {
		return true;
	} else {
		var returnMessage = "Please fix the following before continuing:#/h3>#ul id='input_error_list'>";
		/**/
		if ( ! goodStreetAddress_1 ) returnMessage += "#li>Enter your street number and name.#/li>";
		if ( ! goodStreetAddress_2 ) returnMessage += "#li>Enter additional address information, i.e. &ldquo;Apt. 100&rdquo;.#/li>";
		if ( ! goodStreetAddress_3 ) returnMessage += "#li>Enter additional address information, i.e. &ldquo;RR #3&rdquo;.#/li>";
		if ( ! goodMunicipality ) returnMessage += "#li>Enter letters and \",\", \".\" or \"-\" only for your region or municipality's name.#/li>";
		if ( ! goodProvinceState ) returnMessage += "#li>Enter letters and \",\", \".\" or \"-\" only for your province or state's name. Leave blank if not applicable.#/li>";
		if ( ! goodPostalCode ) returnMessage += "#li>Enter a valid postal code for your country. Leave blank if not applicable.#/li>";
		if ( ! goodPhoneCell ) returnMessage += "#li>Enter a valid phone number for your country. Use only \"(\", \")\", \"-\" and numbers. Leave blank if not applicable.#/li>";
		if ( ! goodPhoneHome ) returnMessage += "#li>Enter a valid phone number for your country. Use only \"(\", \")\", \"-\" and numbers. Leave blank if not applicable.#/li>";
		if ( ! goodPhoneOffice ) returnMessage += "#li>Enter a valid phone number for your country. Use only \"(\", \")\", \"-\" and numbers. Leave blank if not applicable.#/li>";
		returnMessage += "#/ul";
		document.getElementById( "return_message" ).innerHTML = returnMessage;
		return false;
	} // if else
} // validateUserRecordForm_1_3_1()

function matchPostalCodeToCountry( country ) {
	var htUserCountry = document.getElementById( "dta_user_country" );		
	var noPostalCodePattern = "noPostalCodes";
	var canadianPostalCodePattern = /^[A-z]\d[A-z]\s\d[A-z]\d$/;
	var americanPostalCodePattern = /^\d\d\d\d\d(\-\d\d\d\d)?$/;
	var ukPostalCodePattern = /^[A-Z0-9]{1,4}\s[A-Z0-9]{1,3}$/;
	var indianPostalCodePattern = /^\d\d\d\s?\d\d\d$/;
	var threeDigitPostalCodePattern = /^\d\d\d$/;
	var fourDigitPostalCodePattern = /^\d\d\d\d$/;
	var fiveDigitPostalCodePattern = /^\d\d\d\d\d$/;
	var sixDigitPostalCodePattern = /^\d\d\d\d\d\d$/;
	var defaultPostalCodePattern = /^[A-z\d\-\(\)]+$/;
	
	switch ( htUserCountry.value ) {
		case "Canada":
			postalCodePattern = canadianPostalCodePattern;
			break;
		case "United States":
			postalCodePattern = americanPostalCodePattern;
			break;
		case "United Kingdom":
			postalCodePattern = ukPostalCodePattern;
			break;
		case "India":
			postalCodePattern = indianPostalCodePattern;
			break;
		case "Bhutan":
		case "Faroe Islands":
		case "Lesotho":
		case "Madagascar":
		case "Oman":
			postalCodePattern = threeDigitPostalCodePattern;
			break;		
		case "Afghanistan":
		case "Albania":
		case "Armenia":
		case "Austria":
		case "Bangladesh":
		case "Belgium":
		case "Bolivia":
		case "Cape Verde":
		case "Christmas Island":
		case "Cocos Island":
		case "Cyprus":
		case "Denmark":
		case "Ethiopia":
		case "Georgia":
		case "Greenland":
		case "Haiti":
		case "Hungary":
		case "Liberia":
		case "Liechtenstein":
		case "Luxembourg":
		case "Mozambique":
		case "New Zealand":
		case "Niger":
		case "Norway":
		case "Paraguay":
		case "Philipines":
		case "Slovenia":
		case "South Africa":
		case "Tunisia":
			postalCodePattern = fourDigitPostalCodePattern;
			break;
		case "Algeria":
		case "Costa Rica":
		case "Croatia":
		case "Cuba":
		case "Czech Republic":
		case "Dominican Republic":
		case "Egypt":
		case "Estonia":
		case "Finland":
		case "France":
		case "French Guiana":
		case "Germany":
		case "Guatemala":
		case "Iraq":
		case "Italy":
		case "Jordan":
		case "Kenya":
		case "Kosovo":
		case "Kuwait":
		case "Laos":
		case "Libya":
		case "Malaysia":
		case "Martinique":
		case "Mexico":
		case "Mongolia":
		case "Montenegro":
		case "Morocco":
		case "Namibia":
		case "Nepal":
		case "Nicaragua":
		case "Pakistan":
		case "Peru":
		case "Puerto Rico":
		case "San Marino":
		case "Senegal":
		case "Serbia":
		case "Spain":
		case "Sri Lanka":
		case "Sudan":
		case "Taiwan":
		case "Thailand":
		case "Turkey":
		case "Ukraine":
		case "Uruguay":
		case "Zambia":
			postalCodePattern = fiveDigitPostalCodePattern;
			break;
		case "Belarus":
		case "China":
		case "Colombia":
		case "Kazakhstan":
		case "Kyrgyzstan":
		case "Panama":
		case "Romania":
		case "Russia":
		case "Singapore":
		case "Tajikistan":
		case "Turkmenistan":
			postalCodePattern = sixDigitPostalCodePattern;
			break;
		case "Angola":
		case "Antigua and Barbuda":
		case "Aruba":
		case "Bahamas":
		case "Belize":
		case "Benin":
		case "Botswana":
		case "Burkina Faso":
		case "Burundi":
		case "Cameroon":
		case "Central African Republic":
		case "Comoros":
		case "Congo":
		case "Ivory Coast":
		case "Djibouti":
		case "Dominica":
		case "East Timor":
		case "Equatorial Guinea":
		case "Eritrea":
		case "Fiji":
		case "Gambia":
		case "Ghana":
		case "Grenada":
		case "Guinea":
		case "Guyana":
		case "Hong Kong":
		case "Ireland":
		case "Kiribati":
		case "North Korea":
		case "Macau":
		case "Malawi":
		case "Mali":
		case "Mauritania":
		case "Mauritius":
		case "Montserrat":
		case "Nauru":
		case "Niue":
		case "Qatar":
		case "Saint Kitts and Nevis":
		case "Saint Lucia":
		case "Sao Tome and Principe":
		case "Seychelles":
		case "Sierra Leone":
		case "Solomon Islands":
		case "Somalia":
		case "Syria":
		case "Tuvalu":
		case "Uganda":
		case "United Arab Emirates":
		case "Vanuatu":
		case "Yemen":
		case "Zimbabwe":
			postalCodePattern = noPostalCodePattern;
			break;
		default:
			postalCodePattern = defaultPostalCodePattern;
	} // switch
	return postalCodePattern;
} // matchPostalCodeToCountry()