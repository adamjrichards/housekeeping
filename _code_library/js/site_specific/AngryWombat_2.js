function AngryWombat( animatedSource, staticSource ) {
	this.animatedSource = animatedSource;
	this.staticSource = staticSource;
	this.wombatBox = document.getElementById( "wombat_box" );
	this.wombatImage = document.getElementById( "wombat_image" );
	this.wombatCornerBox = document.getElementById( "wombat_corner_box" );
	this.hide;
	//this.wombatImage.addEventListener( "animationend", this.endBoxAnimationHandler, false );	
	this.wombatCornerBox.addEventListener( "animationend", function() { wombat.endBoxAnimationHandler( wombat ) }, false );	
} // wombat constructor

AngryWombat.prototype.endBoxAnimationHandler = function( context ) {
	if ( context.wombatCornerBox.getAttribute( "class" ).indexOf( "initial" ) == 0 ) {
		context.wombatCornerBox.setAttribute( "class", "hidden" );
		context.wombatImage.src = context.staticSource;
	} // if
} // endAnimationHandler()

AngryWombat.prototype.showOrHide = function( state ) {
	//console.log( state );
	if ( state == "show" ) {
		clearTimeout( this.hide );
		this.wombatImage.src = this.animatedSource;
		//console.log( this.wombatImage.src );
		this.wombatCornerBox.setAttribute( "class", "expand_from_corner" );
	} else if ( state == "hide" ) {
		var context = this;
		this.hide = setTimeout( function() {
			context.wombatImage.src = context.staticSource;
			//console.log( context.wombatImage.src ); 
			context.wombatCornerBox.setAttribute( "class", "shrink_to_corner" );
		}, 1500 );
	} else {
		clearTimeout( this.hide );
	} // if else if else
} // showOrHide()

AngryWombat.prototype.goToWombat = function( source ) {
	this.wombatImage.src = source;
	this.wombatImage.setAttribute( "class", "wombat_corner_box" );
	this.wombatCornerBox.setAttribute( "class", "wombat_corner_box expand_to_fill" );
	setTimeout( function() { window.location.assign( "http://adamserver2/angry_wombat/index.php?ref=ajrcom" ); }, 3000 );
} // goToWombat()