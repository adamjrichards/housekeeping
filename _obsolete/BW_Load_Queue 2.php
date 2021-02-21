<?php

namespace black_willow\sys;

class BW_Load_Queue {

     private $my_count = 0;
     private $my_patriarchy;

	public function __construct( $the_patriarch ) {
          $this->my_patriarch = $the_patriarch;
          $this->my_patriarchy = array();
          lnout( __FILE__, __LINE__, $this->my_patriarchy );
     }

     private function append_it( $the_item ) {
          $myp = &$this->my_patriarchy;
          if ( \array_search( $myp, $the_item ) ) {
               return TRUE;
          }
          if( ++$this->my_count > 100 ) {
              exit( "too many loops<br>" );
          }
          $myp = &$this->my_patriarchy;
          $the_index;
          $the_daddy = $GLOBALS[ $the_item ]->get_my_parent();
          $dq = $myq[ $the_daddy ];
          try {
               $the_big_sister = $GLOBALS[ $the_item ]->get_my_left_sibling();
               // no big sister
               if ( $the_big_sister === "append" ) {
                    array_push( $dq, $the_item );
                    return TRUE;
               } else {
                    $the_index = array_search( $dq, $the_big_sister ) + 1;
                    $the_index = array_search( $the_daddy, $dq );
                    $the_head = array_slice( $myq, 0, $the_index );
                    $the_tail = array_slice( $myq, $the_index );
                    array_push( $the_head, $the_item );
                    array_merge( $the_head, $the_tail );
               } else {
                    append_it( $)
          } catch ( \ErrorException $e ) {
                    $the_big_sister = $GLOBALS[ $the_item ]->get_my_left_sibling();
                    $the_big_sister_exists = array_key_exists( $the_big_sister, $dq );
                    if ( $the_big_sister_exists ) {
                         $dq[ $the_index ] = $the_item;
                         return TRUE;
                    } else {
                         $this->append_it( $the_big_sister );
                         return;
                    }
               } else {
                    lnout( __FILE__, __LINE__, $the_daddy );
                    $this->append_it( $the_daddy );
                    array_push( $myq, $the_item );
                    return FALSE;
               }
          }
     }

	public function sort_my_list( $the_patriarch ) {
          $this->append_it( "MY_SITE" );
          $this->append_it( "MY_PAGE" );
          $this->append_it( "MY_HTML_TAG" );
     }

	public function insert_my( $this_item, $with_this_index ) {
		$this->my_items->insert( $with_this_index, $this_item );
	}
	public function push( $this_item ) {
		array_push( $this->my_patriarchy, $this_item );
	}
	public function put_my_handle( $this_handle ) {
		array_push( $this->my_patriarchy, $this_handle );
	}

	public function pop_me() {
		return $this->my_items->pop();
	}
}