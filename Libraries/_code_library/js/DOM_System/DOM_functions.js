function get_the_node_list ( the_root_element ) {
	
	if ( typeof the_root_element === "string" ) {
		the_root_node = document.getElementById( the_root_element );
	}
	
	var the_node_list;
	var the_full_node_array = [];
	
	function collect_the_nodes( the_root_node ) {
		if( the_root_node.hasChildNodes ) {
			the_node_list = the_root_node.childNodes;
		}
		the_node_list.forEach(
			function( currentValue, currentIndex, listObj ) {
				the_full_node_array.push( [ currentIndex, currentValue, listObj ] );			
				if( currentValue.hasChildNodes ) {
					collect_the_nodes( currentValue );
					//cl( the_node_list );
				}
			}, 'this'   
		);
	}
	if( the_root_node.hasChildNodes ) {
		collect_the_nodes( the_root_node );
	}
	return the_full_node_array;
}

function get_the_element_list( the_root_element ) {
	
	if ( typeof the_root_element === "string" ) {
		the_root_element = document.getElementById( the_root_element );
	}
	
	var the_element_list;
	var the_full_element_array = [];
	function collect_the_elements( the_root_element ) {
		if( the_root_element.hasChildNodes ) {
			the_element_list = the_root_element.childNodes;
			the_element_list.forEach(
				function( currentValue, currentIndex, listObj ) {
					if ( currentValue.nodeType === 1 ) {
					//cl( currentValue );
						the_full_element_array.push( currentValue );
						if( currentValue.hasChildNodes ) {
							collect_the_elements( currentValue );
						}
					}
				}, 'this'  
			);
		}
	}
	if( the_root_element.hasChildNodes ) {
		collect_the_elements( the_root_element );
	}
	//cl( the_full_element_array.length );
	return the_full_element_array;
}