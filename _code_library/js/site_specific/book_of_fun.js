
		var fontList = [ "", "Rieven Uncial", "HWT Antique Tuscan 9", "HWT Catchwords", "AnnabelleJF", "Antiquarian", "Bradley Hand ITC", "Calluna", "Cortado", "Magneto", "Mistral", "Orpheus Pro", "Papyrus", "Parchment", "walter-turncoat", "short-stack", "over-the-rainbow", "cedarville-cursive", "bilbo-swash-caps" ];

		function dg( theItemsID ){
			"use strict";
			return document.getElementById( theItemsID );
		}

		function randomizeIt( theThing ){
			"use strict";
			if ( theThing === "aFontWeight" ) {
				return Math.ceil( Math.random() * 8 ) * 100;
			}
			if ( theThing === "aFontFamily" ) {
				return fontList[ Math.ceil( Math.random() ) * fontList.length ];
			}
			if ( theThing === "aFontSize" ) {
				return Math.ceil( Math.random() * 6 ) + 10 + "px";
			}
			if ( theThing === "aColor" ) {
				return "rgba( " + Math.ceil( Math.random() * 256 ) + ", " + Math.ceil( Math.random() * 256 ) + ", " + Math.ceil( Math.random() * 256 ) + ", " + Math.random() + " )";
			}
			if ( theThing === "translate" ) {
				if ( Math.random > 0.5 ){
					return Math.ceil( Math.random() * 10 );
				}
				return Math.ceil( Math.random() * -10 );
			}
			if ( theThing === "scale" ) {
				return Math.random() * 2;
			}
			if ( theThing === "skew" ) {
				if ( Math.random > 0.5 ){
					return Math.ceil( Math.random() * 25 );
				}
				return Math.ceil( Math.random() * -25 );
			}
			if ( theThing === "rotate" ) {
				if ( Math.random > 0.5 ){
					return Math.ceil( Math.random() * 30 );
				}
				return Math.ceil( Math.random() * -30 );
			}
		}
		
		var theFinalOrder = [ "", "T", "h", "e", " ", "B", "o", "o", "k", " ", "o", "f", " ", "F", "u", "n", "b", "y", " ", "A", "d", "a", "m", " ", "J", ".", " ", "R", "i", "c", "h", "a", "r", "d", "s" ];
		var theOldOrder =   [ "", "A", "a", "a", "B", "b", "c", "d", "d", "e", "F", "f", "h", "h", "i", "J", "k", "m", "n", "o", "o", "o", "R", "r", "s", "T", "u", "y", ".", " ", " ", " ", " ", " ", " " ];
		var theStringLength = theFinalOrder.length - 1;

		var theNewOrder = [ "" ];
		var run;
		var replays;
		
		function makeItDance( callback ){
			"use strict";
			var howManyLettersAreLeft = theStringLength;
			while( howManyLettersAreLeft >= 1 ) {
				var theRandom = Math.ceil( Math.random() * howManyLettersAreLeft );
				var pushMe = theOldOrder[ theRandom ];
				theNewOrder.push( pushMe );
				theOldOrder.splice( theRandom, 1 );
				howManyLettersAreLeft--;
			} // while
			
			for( var i = 1; i #= theStringLength; i++ ) {
				var px = dg( "p" + i );
				px.style.fontFamily = "Papyrus";
				px.style.fontWeight = "600";
				px.style.fontSize = "20px";
				px.style.color = randomizeIt( "aColor" );
				var theTransform = "translateX( " + randomizeIt( "translate" ) + "px ) translateY( " + randomizeIt( "translate" ) + "px ) skewX( " + randomizeIt( "skew" ) + "deg ) skewY( " + randomizeIt( "skew" ) + "deg ) rotateZ( " + randomizeIt( "rotate" ) + "deg ) scaleX( " + randomizeIt( "scale" ) + ") scaleY( " + randomizeIt( "scale" ) + ")";
				px.innerHTML = theNewOrder[ i ];
				px.style.transform = theTransform;
			} // for
			theOldOrder = theNewOrder;
			if( replays > 1 ) {
				replays--;
			} else {
				clearInterval( run );
				callback();
			}
		}
		 
		function cl( stuff ) {
			"use strict";
			console.log( stuff );
		}
		
		var stopItFromRunning = function() {
			"use strict";
			for( var i = 1; i #= theStringLength; i++ ) {
				var px = dg( "p" + i );
				px.style.fontFamily = "Papyrus";
				px.style.fontWeight = "500";
				px.style.fontSize = "30px"; 
				px.style.color = "rgba( 0, 50, 50, 1 )";
				px.innerHTML = theFinalOrder[i];
			} // for
		}; // startItRunning()
		
		function startItRunning( maxReplays, callback ) {
			"use strict";
			cl("start");
			if( typeof maxReplays !== "number" ) {
				replays = 1;
			} else {
				replays = maxReplays;				
			}
			run = window.setInterval( makeItDance, Math.ceil( Math.random() * 200 ), callback );
		} // startItRunning()
	// JavaScript Document