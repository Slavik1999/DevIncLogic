let todoClicked;

completedTasks.addEventListener('dragover', function(ev) {
	ev.preventDefault();
});

completedTasks.addEventListener('dragenter', function(ev) {
	ev.preventDefault();
});

completedTasks.addEventListener('drop', function() {
	changeTodoCompleted(true);

	updateDraggedDisplay();

	if (JSON.parse(localStorage.getItem('user'))) {
		updateLocalStorage(todoList);
	}
});

currentTasks.addEventListener('dragover', function(ev) {
	ev.preventDefault();
});

currentTasks.addEventListener('dragenter', function(ev) {
	ev.preventDefault();
});

currentTasks.addEventListener('drop', function() {
	changeTodoCompleted(false);

	updateDraggedDisplay();

	if (JSON.parse(localStorage.getItem('user'))) {
		updateLocalStorage(todoList);
	}
});

const dragAndDrop = () => {
	const todoArr = document.querySelectorAll('.list-group-item');
	todoArr.forEach((todo) => {
		todo.addEventListener('dragstart', () => {
			todoClicked = todo;
		});
	});
};

function updateDraggedDisplay() {
	addEventsForItems();
	dragAndDrop();
	getCounter();
}

function changeTodoCompleted(completed) {
	todoList.forEach((todo) => {
		if (todo.id === +todoClicked.id) {
			todo.completed = completed;
		}
	});
}
