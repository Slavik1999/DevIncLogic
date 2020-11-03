const addNewTaskButton = document.getElementById('createNewTask');

const inputTitle = document.getElementById('inputTitle');
const inputText = document.getElementById('inputText');
const lowRadioButton = document.getElementById('Low');
const mediumRadioButton = document.getElementById('Medium');
const highRadioButton = document.getElementById('High');
const inputColor = document.getElementById('todoColor');

const addTaskForm = document.getElementById('addTaskForm');
const closeFormButton = document.querySelector('.close');

const currentTasks = document.getElementById('currentTasks');
const completedTasks = document.getElementById('completedTasks');

const sortFromBiggestButon = document.getElementById('fromGreat');
const sortFromSmallestButton = document.getElementById('fromSmall');
const numberOfNotCompletedTusks = document.getElementById('numberOfNotCompletedTusks');
const numberOfCompletedTusks = document.getElementById('numberOfCompletedTusks');

const documentStylesLink = document.getElementById('styles');

const lightThemeButton = document.getElementById('optionLight');
const darkThemeButton = document.getElementById('optionDark');

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

lightThemeButton.addEventListener('click', () => {
	let href = './css/light.css';
	setLocalStorageTheme(href);
});

darkThemeButton.addEventListener('click', () => {
	let href = './css/black.css';
	setLocalStorageTheme(href);
});

sortFromBiggestButon.addEventListener('click', () => {
	todoList.sort(function(a, b) {
		return new Date(b.date) - new Date(a.date);
	});

	addEventsForItems();
	sortFromBiggestButon.setAttribute('disabled', true);
	sortFromSmallestButton.removeAttribute('disabled');
});

sortFromSmallestButton.addEventListener('click', () => {
	todoList.sort(function(a, b) {
		return new Date(a.date) - new Date(b.date);
	});

	addEventsForItems();
	sortFromSmallestButton.setAttribute('disabled', true);
	sortFromBiggestButon.removeAttribute('disabled');
});

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

	if (localStorage.getItem('todo')) {
		todoList = JSON.parse(localStorage.getItem('todo'));
	}

	setEventsToRadioButtons();
	addEventsForItems();
	getCounter();
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

const writingTodo = (todo) => {
	todoList.push(todo);
};

const addEventsForItems = () => {
	printTasks();
	todoList.map((todo) => {
		getEditEvent(todo);
		getDeleteEvent(todo.id);
		getCompleteEvent(todo);
		addColoForItem(todo);
	});
};

const printTasks = () => {
	let printTasks = '';
	let printCompletedTasks = '';

	todoList.map((todo, index) => {
		if (todo.completed) {
			printCompletedTasks += itemTemplate(todo);
		} else {
			printTasks += itemTemplate(todo);
		}
		completedTasks.innerHTML = printCompletedTasks;
		currentTasks.innerHTML = printTasks;
		todoId = index + 1;
	});

	deleteInputsValue();
	closeFormButton.click();
};

const itemTemplate = (todo) => {
	let disabled = todo.completed ? 'disabled' : '';
	let completed = todo.completed ? 'completed' : '';
	return `
  <li class="list-group-item d-flex w-100 mb-2 ${completed}" id=${todo.id}>
          <div class="w-100 mr-2">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${todo.title}</h5> 
              <div>
                <small class="mr-2">${todo.priority} priority</small>
                <small>${todo.date}</small>
              </div>
            </div>
            <p class="mb-1 w-100">
              ${todo.body}
            </p>
          </div>
          <div class="dropdown m-2 dropleft">
            <button
              class="btn btn-secondary h-100"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <div
              class="dropdown-menu p-2 flex-column"
              aria-labelledby="dropdownMenuItem1"
            >
            <button type="button" class="btn btn-success w-100 " id="completeButton${todo.id}" ${disabled}>
            Complete
          </button>
          <button type="button"  class="btn btn-info w-100 my-2" id="editButton${todo.id}" ${disabled}>
            Edit
          </button>
          <button type="button" class="btn btn-danger w-100" id="deleteButton${todo.id}" >
            Delete
          </button>
            </div>
          </div>
        </li>`;
};

const deleteInputsValue = () => {
	inputTitle.value = '';
	inputText.value = '';
	lowRadioButton.checked = false;
	mediumRadioButton.checked = false;
	highRadioButton.checked = false;

	inputColor.value = 'rgba(44,175,254,0.5)';
};

const addColoForItem = (todo) => {
	if (!todo.completed) {
		document.getElementById(todo.id).style.backgroundColor = todo.color;
	}
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
		localStorage.setItem('todo', JSON.stringify(todoList));
	});
};

const getDeleteEvent = (idItem) => {
	document.getElementById(`deleteButton${idItem}`).addEventListener('click', () => {
		if (document.getElementById(idItem)) {
			removeTodoById(idItem);
		}

		let newTodoList = todoList.filter((todo) => todo.id !== idItem);
		todoList = newTodoList;
		localStorage.setItem('todo', JSON.stringify(todoList));
		getCounter();
	});
};
const getEditEvent = (todo) => {
	document.getElementById(`editButton${todo.id}`).addEventListener('click', () => {
		createNewTask.click();

		inputTitle.value = todo.title;
		inputText.value = todo.body;
		lowRadioButton.checked = todo.priority === 'Low' ? true : false;
		mediumRadioButton.checked = todo.priority === 'Medium' ? true : false;
		highRadioButton.checked = todo.priority === 'High' ? true : false;
		inputColor.value = todo.color;
		idOfEditItem = todo.id;
		editMode = true;
	});
};

const getCounter = () => {
	let counterNotCompleted = 0;
	let counterCompleted = 0;

	todoList.map((todo) => {
		if (todo.completed) {
			counterCompleted++;
		} else {
			counterNotCompleted++;
		}
	});

	numberOfNotCompletedTusks.innerHTML = `ToDo(${counterNotCompleted})`;
	numberOfCompletedTusks.innerHTML = `Completed(${counterCompleted})`;
};

const removeTodoById = (id) => {
	document.getElementById(id).remove();
};

const setLocalStorageTheme = (href) => {
	documentStylesLink.href = href;
	localStorage.setItem('style', JSON.stringify(href));
};
