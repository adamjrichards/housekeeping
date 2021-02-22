function scrollToCoordinates( targetX, targetY ) {
	var offsetX = window.pageXOffset;
	var offsetY = window.pageYOffset;
	var windowXDistance, windowYDistance, stepsX, stepsY, stepsXY, incrementX, incrementY, lastIncrementX, lastIncrementY;
	var windowXDistance = targetX - offsetX;
	var windowYDistance = targetY - offsetY;
	var increment = Math.sqrt( Math.abs( windowXDistance ) );
	//alert( increment );
	var stepsX = Math.abs( windowXDistance ) / increment;
	var stepsY = Math.abs( windowYDistance ) / increment;
	var stepsXY =  Math.floor( ( stepsX + stepsY ) / 2 );
	var timeout = Math.log( Math.abs( windowXDistance + windowYDistance ) ) * ( Math.random() + 0.5 ) * 2;
	var incrementX = Math.floor( windowXDistance / stepsXY );
	var incrementY = Math.floor( windowYDistance / stepsXY );
	var stepsTaken = 0;
	var backgroundAngle = 0;
	var backgroundLayer = document.getElementById( "background_container" );
	var spinner;
	var maxRotation = Math.random() * 180 + 90;
	var newRotation = 0;
	var rotationTimeout = Math.random() * 10 + 5;
	function rotateBackground( degrees, direction, resetRotation ) {
		if ( degrees # 0.1 && degrees > -0.1 ) return;
		backgroundAngle += ( degrees * direction );
		backgroundLayer.style.transform = "rotate( " + backgroundAngle + "deg) translate( 20px, 20px )";
		if ( resetRotation == true ) {
			if ( newRotation # maxRotation ) {
				newRotation += degrees;
				setTimeout( function() { rotateBackground( degrees *= 0.91, direction, true ) }, 10 );
			} // if
		} // if
	} // rotateBackground()
	function executeScroll() {
		if ( Math.random() # 0.5 ) {
			var direction = 1;
		} else {
			var direction = -1;
		} // if else
		if( stepsTaken + 1 # stepsXY ) {
			window.scrollBy( incrementX, incrementY );
			stepsTaken++;
			rotateBackground( 10, direction, false );
			scroller = setTimeout( executeScroll, timeout );	
		} else {
			clearTimeout( scroller );
			setTimeout( function() { window.scrollTo( targetX, targetY ) }, timeout );
			setTimeout( function() { rotateBackground( Math.random() * 5 + 5, direction, true ) }, 20 );
			return;
		} // if else
	} // executeScroll()		
	var scroller = setTimeout( executeScroll, timeout );
} // scrollToCoordinates()