document.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem('style')) {
		let href = JSON.parse(localStorage.getItem('style'));
		documentStylesLink.href = href;

		if (href.includes('black')) {
			darkThemeButton.setAttribute('checked', 'true');
		} else {
			lightThemeButton.setAttribute('checked', 'true');
		}
	}

	if (localStorage.getItem('todo')) {
		todoList = JSON.parse(localStorage.getItem('todo'));
	}

	setEventsToRadioButtons();
	addEventsForItems();
	getCounter();
});

const setEventsToRadioButtons = () => {
	setEventToRadio(lowRadioButton);
	setEventToRadio(mediumRadioButton);
	setEventToRadio(highRadioButton);
};

const setEventToRadio = (radio) => {
	radio.addEventListener('click', () => {
		priority = radio.value;
	});
};
