<?php 
	include_once "pages/sta_session_2.1.php";
	include "pages/sta_head_tag.php";
	include "pages/sta_body_tag.php";
?>

<!DOCTYPE html>
<html>
<?php
	if ( isset( $_GET[ "page" ] ) ) {
		$the_page_name = "pages/sta_{$_GET[ "page" ]}_2.1.php";
		if ( \file_exists( $the_page_name ) ) {
			$the_page_code = \file_get_contents( $the_page_name );
		} else {
			var_dump( $the_page_name );
		}
	} else {
		$the_page_code = "
			<div class='page_box' id='page_box'>
				<img class='painting' id='painting_1' src='assets/images/sta_painting_1_x800y600.jpg' width='800' height='600' alt='Andrea's painting #1'>
				<h2>Welcome to <span class='business_name'>Speaking Through Art</span>.</h2 ><!--This site is still under construction as of December 14, 2013.-->
				<p>Art therapy is a unique approach to psychotherapy, in which the client is encouraged to use basic art materials to facilitate communication.  Unlike traditional talk-therapy, art therapy enables the expression of emotions and thoughts which are difficult to put into words.  It is extremely beneficial for those who do not have the language needed to explain what is troubling them, for those who are not able to find the words to talk about their emotions, or for those who might be afraid or ashamed to discuss their feelings.</p>
				<p>The process of creating artwork reaches beyond our verbal thought processes. It also taps into deep psychological information by actively engaging the right side of the brain (which deals with the sense of intuition, emotional expression, creativity, and imagination), providing information which is sometimes hidden from our conscious awareness.</p>
				<p>The images we create provide both conscious and unconscious information: the colours, lines, forms, and textures in the images give direct information about our affect, mood, thought processes, and cognitive functioning. The actual images and symbols may serve as metaphors.</p>
				<p>Studies have shown that creative expression can improve mood, and foster a sense of well-being.</p>
			</div>";
	}
	$the_source_code = $sta_head_tag . $sta_body_tag[ "opener" ];
	$the_source_code .= $the_page_code;

	$the_source_code .= $sta_body_tag[ "closer" ];

	echo $the_source_code;
?>

</html>