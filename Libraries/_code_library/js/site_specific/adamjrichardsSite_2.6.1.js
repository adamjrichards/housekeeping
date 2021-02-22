// JavaScript Document

function showNavbar() {
	document.getElementById( "buzzing_navbar" ).play();
	document.getElementById( "nav_and_footer_group" ).style.display = "block";
	document.getElementById( "nav_and_footer_group" ).addClassesToElement( "flicker" );
} // showNavbar()
var complete = false;
function callback( state ) {
	if ( state == true ) complete = true;
	else complete = false;
} // callback()
function spin() {
	clipSpinner = new clipSpinner( 781, 420, 300, 8, 30, "../resources/images/adam_and_god_2_x1900y900.jpg" );
	clipSpinner.setupSpinner();
	clipSpinner.timeline = new timeline(
		"clipSpinner.showDisc()", 1000,
		"clipSpinner.rotateDisc( '0', '-5' )", 1200,
		"clipSpinner.rotateDisc( '-5', '-10' )", 400,
		"clipSpinner.rotateDisc( '-10', '-3' )", 300,
		"clipSpinner.rotateDisc( '-3', '-7' )", 200,
		"clipSpinner.rotateDisc( '-7', '-4' )", 150,
		"clipSpinner.rotateDisc( '-4', '0' )", 100,
		"clipSpinner.rotateDisc( '0', '5' )", 100,
		"clipSpinner.rotateDisc( '5', '11' )", 100,
		"clipSpinner.rotateDisc( '11', '13' )", 100,
		"clipSpinner.rotateDisc( '13', '14' )", 100,
		"clipSpinner.rotateDisc( '14', '15' )", 100,
		"clipSpinner.rotateDisc( '15', '17' )", 100,
		"clipSpinner.spin()", 100,
		"clipSpinner.fadeDisc()", 1000,
		"clipSpinner.resizeSpinner( 50 )", 500,
		"clipSpinner.resizeSpinner( 125 )", 100,
		"clipSpinner.resizeSpinner( 166 )", 100,
		"clipSpinner.resizeSpinner( 240 )", 100,
		"clipSpinner.resizeSpinner( 350 )", 100,
		"clipSpinner.resizeSpinner( 500 )", 100,
		"clipSpinner.setupLink( 'clipSpinner_background_3', 'angry_wombat_7.php' )", 2000,
		"clipSpinner.setupLink( 'clipSpinner_background_7', 'landing_page_screenshots_2.6.1.php?screenshot=love_as_a_string_pattern' )", 1000,
		"clipSpinner.setupLink( 'clipSpinner_background_1', 'landing_page_screenshots_2.6.1.php?screenshot=the_death_of_rock_n_roll' )", 1000,
		"clipSpinner.setupLink( 'clipSpinner_background_5', 'landing_page_screenshots_2.6.1.php?screenshot=the_pessimists_lament' )", 1000,
		"clipSpinner.setupLink( 'clipSpinner_background_4', 'landing_page_screenshots_2.6.1.php?screenshot=100_poems' )", 1000,
		"clipSpinner.setupLink( 'clipSpinner_background_8', 'landing_page_screenshots_2.6.1.php?screenshot=great_question' )", 1000,
		"clipSpinner.setupLink( 'clipSpinner_background_2', 'landing_page_screenshots_2.6.1.php?screenshot=pickup_lines' )", 1000,
		"clipSpinner.setupLink( 'clipSpinner_background_6', 'landing_page_screenshots_2.6.1.php?screenshot=angry_wombat' )", 1000,
		"clipSpinner.moveSpinnerToForeground()", 100,
		"showNavbar()", 100,
		"clipSpinner.setHotspotsForBlank()", 100,
		"clipSpinner.attachCodeToHotspots( 'http://thedeathofrocknroll.adamjrichards.com/index.php', 'http://pickuplines.adamjrichards.com/index.php', 'http://angrywombat.adamjrichards.com/index.php', 'http://100poems.adamjrichards.com/index.php', 'http://www.adamjrichards.com/the_pessimists_lament/index.php', 'http://angrywombat.adamjrichards.com/index.php', 'http://loveasastringpattern.adamjrichards.com/index.php', 'http://greatquestion.adamjrichards.com/index.php' )", 100
		
	);
	clipSpinner.timeline.outputCode();
	clipSpinner.timeline.fire();
} // spin()
			
function showWombat( state ) {
	if ( state == "show" ) {
		document.getElementById( "wombat_box" ).style.display = "block";
	} else {
		document.getElementById( "wombat_box" ).style.display = "none";
	} // if else
} // showWombat()