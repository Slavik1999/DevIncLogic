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
	'Добавить задачу',
	'Авторизация',
	'Выйти',
	'Почта',
	'Пароль',
	'Авторизация',
	'Войти',
	'Зарегистрироваться',
	'Светлая',
	'Темная',
	'Выполнить',
	'Редактировать',
	'Удалить'
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
	'Add task',
	'Authorisation',
	'Leave',
	'Email',
	'Password',
	'Authorisation',
	'Log In',
	'Sign Up',
	'Light',
	'Dark',
	'Complete',
	'Edit',
	'Delete'
];

const RADIO_RUS = [ 'Низкий', 'Средний', 'Высокий' ];
const RADIO_EN = [ 'Low', 'Medium', 'High' ];

const MyTodoList = document.querySelector('#mainTitle');
const ToDo = document.querySelector('#ToDo');
const Completed = document.querySelector('#Completed');
const AddTask = document.querySelector('#AddTask');
const ExampleModalLabel = document.querySelector('#exampleModalLabel');
const Title = document.querySelector('#Title');
const FormText = document.querySelector('#formText');
const Priority = document.querySelector('#Priority');
const TodoColor = document.querySelector('#TodoColor');
const CloseBtn = document.querySelector('#closeBtn');
const AddTaskBtn = document.querySelector('#addTask');

const Low = document.querySelector('#LowLabel');
const Medium = document.querySelector('#MediumLabel');
const High = document.querySelector('#HighLabel');

const authTxt = document.querySelector('#authTxt');
const leaveTxt = document.querySelector('#leaveTxt');
const emailTxt = document.querySelector('#Email');
const passwordTxt = document.querySelector('#Password');
const authLabel = document.querySelector('#authModalLabel');
const lightTxt = document.querySelector('#lightTxt');
const darkTxt = document.querySelector('#darkTxt');

const elementsArr = [
	MyTodoList,
	ToDo,
	Completed,
	AddTask,
	ExampleModalLabel,
	Title,
	FormText,
	Priority,
	Low,
	Medium,
	High,
	TodoColor,
	CloseBtn,
	AddTaskBtn,
	authTxt,
	leaveTxt,
	emailTxt,
	passwordTxt,
	authLabel,
	LogInBtn,
	SignUpBtn,
	lightTxt,
	darkTxt
];

const RUS_BTN = document.querySelector('#RUS');
const EN_BTN = document.querySelector('#EN');

RUS_BTN.addEventListener('click', () => {
	elementsArr.map((element, index) => (element.innerHTML = RUS_ARR[index]));

	translateTodoPriority(EN_ARR, RUS_ARR);

	lowRadioButton.value = 'Низкий';
	mediumRadioButton.value = 'Средний';
	highRadioButton.value = 'Высокий';

	const btnCompleteTxt = document.querySelectorAll('#btnCompleteTxt');
	const btnEditTxt = document.querySelectorAll('#btnEditTxt');
	const btnDeleteTxt = document.querySelectorAll('#btnDeleteTxt');

	[ ...btnCompleteTxt ].map((btn) => {
		btn.innerHTML = 'Выполнить';
	});
	[ ...btnEditTxt ].map((btn) => {
		btn.innerHTML = 'Редактировать';
	});
	[ ...btnDeleteTxt ].map((btn) => {
		btn.innerHTML = 'Удалить';
	});
});

EN_BTN.addEventListener('click', () => {
	elementsArr.map((element, index) => (element.innerHTML = EN_ARR[index]));

	translateTodoPriority(RUS_ARR, EN_ARR);

	lowRadioButton.value = 'Low';
	mediumRadioButton.value = 'Medium';
	highRadioButton.value = 'High';

	const btnCompleteTxt = document.querySelectorAll('#btnCompleteTxt');
	const btnEditTxt = document.querySelectorAll('#btnEditTxt');
	const btnDeleteTxt = document.querySelectorAll('#btnDeleteTxt');

	[ ...btnCompleteTxt ].map((btn) => {
		btn.innerHTML = 'Complete';
	});
	[ ...btnEditTxt ].map((btn) => {
		btn.innerHTML = 'Edit';
	});
	[ ...btnDeleteTxt ].map((btn) => {
		btn.innerHTML = 'Delete';
	});
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
