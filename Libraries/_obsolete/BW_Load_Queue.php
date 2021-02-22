<?php

namespace black_willow\bw_system;

class BW_Load_Queue extends bw_system\BW_Load_Queue {

     private $my_project;
     private $my_queue;
     private $my_file_list;
     public $myp;
     public $myq;
	private $my_codepage = "";
	private $my_kickstart = FALSE;

	public function __construct( $the_handle, $the_family ) {
		$this->my_project = new \Ds\Map();
          $this->my_queue = new \Ds\Vector();
          $this->my_file_list = new \Ds\Vector();
          $this->myp = &$this->my_project;
          $this->myq = &$this->my_queue;
          $this->my_project->put( $the_handle, $the_family );
          $this->my_queue->push( $the_handle );
     }

     public function sort_my_list() {
		$this->sort_it();
		$myp = &$this->my_project;
		$this->lay_it_out();
		$this->htmlize_it();
          $the_kickstart = $this->stringify_it();
		return $the_kickstart;
     }

     public function sort_it() {
		$myp = $this->myp;
		$myq = &$this->myq;
		$the_granddaddy = $myq->remove( $myq->find( "MY_PROJECT" ) );
		$myp->put( $the_granddaddy, $GLOBALS[ $the_granddaddy ]->get_my_children() );

		while ( ! $myq->isEmpty() ) {
			$me = $myq->pop();
			$kids = $GLOBALS[ $me ]->get_my_children();
			$myp->put( $me, $kids );
		}
		foreach ( $myp as $me => $kids ) {
			if ( $me === "MY_PROJECT" ) {
				continue;
			}
			$dad = $GLOBALS[ $me ]->get_my_parent();
			if ( $myp->hasKey( $dad ) ) {
				$dads_kids = $myp->get( $dad );
				$dads_kids->put( $me, $kids );
			}
		}
		$the_project = $myp->get( "MY_PROJECT" );
		$this->my_project = $the_project;

	}

     public function lay_it_out( $the_family = null ) {
		if ( $the_family === null ) {
			$the_family = $this->my_project;
		}
		if ( ! $the_family->isEmpty() ) {
			$the_hierarchy = new \Ds\Deque( $the_family->keys() );
			foreach ( $the_hierarchy as $this_kid ) {
				if ( $GLOBALS[ $this_kid ]->get_my_left_sibling() === "append" ) {
					$the_kid = $the_hierarchy->remove( $the_hierarchy->find( $this_kid ) );
					$the_hierarchy->unshift( $the_kid );
					break;
				}
			}
			$the_iterable = $the_hierarchy;

			foreach ( $the_iterable as $this_kid ) {
				$this_kids_index = $the_hierarchy->find( $this_kid );
				$the_kid = $the_hierarchy->remove( $this_kids_index );
				$the_big_sister = $GLOBALS[ $this_kid ]->get_my_left_sibling();
				if ( $the_big_sister === "append" ) {
					$the_big_sisters_index = -1;
				} else {
					$the_big_sisters_index = $the_hierarchy->find( $the_big_sister );
				}
				$the_hierarchy->insert( $the_big_sisters_index + 1, $the_kid );
				if ( ! $GLOBALS[ $this_kid ]->get_my_children()->isEmpty() ) {
					$this->lay_it_out( $GLOBALS[ $this_kid ]->get_my_children() );
				}
			}
			$the_family->clear();
			foreach ( $the_hierarchy as $this_kid ) {
				$the_family->put( $this_kid, $GLOBALS[ $this_kid ]->get_my_children() );
			}
		}
	}

     public function htmlize_it( $the_family = null ) {
		if ( $the_family === null ) {
               $the_family = $this->myp;
          }
		foreach ( $the_family as $this_node => $this_value ) {
			$this->my_codepage .= $GLOBALS[ $this_node ]->get_my_node_opener();
			$this->my_codepage .= $GLOBALS[ $this_node ]->get_my_inner_code();
               if ( $GLOBALS[ $this_node ]->has_children() ) {
                    $this->htmlize_it( $GLOBALS[ $this_node ]->get_my_children() );
               }
               $this->my_codepage .= $GLOBALS[ $this_node ]->get_my_node_closer();
		}
	}
     public function stringify_it() {
		$the_kickstart = FALSE;
		$the_codepage = &$this->my_codepage;
		if ( ( \strpos( $the_codepage, $GLOBALS[ "MY_PROJECT" ]->get_my_node_opener() ) === 0 ) AND ( \strpos( $the_codepage, $GLOBALS[ "MY_PROJECT" ]->get_my_node_closer() ) !== FALSE ) ) {
			$the_codepage = str_replace( "##", "<", $the_codepage );
			$the_kickstart = TRUE;
		}
		return $the_codepage;
     }
	public function get_my_inner_property( $from_here, $with_this_key ) {
		return $this->$from_here->get( $with_this_key );
	}
	public function get_my_property( $at_this_index ) {
		return $this->my_file_list[ $at_this_index ];
	}
	public function push_my_node( $the_handle ) {
		$this->my_queue->push( $the_handle );
          $this->my_file_list->push( $the_handle );
     }
	public function put_my_node( $the_handle, $the_family ) {
          $this->my_project->put( $the_handle, $the_family );
          $this->my_file_list->push( $the_handle );
     }

	public function find_me( $under_this ) {
		$the_index = (int) $this->my_file_list->find(  "MY_SITE" );
		return $this->my_file_list->find( $under_this );
     }

	public function get_my_project( ) {
          return $this->my_project;
     }

     public function get_my_html() {
          return $this->my_html_string;
     }

     public function get_my_html_string() {
          return $this->my_html_string;
     }

     public function get_my_html_array() {
          return $this->my_html_array;
     }
}