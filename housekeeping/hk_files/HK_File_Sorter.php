<?php

namespace housekeeping\hk_files;

class HK_File_Sorter extends \housekeeping\hk_core\_HK_FILE_HANDLER {
    
    public $my_starting_directory;
    
    function __construct( $the_parameter_array ) {
        @$pars = $the_parameter_array;
        
        $this->my_starting_directory = @$pars[ "the_starting_directory" ];
        
        function search_this_folder( $the_directory_files ) {
            $the_directory_list = scandir( $the_directory_files );
            //vump( $the_directory_list );
            foreach( $the_directory_list as $one_particular_file ) {
                if( preg_match( "/\A\w/", $one_particular_file ) )  {
                    say( $one_particular_file );
                    
                    if( is_file( $one_particular_file ) ) {
                        say( "Dir: $one_particular_file" );
                        //search_this_folder( $this->my_starting_directory );
                    }
                } // if
            } // if
        } // constructor;
        search_this_folder( $this->my_starting_directory );
    } // search_this_foler()
} // class
