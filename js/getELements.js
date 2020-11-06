const addNewTaskButton = document.querySelector('#createNewTask');

//Add task form fields
const inputTitle = document.querySelector('#inputTitle');
const inputText = document.querySelector('#inputText');
const lowRadioButton = document.querySelector('#Low');
const mediumRadioButton = document.querySelector('#Medium');
const highRadioButton = document.querySelector('#High');
const inputColor = document.querySelector('#todoColor');
const addTaskForm = document.querySelector('#addTaskForm');
const closeFormButton = document.querySelector('#closeModal');

//Lists of todos
const currentTasks = document.querySelector('#currentTasks');
const completedTasks = document.querySelector('#completedTasks');

//Todos counter
const numberOfNotCompletedTusks = document.querySelector('#numberOfNotCompletedTusks');
const numberOfCompletedTusks = document.querySelector('#numberOfCompletedTusks');

//Sort by date
const sortFromBiggestButon = document.querySelector('#fromGreat');
const sortFromSmallestButton = document.querySelector('#fromSmall');

//Theme switch
const documentStylesLink = document.querySelector('#styles');

const lightThemeButton = document.querySelector('#optionLight');
const darkThemeButton = document.querySelector('#optionDark');

//Language switch
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
const RUS_BTN = document.querySelector('#RUS');
const EN_BTN = document.querySelector('#EN');

// Authorisation
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const closeAuth = document.querySelector('#closeAuth');

const leaveBtn = document.querySelector('#leaveBtn');
const authBtn = document.querySelector('#authorisationBtn');

const modalError = document.querySelector('#modalError');

const LogInBtn = document.querySelector('#LogIn');
const SignUpBtn = document.querySelector('#SignUp');

const authForm = document.querySelector('#authForm');

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
