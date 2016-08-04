keyBank.js
--------------------------------------------------
$(document).ready(function() {
	$('input[type="text"]').on('focusin',function(e){
		$(this).siblings('.placeholderTxt').addClass('changePosition');			
	});
	$('input[type="text"]').on('focusout',function(e){
		var validation = validateZipCode();
		if(validation == true) {
			if($(this).val()==""){
				$(this).siblings('.placeholderTxt').removeClass('changePosition');
				$('#zipCodeResult,#relationshipDiv').hide();		
			} else {
				$(this).siblings('.placeholderTxt').addClass('changePosition');	
				$('#zipCodeResult').show();
			}
		}
		
	});
	$('.dropDownClick').click(function(e){
		e.preventDefault();
		$('.locationPopup').show();
	});
	$('.options').on('click',function(e){
		$('.zipCodeSelect').html($(this).html());
		$('.locationPopup').hide();
		$('#relationshipDiv').show();
	});
	$('.flag').click(function(e){
		e.stopImmediatePropagation();
		if( validateZipCode() == true ) {
            $('#zipCode').focusout();
        }
	});
	
	$('#relationshipDiv input[type="radio"]').on('click',function(){
		$('#relationshipDiv input[type="radio"]').removeClass('opacity');
		$('#relationshipDiv input[type="radio"]').siblings('label').children('span').removeClass('radioChecked');
		$('.applyAccountDiv').removeClass('accountGrayBorder');
		$('.applyAccountDiv').find('.red').removeClass('greyText');
			$('.applyAccount').hide();
		if($(this).is(':checked')){
			$(this).addClass('opacity');
			$(this).siblings('label').children('span').addClass('radioChecked');
			if($(this).attr('id')=="noAccount"){
				$('.applyAccount').show();
				$(this).parents('.applyAccountDiv').addClass('accountGrayBorder');
				$(this).parents('.applyAccountDiv').find('.red').addClass('greyText');
			}
		}
		
	});
	$('.applyAccount').click(function(e){
		window.location.href="createAccount.html";
	});
	
	function validateZipCode() {
		var zipCode = $('#zipCode');
		if( zipCode.value == "" || isNaN( zipCode.val() ) || zipCode.val().length != 5 ) {
			zipCode.addClass('inputError');
			return false;
		} else {
			return true;
		}
	}
	
});
