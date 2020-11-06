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

const usersArr = localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [];

const RUS = 'RUS';
const EN = 'EN';

const RusActions = [ 'Выполнить', 'Редактировать', 'Удалить' ];
const EnActions = [ 'Complete', 'Edit', 'Delete' ];
