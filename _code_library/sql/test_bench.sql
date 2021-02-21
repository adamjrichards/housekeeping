SET @the_timestamp = now(6) + 0generate_a_new_UIDgenerate_a_new_UID;
SET @the_random_uid = concat( "the_prefix_", replace( convert( rand(@the_timestamp), char ), "0.", "" ) );
SELECT @the_timestamp, @the_random_uid;