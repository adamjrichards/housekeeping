var the_site_globals = new Site_Global_Variables();

function getme( me ) {
	return document.getElementById( me );
}

the_site_globals.add_a_new_global_variable( "the_add_entry_gateway", getme( "the_add_entry_gateway" ) );
the_site_globals.add_a_new_global_variable( "the_search_gateway", getme( "the_search_gateway" ) );
the_site_globals.add_a_new_global_variable( "the_term_output", getme( "the_term_output" ) );
the_site_globals.add_a_new_global_variable( "the_type_output", getme( "the_type_output" ) );
the_site_globals.add_a_new_global_variable( "the_category_output", getme( "the_category_output" ) );
the_site_globals.add_a_new_global_variable( "the_filter_output", getme( "the_filter_output" ) );
the_site_globals.add_a_new_global_variable( "the_directive_output", getme( "the_directive_output" ) );
the_site_globals.add_a_new_global_variable( "the_L1_output", getme( "the_L1_output" ) );
the_site_globals.add_a_new_global_variable( "the_L2_output", getme( "the_L2_output" ) );
the_site_globals.add_a_new_global_variable( "the_tag_output", getme( "the_tag_output" ) );
the_site_globals.add_a_new_global_variable( "the_stem_output", getme( "the_stem_output" ) );
the_site_globals.add_a_new_global_variable( "the_pattern_output", getme( "the_pattern_output" ) );
the_site_globals.add_a_new_global_variable( "the_iWantAudio_output", getme( "the_iWantAudio_output" ) );


the_site_globals.add_a_new_global_variable( "the_term_input", getme( "the_term_input" ) );
the_site_globals.add_a_new_global_variable( "the_type_input", getme( "the_type_input" ) );
the_site_globals.add_a_new_global_variable( "the_category_input", getme( "the_category_input" ) );
the_site_globals.add_a_new_global_variable( "the_filter_input", getme( "the_filter_input" ) );
the_site_globals.add_a_new_global_variable( "the_directive_input", getme( "the_directive_input" ) );
the_site_globals.add_a_new_global_variable( "the_L1_input", getme( "the_L1_input" ) );
the_site_globals.add_a_new_global_variable( "the_L2_input", getme( "the_L2_input" ) );
the_site_globals.add_a_new_global_variable( "the_tag_input", getme( "the_tag_input" ) );
the_site_globals.add_a_new_global_variable( "the_stem_input", getme( "the_stem_input" ) );
the_site_globals.add_a_new_global_variable( "the_pattern_input", getme( "the_pattern_input" ) );
the_site_globals.add_a_new_global_variable( "the_iWantAudio_input", getme( "the_iWantAudio_input" ) );


function display_the_input( me, here ) {
	if ( me.type === "checkbox" ) {
		if ( here.value === "" ) {
			here.value += me.value;
		} else {
			here.value += ", " + me.value;
		}
	} else {
		here.value = me.value;
	}
}