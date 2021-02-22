<?php

function build_a_filename_index_widget( $this_index, $how_many_to_show_at_a_time ) {
	$the_html = "<div class='blog post widget default_values'>\n<ul>\n<li>\n";
	$the_file_count = count( $this_index );
	for( $i = 0; $i < $the_file_count; $i++ ) {
		
		if( $i % $how_many_to_show_at_a_time === $how_many_to_show_at_a_time ) {
			$the_html .= "<ul>\n";
		}
		
		$the_file_path = "assets/posts/" . $this_index[ $i ];
		$the_tag = "<li><a href='$the_file_path'>" . $this_index[ $i ] . "</a></li>";	
		$the_html .= $the_tag;
		
		if( $i % $how_many_to_show_at_a_time === 0 || $i % $the_file_count === 0 ) {
			$the_html .= "</ul>\n</li>\n";
		}
	}
	$the_html .= "</ul>\n</div>";
	return $the_html;
}

function build_an_index_widget( $this_index, $the_filename_index, $how_many_to_show_at_a_time ) {
	$the_html = "<div class='blog post widget default_values'>\n<ul>\n<li>\n";
	$the_file_count = count( $this_index );
	for( $i = 0; $i < $the_file_count; $i++ ) {
		
		if( $i % $how_many_to_show_at_a_time === $how_many_to_show_at_a_time ) {
			$the_html .= "<ul>\n";
		}
		
		$the_file_path = "assets/posts/" . $the_filename_index[ $i ];
		$the_tag = "<li><a href='assets/posts/" . $the_filename_index[ $i ] . " '>" . $this_index[ $i ] . "</a></li>";	
		$the_html .= $the_tag;
		
		if( $i % $how_many_to_show_at_a_time === 0 || $i % $the_file_count === 0 ) {
			$the_html .= "</ul>\n</li>\n";
		}
	}
	$the_html .= "</ul>\n</div>";
	return $the_html;
}

function index_a_directory( $the_folder_uri ) {	
	if ( there_is_a_folder_called( $the_folder_uri ) ) {
		//echo $the_folder_uri;
		$all_the_nodes_in_the_folder = scandir( $the_folder_uri);
		$all_the_files_in_the_folder = array();
		foreach( $all_the_nodes_in_the_folder as $this_particular_node ) { 
			$this_particular_node = "$the_folder_uri/$this_particular_node";
			if( there_is_a_file_called( $this_particular_node ) ) {
				$all_the_files_in_the_folder[] = $this_particular_node;
			}
		}
	}
	return $all_the_files_in_the_folder;
}


function index_a_directory_recursively( $the_top_folder ) {
	$the_full_index;
	function recurse( $the_top_folder ) {
		static $the_full_index = array();
		if ( there_is_a_folder_called( $the_top_folder ) ) {
			$all_the_nodes_in_the_folder = array_slice( scandir( $the_top_folder ), 2 );
			foreach( $all_the_nodes_in_the_folder as $this_particular_node ) {	
				if( is_file( "$the_top_folder/$this_particular_node" ) ) {
					//say("$the_top_folder/$this_particular_node" );
					$the_full_index[] = "$the_top_folder/$this_particular_node";
				} else if( is_dir( "$the_top_folder/$this_particular_node" ) ) {
					recurse( "$the_top_folder/$this_particular_node" );
				}
			}
		}		
		return $the_full_index;
	}
	$the_full_index = recurse( $the_top_folder );
	return $the_full_index;
}


function retrieve_the_metadata_from_the_post( $search_for_this, $in_this_post  ) {
	$the_file = file( "assets/posts/$in_this_post" );
	foreach( $the_file as $this_line ) {
		$this_line_length = strlen( $search_for_this ) + 2;
		if( strpos( $this_line, $search_for_this ) !== FALSE ) {
			return trim( substr( $this_line, $this_line_length ) );
		}
	}
}

