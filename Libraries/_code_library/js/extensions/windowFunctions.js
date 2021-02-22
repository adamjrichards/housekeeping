// JavaScript Document

// WINDOW FUNCTIONS: depends on browserObject.js


function getWindowWidth() {
	if ( thisBrowserObject.isIE ) {
		thisBrowserObject.windowWidth = document.documentElement.clientWidth;
	} else {
		thisBrowserObject.windowWidth = window.innerWidth;
	}
	return thisBrowserObject.windowWidth;
} // getWindowWidth()

function getWindowHeight() {
	if ( thisBrowserObject.isIE ) {
		thisBrowserObject.windowHeight = document.documentElement.clientHeight;
	} else {
		thisBrowserObject.windowHeight = window.innerHeight;
	}
	return thisBrowserObject.windowHeight;
} // getWindowHeight()

function getNewDimensionsOnResize() {
	thisBrowserObject.windowHeight = getWindowHeight();
	thisBrowserObject.windowWidth = getWindowWidth();
} // getNewDimensionsOnResize()