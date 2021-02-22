<?php
	
	chdir( "C:\\Users\\Adam Richards\\Websites\\deep_text\\client_files\\" );
	$root_directory_path = dirname( getcwd() );
	echo "Root: " . $root_directory_path . "<br>";
	echo "<h1>PDF Splitter</h1>";
	echo "<h3>File to split: https://www.deeptext.ca/client_files/testfile_1.pdf.</h3>";
	echo "<h3>Result name: test_result_n.pdf.</h3>";
	echo "Max file size: 1.25 MB" . "<br>";
	$testfile = new PDF_Splitter( "../client_files/testfile_1.pdf", "test_result", 1.25 );
	
	class PDF_Splitter {
		
		protected $file_path;
		protected $output_name;
		protected $max_file_size;
				
		function __construct( $file_path, $output_name, $max_file_size ) {
			echo "open" . "<br>";			
			$this->file_path = $file_path;
			echo intval( file_exists( $file_path ) ) . "<br>";
			$this->output_name = $output_name;
			$this->max_file_size = $max_file_size;
			$this->old_file_size = $this->get_old_file_size();
			echo $this->old_file_size . "<br>";
			$this->number_of_new_files = $this->get_number_of_new_files();
			echo $this->number_of_new_files . "<br>";
			$this->split_old_file();
			//$this->create_new_files();
			//$this->read_into_new_files();
			//$this->close_new_files();
			//$this->upload_new_files_to_db();
		} // __construct
		
		function __destruct() {
			echo "close" . "<br>";
		} // __destruct()
		
		function get_old_file_size() {
			return  filesize( $this->file_path );
		} // get_old_file_size()			
		
		function get_number_of_new_files() {
			return max( ceil( $this->old_file_size / ( $this->max_file_size * 1048576 ) ), 5 );
		} // get_number_of_new_files()
		
		function split_old_file() {
			try {
				echo exec( "split " . $this->file_path . " -b 1250 k " . $this->output_name ) . "<br>";
			} catch ( Exception $exec_exception ) {
				var_dump( error_get_last() );
			} // try catch
		} // split_old_file()
		
	} // class PDF_Splitter