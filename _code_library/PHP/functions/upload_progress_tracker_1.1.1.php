<?php
	function upload_progress_tracker( $upload_identifier ) {
		$tracking_information = uploadprogress_get_info( $upload_identifier );
		echo implode( "&", $tracking_information );
	} // upload_progress_tracker()
	upload_progress_tracker( $_POST[ "upload_identifier" ] );