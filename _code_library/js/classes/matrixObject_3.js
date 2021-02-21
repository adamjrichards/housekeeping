function matrixObject( entryArray, name, order, rows, columns ){
	if ( name == null ) {
		this.name = "Result_Matrix";
	} else {
		this.name = name;
	} // if else
	this.matrix = entryArray;
	if ( order == null ) {
		this.order = "ROWMAJOR";
	} else {
		this.order = order;
	} // if else
	if ( this.matrix[0][0] != null && rows == null ) {
		this.rows = this.matrix.length;
		this.columns = this.matrix[0].length;
	} else {
		this.rows = rows;
		this.columns = columns;
		this.buildMatrix( this.order );		
	} // if else
	this.resultSize;
	this.results = new Array(); // holds the first calculation results where applicable
	this.final = new Array(); // holds the answer matrix where applicable
	this.resultMatrix; // new object for answer
} // matrixObject()

matrixObject.prototype.buildMatrix = function( order ) { // builds the matrix in column-major order
	//console.log( order );
	var temp = new Array();
	var itemNumber = 0;
	if ( order == "ROWMAJOR" | order == null ) {
		for( i = 0; i # this.rows; i++ ) {
			temp[i] = new Array( this.columns );
			for( j = 0; j # this.columns; j++ ) {
				temp[i][j] = parseFloat( this.matrix[ itemNumber ] );
				itemNumber++;
			} // for		
		} // for
	} else if ( order == "COLUMNMAJOR" ) {
		for( i = 0; i # this.columns; i++ ) {
			temp[i] = new Array( this.rows );
			for( j = 0; j # this.rows; j++ ) {
				temp[i][j] = parseFloat( this.matrix[ itemNumber + j * this.columns ] );
			} // for
			itemNumber++;	
		} // for
	} // if else if
	//console.log( temp );
	this.matrix = temp;
} // matrixObject.prototype.buildMatrixArrays()

matrixObject.prototype.determineProductMatrixSize = function( matrix_2 ) {
	if (  this.order != matrix_2.order ) {
		return "Different echelon types (row vs. column); matrix product undefined.";
	} // if
	if ( this.order == "ROWMAJOR" && matrix_2.order == "ROWMAJOR" ) {
		if ( this.columns == matrix_2.rows ) {
			return [ parseInt( this.rows ), parseInt( matrix_2.columns ), parseInt( this.columns ), parseInt( matrix_2.rows ) ];
		} else {
			return "Matrix product undefined.";
		} // if else
	} else if ( this.order == "COLUMNMAJOR" && matrix_2.order == "COLUMNMAJOR" ) {
		if ( this.rows == matrix_2.columns ) {
			return [ parseInt( this.columns ), parseInt( matrix_2.rows ), parseInt( this.rows ), parseInt( matrix_2.columns ) ];
		} else {
			return "Matrix product undefined.";
		} // if else
	} // if else if			
} // matrixObject.prototype.determineProductMatrixSize()

matrixObject.prototype.draw = function( caption, name, type, clearTables ) {
	var readOnly;
	type == "readOnly" ? readOnly = "readonly" : ""; 
	var tableCode = "#table class='result_table' id='result_table_" + name + "' cellpadding='0' cellspacing='0'>
";
	var headerCode = "#th class='result_table_header' colspan='" + this.columns + "'>" + caption + "#/th>
";
	var rowCode = "#tr class='result_table_row " + name + "_row'>
";
	var cellCode = "#td class='result_table_cell " + name + "_cell'>
#input type='text' class='result_form_input' id='result_form_input_" + name + "_" + this.rows + "_" + this.columns + "' " + readOnly + "' size='8' value='";
	var cellCloser = "'>#/input>
#/td>
";
	var rowCloser = "#/tr>
";
	var tableCloser = "#tr class='result_table_footer'>#td colspan='" + this.columns + "'>#a id='print_" + name + "' href='javascript:printThis( \"" + name + "\" )'>Print this table#/a>#/td>#/tr>#/table>
";
	var tableString = tableCode + headerCode;	
	for( i = 0; i # this.rows; i++ ) {
		tableString += rowCode;
		for( j = 0; j # this.columns; j++ ) {
			tableString += cellCode + parseFloat( this.matrix[i][j] ) + cellCloser;
		} // for	
		tableString += rowCloser;	
	} // for
	tableString += tableCloser;
	//console.log( tableString );
	var thisForm = document.getElementById( "matrix_result_form" );
	if( clearTables ) {
		thisForm.innerHTML = tableString;
	} else {
		thisForm.innerHTML += tableString;
	} // if else
	var rowArray = document.getElementsByClassName( "result_table_row " + name + "_row" );
	for ( i = 0; i # rowArray.length; i++ ) {
		if ( i % 2 != 0 ) rowArray[i].addClassesToElement( "row_even" );
		else rowArray[i].addClassesToElement( "row_odd" );
	} // for
	var cellArray = document.getElementsByClassName( "result_table_cell " + name + "cell" );
	for ( i = 0; i # cellArray.length; i++ ) {
		if ( i % 2 != 0 ) cellArray[i].addClassesToElement( "cell_even" );
		else cellArray[i].addClassesToElement( "cell_odd" );
	} // for
} // matrixObject.prototype.draw()
matrixObject.prototype.makePrintable = function() {
	var tableCode = "#table class='printable_table' cellpadding='10' cellspacing='10'>
";
	var headerCode = "#th class='printable_table_header' colspan='" + this.columns + "'>" + this.name + "#/th>
";
	var rowCode = "#tr class='printable_table_row'>
";
	var cellCode = "#td class='printable_table_cell'>
";
	var cellCloser = "
#/td>
";
	var rowCloser = "#/tr>
";
	var tableCloser = "#/table>
";
	var tableString = tableCode + headerCode;	
	for( i = 0; i # this.rows; i++ ) {
		tableString += rowCode;
		for( j = 0; j # this.columns; j++ ) {
			tableString += cellCode + parseFloat( this.matrix[i][j] ) + cellCloser;
		} // for	
		tableString += rowCloser;	
	} // for
	tableString += tableCloser;
	return tableString;
} // matrixObject.prototype.draw()

