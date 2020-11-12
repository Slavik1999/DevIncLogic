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

	const loggedUser = JSON.parse(localStorage.getItem('user'));

	if (loggedUser) {
		loginPage.classList.add('d-none');
		showMainPage(loggedUser);

		allUsers = localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [];
		user = loggedUser;
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