function retrieve_the_date_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "Date", $in_this_post );
}
function retrieve_the_categories_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "Categories", $in_this_post );
}
function retrieve_the_tags_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "Tags", $in_this_post );
}
function retrieve_the_title_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "Title", $in_this_post );
}
function retrieve_the_subsite_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "Subsite", $in_this_post );
}
function retrieve_the_number_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "Number", $in_this_post );
}
function retrieve_the_id_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "ID", $in_this_post );
}
function retrieve_the_filename_from_the_post_meta( $in_this_post ) {
	return retrieve_the_metadata_from_the_post( "Filename", $in_this_post );
}
function push_the_metadata_and_posts( $put_the_key_in_this_array, $with_this_value ) {
	$put_the_key_in_this_array[ $the_key_we_need ] = $with_this_value; 
}

function sort_the_posts( $this_way ) {
	
	$the_posts_sorted_by_date = [];
	$the_posts_sorted_by_categories = [];
	$the_posts_sorted_by_tags = [];
	$the_posts_sorted_by_title = [];
	$the_posts_sorted_by_subsite = [];
	$the_posts_sorted_by_number = [];
	$the_posts_sorted_by_id = [];
	
	$the_posts_sorted_by_filename = array_slice( scandir( "assets/posts" ), 2 );
	
	foreach( $the_posts_sorted_by_filename as $this_post ) {
		$the_metadata = retrieve_the_metadata_from_the_post( $this_way, $this_post );
		switch( $this_way ) {
			case "Date"			: 	$the_posts_sorted_by_date[ $the_metadata ] = $this_post;
									break;
			case "Categories"	: 	$the_posts_sorted_by_categories[ $the_metadata ] = $this_post;
									break;
			case "Tags"			: 	$the_posts_sorted_by_tags[ $the_metadata ] = $this_post;
									break;
			case "Title"		: 	$the_posts_sorted_by_title[ $the_metadata ] = $this_post;
									break;
			case "Subsite"		: 	$the_posts_sorted_by_subsite[ $the_metadata ] = $this_post;
									break;
			case "Number"		: 	$the_posts_sorted_by_number[ $the_metadata ] = $this_post;
									break;
			case "ID"			: 	$the_posts_sorted_by_id[ $the_metadata ] = $this_post;
									break;
			case "Filename"		:				
			default				: 	return $the_posts_sorted_by_filename;
		}		
	}
	switch( $this_way ) {
		case "Date"			: return $the_posts_sorted_by_date;
		case "Categories"	: return $the_posts_sorted_by_categories;
		case "Tags"			: return $the_posts_sorted_by_tags;
		case "Title"		: return $the_posts_sorted_by_title;
		case "Subsite"		: return $the_posts_sorted_by_subsite;
		case "Number"		: return $the_posts_sorted_by_number;
		case "ID"			: return $the_posts_sorted_by_id;
	}
}



function get_the_filepath_for_the_asset_type( $the_asset_type ) {
	
	switch( $the_asset_type ) {
		case "Poem A to F"				: return "assets/poems/a_to_f/";
		case "Poem G to M"				: return "assets/poems/g_to_m/";
		case "Poem N to S"				: return "assets/poems/n_to_s/";
		case "Poem T to Other"			: return "assets/poems/t_to_other/";
		case "Essay"					: return "assets/essays/";
		case "Artwork"					: return "assets/images/artwork/";
		case "Artwork x1920y1080"		: return "assets/images/artwork/x1920y1080/";
		case "Artwork x960y540"			: return "assets/images/artwork/x960y540/";
		case "Self-portrait"			: return "assets/images/artwork/self-portraits/";
		case "Background"				: return "assets/images/backgrounds/";
		case "Background x1920y1080"	: return "assets/images/backgrounds/x1920y1080/";
		case "Body background"			: return "assets/images/backgrounds/body/";
		case "Poem background"			: return "assets/images/backgrounds/poems/";
		case "Banner"					: return "assets/images/banners/";
		case "Banner x1920y150"			: return "assets/images/banners/x1920y150/";
		case "Downloadable"				: return "assets/downloadables/";
		case "Box"						: return "assets/images/boxes/";
		case "Logo"						: return "assets/images/logos/";
		case "Object"					: return "assets/images/objects/";
		case "Showbill"					: return "assets/images/showbills/";
		case "Subsite"					: return "subsite/";
		case "Audio"					: return "assets/audio/";
		case "Video"					: return "assets/fonts/";
		case "External"					: return "assets/external/";
		default							: return "assets/posts/";
	}
	return FALSE;
}

