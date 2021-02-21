<?php

	class Random_UID_Generator {
		
		static function get_me_a_new_permanent_UID( $using_this_seed ) {
			$the_ID_list = file( "C:\Raingarden\configuration\server_randoms_used.txt" );
			$the_random = random_int( 10001, 99999 );
			while ( array_search( $the_ID_list, $the_random ) ) {
				$the_random = random_int( 10001, 99999 );
			}
			array_push( $the_ID_list, $the_random );
			file_put_contents( "C:\Raingarden\configuration\server_randoms_used.txt", sort( $the_ID_list, SORT_NUMERIC ) );
			return "$using_this_seed_$the_random";			
		} // get_me_a_new_permanent_UID()
		
		static function get_me_a_new_temporary_UID( $using_this_seed ) {
			$the_ID_list = file( "C:\Raingarden\configuration\session_randoms_used.txt" );
			$the_random = random_int( 10001, 99999 );
			while ( array_search( $the_ID_list, $the_random ) ) {
				$the_random = random_int( 10001, 99999 );
			}
			array_push( $the_ID_list, $the_random );
			file_put_contents( "C:\Raingarden\configuration\session_randoms_used.txt", sort( $the_ID_list, SORT_NUMERIC ) );
			return "$using_this_seed_$the_random";	
		} // get_me_a_new_temporary_UID()
		
		static function just_get_me_a_safe_random() {
			$the_ID_list = array_merge( file( "C:\Raingarden\configuration\server_randoms_used.txt" ), file( "C:\Raingarden\configuration\session_randoms_used.txt" ) );
			$the_random = random_int( 10001, 99999 );
			while ( array_search( $the_ID_list, $the_random ) ) {
				$the_random = random_int( 10001, 99999 );
			}
			return $the_random;	
		} // get_me_a_new_temporary_UID()
		
		static function add_me_to_the_used_server_randoms_list( $me ) {
			$the_ID_list = file( "C:\Raingarden\configuration\server_randoms_used.txt" );
			array_push( $the_ID_list, $me );
			sort( $the_ID_list, SORT_NUMERIC );			
			file_put_contents( "C:\Raingarden\configuration\server_randoms_used.txt", sort( $the_ID_list, SORT_NUMERIC ) );
			return "$using_this_seed_$the_random";	
		}
		
	}