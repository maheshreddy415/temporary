$(document).ready(function(){
    $(".Checking ").click(function(){
        //alert("The paragraph was clicked.");
        currentAcc = $('.accountDetailsTab').find('.accountDetails.active');
        
    });
	
	/*JS--Mahesh*/
	
	$('#next-step').click(function (e) {
		e.preventDefault();
		var currentTab = $('.steps .active'),
			currentSubTab = $('.step-pane.active'),
			totalSubtabs = currentSubTab.children('.sub-step-content').children('.sub-step-pane').length,
			lastSubTab = currentSubTab.children('.sub-step-content').children('.sub-step-pane:last');
		
		if (currentSubTab.children('div').hasClass('sub-step-content') ) {
			if (currentSubTab.find('.sub-step-pane.active').index() < (totalSubtabs - 1)) {
				moveToTab('.sub-steps', '.sub-step-content', 'next');
			} else {
				moveToTab('.steps', '.step-content', 'next');
			}
		} else {
			moveToTab('.steps', '.step-content', 'next');
		}
	});
	
	$('#previous-step').click(function (e) {
		e.preventDefault();
		var currentTab = $('.steps .active'),
			currentSubTab = $('.step-pane.active'),
			totalSubtabs = currentSubTab.children('.sub-step-content').children('.sub-step-pane').length,
			lastSubTab = currentSubTab.children('.sub-step-content').children('.sub-step-pane:last');
			
		if (currentSubTab.children('div').hasClass('sub-step-content') ) {
			if (currentSubTab.find('.sub-step-pane.active').index() > 0) {
				moveToPrevTab('.sub-steps', '.sub-step-content', 'previous');
			} else {
				moveToPrevTab('.steps', '.step-content', 'previous');
			}
		} else {
			moveToPrevTab('.steps', '.step-content', 'previous');
		}
	});

	function activateSub(currentTab) {
		if ($(currentTab).parent().hasClass('sub-step-content')) {
			$('.sub-steps.active').show();
		}
	}

	function moveToTab(tabContainer, tabContent, dir) {
		var totalTabs = $(tabContainer).find('div').length;
		currentTab = $(tabContainer+'.active').find('.active');
		if(tabContainer == '.steps') { 
			totalTabs = $(tabContainer).find('li').length;
			currentTab = $(tabContainer).find('li.active');
		}
		if (currentTab.index() < (totalTabs - 1)) {
			currentTab.removeClass('active');
			if (dir == 'next') { 
				currentTab.next().addClass('active');
				currentTab.next().find('a').addClass('active');
			}
			if(tabContainer == '.steps') { $('.sub-steps').removeClass('active');}
			$(tabContent).find(currentTab.data('target')).removeClass('active');
			if (dir == 'next') { 
				if(tabContainer == '.steps') {
					currentTab.find('span').removeClass('bgGrey');
					$(tabContent).find(currentTab.data('target')).next().addClass('active');
					$('#'+$(currentTab.data('target')).next().find('.sub-step-content').data('target')).addClass('active');
					
					if(currentTab.next().data('target') != '#st1') {
						$('#previous-step').removeClass('hide');
					}
					
					if(currentTab.next().data('target') == '#st4') {
						$('#next-step').addClass('hide');
						$('#acceptAndSubmit').removeClass('hide');
					}
				} else {
					$("[data-link='"+currentTab.data('target')+"']").removeClass('bgGrey');
					$(tabContent).find(currentTab.data('target')).next().addClass('active');
				}
			}
			activateSub(currentTab.next().data('target'));
		}
	}
	
	function moveToPrevTab(tabContainer, tabContent, dir) {
		var totalTabs = $(tabContainer).find('div').length;
		currentTab = $(tabContainer+'.active').find('.active');
		if(tabContainer == '.steps') { 
			totalTabs = $(tabContainer).find('li').length;
			currentTab = $(tabContainer).find('li.active');
		}
		
		if (currentTab.index() <= (totalTabs - 1)) {
			currentTab.removeClass('active');
			if (dir == 'previous') { 
				currentTab.prev().addClass('active');
				currentTab.removeClass('active');
				currentTab.find('a').removeClass('active');
			}
			
			if(tabContainer == '.steps') { $('.sub-steps').removeClass('active');}
			$(tabContent).find(currentTab.data('target')).removeClass('active');
			
			if (dir == 'previous') { 
				if(tabContainer == '.steps') {
					currentTab.find('span').addClass('bgGrey');
					$(tabContent).find(currentTab.data('target')).prev().addClass('active');
					$(tabContent).find(currentTab.data('target')).removeClass('active');
					
					$('#'+$(currentTab.data('target')).find('.sub-step-content').data('target')).removeClass('active');
					$('#'+$(currentTab.data('target')).prev().find('.sub-step-content').data('target')).addClass('active');
					
					if(currentTab.prev().data('target') == '#st1') {
						$('#previous-step').addClass('hide');
					}
					if(currentTab.next().data('target') != '#st4') {
						$('#next-step').removeClass('hide');
						$('#acceptAndSubmit').addClass('hide');
					}
				} else {
					$("[data-link='"+currentTab.data('target')+"']").addClass('bgGrey');
					$(tabContent).find(currentTab.data('target')).prev().addClass('active');
					$(tabContent).find(currentTab.data('target')).removeClass('active');
				}
			}
			activateSub(currentTab.next().data('target'));
		}
	}


	$('#selectAccountDropDown').on('change', function(){
		$("[data-link='#sb1']").removeClass('bgGrey');
		$('#accountTypeMainDiv').removeClass('hide');
		$('#next-step').removeClass('hide');
		$('#saveForLater').removeClass('hide');
	});

	$('.selectAccounts').on('click', function(){
		var selectAcc = $(this);
		selectAcc.toggleClass('active');
		selectAcc.find('.tickIcon').toggleClass('hide');
		
		if($('.selectAccounts.active').length > 0) {
			$('#next-step').removeAttr('disabled');
		} else {
			$('#next-step').attr("disabled", 'disabled');
		}
	});


	$('#fileUpload').on('change',function () {
		$(this).parent('.custom-file-upload').addClass('active').addClass('col-md-12').removeClass('col-md-8');
		$('.fileUploadLabel').addClass('hide');
		$('.fileText').removeClass('hide');
	});

	$('.fileText .close').on('click', function(e) {
		e.stopPropagation();
	});
	
	$('#acceptAndSubmit').on('click', function(e) {
		e.preventDefault();
		window.location.href="index.html";
	});
});
