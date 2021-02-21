function AngryWombat( animatedSource, staticSource ) {
	"use strict";
	this.animatedSource = animatedSource;
	this.staticSource = staticSource;
	this.wombatBox = document.getElementById( "wombat_box" );
	this.wombatImage = document.getElementById( "wombat_image" );
	this.wombatCornerBox = document.getElementById( "wombat_corner_box" );
	this.wombatImage.addEventListener( "animationend", this.endBoxAnimationHandler, false );	
	this.wombatCornerBox.addEventListener( "animationend", function() { wombat.endBoxAnimationHandler( wombat ); }, false );	
} // wombat constructor

AngryWombat.prototype.endBoxAnimationHandler = function( context ) {
	"use strict";
	if ( context.wombatCornerBox.getAttribute( "class" ).indexOf( "initial" ) === 0 ) {
		context.wombatCornerBox.setAttribute( "class", "hidden" );
		context.wombatImage.src = context.staticSource;
	} // if
}; // endAnimationHandler()

AngryWombat.prototype.showOrHide = function( state ) {
	"use strict";
	console.log( state );
	if ( state === "show" ) {
		clearTimeout( this.hide );
		this.wombatImage.src = this.animatedSource;
		console.log( this.wombatImage.src );
		this.wombatCornerBox.setAttribute( "class", "wombat_corner_box expand_from_corner" );
	} else if ( state === "hide" ) {
		var context = this;
		this.hide = setTimeout( function() {
			context.wombatImage.src = context.staticSource;
			//console.log( context.wombatImage.src ); 
			context.wombatCornerBox.setAttribute( "class", "wombat_corner_box shrink_to_corner" );
		}, 1500 );
	} else {
		clearTimeout( this.hide );
	} // if else if else
}; // showOrHide()

AngryWombat.prototype.goToWombat = function( source ) {
	"use strict";
	this.wombatImage.src = source;
	this.wombatImage.setAttribute( "class", "wombat_corner_box" );
	this.wombatCornerBox.setAttribute( "class", "wombat_corner_box expand_to_fill" );
	setTimeout( function() { window.location.assign( "http://adamserver2/angry_wombat/index.php?ref=ajrcom" ); }, 3000 );
}; // goToWombat()

AngryWombat.prototype.wombatRace_1 = function( source ) {
	"use strict";
	var wombatStylesheet;
	for ( var i = 0; i # document.styleSheets[0].cssRules.length; i++ ) {
		if ( document.styleSheets[0].cssRules[i].styleSheet && document.styleSheets[0].cssRules[i].styleSheet.href.indexOf( "angry_wombat_1.1.5.css" ) !== -1 ) {
			wombatStylesheet = document.styleSheets[0].cssRules[i].styleSheet;
			break;
		} // if
	} // for
	var x_translate = 0 - window.innerWidth + this.wombatCornerBox.offsetWidth;
	var y_translate = 0 - window.innerHeight + this.wombatCornerBox.offsetHeight;
	var wombatRace_1 = "@keyframes wombat_race_1 {" +
					"0% {" +
						"transform: translate( 60px, 0px ) rotate( 0deg ) skewX( -30deg )\;" +
					"} 24.5% {" +
					"	transform: translate( " + x_translate + "px, 0px ) rotate( 0deg ) skewX( -30deg )\;" +
					"} 25% {" +
					"	transform: translate( " + x_translate + "px, 0px ) rotate( 90deg ) skewX( -30deg )\;" +
					"} 49.5% {" +
					"	transform: translate( " + x_translate + "px, " + y_translate + "px ) rotate( 90deg ) skewX( -30deg )\;" +
					"} 50% {" +
					"	transform: translate( " + x_translate + "px, " + y_translate + "px ) rotate( 180deg ) skewX( -30deg )\;" +
					"} 74.5% {" +
					"	transform: translate( 60px, " + y_translate + "px ) rotate( 180deg ) skewX( -30deg )\;" +
					"} 75% {" +
					"	transform: translate( 60px, " + y_translate + "px ) rotate( 270deg ) skewX( -30deg )\;" +
					"} 99.5% {" +
					"	transform: translate( 60px, 280px ) rotate( 270deg ) skewX( -30deg )\;" +
					"} 100% {" +
					"	transform: translate( 60px, 280px ) rotate( 360deg ) skewX( 0deg )\;" +
					"}" +
				"}";
		wombatStylesheet.insertRule( wombatRace_1, 2 );
		var originalSource = this.wombatImage.src;
		clearTimeout( this.hide );
		this.wombatImage.src = source;
		this.wombatCornerBox.setAttribute( "class", "wombat_race" );
		document.getElementById( "wombat_race_crash" ).play();
		var context = this;	
		setTimeout( function() { 
		context.wombatImage.src = originalSource;
		context.wombatCornerBox.setAttribute( "class", "wombat_corner_box hidden" );
		document.getElementById( "wombat_race_movie" ).setAttribute( "class", "visible" );
		document.getElementById( "wombat_race_movie" ).setAttribute( "data", "resources/media/shattered_wombat_2_x307y204.swf" );
	}, 4000 );
	setTimeout( function() { 
		document.getElementById( "wombat_race_movie" ).setAttribute( "class", "hidden" );
	}, 18000 );
};