authForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
});

SignUpBtn.addEventListener('click', () => {
	let errArr = [];

	let loggedUser = usersArr.find((user) => user.email === inputEmail.value);

	if (loggedUser) {
		errArr.push('Такой пользователь уже существует');
	} else {
		if (inputPassword.value.split('').length < 9) {
			errArr.push('Недостаточно длинный пароль');
		}
	}

	if (!errArr.length) {
		const newUser = { email: inputEmail.value, password: inputPassword.value, todos: [] };

		usersArr.push(newUser);

		allUsers = usersArr;
		user = newUser;
		todoList = user.todos;

		updateLocalStorage(todoList);

		addEventsForItems();
		getCounter();

		showBtn(leaveBtn, authBtn);

		closeForm();
	} else {
		printErrors(errArr);
	}
});

function showBtn(showedBtn, hidedBtn) {
	showedBtn.classList.remove('d-none');
	hidedBtn.classList.add('d-none');
}

LogInBtn.addEventListener('click', () => {
	let errArr = [];

	let loggedUser = usersArr.find((user) => user.email === inputEmail.value);

	if (loggedUser) {
		if (loggedUser.password === inputPassword.value) {
			localStorage.setItem('user', JSON.stringify(loggedUser));

			allUsers = JSON.parse(localStorage.getItem('allUsers'));
			user = loggedUser;
			todoList = user.todos;

			updateDraggedDisplay();

			showBtn(leaveBtn, authBtn);

			closeForm();
		} else {
			errArr.push('Не верный пароль');
		}
	} else {
		errArr.push('Такого пользователя не существует');
	}

	if (errArr.length) {
		printErrors(errArr);
	}
});

leaveBtn.addEventListener('click', () => {
	localStorage.setItem('user', JSON.stringify(null));

	user = null;
	todoList = [];

	completedTasks.innerHTML = '';
	currentTasks.innerHTML = '';

	addEventsForItems();
	getCounter();

	showBtn(authBtn, leaveBtn);
});

function closeForm() {
	inputEmail.value = '';
	inputPassword.value = '';
	closeAuth.click();
}

function printErrors(arr) {
	arr.map((err) => {
		modalError.innerHTML += err + '<br>';
	});
	clearError();
}

function clearError() {
	setTimeout(() => {
		modalError.innerHTML = '';
	}, 4000);
}
