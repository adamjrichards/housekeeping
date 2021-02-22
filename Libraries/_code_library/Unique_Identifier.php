<?php

	namespace Black_Willow;

	class UID {
		protected $my_UID; // integer		
		function __construct() {
			$this->my_UID = substr( time(), 8 );
		}
		public function get_my_UID() {
			return $this->my_dUID;	
		}
		public function set_my_UID( $to_this ) {
			$this->my_UID = $to_this;
		}
	} // class UID

	class dUID {
		protected $my_dUID; // integer		
		function __construct() {
			$this->my_dUID = "dict_" . substr( time(), 8 );
		}
		public function get_my_dUID() {
			return $this->my_dUID;	
		}
		public function set_my_dUID( $to_this ) {
			$this->my_dUID = $to_this;
		}
	} // class dUID