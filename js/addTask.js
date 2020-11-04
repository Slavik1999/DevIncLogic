let todoId = 0;
let editMode = false;
let idOfEditItem;
let todoList = [];
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
				todo.priority = priority ? priority : todo.priority;
				todo.date = formatDate(new Date());
				todo.id = idOfEditItem;
				todo.color = inputColor.value;
			}
			return todo;
		});

		editMode = false;
	} else {
		let newTodo = {
			title: inputTitle.value,
			body: inputText.value,
			color: inputColor.value,
			completed: false,
			priority,
			date: formatDate(new Date()),
			id: todoId
		};

		writingTodo(newTodo);
	}

	addEventsForItems();
	getCounter();
	localStorage.setItem('todo', JSON.stringify(todoList));
});

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
