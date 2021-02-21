<?php

namespace black_willow\core;

class _BW_TREE_NODE {

	private $my_tracking_id;
	private $my_parent;
	private $my_left_sibling;
	protected $my_children;

	function __construct( $the_params_array ) {
		$this->my_parent = $the_params_array[ "the_parent" ];
		$this->my_left_sibling = $the_params_array[ "the_left_sibling" ];
		$this->my_children = [];
		$this->my_tracking_id = \uids\y::make_me_a_new_node_tracking_id();
	}
	public function get_my_tracking_id() {
		return $this->my_tracking_id;
	}
}