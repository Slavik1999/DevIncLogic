let editMode = false;
let idOfEditItem;
let allUsers = [];
let todoList = [];
let user = {};
let priority = '';

addNewTaskButton.addEventListener('click', () => {
	if (editMode) {
		editMode = false;
	}
	deleteInputsValue();
});

addTaskForm.addEventListener('submit', (ev) => {
	ev.preventDefault();

	if (editMode) {
		todoList.map((todo) => {
			if (todo.id === idOfEditItem) {
				todo.title = inputTitle.value;
				todo.body = inputText.value;
				todo.completed = false;
				todo.priority = priority || todo.priority;
				todo.date = formatDate(new Date());
				todo.id = idOfEditItem;
				todo.color = getColor(todo.priority);
			}
			return todo;
		});

		editMode = false;
	} else {
		let newTodo = {
			title: inputTitle.value,
			body: inputText.value,
			color: getColor(priority),
			completed: false,
			priority,
			date: formatDate(new Date()),
			id: getHighestId(todoList) + 1
		};

		writingTodo(newTodo);
	}

	updateDraggedDisplay();

	if (JSON.parse(localStorage.getItem('user'))) {
		updateLocalStorage(todoList);
	}
});

const getHighestId = (arr) => {
	let id = 0;

	arr.forEach((item) => (item.id > id ? (id = item.id) : ''));

	return id;
};

const formatDate = (date) => {
	let hours = date.getHours();
	let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
	let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
	let year = date.getFullYear();

	return `${hours}:${minutes} ${day}.${month}.${year}`;
};

const writingTodo = (todo) => {
	todoList.push(todo);
};

const getColor = (priority) => {
	if (priority === lowRadioEn || priority === lowRadioRus) {
		return yellow;
	}
	if (priority === mediumRadioEn || priority === mediumRadioRus) {
		return orange;
	}
	if (priority === highRadioEn || priority === highRadioRus) {
		return red;
	}
};
