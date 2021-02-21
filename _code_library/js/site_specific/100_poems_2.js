function sizePanel() {
	var panelHeight = document.getElementById( "poem_inner_frame" ).offsetHeight;
	document.getElementById( "poem_inner_frame" ).style.width = thisBrowserObject.windowWidth - 350;
	document.getElementById( "poem_inner_frame" ).style.height = panelHeight + 50;
	alert( panelHeight);
	//alert( panelHeight );
} // onLoadOrResize



function onLoadOrResize() {
					if ( ! thisBrowserObject.isIE ) {
						document.getElementById( "gallery_container" ).style.opacity = 1;
					} else {				
						document.getElementById( "gallery_container" ).style.filter = "alpha(opacity=1)";
					} // if else
					changeRowColor( "poem_row", "\#FF9999", "\#FFAAAA" );
					//setPoemPanelSize();
					//opacityValue = 0;
					//opacityValue_IE = 0;
					//fadeInOrOutHandler( .05, 10, "intro_container" );
					//if ( thisBrowserObject.isFirefox ) document.getElementById( "poem_inner_frame" ).src = "Dream_of_the_Rood.xml";
					var panelHeight = window.poem_inner_frame.document.getElementById( "poem_panel" ).offsetHeight;
					document.getElementById( "poem_inner_frame" ).style.width = thisBrowserObject.windowWidth - 350;
					document.getElementById( "poem_inner_frame" ).style.height = panelHeight + 50;
					//alert( panelHeight );
				} // onLoadOrResize










