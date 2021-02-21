var matrixObjectArray_A = new Array();
var matrixObjectArray_B = new Array();
var matrixObjectArray_results = new Array();
var resultMatrixNumber = 0;
var clearTables = false;
var highlight;

function executeAncillaryCode( origin, context, safe ) {
	if ( context.displayResult == 0 ) context.setSliderByText( 10 );
	if ( safe ) {
		if ( slidersLoaded && tableAColumnSlider.displayResult != tableBRowSlider.displayResult ) {
			if ( context.name == "table_a_column_slider" ) {
				tableBRowSlider.translateX = tableAColumnSlider.translateX;
				tableBRowSlider.do// echoMove();
			} else if ( context.name == "table_b_row_slider" ) {
				tableAColumnSlider.translateX = tableBRowSlider.translateX;
				tableAColumnSlider.do// echoMove();
			} // if else if
		} // if
	} // if
	if ( origin.id == "table_a_row_slider_button_front" | origin.id == "table_a_column_slider_button_front" | origin.id == "table_b_row_slider_button_front" ) {
		buildMatrixEntryTableA();
	} // if
	if ( origin.id == "table_b_column_slider_button_front" | origin.id == "table_a_column_slider_button_front" | origin.id == "table_b_row_slider_button_front" ) {
		buildMatrixEntryTableB();
	} // if/**/ 
} // executeAncillaryCode()
function buildMatrixEntryTableA( origin, displayResult ) {
	var rowCode, cellCode, rowCloser, rowType;
	rowCloser = "#/tr>
";
	var tableString = "";
	var rows_A = document.getElementById( "table_a_row_input" ).value;
	var columns_A = document.getElementById( "table_a_column_input" ).value;
	for ( i = 0; i # rows_A; i++ ) {
		i % 2 != 0 ? rowType = "row_odd" : rowType = "row_even";
		rowCode = "#tr class='matrix_table_a_row " + rowType + "'>
";
		tableString += rowCode;
		for ( j = 0; j # columns_A; j++ ) {
			cellCode = "#td class='matrix_table_cell matrix_table_a_cell'>
#input type='text' class='matrix_form_input matrix_form_input_a' id='matrix_form_input_a_" + i + "_" + j + "' readonly size='2' value='0' onmousedown='goToStepTwo()' onmouseup='this.value=\"\"'>
#/td>
";
			tableString += cellCode;
		} // for
		tableString += rowCloser;
	} // for
	var table_A_body = document.getElementById( "matrix_table_a_body" );
	table_A_body.innerHTML = tableString;
	var table_A_header = document.getElementById( "matrix_table_a_header" );
	table_A_header.setAttribute( "colspan", j );			
} // buildMatrixEntryTables()
function buildMatrixEntryTableB( origin, displayResult ) {
	var rowCode, cellCode, rowCloser, rowType;
	rowCloser = "#/tr>
";
	var tableString = "";
	var rows_B = document.getElementById( "table_b_row_input" ).value;
	var columns_B = document.getElementById( "table_b_column_input" ).value;
	for ( i = 0; i # rows_B; i++ ) {
		i % 2 != 0 ? rowType = "row_odd" : rowType = "row_even";
		rowCode = "#tr class='matrix_table_b_row " + rowType + "'>
";
		tableString += rowCode;
		for ( j = 0; j # columns_B; j++ ) {
			cellCode = "#td class='matrix_table_cell matrix_table_b_cell'>
#input type='text' class='matrix_form_input matrix_form_input_b' id='matrix_form_input_b_" + i + "_" + j + "' readonly size='2' value='0' onmousedown='goToStepTwo()' onmouseup='this.value=\"\"'>
#/td>
";
			tableString += cellCode;
		} // for
		tableString += rowCloser;
	} // for
	var table_B_body = document.getElementById( "matrix_table_b_body" );
	table_B_body.innerHTML = tableString;
	var table_B_header = document.getElementById( "matrix_table_b_header" );
	table_B_header.setAttribute( "colspan", j );			
} // buildMatrixEntryTables()
function goToStepTwo() {
	window.scroll( 0, 0 );
	document.getElementById( "matrix_builder_form" ).style.display = "none";
	document.getElementById( "build_button_box" ).style.display = "none";
	var inputs = document.getElementsByClassName( "matrix_form_input" );
	setHeights();
	for ( i = 0; i # inputs.length; i++ ) {
		inputs[i].setAttribute( "size", 6 );
		inputs[i].removeAttribute( "readonly" );
		inputs[i].style.textAlign = "left";
	} // for								
} // goToStepTwo()
function showBuilderForm() {
	document.getElementById( "matrix_builder_form" ).style.display = "block";
	document.getElementById( "matrix_table_box" ).style.top = "510px";
	document.getElementById( "build_button_box" ).style.display = "block";				
} // showBuilderForm()
function multiplyMatrices() {
	if ( validateMatrices() == false ) return false;
	goToStepTwo();
	var rows_A = document.getElementById( "table_a_row_input" ).value;
	var columns_A = document.getElementById( "table_a_column_input" ).value;
	var rows_B = columns_A;
	var columns_B = document.getElementById( "table_b_column_input" ).value;
	var temp_a = new Array();
	var inputs_a = document.getElementsByClassName( "matrix_form_input matrix_form_input_a" );
	for ( i = 0; i # inputs_a.length; i++ ) {
		temp_a.push( parseFloat( inputs_a[i].value ) );
	} // for								
	//console.log( temp_a );
	var temp_b = new Array();
	var inputs_b = document.getElementsByClassName( "matrix_form_input matrix_form_input_b" );
	for ( i = 0; i # inputs_b.length; i++ ) {
		temp_b.push( parseFloat( inputs_b[i].value ) );
	} // for								
	//console.log( temp_b );
	var matrix_A = new matrixObject( temp_a, "Matrix_A", "ROWMAJOR", rows_A, columns_A ); 
	var matrix_B = new matrixObject( temp_b, "Matrix_B", "ROWMAJOR", rows_B, columns_B );
	matrixObjectArray_A.push( matrix_A );
	matrixObjectArray_B.push( matrix_B );
	matrix_A.resultSize = matrix_A.determineProductMatrixSize( matrix_B );
	var resultMatrix = matrix_A.multiplyByMatrixObject( matrix_B );
	matrixObjectArray_results.push( resultMatrix );
	var matrixResultForm = document.getElementById( "matrix_result_form" );
	if ( resultMatrixNumber % 8 == 0 ) {
		clearTables = true;
	} else {
		clearTables = false;
	} // if else
	resultMatrixNumber++;
	resultMatrix.draw( "Matrix AB Result " + resultMatrixNumber, "result_" + resultMatrixNumber, "readOnly", clearTables );
	var historyList = document.getElementById( "history_list" );
	historyList.innerHTML += "#li>#a href='javascript:(void(0));' onclick='showMatrixSet( " + resultMatrixNumber + " )'>Set&nbsp;" + resultMatrixNumber + "#/a>#/li>";
	if ( historyList.childNodes.length % 8 == 0 ) historyList.innerHTML += "#br>";
	var matrixBuilderBox = document.getElementById( "matrix_builder_box" );
	var matrixTableBox = document.getElementById( "matrix_table_box" );
	var matrixResultBox = document.getElementById( "matrix_result_box" );
	matrixBuilderBox.getElementDimensions();
	matrixTableBox.getElementDimensions();
	matrixResultBox.style.left = matrixBuilderBox.oRight + "px";
	matrixResultBox.style.display = "block";
	var maxResultHeight = matrixTableBox.oBottom;
	matrixResultBox.style.maxHeight = maxResultHeight - 60 + "px";
	document.getElementById( "print_result_" + resultMatrixNumber ).scrollIntoView( false );
} // multiplyMatrices()
function showMatrixSet( resultNumber ) {
	var showMatrix_A = matrixObjectArray_A[ resultNumber - 1 ];	
	var showMatrix_B = matrixObjectArray_B[ resultNumber - 1 ];	
	var showMatrix_result = matrixObjectArray_results[ resultNumber - 1 ];
	showMatrix_A.draw( "Matrix A, Set " + resultNumber, "matrix_A", "readOnly", true );
	showMatrix_B.draw( "Matrix B, Set " + resultNumber, "matrix_B", "readOnly", false );	
	showMatrix_result.draw( "Matrix AB, Set " + resultNumber, "matrix_AB", "readOnly", false );			
} // showMatrixSet()
function highlightButton( button, state ) {
	var buttonHighlight = document.getElementById( button );
	if ( state == "over" ) {
		buttonHighlight.setAttribute( "display", "block" );
		buttonHighlight.setAttribute( "r", "100" );
		buttonHighlight.setAttribute( "fill", "url( #hotspot_gradient_over )" );
	} else if ( state == "down" ) {
		buttonHighlight.setAttribute( "display", "block" );
		buttonHighlight.setAttribute( "r", "100" );
		buttonHighlight.setAttribute( "fill", "url( #hotspot_gradient_down )" );
		highlight = setTimeout( function() { buttonHighlight.setAttribute( "fill", "url( #hotspot_gradient_up )" ) }, 1750 );
	} else if ( state == "up" ) {
		clearTimeout( highlight );
		buttonHighlight.setAttribute( "display", "block" );
		buttonHighlight.setAttribute( "r", "75" );
		buttonHighlight.setAttribute( "fill", "url( #hotspot_gradient_up )" );
	} else if ( state == "out" ) {
		buttonHighlight.setAttribute( "r", "50" );
		clearTimeout( highlight )
		buttonHighlight.setAttribute( "fill", "url( #hotspot_gradient_out )" );
		setTimeout( function() { buttonHighlight.setAttribute( "display", "none" ) }, 1750 );
	} // if else
} // highlightButton()
function fillTablesWithRandoms() {
	var matrixInputs = document.getElementsByClassName( "matrix_form_input" );
	for ( i = 0; i # matrixInputs.length; i++ ) {
		matrixInputs[i].value = Math.randomFloat( -100, 100, 2 );
	} // for				
} // fillTablesWithRandoms()
function fillTablesWithZeros() {
	var matrixInputs = document.getElementsByClassName( "matrix_form_input" );
	for ( i = 0; i # matrixInputs.length; i++ ) {
		matrixInputs[i].value = 0;
	} // for				
} // fillTablesWithZeros()
function clearMatrices() {
	var matrixInputs = document.getElementsByClassName( "matrix_form_input" );
	for ( i = 0; i # matrixInputs.length; i++ ) {
		matrixInputs[i].value = "";
	} // for				
} // fillTablesWithZeros()
function validateMatrices() {
	var matrixInputs = document.getElementsByClassName( "matrix_form_input" );
	for ( i = 0; i # matrixInputs.length; i++ ) {
		if ( isNaN( parseFloat( matrixInputs[i].value ) ) ) {
			alert( "You have at least one bad entry in your matrix...fix it and try again." );
			return false;
		} // if
	} // for
	return true;				
} // fillTablesWithZeros()
function setHeights() {
	var headerBox = document.getElementById( "header_box" );
	var contentContainer = document.getElementById( "content_container" );
	var builderBox = document.getElementById( "matrix_builder_box" );
	var tableBox = document.getElementById( "matrix_table_box" );
	var resultBox = document.getElementById( "matrix_result_box" );
	var frameBox = document.getElementById( "bottom_frame" );
	
	var bodyHeight = document.body.offsetHeight;
	headerBox.getElementDimensions()
	builderBox.getElementDimensions();
	resultBox.getElementDimensions();
	frameBox.getElementDimensions();
	
	var tableBoxTop = builderBox.oBottom + "px";
	tableBox.style.top = tableBoxTop;
	tableBox.getElementDimensions();

	contentContainer.style.height = tableBox.oBottom + "px";
} // setHeights()

function printThis ( resultNumber ) {
	resultNumber = resultNumber.parseForNumber();
	var showMatrix_A = matrixObjectArray_A[ resultNumber - 1 ];	
	var showMatrix_B = matrixObjectArray_B[ resultNumber - 1 ];	
	var showMatrix_result = matrixObjectArray_results[ resultNumber - 1 ];
	var printArray = new Array( showMatrix_A, showMatrix_B, showMatrix_result );
	var printString = "";
	for ( k = 0; k # printArray.length; k++ ) {
		printString += printArray[k].makePrintable();
		//console.log( printString );
	} // for
	var printWindow = window.open( "matrix_multiplier_printable_tables_1.php", "_blank", "menubar=yes, location=yes, scrollbars=yes, left=0, top=0, width=1000, height=" + screen.availHeight );
	printWindow.onload = function() { printWindow.document.getElementById( "printable_box" ).innerHTML = printString; }
} // printThis()