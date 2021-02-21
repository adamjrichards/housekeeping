function validatePhoneNumber( context ) {
	var number = context.value;
	if ( ! number.match( /\(?[2-9]{1}[0-9]{2}\)?\s?[0-9]{3}\D?[0-9]{4}/ ) ) {
		if ( number != "" & number != null ) alert( "Re-enter the number using only digits (no brackets or dashes). Note: area codes can't start with \"1\"." );
		return;
	} // if
	number = number.replace( /\D/g, "" );
	number = "(" + number.substring( 0, 3) + ") " + number.substring( 3, 6 ) + "-" + number.substring( 6, 10 );
	console.log( number );
	context.value = number;
} // validatePhoneNumber()
function validatePostalCode( context ) {
	if ( document.getElementById( "country" ).selectedIndex == 0 ) {
		var postalCode = context.value;
		if ( ! postalCode.match( /[A-z]\d[A-z]\s\d[A-z]\d/ ) ) {
			if ( postalCode != "" & postalCode != null ) alert( "Not a Canadian postal code...make sure you've chosen your country properly." );
			context.value = "";
			return;
		} // if
		postalCode = postalCode.toUpperCase();
		postalCode = postalCode.replace( /\s/g, "" );
		if ( postalCode.length == 6 ) {
			postalCode = postalCode.substring( 0, 3 ) + " " + postalCode.substring( 3, 7 );
		} else {
			if ( postalCode != "" & postalCode != null ) alert( "Not a Canadian postal code...make sure you've chosen your country properly." );
			context.value = "";
			return;
		} // if else
		console.log( postalCode );
		context.value = postalCode;						
	} // if
} // validatePostalCode()
function checkEmailEntry( context ) {
	var emailAddress = context.value;
	if ( emailAddress.match( /[!#$%^&*\(\)-+=\'\":;,\?\\\/#>|\{\}\[\]]/g ) ) {
		emailAddress = emailAddress.substring( 0, emailAddress.length - 1 );
	} // if
	context.value = emailAddress;
} // if
function validateEmail( context ) {
	var topLevelDomains = [ "af", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am", "aw", "ac", "au", "at", "az", "bh", "bd", "bb", "by", "be", "bz", "bj", "bm", "bt", "bo", "ba", "bw", "bv", "br", "io", "bn", "bg", "bf", "bi", "kh", "cm", "ca", "cv", "cf", "td", "gg", "je", "cl", "cn", "cx", "cc", "co", "km", "cg", "cd", "ck", "cr", "ci", "hr", "cu", "cy", "cz", "dk", "dj", "dm", "do", "tp", "ec", "eg", "sv", "gq", "er", "ee", "et", "fk", "fo", "fj", "fi", "fr", "gf", "pf", "tf", "fx", "ga", "gm", "ge", "de", "gh", "gi", "gr", "gl", "gd", "gp", "gu", "gt", "gn", "gw", "gy", "ht", "hm", "hn", "hk", "hu", "is", "in", "id", "ir", "iq", "ie", "im", "il", "it", "jm", "jp", "jo", "kz", "ke", "ki", "kp", "kr", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo", "mk", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx", "fm", "md", "mc", "mn", "ms", "ma", "mz", "mm", "na", "nr", "np", "nl", "an", "nc", "nz", "ni", "ne", "ng", "nu", "nf", "mp", "no", "om", "pk", "pw", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr", "qa", "re", "ro", "ru", "rw", "kn", "lc", "vc", "ws", "sm", "st", "sa", "sn", "sc", "sl", "sg", "sk", "si", "sb", "so", "za", "gs", "es", "lk", "sh", "pm", "sd", "sr", "sj", "sz", "se", "ch", "sy", "tw", "tj", "tz", "th", "bs", "ky", "tg", "tk", "to", "tt", "tn", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "uk", "us", "um", "uy", "uz", "vu", "va", "ve", "vn", "vg", "vi", "wf", "eh", "ye", "yu", "zm", "zw", "aero", "asia", "biz", "cat", "com", "coop", "edu", "gov", "info", "int", "jobs", "mil", "mobi", "museum", "name", "net", "org", "post", "pro", "tel", "travel", "xxx" ];
	var emailAddress = context.value;
	if ( ! emailAddress.match( /\w+\.?\w*@\w+\w\.?\w*\.?\w*\.[a-z]{2,6}/ig ) ) {
		if ( emailAddress != "" & emailAddress != null ) alert( "Not a valid email address." );
		return;
	} // if
	emailAddress = emailAddress.toLowerCase();
	console.log( emailAddress.substring( emailAddress.lastIndexOf( "." ) ) );
	if ( ! topLevelDomains.findInArray( emailAddress.substring( emailAddress.lastIndexOf( "." ) + 1, emailAddress.length ), true ) ) {
		alert( "Check your email top-level domain (.ca, .com, .net, etc.)." );
		emailAddress = emailAddress.substring( 0, emailAddress.lastIndexOf( "." ) + 1 );
		return;
	} // if
	console.log( emailAddress );
	context.value = emailAddress;
} // validateEmail()
function checkSkype( context ) {
	var skypeAddress = context.value;
	if ( skypeAddress.match( /[!#$%^&*\(\)-+=\'\":;,\?\\\/#>|\{\}\[\]]/g ) ) {
		skypeAddress = skypeAddress.substring( 0, skypeAddress.length - 1 );
	} // if
	context.value = skypeAddress;
} // if
function validateSkype( context ) {
	var topLevelDomains = [ "af", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am", "aw", "ac", "au", "at", "az", "bh", "bd", "bb", "by", "be", "bz", "bj", "bm", "bt", "bo", "ba", "bw", "bv", "br", "io", "bn", "bg", "bf", "bi", "kh", "cm", "ca", "cv", "cf", "td", "gg", "je", "cl", "cn", "cx", "cc", "co", "km", "cg", "cd", "ck", "cr", "ci", "hr", "cu", "cy", "cz", "dk", "dj", "dm", "do", "tp", "ec", "eg", "sv", "gq", "er", "ee", "et", "fk", "fo", "fj", "fi", "fr", "gf", "pf", "tf", "fx", "ga", "gm", "ge", "de", "gh", "gi", "gr", "gl", "gd", "gp", "gu", "gt", "gn", "gw", "gy", "ht", "hm", "hn", "hk", "hu", "is", "in", "id", "ir", "iq", "ie", "im", "il", "it", "jm", "jp", "jo", "kz", "ke", "ki", "kp", "kr", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo", "mk", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx", "fm", "md", "mc", "mn", "ms", "ma", "mz", "mm", "na", "nr", "np", "nl", "an", "nc", "nz", "ni", "ne", "ng", "nu", "nf", "mp", "no", "om", "pk", "pw", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr", "qa", "re", "ro", "ru", "rw", "kn", "lc", "vc", "ws", "sm", "st", "sa", "sn", "sc", "sl", "sg", "sk", "si", "sb", "so", "za", "gs", "es", "lk", "sh", "pm", "sd", "sr", "sj", "sz", "se", "ch", "sy", "tw", "tj", "tz", "th", "bs", "ky", "tg", "tk", "to", "tt", "tn", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "uk", "us", "um", "uy", "uz", "vu", "va", "ve", "vn", "vg", "vi", "wf", "eh", "ye", "yu", "zm", "zw", "aero", "asia", "biz", "cat", "com", "coop", "edu", "gov", "info", "int", "jobs", "mil", "mobi", "museum", "name", "net", "org", "post", "pro", "tel", "travel", "xxx" ];
	var skypeAddress = context.value;
	if ( skypeAddress.match( /@/g ) ) {
		if ( ! skypeAddress.match( /\w+\.?\w*@\w+\w\.?\w*\.?\w*\.[a-z]{2,6}/ig ) ) {
			if ( skypeAddress != "" & skypeAddress != null ) alert( "Not a valid Skype address." );
			return;
		} // if
		skypeAddress = skypeAddress.toLowerCase();
		console.log( skypeAddress.substring( skypeAddress.lastIndexOf( "." ) ) );
		if ( ! topLevelDomains.findInArray( skypeAddress.substring( skypeAddress.lastIndexOf( "." ) + 1, skypeAddress.length ), true ) ) {
			alert( "Check your Skype top-level domain (.ca, .com, .net, etc.)." );
			skypeAddress = skypeAddress.substring( 0, skypeAddress.lastIndexOf( "." ) + 1 );
			return;
		} // if
		console.log( skypeAddress );
	} // if
	context.value = skypeAddress;
} // validateEmail()