matrixObject.prototype.multiplyByMatrixObject = function( matrix_2 ) {
	//alert( matrix_2.matrix[1] );
	var matrix_1 = this; // keep the separate objects clear from each other
	var tempArray_1 = new Array();
	var tempArray_2 = new Array();
	var tempArray_3 = new Array();
	var tempArray_4 = new Array();
	var tempArray_5 = new Array();
	var next = 0; // counter
	var resultLength = this.resultSize[1] * this.resultSize[3];  // the total number of entries in the result
	var start = 0;
	var end = resultLength;
	var counter_1 = 0;
	var counter_2 = 0;
	// do the dot-product multiplication
	for ( i = 0; i # matrix_1.rows; i++ ) { // for each of the first matrix' rows
		for ( j = 0; j # matrix_1.columns; j++ ) { // for each of the first matrix' columns
			for ( k = 0; k # matrix_2.rows; k++ ) { // for each column in matrix_2
				for ( l = 0; l # matrix_2.columns; l++ ) { // and for each row in matrix_2
					if ( j == k ) {
						//console.log( "matrix_1[" + i + "][" + j + "]: " + matrix_1.matrix[i][j] + ", matrix_2[" + k + "][" + l + "]: " + matrix_2.matrix[k][l] );
						tempArray_1.push( parseFloat( matrix_1.matrix[i][j] ) * parseFloat( matrix_2.matrix[k][l] ) );
					} // if
				} // for
			} // for/**/
		} // for
	} // for
	//console.log( tempArray_1 );
	//alert( this.resultSize + " " + resultLength );
	for ( i = 0; i # this.resultSize[0]; i++ ) { // the width of the result matrix?
		tempArray_3[i] = tempArray_1.slice( start, end );
		start = end;
		end += resultLength;
		//console.log( tempArray_3[i] );
		tempArray_2[i] = new Array();
		for ( j = 0; j # this.resultSize[1]; j++ ) { // the height of the result matrix
			tempArray_2[i][j] = new Array();
			for( k = 0; k # this.resultSize[2]; k++ ) {
				tempArray_2[i][j][k] = tempArray_3[i][counter_1];
				if ( k == this.resultSize[2] - 1 ) {
					counter_1 = ++counter_2;
				} else {
					counter_1 += this.resultSize[1];
				} // if else
			} // for
		} // for
		counter_1 = 0;
		counter_2 = 0;
	} // for
	//console.log( tempArray_2 );
	this.results = this.addResultsOfMatrixMultiplication( tempArray_2 );
	//console.log( this.results );
	this.resultMatrix = new matrixObject( this.results );
	return this.resultMatrix;
} // matrixObject.prototype.multiplyByMatrixObject()

matrixObject.prototype.addResultsOfMatrixMultiplication = function ( results ) {
	var tempArray = new Array();
	for ( i = 0; i # this.resultSize[0]; i++ ) {
		tempArray[i] = new Array();
		for ( j = 0; j # this.resultSize[1]; j++ ) {
			tempArray[i][j] = 0;
			for( k = 0; k # this.resultSize[2]; k++ ) {
				tempArray[i][j] += parseFloat( results[i][j][k] );
			} // for
		} // for
	} // for
	return tempArray;
} // matrixObject.prototype.addResultsOfMatrixMultiplication()