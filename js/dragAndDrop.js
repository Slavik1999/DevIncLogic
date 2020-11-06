let todoClicked;

const dragAndDrop = () => {
	const todoArr = document.querySelectorAll('.list-group-item');
	todoArr.forEach((todo) => {
		todo.addEventListener('dragstart', () => {
			todoClicked = todo;
		});
	});
};

completedTasks.addEventListener('dragover', function(ev) {
	ev.preventDefault();
});

completedTasks.addEventListener('dragenter', function(ev) {
	ev.preventDefault();
});

completedTasks.addEventListener('drop', function() {
	todoList.forEach((todo) => {
		if (todo.id === +todoClicked.id) {
			todo.completed = true;
		}
	});
	addEventsForItems();
	dragAndDrop();
	getCounter();

	if (JSON.parse(localStorage.getItem('user'))) {
		user.todos = todoList;

		allUsers.map((item) => {
			if (item.email === user.email) {
				item.todos = user.todos;
			}
		});

		localStorage.setItem('allUsers', JSON.stringify(allUsers));
		localStorage.setItem('user', JSON.stringify(user));
	}
});

currentTasks.addEventListener('dragover', function(ev) {
	ev.preventDefault();
});

currentTasks.addEventListener('dragenter', function(ev) {
	ev.preventDefault();
});

currentTasks.addEventListener('drop', function() {
	todoList.forEach((todo) => {
		if (todo.id === +todoClicked.id) {
			todo.completed = false;
		}
	});

	addEventsForItems();
	dragAndDrop();
	getCounter();

	if (JSON.parse(localStorage.getItem('user'))) {
		user.todos = todoList;

		allUsers.map((item) => {
			if (item.email === user.email) {
				item.todos = user.todos;
			}
		});

		localStorage.setItem('allUsers', JSON.stringify(allUsers));
		localStorage.setItem('user', JSON.stringify(user));
	}
});
