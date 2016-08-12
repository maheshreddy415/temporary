
Changed in 2 functions.

$('#fileUpload').on('change',function () {
	$(this).parent('.custom-file-upload').addClass('active').addClass('col-md-12').removeClass('col-md-8');
	$('.fileUploadLabel').addClass('hide');
	$('.fileText').removeClass('hide');
	validations($(this), function(valid){/*alert('file uploaded.');*/});
});




function validations(thiElement, callBack) {
		
		var valid, text;
		var validElementType = thiElement.attr('data-validateType');
		
		if(validElementType == 'fileUpload') {
			valid = validFileUpload(thiElement);
			if(valid != true) {
				thiElement.parent('.custom-file-upload').addClass('inputError');
				thiElement.parent('.custom-file-upload').siblings('.errMessage').removeClass('hide').html('Please upload Your Identification.');
			} else {
				thiElement.parent('.custom-file-upload').removeClass('inputError');
				thiElement.parent('.custom-file-upload').siblings('.errMessage').addClass('hide');
			}
			return callBack(valid);
		}
		
		if(thiElement.val() == '') {
			thiElement.addClass('inputError'); valid = false;
		} else {
			thiElement.removeClass('inputError'); valid = true;
		}
		
		if(validElementType == 'socialSecurityNumber') {
			var ssn       = thiElement.val();
			var matchArr  = ssn.match(/^(\d{3})-?\d{2}-?\d{4}$/);
			var numDashes = ssn.split('-').length - 1;
			var text      = 'SSN';
			if (matchArr == null || numDashes == 1) {
				var msgText = 'Invalid SSN. Must be 9 digits or in the form NNN-NN-NNNN.';
				thiElement.addClass('inputError'); valid = false;
				thiElement.siblings('.errMessage').removeClass('hide').html('Please enter valid ' + text + '.');
			} else if (parseInt(matchArr[1],10)==0) {
				var msgText = "Invalid SSN: SSN's can't start with 000.";
				thiElement.addClass('inputError'); valid = false;
				thiElement.siblings('.errMessage').removeClass('hide').html('Please enter valid ' + text + '.');
			} else {
				thiElement.removeClass('inputError'); valid = true;
				thiElement.siblings('.errMessage').addClass('hide');
			}
			return callBack(valid);
		}
		
		if(validElementType == 'title' || validElementType == 'firstName' || validElementType == 'lastName') {
			if(validElementType == 'title') 
				text = 'Title';
			else if(validElementType == 'firstName')
				text = 'First Name';
			else 
				text = 'Last Name';
			if(thiElement.val() == '') {
				thiElement.siblings('.errMessage').removeClass('hide').html('Please enter valid ' + text + '.');
				return callBack(false);
			}
			valid = /^[a-zA-Z]*$/g.test(thiElement.val());
			if (!valid) {
				thiElement.addClass('inputError'); valid = false;
				thiElement.siblings('.errMessage').removeClass('hide').html('Please enter valid ' + text + '.');
			} else {
				thiElement.removeClass('inputError'); valid = true;
				thiElement.siblings('.errMessage').addClass('hide');
			}
			return callBack(valid);
		}
		
		if(validElementType == 'Email') {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			valid = re.test(thiElement.val());
			if (!valid) {
				thiElement.addClass('inputError'); valid = false;
				thiElement.siblings('.errMessage').removeClass('hide').html('Please enter valid Email.');
			} else {
				thiElement.removeClass('inputError'); valid = true;
				thiElement.siblings('.errMessage').addClass('hide');
			}
			return callBack(valid);
		}
			
		if(validElementType == 'Phone') {
			var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			valid = phoneno.test(thiElement.val());
			if (!valid) {
				thiElement.addClass('inputError'); valid = false;
				thiElement.siblings('.errMessage').removeClass('hide').html('Please enter valid Phone.');
			} else {
				thiElement.removeClass('inputError'); valid = true;
				thiElement.siblings('.errMessage').addClass('hide');
			}
			return callBack(valid);
		}
		
		if(validElementType == 'streetAddress') {
			if (!valid) {
				thiElement.siblings('.errMessage').removeClass('hide').html('Please enter Street Address.');
			} else {
				thiElement.siblings('.errMessage').addClass('hide');
			}
		}
		
		return callBack(valid);
	}
