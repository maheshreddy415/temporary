
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
		if (dir == 'next') { currentTab.next().addClass('active');}
		if(tabContainer == '.steps') { $('.sub-steps').removeClass('active');}
		$(tabContent).find(currentTab.data('target')).removeClass('active');

		if (dir == 'next') { 
			if(tabContainer == '.steps') {
				currentTab.find('span').removeClass('hide');
				$(tabContent).find(currentTab.data('target')).next().addClass('active');
				$('#'+$(currentTab.data('target')).next().find('.sub-step-content').data('target')).addClass('active');
			} else {
				$("[data-link='"+currentTab.data('target')+"']").removeClass('hide');
				$(tabContent).find(currentTab.data('target')).next().addClass('active');
			}
		}
		activateSub(currentTab.next().data('target'));
	}
}


$('#selectAccountDropDown').on('change', function(){
	$("[data-link='#sb1']").removeClass('hide');
	$('#accountTypeMainDiv').removeClass('hide');
	$('#next-step').removeClass('hide');
});
