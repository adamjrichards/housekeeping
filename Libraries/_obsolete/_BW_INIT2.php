<?php

namespace black_willow\core;

class _BW_INIT {

	protected $my_init_map;
	protected $my_JSON = FALSE;
	private $my_kickstart = FALSE;

	function __construct( $the_meta, $the_JSON_map ) {
		// the Black Willow setup
		$the_new_meta = null;
		if ( \is_iterable( $the_meta ) ) {
			$the_new_meta = $the_meta;
		} else {
			$the_new_meta = (array) $the_meta;
		}
		$this->my_init_map = new \black_willow\bw_system\BW_Init_Map( $the_new_meta, $the_JSON_map );
		if ( $this->my_init_map->get_my_kickstart() === TRUE ) {
			$this->my_kickstart = TRUE;
		}
	}
	public function add_a_node_map( $with_this_handle, $the_new_map ) {
		$this->my_init_map->add_a_node_map( $with_this_handle, $the_new_map );
	}
	public function add_an_attribute( $like_this_one ) {
		$this->my_attributes[] = $like_this_one;
	}
	public function add_a_meta( $like_this_one ) {
		$this->my_meta[] = $like_this_one;
	}
	public function add_a_loader( $like_this_one ) {
		$this->my_loaders[] = $like_this_one;
	}
	public function merge_a_map( $the_new_meta ) {
		$this->my_init_map = $this->my_init_map->merge_a_map( $the_new_meta );
		return $this->my_init_map;
	}
	public function get_my_kickstart() {
		return $this->my_kickstart;
	}
	public function get_my_map() {
		return $this->my_init_map;
	}
	public function get_my_JSON() {
		return $this->my_JSON;
	}
}