function index_a_resouce( $the_resource_folder ) {
	
	switch( $the_resource_folder ) {
		case "Poems"				: return index_a_directory_recursively( "resources/creative/poems/" );
		case "Stories"				: return index_a_directory_recursively( "resources/creative/stories/" );
		case "Obsolete"				: return index_a_directory_recursively( "resources/obsolete/" );
		case "Source"				: return index_a_directory_recursively( "resources/source/" );
		case "external"				: return index_a_directory_recursively( "resources/external/" );
		default						: return index_a_directory_recursively( "resources/" );
	}
	return FALSE;
}

function sort_the_assets_by_title ( $the_asset_type ) {
	$the_assets_sorted_by_title = [];	
	$the_assets_sorted_by_filename = array_slice( scandir( get_the_filepath_for_the_asset_type( $the_asset_type ) ), 2 );
	
	$the_file = file( "assets/$the_asset_type" );
	foreach( $the_file as $this_line ) {
		if( strpos( $this_line, "Title: " ) !== FALSE ) {
			$the_assets_sorted_by_title = array_push( $the_assets_sorted_by_title, trim( substr( $this_line, 9 ) ) );
		}
	}	
	return $the_assets_sorted_by_title;
}

function retrieve_the_assets_randomly ( $the_asset_type ) {
	$the_assets_sorted_by_filename = scandir( get_the_filepath_for_the_asset_type( $the_asset_type ) );
	$the_assets_sorted_randomly = [];
	foreach( $the_assets_sorted_by_filename as $this_file ) {
		$the_assets_sorted_randomly[] = array_rand( $the_assets_sorted_by_filename );
	}	
	return $the_assets_sorted_randomly;
}


function retrieve_the_assets_unsorted ( $the_asset_type ) {
	return scandir( get_the_filepath_for_the_asset_type( $the_asset_type ), SCANDIR_SORT_NONE );
}
function retrieve_the_assets_sorted_ascending ( $the_asset_type ) {
	return scandir( get_the_filepath_for_the_asset_type( $the_asset_type ), SCANDIR_SORT_ASCENDING );
}
function retrieve_the_assets_sorted_descending ( $the_asset_type ) {
	return scandir( get_the_filepath_for_the_asset_type( $the_asset_type ), SCANDIR_SORT_DESCENDING );
}



function get_the_most_recent_post() {}

function get_posts_sorted_by_date () {	
	return( sort_the_posts( "Date" ) ); 
}
function get_posts_sorted_by_categories () {
	return sort_the_posts( "Categories" );
}
function get_posts_sorted_by_tags () {
	return sort_the_posts( "Tags" ); 
}
function get_posts_sorted_by_title () {
	return sort_the_posts( "Titles" );
}
function get_posts_sorted_by_subsite () {
	return sort_the_posts( "Subsite" );
}
function get_posts_sorted_by_number () {
	return sort_the_posts( "Number" );
}
function get_posts_sorted_by_id () {
	return sort_the_posts( "ID" );
}
function get_posts_sorted_by_filename () {
	return sort_the_posts( "Filename" );
}
function get_poems_sorted_by_title () {
	return sort_the_assets_by_title( "Poems" );
}
function get_stories_sorted_by_title () {
	return sort_the_assets_by_titles( "Stories" );
}
function get_non_fiction_sorted_by_title () {
	return sort_the_assets_by_title( "Non-fiction" );
}
function get_other_media_sorted_by_title () {
	return sort_the_assets_by_title( "Other Media" );
}
function get_fragmenti_sorted_randomly () {
	return sort_the_assets_randomly( "Fragmenti" );
}
