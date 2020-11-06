const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const closeAuth = document.querySelector('#closeAuth');

const leaveBtn = document.querySelector('#leaveBtn');
const authBtn = document.querySelector('#authorisationBtn');

const modalError = document.querySelector('#modalError');

const LogInBtn = document.querySelector('#LogIn');
const SignUpBtn = document.querySelector('#SignUp');

const authForm = document.querySelector('#authForm');

const usersArr = localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [];

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
		usersArr.push({ email: inputEmail.value, password: inputPassword.value, todos: [] });

		localStorage.setItem('allUsers', JSON.stringify(usersArr));
		localStorage.setItem(
			'user',
			JSON.stringify({ email: inputEmail.value, password: inputPassword.value, todos: [] })
		);

		allUsers = usersArr;
		user = JSON.parse(localStorage.getItem('user'));
		todoList = user.todos;

		addEventsForItems();
		getCounter();

		leaveBtn.classList.remove('d-none');
		authBtn.classList.add('d-none');

		closeAuth.click();
		clearInputs();
	} else {
		printErrors(errArr);
	}
});

LogInBtn.addEventListener('click', () => {
	let errArr = [];

	let loggedUser = usersArr.find((user) => user.email === inputEmail.value);

	if (loggedUser) {
		if (loggedUser.password === inputPassword.value) {
			localStorage.setItem('user', JSON.stringify(loggedUser));

			allUsers = JSON.parse(localStorage.getItem('allUsers'));
			user = loggedUser;
			todoList = user.todos;

			addEventsForItems();
			getCounter();
			dragAndDrop();

			leaveBtn.classList.remove('d-none');
			authBtn.classList.add('d-none');

			closeAuth.click();
			clearInputs();
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

	leaveBtn.classList.add('d-none');
	authBtn.classList.remove('d-none');
});

function clearInputs() {
	inputEmail.value = '';
	inputPassword.value = '';
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
