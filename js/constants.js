const RUS_RADIO = [ 'Низкий', 'Средний', 'Высокий' ];
const EN_RADIO = [ 'Low', 'Medium', 'High' ];

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
	'Закрыть',
	'Добавить задачу',
	'Почта',
	'Пароль',
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
	'Close',
	'Add task',
	'Email',
	'Password',
	'Log In',
	'Sign Up',
	'Light',
	'Dark',
	'Complete',
	'Edit',
	'Delete'
];

const lowRadioRus = 'Низкий';
const mediumRadioRus = 'Средний';
const highRadioRus = 'Высокий';

const lowRadioEn = 'Low';
const mediumRadioEn = 'Medium';
const highRadioEn = 'High';

const usersArr = localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [];

const RUS = 'RUS';
const EN = 'EN';

const RusActions = [ 'Выполнить', 'Редактировать', 'Удалить' ];
const EnActions = [ 'Complete', 'Edit', 'Delete' ];

const yellow = 'rgba(221,228,0,0.8)';
const orange = 'rgba(213,121,18,0.86)';
const red = 'rgba(208,0,0,0.92)';

const nameIsRegisteredError = 'Пользователь с таким именем уже существует';
const emailIsRegisteredError = 'Эта почта занята';
const notEnoughPasswordLngthError = 'Недостаточно длинный пароль';
const wrongPasswordError = 'Не верный пароль';
const thereIsNoSuchUserError = 'Такого пользователя не существует';
