class Entry_Form {
	
	constructor( the_entry_term ){
		
		this.my_new_row;
		this.my_entry_term = the_entry_term;
		this.my_output_table = document.getElementById( THE_ENTRY_FORM_OUTPUT_TABLE_ID );
		this.my_output_table_name = THE_ENTRY_FORM_OUTPUT_TABLE_NAME;
		this.my_form = document.getElementById( THE_ENTRY_FORM_ID );
		this.my_form.removeAttribute( "onmouseenter" );
		
		this.add_a_new_row = function( of_this_type ) {
			this.my_new_row = document.createElement( "tr" );
			this.my_new_row.className = `dictionary entry form builder ${ of_this_type }`;
			this.my_new_row.id = `the_output_table_${ of_this_type }`;
			this.my_output_table.appendChild( this.my_new_row );
			return this.my_new_row;
		}
		this.my_new_row = this.add_a_new_row( "entry_term" );
		this.my_new_row.innerHTML = `
				#td>#label for='a_entry_term'>Your Entry:#/label>#/td>
				#td colspan="2">${ this.my_entry_term }#/td>`;

		this.add_a_new_entry_type_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "entry_type" );
			this.my_new_row.innerHTML = `
                #td>#label for='a_entry_category_row'>Entry Categories:#/label>#/td>
				#td colspan='2'>
					#table class="quick_table horizontal">
                            #tr>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_type_a" name='the_entry_type' value="type a">#br>#label for='the_output_table_entry_type_a'>Type A:#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_type_b" name='the_entry_type' value="type b">#br>#label for='the_output_table_entry_type_b'>Type B:#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_type_c" name='the_entry_type' value="type c">#br>#label for='the_output_table_entry_type_c'>Type C:#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_type_d" name='the_entry_type' value="type d">#br>#label for='the_output_table_entry_type_d'>Type D#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_type_e" name='the_entry_type' value="type e">#br>#label for='the_output_table_entry_type_e'>Type E:#/label>#/td>
                            #/tr>
					#/table>
				#/td>`;
		}
		this.add_a_new_entry_category_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "entry_category" );
			this.my_new_row.innerHTML = `
				#td>#label for='a_entry_category_row'>Entry Categories:#/label>#/td>
				#td colspan='2'>
						#input type='checkbox' id="cat_a" value='Category A'>
                        #label for="cat_a">Category A#/label>
						#input type='checkbox' id="cat_b" value='Category B'>
                        #label for="cat_b">Category B#/label>
						#input type='checkbox' id="cat_c" value='Category C'>
                        #label for="cat_c">Category C#/label>
						#input type='checkbox' id="cat_d" value='Category D'>
                        #label for="cat_d">Category D#/label>
						#input type='checkbox' id="cat_e" value='Category E'>
                        #label for="cat_e">Category E#/label>
				#/td>`;
		}
		this.add_a_new_entry_tag_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "entry_tags" );
			this.my_new_row.innerHTML = `
				#td>#label for='an_entry_tag'>Entry Tags:#/label>#/td>
				#td>#input type='text' name='an_entry_tag'>#/td>
				#td>#input type='button' onClick='add_a_new_tag_row()' value='Add another tag?'>#/td>`;
		}
		this.add_a_new_entry_filter_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "entry_filters" );
			this.my_new_row.innerHTML = `
                #td class="label">Entry flag:#/td>
				#td colspan='3'>
					#table class="quick_table horizontal">
						#thead>
                            #tr>
                                
                            #/tr>
                        #/thead>
                        #tbody>
                            #tr>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_filter_a" name='the_entry_filter' value="flag a">#br>#label for='the_output_table_entry_filter_a'>Flag A:#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_filter_b" name='the_entry_filter' value="flag b">#br>#label for='the_output_table_entry_filter_b'>Flag B:#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_filter_c" name='the_entry_filter' value="flag c">#br>#label for='the_output_table_entry_filter_c'>Flag C:#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_filter_d" name='the_entry_filter' value="flag d">#br>#label for='the_output_table_entry_filter_d'>Flag D#/label>#/td>
                                #td>#input type='radio' class='entry form_builder" id="the_output_table_entry_filter_e" name='the_entry_filter' value="flag e">#br>#label for='the_output_table_entry_filter_e'>Flag E:#/label>#/td>
                            #/tr>
                        #/tbody>
					#/table>
				#/td>`;
		}
		this.add_a_new_L1_dictionary_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "L1_dictionary" );
			this.my_new_row.innerHTML = `
				#td class="label">#label for='an_L1_dictionary_row'>L1 Dictionary:#/label>#/td>
				#td colspan="2">
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
				#td class="label">#label for='an_L2_dictionary_row'>L2_dictionary:#/label>#/td>
				#td colspan="2">
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
				#td class="label">#label for='a_new_equivalence'>Rough equivalence:#/label>#/td>
				#td colspan='2'>
					Language 1: #input type='text' name='an_equivalence_L1'>#br>
					Language 2: #input type='text' name='an_equivalence_L2'>
				#/td>`;
		}
        this.add_a_new_stem_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "stem" );
			this.my_new_row.innerHTML = `
				#td class="label">#label for='a_stem'>Stems:#/label>#/td>
				#td>#input type='text' name='a_stem'>#/td>
				#td>#input type='button' onClick='add_a_new_stem_row()' value='Add another stem?'>#/td>`;
		}

		this.add_a_new_prefix_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "prefix" );
			this.my_new_row.innerHTML = `
				#td class="label">#label for='a_prefix'>Prefixes:#/label>#/td>
				#td>#input type='text' id="a_prefix" name='a_prefix'>#/td>
				#td>#input type='button' onClick='add_a_new_prefix_row()' value='Add another prefix?'>#/td>`;
		}
		this.add_a_new_infix_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "infix" );
			this.my_new_row.innerHTML = `
				#td class="label">#label for='an_infix'>Infixes#/label>#/td>
				#td>#input type='text' id="an_infix" name='an_infix'>#/td>
				#td>#input type='button' onClick='add_a_new_prefix_row()' value='Add another prefix?'>#/td>`;		}
		this.add_a_new_suffix_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "suffix" );
			this.my_new_row.innerHTML = `
				#td class="label">#label for='a_suffix'>Suffix#/label>#/td>
				#td>#input type='text' id="a_suffix" name='a_suffix'>#/td>
				#td>#input type='button' onClick='add_a_new_prefix_row()' value='Add another prefix?'>#/td>`;
        }
		this.add_a_new_upload_audio_row = function( me ) {				
			me.removeAttribute( "onclick" );
			this.my_new_row = this.add_a_new_row( "audio_upload" );
			this.my_new_row.innerHTML = `
				#td class="label">Upload Audio: #/td>
				#td>#input type='file' name='audio_upload_row'>#/td>
				#td>#input type='button' onClick='add_a_new_audio_upload_row()' value="Upload another?'>#/td>`;
		}
	} // constructor
}
