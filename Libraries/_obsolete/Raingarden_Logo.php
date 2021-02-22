<?php

	class Raingarden_Logo {
			
		public $my_type;
		public $my_css;
		private $my_additional_css;
		private $my_target_URL;
		public $my_html;
		
		function __construct( $type, $target_URL, $additional_css ){
			
			$this->my_type = $type;
			$this->my_additional_css = "../css/" . $additional_css;
			$this->my_target_URL = $target_URL;
				
			$this->my_html = "
			
			<!-- The RGCafe logo floats in front of all of the major sections. It begins here. -->
			
			<link class='stylesheets components default_values' id='the_logos_css' name='the_logos_css' href='../css/logos.css' rel='stylesheet' />
			<link class='stylesheets components default_values' id='the_logos_additional_css' name='the_logos_additional_css' href='$this->my_additional_css' rel='stylesheet' />
			
			<a class='logo $this->my_type default_values' id='the_rgcafe_logo_link' name='the_rgcafe_logo' href='$this->my_target_URL'>
			
				<div class='logo $this->my_type default_values' id='the_rgcafe_logo' onmouseenter='//add_the_logo_listeners()' onmouseout='//remove_the_logo_listeners()'>

					<!-- The standard logo is composed of four definitive elements and their CSS. -->

					<img class='logo $this->my_type default_values' id='the_logo_blue_fern' src='../assets/images/logos/blue_fern_x302y125.png' />

					<img class='logo $this->my_type default_values' id='the_logo_green_fern' src='../assets/images/logos/green_fern_x390y136.png' />

					<img class='logo $this->my_type default_values' id='the_logo_cafe' src='../assets/images/logos/cafe_x365y130.png' />

					<img class='logo $this->my_type default_values' id='the_logo_raingarden' src='../assets/images/logos/raingarden_x636y154.png' />

				</div>\
				
			</a>
			
			<!-- The RGCafe logo ends here. -->
			
			";
		
		} // __constructor

		// Class getters
		
		public function get_my_type() {
			return $this->my_type;
		}
		public function get_my_css() {
			return $this->my_css;
		}
		public function get_my_additional_css() {
			return $this->my_additional_css;
		}
		public function get_my_target_URL() {
			return $this->my_target_URL;
		}
		public function get_my_html() {
			return $this->my_html;
		}
		
	} // class Raingarden_Logo
