<?php
	//phpinfo();
	//exit();
	//error_reporting(E_ERROR | E_PARSE);
	session_start();
	$root_directory_path = dirname( getcwd() );
	echo "Root: " . $root_directory_path . "<br>";
	echo "<style>ul{list-style-type:none} .directory{color:red} .file{color:blue}</style>";
	$exclusions = array( "blar", "work_files", "obsolete", "resources", "templates", "dwsync.xml", "_notes", "robots.txt", "error_log", ".htaccess" );
	if ( is_dir( $root_directory_path ) ) {
		echo "Is directory: " . is_dir( $root_directory_path ) . "<br>";
		$scan_directory = new Root_Directory_Scanner( $root_directory_path, $_SERVER[ "HTTP_USER_AGENT" ], $exclusions );
	} // if
		
	class Root_Directory_Scanner {
		protected $root_path;
		protected $operating_system;
		protected $current_path;
		protected $search_directory;
		protected $search_tree;
		
		function __construct( $root_path, $user_agent, $exclusion_list ) {
			if ( $_SERVER[ "SERVER_NAME" ] = "www.deeptext.ca" ) {
				$this->slash = "/";
				$this->operating_system = "UNIX";
			} // if else
			echo $this->operating_system . "<br>";
			$this->exclusion_list = $exclusion_list;
		     $this->root_path = $root_path;
			$this->root_tree = array( $this->root_path => "directory" );
			$this->root_directory = opendir( $this->root_path );
			$this->get_directory_list( $this->root_directory, $this->root_path );
			closedir( $this->root_directory );
			$this->make_sql_strings( $this->make_row_arrays() );
		} // __construct
		
		function __destruct() {
			//$this->close();
		} // __destruct()
	
		function is_excluded( $the_file ) {
			//echo $the_file . ": " . array_search( $the_file, $this->exclusion_list ) . "<br>";
			return array_search( $the_file, $this->exclusion_list ) > 0;
		} // is_excluded()
	
		function get_directory_list( $current_directory, $current_path ) {
			echo $current_directory . $current_path . "<br>";
			while ( ( $directory_entry = readdir( $current_directory ) ) !== FALSE ) {
				if ( $directory_entry != "." && $directory_entry != ".." ) {
					$this_file = "$current_path$this->slash$directory_entry";
					if ( ( $this->is_excluded( basename( $this_file ) ) ) || ( $this->is_excluded( substr( dirname( $this_file ), strripos( dirname( $this_file ), "\\" ) + 1 ) ) ) ) continue;
					if ( is_file( $this_file ) ) {
						$this->root_tree[ $this_file ] = "file";
					} else if ( is_dir( $this_file ) ) {
						$this->root_tree[ $this_file ] = "directory";
						$this_directory = opendir( $this_file );					
						$this->get_directory_list( $this_directory, $this_file );
						closedir( $this_directory );
					} // if else if
				} // if
			} // while
		} // get_directory_list()
		
		function convertToURL( $path ) {
			if ( $this->operating_system === "UNIX" ) {
				//$directory_path = "/var/www/html/deeptext.ca";
				$directory_path = "/home/dtca/public_html/deeptext.ca";
				echo $path . "<br>";
				$path = str_replace( $directory_path . "/css/", "https://www.deeptext.ca/css/", $path );
				$path = str_replace( $directory_path . "/scripts/", "https://www.deeptext.ca/scripts/", $path );
				$path = str_replace( $directory_path . "/pages/components/", "https://www.deeptext.ca/pages/components/", $path );
				$path = str_replace( $directory_path . "/pages/db_admin/", "https://www.deeptext.ca/index.php?show_panel=db_admin/", $path );
				$path = str_replace( $directory_path . "/pages/editor_admin/", "https://www.deeptext.ca/index.php?show_panel=editor_admin/", $path );
				$path = str_replace( $directory_path . "/pages/editor_tools/", "https://www.deeptext.ca/index.php?show_panel=editor_tools/", $path );
				$path = str_replace( $directory_path . "/pages/error_handling/", "https://www.deeptext.ca/index.php?show_panel=error_handling/", $path );
				$path = str_replace( $directory_path . "/pages/error_pages/", "https://www.deeptext.ca/error_pages/", $path );
				$path = str_replace( $directory_path . "/pages/guest_content/", "https://www.deeptext.ca/index.php?show_panel=guest_content/", $path );
				$path = str_replace( $directory_path . "/pages/guest_admin/", "https://www.deeptext.ca/index.php?show_panel=guest_admin/", $path );
				$path = str_replace( $directory_path . "/pages/help/", "https://www.deeptext.ca/index.php?show_panel=help/", $path );
				$path = str_replace( $directory_path . "/pages/owner_tools/", "https://www.deeptext.ca/index.php?show_panel=owner_tools/", $path );
				$path = str_replace( $directory_path . "/pages/reader_tools/", "https://www.deeptext.ca/index.php?show_panel=reader_tools/", $path );
				$path = str_replace( $directory_path . "/pages/server_admin/", "https://www.deeptext.ca/server_admin/", $path );
				$path = str_replace( $directory_path . "/pages/user_admin/", "https://www.deeptext.ca/index.php?show_panel=user_admin/", $path );
				$path = str_replace( $directory_path . "/pages/user_tools/", "https://www.deeptext.ca/index.php?show_panel=user_tools/", $path );
				$path = str_replace( $directory_path . "/classes/", "https://www.deeptext.ca/classes/", $path );
				$path = str_replace( $directory_path . "/functions/", "https://www.deeptext.ca/functions/", $path );
				$path = str_replace( $directory_path . "/pages/", "https://www.deeptext.ca/index.php?show_panel=", $path );
				$path = str_replace( $directory_path . "/", "https://www.deeptext.ca/", $path );
				echo $path . "<br>";
			} // if
			return $path;
		} // convertToURL()
		
		function make_row_arrays() {
			$table_array = array();			
			echo "<ul>";
			foreach ( $this->root_tree as $key => $value ) {
				echo "<li class='$value'>$key: $value</li>";
				try {
					if ( $value == "file" ) {
						$row_array = array( 
							"dta_page_name" => pathinfo( $key, PATHINFO_BASENAME ),
							"dta_page_security" => "user",
							"dta_page_listed_in_index" => TRUE,
							"dta_page_type" => "user",
							"dta_page_path" => pathinfo( $key, PATHINFO_DIRNAME ),
							"dta_page_default_url" => $this->convertToURL( $key ),
							"dta_page_code" => base64_encode( file_get_contents( $key ) )
						);
						array_push( $table_array, $row_array );
					} // if
				} catch ( Exception $e ) {
					error_get_last();
				} // try catch
			} // foreach
			echo "</ul>";
			return $table_array;
		} // make_sql_strings()
		
		function make_sql_strings( $table_array ) {
			//include "../db_admin/DeepText_1_connection_1.1.1.php";
			$DeepText_1_connection = mysqli_connect( "localhost", "dbroot", "#&W3RKk9HiNZ@QjK2ka#j9Fj", "DeepText_1_admin_1" );
			if ( mysqli_error( $DeepText_1_connection ) ) die( mysqli_errno() );
			if ( mysqli_query( $DeepText_1_connection, "TRUNCATE TABLE `DeepText_1_admin_1`.`dta_pages_1`;" ) ) {				
				foreach ( $table_array as $key => $values ) {
					$insert_string = "INSERT INTO `DeepText_1_admin_1`.`dta_pages_1` ( dta_page_name, dta_page_security, dta_page_listed_in_index, dta_page_type, dta_page_path, dta_page_default_url, dta_page_code ) VALUES ( '" . $values[ "dta_page_name" ] . "', '" . $values[ "dta_page_security" ] . "', '" . $values[ "dta_page_listed_in_index" ] . "', '" . $values[ "dta_page_type" ] . "', '" . addslashes( $values[ "dta_page_path" ] ) . "', '" . $values[ "dta_page_default_url" ] . "', '" . $values[ "dta_page_code" ] . "' );";
					if ( mysqli_query( $DeepText_1_connection, $insert_string ) ) {
						echo "Record inserted: " . $values[ "dta_page_name" ] . ".<br>";
					} else {
						echo mysqli_error( $DeepText_1_connection ) . "<br>";
					} // if else
				} // foreach
			} else {
				echo mysqli_error( $DeepText_1_connection ) . "<br>";
			} // if else
		} // make_sql_strings()
	} // class Root_Directory_Scanner