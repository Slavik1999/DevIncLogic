const addEventsForItems = () => {
	printTasks();
	todoList.map((todo) => {
		getEditEvent(todo);
		getDeleteEvent(todo.id);
		getCompleteEvent(todo);
		addColoForItem(todo);
	});
};

const getCompleteEvent = (todos) => {
	document.getElementById(`completeButton${todos.id}`).addEventListener('click', () => {
		document.getElementById(todos.id).classList.add('active');

		todoList.map((todo) => {
			if (todo.id === todos.id) {
				todo.completed = true;
			}
			return todo;
		});

		removeTodoById(todos.id);
		addEventsForItems();
		getCounter();

		if (JSON.parse(localStorage.getItem('user'))) {
			updateLocalStorage(todoList);
		}
	});
};

const getDeleteEvent = (idItem) => {
	document.getElementById(`deleteButton${idItem}`).addEventListener('click', () => {
		if (document.getElementById(idItem)) {
			removeTodoById(idItem);
		}

		let newTodoList = todoList.filter((todo) => todo.id !== idItem);

		todoList = newTodoList;

		if (JSON.parse(localStorage.getItem('user'))) {
			updateLocalStorage(todoList);
		}

		getCounter();
	});
};
const getEditEvent = (todo) => {
	document.getElementById(`editButton${todo.id}`).addEventListener('click', () => {
		createNewTask.click();

		inputTitle.value = todo.title;
		inputText.value = todo.body;
		lowRadioButton.checked = todo.priority === lowRadioEn || todo.priority === lowRadioRus ? true : false;
		mediumRadioButton.checked = todo.priority === mediumRadioEn || todo.priority === mediumRadioRus ? true : false;
		highRadioButton.checked = todo.priority === highRadioEn || todo.priority === highRadioRus ? true : false;
		idOfEditItem = todo.id;
		editMode = true;
	});
};

const addColoForItem = (todo) => {
	if (!todo.completed) {
		document.getElementById(todo.id).style.backgroundColor = todo.color;
	}
};

const removeTodoById = (id) => {
	document.getElementById(id).remove();
};
