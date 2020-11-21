loginForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
});

registrForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
});

SignUpBtn.addEventListener('click', () => {
	let errArr = [];

	let loggedUser = usersArr.find(
		(user) => user.nickname === registrNickname.value || user.email === registrEmail.value
	);

	if (loggedUser) {
		if (loggedUser.nickname === registrNickname.value) {
			errArr.push(nameIsRegisteredError);
		}
		if (loggedUser.email === registrEmail.value) {
			errArr.push(emailIsRegisteredError);
		}
	} else {
		if (registrPassword.value.split('').length < 9) {
			errArr.push(notEnoughPasswordLngthError);
		}
	}

	if (!errArr.length) {
		const newUser = {
			email: registrEmail.value,
			password: registrPassword.value,
			nickname: registrNickname.value,
			todos: []
		};

		usersArr.push(newUser);

		registrPage.classList.add('d-none');
		showMainPage(newUser);

		allUsers = usersArr;
		user = newUser;
		todoList = user.todos;

		updateLocalStorage(todoList);

		addEventsForItems();
		getCounter();
	} else {
		printErrors(errArr, registrError);
	}
});

LogInBtn.addEventListener('click', () => {
	let errArr = [];

	let loggedUser = usersArr.find((user) => user.email === loginEmail.value);

	if (loggedUser) {
		if (loggedUser.password === loginPassword.value) {
			localStorage.setItem('user', JSON.stringify(loggedUser));

			loginPage.classList.add('d-none');
			showMainPage(loggedUser);

			allUsers = JSON.parse(localStorage.getItem('allUsers'));
			user = loggedUser;
			todoList = user.todos;

			updateDraggedDisplay();
		} else {
			errArr.push(wrongPasswordError);
		}
	} else {
		errArr.push(thereIsNoSuchUserError);
	}

	if (errArr.length) {
		printErrors(errArr, loginError);
	}
});

leaveBtn.addEventListener('click', () => {
	localStorage.setItem('user', JSON.stringify(null));

	user = null;
	todoList = [];

	hideMainPage();
	addEventsForItems();
	getCounter();

	clearAuthInputs();
});

function clearAuthInputs() {
	registrEmail.value = '';
	registrPassword.value = '';
	registrNickname.value = '';

	loginEmail.value = '';
	loginPassword.value = '';
}

function printErrors(arr, errorList) {
	arr.map((err) => {
		errorList.innerHTML += err + '<br>';
	});
	clearError(errorList);
}

goToRegistrPage.addEventListener('click', () => {
	loginPage.classList.add('d-none');
	registrPage.classList.remove('d-none');
});

goToLoginPage.addEventListener('click', () => {
	loginPage.classList.remove('d-none');
	registrPage.classList.add('d-none');
});

function clearError(errorList) {
	setTimeout(() => {
		errorList.innerHTML = '';
	}, 4000);
}

function showMainPage(loggedUser) {
	mainPage.classList.remove('d-none');
	leaveTxt.innerHTML = loggedUser.nickname;
}

function hideMainPage() {
	mainPage.classList.add('d-none');
	loginPage.classList.remove('d-none');
}
