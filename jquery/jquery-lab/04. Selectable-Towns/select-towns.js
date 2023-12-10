function attachEvents() {
	const selectedLiElements = [];
	
	$('li').each(function(){
		$(this).on('click', function(){
			if($(this).attr('data-selected') == undefined) {
				$(this).css('background-color', '#DDD');
				$(this).attr('data-selected', 'true')	
				selectedLiElements.push($(this).text());
			}
		})
	});

	$('#showTownsButton').on('click', function(){
		$('#selectedTowns').text(selectedLiElements.join(', '));
	})
}