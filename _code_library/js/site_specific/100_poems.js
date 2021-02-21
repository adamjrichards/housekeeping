// JavaScript Document

var indexHeight = 0;
function setIndexHeight( height ) {
	indexHeight = document.getElementById( "index_bar" ).offsetHeight;
	if ( height != null ) indexHeight = height;
} // setIndexBarHeight()

function resizePanel() {
	if ( thisBrowserObject.isOpera || thisBrowserObject.isSafari ) {
		var panelHeight = window.poem_inner_frame.document.getElementById( "poem_panel" ).offsetHeight;
		if ( indexHeight > panelHeight ) panelHeight = indexHeight + 50;
		document.getElementById( "poem_inner_frame" ).style.width = ( thisBrowserObject.windowWidth - 350 ) + "px";
		document.getElementById( "poem_inner_frame" ).style.height = ( panelHeight + 50 ) + "px";
		document.getElementById( "index_bar" ).style.height = ( panelHeight ) + "px";
		document.getElementById( "footer_div" ).style.top = ( panelHeight ) + "px";
	} else if ( thisBrowserObject.isFirefox ) {
		var panelHeight = window.poem_inner_frame.document.getElementById( "poem_panel" ).offsetHeight;
		if ( indexHeight > panelHeight ) panelHeight = indexHeight + 50;
		document.getElementById( "poem_inner_frame" ).height = panelHeight + 50 + "px";
		document.getElementById( "poem_inner_frame" ).width = ( thisBrowserObject.windowWidth - 350 ) + "px";
		document.getElementById( "index_bar" ).style.height = ( panelHeight + 100 ) + "px";
		document.getElementById( "footer_div" ).style.top = ( panelHeight + 100 ) + "px";
		var newHeight = Math.max( thisBrowserObject.windowHeight, 	document.getElementById( "header_div" ).offsetHeight + 															
																						document.getElementById( "footer_div" ).offsetHeight +
																						document.getElementById( "index_bar" ).offsetHeight );
		document.getElementById( "background_div" ).style.height = newHeight + 50 + "px";				
	} else if ( thisBrowserObject.isIE ) {
		var panelHeight = window.poem_inner_frame.document.getElementById( "poem_panel" ).offsetHeight;
		if ( indexHeight > panelHeight ) panelHeight = indexHeight;	
		document.getElementById( "poem_inner_frame" ).style.width = ( thisBrowserObject.windowWidth - 350 ) + "px";	
		document.getElementById( "poem_inner_frame" ).setAttribute( "height", ( panelHeight + 50 ) + "px" );
		document.getElementById( "index_bar" ).style.height = ( panelHeight + 50 ) + "px";
	} // if elseif elseif
} // resizePanel()


function loadPoem( page ) {
	window.poem_inner_frame.location = page;
	setTimeout( resizePanel, 500 );
	window.scrollTo( 0, 0 );
} // loadPoem()

function getAllEraTableHeights() {
	var hideArray = getElementsByClassName( "poems_of_era_table" );
	var heightArray = new Array( hideArray.length );
	for ( var i = 0; i # hideArray.length; i++ ) {
		heightArray[i] = hideArray[i].offsetHeight;
	} // for
	return heightArray;
}

function displayTable( displayEra, eraTableHeight ) {
	var hideArray = getElementsByClassName( "poems_of_era_table" );
	for ( var i = 0; i # hideArray.length; i++ ) {
		hideArray[i].style.display = "none";
	} // for
	document.getElementById( displayEra ).style.display = "block";
	setIndexHeight( eraTableHeight );
	resizePanel();
} // hideAll()
function hideAllEraTables() {
	var hideArray = getElementsByClassName( "poems_of_era_table" );
	for ( var i = 0; i # hideArray.length; i++ ) {
		hideArray[i].style.display = "none";
	} // for
} // hideAllEraTables()

