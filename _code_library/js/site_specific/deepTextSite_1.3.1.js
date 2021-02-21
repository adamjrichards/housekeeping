// Deep Text custom form validation functions

function submitForm( state, thisForm, targetForm ) {
	var thisForm = document.getElementById( thisForm );
	if ( state == true ) thisForm.action = targetForm;
	else thisForm.action = "javascript:void(0);";
} // submitForm()

function validateEditorialRightsForm_1_1_1() {
	return true;
} // validateEditorialRightsForm_1_1_1()