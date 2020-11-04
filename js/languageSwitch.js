const RUS_ARR = [
	'МойСписокЗадач',
	'Задачи',
	'Выполненные',
	'Добавить задачу',
	'Добавить задачу',
	'Заголовок',
	'Текст',
	'Приоритет',
	'Низкий',
	'Средний',
	'Высокий',
	'Цвет Задачи',
	'Закрыть',
	'Добавить задачу'
];

const EN_ARR = [
	'MyToDoList',
	'ToDo',
	'Completed',
	'Add task',
	'Add task',
	'Title',
	'Text',
	'Priority',
	'Low',
	'Medium',
	'High',
	'Todo Color',
	'Close',
	'Add task'
];

const RADIO_RUS = [ 'Низкий', 'Средний', 'Высокий' ];
const RADIO_EN = [ 'Low', 'Medium', 'High' ];

const MyTodoList = document.querySelector('#mainTitle');
const ToDo = document.querySelector('#ToDo');
const Completed = document.querySelector('#Completed');
const AddTask = document.querySelector('#AddTask');
const ExampleModalLabel = document.querySelector('#exampleModalLabel');
const Title = document.querySelector('#Title');
const Text = document.querySelector('#Text');
const Priority = document.querySelector('#Priority');
const TodoColor = document.querySelector('#TodoColor');
const CloseBtn = document.querySelector('#closeBtn');
const AddTaskBtn = document.querySelector('#addTask');

const Low = document.querySelector('#LowLabel');
const Medium = document.querySelector('#MediumLabel');
const High = document.querySelector('#HighLabel');

const elementsArr = [
	MyTodoList,
	ToDo,
	Completed,
	AddTask,
	ExampleModalLabel,
	Title,
	Text,
	Priority,
	Low,
	Medium,
	High,
	TodoColor,
	CloseBtn,
	AddTaskBtn
];

const RUS_BTN = document.querySelector('#RUS');
const EN_BTN = document.querySelector('#EN');

RUS_BTN.addEventListener('click', () => {
	elementsArr.map((element, index) => (element.innerHTML = RUS_ARR[index]));

	translateTodoPriority(EN_ARR, RUS_ARR);

	lowRadioButton.value = 'Низкий';
	mediumRadioButton.value = 'Средний';
	highRadioButton.value = 'Высокий';
});

EN_BTN.addEventListener('click', () => {
	elementsArr.map((element, index) => (element.innerHTML = EN_ARR[index]));

	translateTodoPriority(RUS_ARR, EN_ARR);

	lowRadioButton.value = 'Low';
	mediumRadioButton.value = 'Medium';
	highRadioButton.value = 'High';
});

function translateTodoPriority(firstLang, secondLang) {
	todoList.map((todo) => {
		firstLang.forEach((langPriority, index) => {
			if (todo.priority === langPriority) {
				todo.priority = secondLang[index];
			}
		});
	});

	addEventsForItems();
}

document.addEventListener('DOMContentLoaded', () => {
	EN_BTN.click();
});
