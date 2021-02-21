<?php
	$_SESSION[ "message_success" ] = "";
	if ( isset( $_POST[ "sta_inquiry_given_names" ] ) & isset( $_POST[ "sta_inquiry_last_name" ] ) ) $good_name = true;
	if ( isset( $_POST[ "sta_inquiry_email" ] ) ) $good_contact = true;
	if ( isset( $_POST[ "sta_inquiry_message" ] ) ) $good_message = true;
	if ( $good_name & $good_contact & $good_message ) $viable_email = true;
	if ( $viable_email ) $mail_to = "andrea@speakingthroughart.com";
	if ( isset( $_POST[ "sta_inquiry_subject" ] ) & strlen( $_POST[ "sta_inquiry_subject" ] ) > 2 ) {
		$mail_subject = "Form mail from stacom: " . $_POST[ "sta_inquiry_subject" ];
	} else {
		$mail_subject = "Form mail from stacom - no subject";
	} // if else
	$mail_from = "do_not_reply@speakingthroughart.com";
	$mail_headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf8\r\n";
	$mail_message = "Contact last name: " . $_POST[ "sta_inquiry_last_name" ] . "\r\n"
					. "Contact given name(s): " . $_POST[ "sta_inquiry_given_names" ] . "\r\n"
					. "Contact email: " . $_POST[ "sta_inquiry_email" ] . "\r\n"
					. "Contact primary phone: " . $_POST[ "sta_inquiry_primary_phone" ] . "\r\n"
					. "Contact alternate phone: " . $_POST[ "sta_inquiry_alternate_phone" ] . "\r\n"
					. "Contact preference: " . $_POST[ "sta_inquiry_contact_preference" ] . "\r\n"
					. "Contact message: " . $_POST[ "sta_inquiry_message" ];
	if ( $viable_email ) {
		try {
			if( mail( $mail_to, $mail_subject, $mail_message, $mail_headers ) ) {
				$_SESSION[ "message_success" ] = "<h3>Your message has been sent. Thanks for making contact with me. I will reply within 24 hours.</h3>";
			} else {
				throw new Exception( "Can't send email to " . $_POST[ "sta_inquiry_email" ] . "." );
			} // if else
		} catch( Exception $e ) {
			print_r( error_get_last() );
			$error_message = "Error: " . "That does not seem to be a usable email address.<br>";
			$error_message .= "Error: " . $e -> getMessage() . "<br>";
			$_SESSION[ "message_success" ] = $error_message . "Can't send email to " . $_POST[ "sta_inquiry_email" ] . ".  Please try again, or phone me if it doesn't work.";
		} // try catch
	} else {
		$_SESSION[ "message_success" ] = "Can't send email to " . $_POST[ "sta_inquiry_email" ] . ".  Please try again, or phone me if it doesn't work.";
	} // if else
	$_SESSION[ "message_attempted" ] = true;