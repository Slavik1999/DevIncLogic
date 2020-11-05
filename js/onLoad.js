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

	if (JSON.parse(localStorage.getItem('user'))) {
		leaveBtn.classList.remove('d-none');
		authBtn.classList.add('d-none');

		allUsers = localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [];
		user = JSON.parse(localStorage.getItem('user'));
		todoList = user.todos;
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
