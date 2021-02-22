<?php
	function upload_progress_tracker() {
		$tracking_information = uploadprogress_get_info( $file_to_track );
		echo $tracking_information[ "bytes_uploaded" ] . "\n";
		echo $tracking_information[ "bytes_total" ] . "\n";
		
	} // upload_progress_tracker()