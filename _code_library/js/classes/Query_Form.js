class Query_Form {
	
	constructor( the_query_term ){
		
		this.my_new_row;
		this.my_query_term = the_query_term;
		this.my_output_table = document.getElementById( THE_QUERY_FORM_OUTPUT_TABLE_ID );
		this.my_output_table_name = THE_QUERY_FORM_OUTPUT_TABLE_NAME;
		this.my_form = document.getElementById( THE_QUERY_FORM_ID );
		this.my_form.removeAttribute( "onmouseenter" );
		
		this.add_a_new_row = function( of_this_type ) {
			this.my_new_row = document.createElement( "tr" );
			this.my_new_row.className = `dictionary query form builder ${ of_this_type }`;
			this.my_new_row.id = `the_${ this.my_output_table_name }_${ of_this_type }`;
			this.my_output_table.appendChild( this.my_new_row );
			return this.my_new_row;
		}
		this.my_new_row = this.add_a_new_row( "query_term" );
		this.my_new_row.innerHTML = `
				#td>#label for='a_query_term'>Your Query:#/label>#/td>
				#td>${ this.my_query_term }#/td>`;

		this.add_a_new_query_type_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "query_type" );
			this.my_new_row.innerHTML = `
				#td colspan='3'>
					#table class="quick_table horizontal">
						#tr>
						#th>Query type:#/th>
						#/tr>
						#tr>
							#td>#input type='radio' class='query form_builder" id="the_output_table_query_type_a" name='the_query_type' value="type a">#br>#label for='the_output_table_query_type_a'>Type A:#/label>#/td>
							#td>#input type='radio' class='query form_builder" id="the_output_table_query_type_b" name='the_query_type' value="type b">#br>#label for='the_output_table_query_type_b'>Type B:#/label>#/td>
							#td>#input type='radio' class='query form_builder" id="the_output_table_query_type_c" name='the_query_type' value="type c">#br>#label for='the_output_table_query_type_c'>Type C:#/label>#/td>
							#td>#input type='radio' class='query form_builder" id="the_output_table_query_type_d" name='the_query_type' value="type d">#br>#label for='the_output_table_query_type_d'>Type D#/label>#/td>
							#td>#input type='radio' class='query form_builder" id="the_output_table_query_type_e" name='the_query_type' value="type e">#br>#label for='the_output_table_query_type_e'>Type E:#/label>#/td>
						#/tr>
					#/table>
				#/td>`;
		}
		this.add_a_new_query_category_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "query_category" );
			this.my_new_row.innerHTML = `
				#td colspan='2'>#label for='a_query_category_row'>Query Categories:#/label>#/td>
				#td>
					#select name='a_query_category_row' multiple>
						#option value='Category A'>Category A#/option>
						#option value='Category B'>Category B#/option>
						#option value='Category C'>Category C#/option>
						#option value='Category D'>Category D#/option>
						#option value='Category E'>Category E#/option>
					#/select>
				#/td>`;
		}
		this.add_a_new_query_tag_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "query_tags" );
			this.my_new_row.innerHTML = `
				#td>#label for='a_query_tag'>Tags:#/label>#/td>
				#td>#input type='text' name='a_query_tag'>#/td>
				#td>#input type='button' onClick='add_a_new_tag_row()' value='Add another tag?'>#/td>`;
		}
		this.add_a_new_query_filter_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "query_filters" );
			this.my_new_row.innerHTML = `
				#td colspan='3'>
					Query type:#br> 
					#input type='radio' class='query form_builder" id="the_query_filter_${ this.my_output_table_name }_a" name='the_query_type' value="type a">
					#input type='radio' class='query form_builder" id="the_query_filter_${ this.my_output_table_name }_b" name='the_query_type' value="type b">
					#input type='radio' class='query form_builder" id="the_query_filter_${ this.my_output_table_name }_c" name='the_query_type' value="type c">
					#input type='radio' class='query form_builder" id="the_query_filter_${ this.my_output_table_name }_d" name='the_query_type' value="type d">
					#input type='radio' class='query form_builder" id="the_query_filter_${ this.my_output_table_name }_e" name='the_query_type' value="type e">
					#label for='the_query_filter_${ this.my_output_table_name }_a'>Query flag a#/label>
					#label for='the_query_filter_${ this.my_output_table_name }_b'>Query flag b#/label>
					#label for='the_query_filter_${ this.my_output_table_name }_c'>Query flag c#/label>
					#label for='the_query_filter_${ this.my_output_table_name }_d'>Query flag d#/label>
					#label for='the_query_filter_${ this.my_output_table_name }_e'>Query flag e#/label>
				#/td>`;
		}
		this.add_a_new_L1_dictionary_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "L1_dictionary" );
			this.my_new_row.innerHTML = `
				#td>#label for='an_L1_dictionary_row'>L1 Dictionary:#/label>#/td>;
				#td>
					#select name='an_L1_dictionary_row'>
						#option value='L1 Dictionary A'>L1 Dictionary A#/option>
						#option value='L1 Dictionary B'>L1 Dictionary B#/option>
						#option value='L1 Dictionary C'>L1 Dictionary C#/option>
						#option value='L1 Dictionary D'>L1 Dictionary D#/option>
						#option value='L1 Dictionary E'>L1 Dictionary E#/option>
					#/select>
				#/td>`;
		}
		this.add_a_new_L2_dictionary_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "L2_dictionary" );
			this.my_new_row.innerHTML = `
				#td>#label for='an_L2_dictionary_row'>L2_dictionary:#/label>#/td>;
				#td>
					#select name='an_L2_dictionary_row'>
						#option value='L2 Dictionary A'>L2 Dictionary A#/option>
						#option value='L2 Dictionary B'>L2 Dictionary B#/option>
						#option value='L2 Dictionary C'>L2 Dictionary C#/option>
						#option value='L2 Dictionary D'>L2 Dictionary D#/option>
						#option value='L2 Dictionary E'>L2 Dictionary E#/option>
					#/select>
				#/td>`;
		}
		this.add_a_new_equivalence_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "equivalence" );
			this.my_new_row.innerHTML = `
				#td>#label for='a_new_equivalence'>Rough equivalence:#/label>#/td>
				#td colspan='2'>
					Language 1: #input type='text' name='an_equivalence_L1'>#br>
					Language 2: #input type='text' name='an_equivalence_L2'>
				#/td>`;
		}
		this.add_a_new_stem_row = function( me ) {				 
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "stem" );
			this.my_new_row.innerHTML = `
				#td>#label for='a_new_stem'>Stems:#/label>#/td>
				#td>#input type='text' name='a_stem'>#/td>`;
		}
		this.add_a_new_prefix_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "prefix" );
			this.my_new_row.innerHTML = `
				#td>#label for='a_prefix'>Prefixes#/label>#/td>
				#td>#input type='text' name='a_prefix'>#/td>
				#td>#input type='button' onClick='add_a_new_prefix_row()' value="Add another prefix row?'>#/td>`;
		}
		this.add_a_new_infix_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "infix" );
			this.my_new_row.innerHTML = `
				#td>#label for='an_infix_row'>Infixes#/label>#/td>
				#td>#input type='text' name='an_infix'>#/td>
				#td>#input type='button' onClick='add_a_new_infix_row()' value="Add another infix?'>#/td>`;
		}
		this.add_a_new_suffix_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "suffix" );
			this.my_new_row.innerHTML = `
				#td>#label for='a_new_suffix_row'>Suffix#/label>#/td>
				#td>#input type='text' name='a_suffix'>#/td>
				#td>#input type='button' onClick='add_a_new_suffix_row()' value="Add another suffix?'>#/td>`;
		}
		this.add_a_new_query_pattern_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "query_pattern" );
			this.my_new_row.innerHTML = `
				#td>#label for='a_new_query_pattern'>Query patterns#/label>#/td>
				#td>#input type='text' name='query_pattern_row'>#/td>
				#td>#input type='button' onClick='add_a_new_query_pattern_row()' value="Add another query pattern?'>#/td>`;
		}
		this.add_a_new_want_audio_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "want_audio" );
			this.my_new_row.innerHTML = `
				#td>Upload Audio: #/td>
				#td colspan="2">#input type='file' name='want_audio_row'>#/td>`;
		}
	} // constructor
}
