sortFromBiggestButon.addEventListener('click', () => {
	todoList.sort(function(a, b) {
		return new Date(b.date) - new Date(a.date);
	});

	addEventsForItems();
	sortFromBiggestButon.setAttribute('disabled', true);
	sortFromSmallestButton.removeAttribute('disabled');
});

sortFromSmallestButton.addEventListener('click', () => {
	todoList.sort(function(a, b) {
		return new Date(a.date) - new Date(b.date);
	});

	addEventsForItems();
	sortFromSmallestButton.setAttribute('disabled', true);
	sortFromBiggestButon.removeAttribute('disabled');
});