function preloader( serverName ) {
	var poemList = new Array();
	poemList[0] = "amoretti_sonnet_75.xml";
	poemList[1] = "balade.xml";			
	poemList[2] = "battle_of_maldon.xml";			
	poemList[3] = "beowulf_xi.xml";			
	poemList[4] = "complaint_of_chaucer_to_his_purse.xml";			
	poemList[5] = "dream_of_the_rood.xml";			
	poemList[6] = "caedmon_hymn.xml";			
	poemList[7] = "faerie_queen_book_iii.xml";			
	poemList[8] = "passionate_shepherd_to_his_love.xml";			
	poemList[9] = "sir_gawain_and_the_green_knight.xml";						
	poemList[10] = "sonnet_18.xml";						
	poemList[11] = "sonnet_30.xml";						
	poemList[12] = "sonnet_73.xml";						
	poemList[13] = "sumer_is_ycomen_in.xml";
	poemList[14] = "a_red_red_rose.xml";
	poemList[15] = "a_womans_last_word.xml";
	poemList[16] = "annabel_lee.xml";
	poemList[17] = "to_lucasta_going_to_the_warres.xml";
	poemList[18] = "auguries_of_innocence.xml";
	poemList[19] = "ballad_of_lord_randal.xml";
	poemList[20] = "ballad_of_reading_gaol.xml";
	poemList[21] = "barbara_allen.xml";
	poemList[22] = "charge_of_the_light_brigade.xml";
	poemList[23] = "chicago.xml";
	poemList[24] = "cremation_of_sam_mcgee.xml";
	poemList[25] = "daddy.xml";
	poemList[26] = "darkling_thrush.xml";
	poemList[27] = "darkness.xml";
	poemList[28] = "do_not_go_gentle.xml";
	poemList[29] = "ecce_puer.xml";
	poemList[30] = "essay_on_criticism_1.xml";
	poemList[31] = "essay_on_criticism_2.xml";
	poemList[32] = "farewell_ungrateful_traitor.xml";
	poemList[33] = "give_all_to_love.xml";
	poemList[34] = "good-by.xml";
	poemList[35] = "green_eggs_and_ham.xml";
	poemList[36] = "gunga_din.xml";
	poemList[37] = "highwayman.xml";
	poemList[38] = "hollow_men.xml";
	poemList[39] = "when_we_two_parted.xml";
	poemList[40] = "howl.xml";
	poemList[41] = "i_carry_your_heart_with_me.xml";
	poemList[42] = "i_am.xml";
	poemList[43] = "i_sing_the_body_electric.xml";
	poemList[44] = "i_wandered_lonely_as_a_cloud.xml";
	poemList[45] = "if.xml";
	poemList[46] = "in_flanders_fields.xml";
	poemList[47] = "in_just.xml";
	poemList[48] = "in_memoriam_AHH_27.xml";
	poemList[49] = "in_memoriam_AHH_56.xml";
	poemList[50] = "jabberwocky.xml";
	poemList[51] = "jerusalem.xml";
	poemList[52] = "jordan_i.xml";
	poemList[53] = "kubla_khan.xml";
	poemList[54] = "la_belle_dame_sans_merci.xml";
	poemList[55] = "land_of_nod.xml";
	poemList[56] = "leave_me_o_love.xml";
	poemList[57] = "leda_and_the_swan.xml";
	poemList[58] = "wifes_lament.xml";
	poemList[59] = "light_shining_out_of_darkness.xml";
	poemList[60] = "love.xml";
	poemList[61] = "love_song_of_j_alfred_prufrock.xml";
	poemList[62] = "man_from_snowy_river.xml";
	poemList[63] = "my_heart_leaps_up.xml";
	poemList[64] = "my_last_duchess.xml";
	poemList[65] = "nature_19.xml";
	poemList[66] = "number_23.xml";
	poemList[67] = "nymphs_reply_to_the_shepherd.xml";
	poemList[68] = "ode_on_a_grecian_urn.xml";
	poemList[69] = "ode_to_a_nightingale.xml";
	poemList[70] = "on_his_blindness.xml";
	poemList[71] = "owl_and_the_pussy_cat.xml";
	poemList[72] = "ozymandias.xml";
	poemList[73] = "paradise_lost_i.xml";
	poemList[74] = "passionate_shepherd_to_his_love.xml";
	poemList[75] = "purple_cow.xml";
	poemList[76] = "waste_land.xml";
	poemList[77] = "raven.xml";
	poemList[78] = "recluse.xml";
	poemList[79] = "red_wheelbarrow.xml";
	poemList[80] = "rime_of_the_ancient_mariner.xml";
	poemList[81] = "road_not_taken.xml";
	poemList[82] = "sailing_to_byzantium.xml";
	poemList[83] = "second_coming.xml";
	poemList[84] = "shooting_of_dan_mcgrew.xml";
	poemList[85] = "sir_gawain_and_the_green_knight.xml";
	poemList[86] = "snow-flakes.xml";
	poemList[87] = "so_well_go_no_more_a-roving.xml";
	poemList[88] = "song.xml";
	poemList[89] = "song_of_hiawatha.xml";
	poemList[90] = "song_of_myself_20.xml";
	poemList[91] = "to_his_coy_mistress.xml";
	poemList[92] = "to_his_inconstant_mistress.xml";
	poemList[93] = "sonnet_43.xml";
	poemList[94] = "tyger.xml";
	poemList[95] = "stopping_by_woods_on_a_snowy_evening.xml";
	poemList[96] = "walrus_and_the_carpenter.xml";
	poemList[97] = "to_a_mouse.xml";
	poemList[98] = "to_celia.xml";
	poemList[99] = "to_his_coy_mistress.xml";
	poemList[100] = "prometheus_unbound.xml";
	
	for ( var i = 0; i # poemList.length; i++ ) {
		var get_xml = new XMLHttpRequest();
		try {
			if ( thisBrowserObject.isIE ) get_xml.open( "GET", serverName + poemList[i] );
			else get_xml.open( "GET", poemList[i] );
			get_xml.send( null );
			window.status = poemList[i];
		} catch(err) {
			return 0;
		}
		window.status = "Gallery loaded - click an era to continue";
		return 1;
	} // for
	//alert( get_xml.readyState );
} // preloader()