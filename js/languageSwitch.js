RUS_BTN.addEventListener('click', () => {
	elementsArr.map((element, index) => (element.innerHTML = RUS_ARR[index]));

	translateTodoPriority(EN_ARR, RUS_ARR);

	lowRadioButton.value = 'Низкий';
	mediumRadioButton.value = 'Средний';
	highRadioButton.value = 'Высокий';

	translateTodoActions(RUS);
});

EN_BTN.addEventListener('click', () => {
	elementsArr.map((element, index) => (element.innerHTML = EN_ARR[index]));

	translateTodoPriority(RUS_ARR, EN_ARR);

	lowRadioButton.value = 'Low';
	mediumRadioButton.value = 'Medium';
	highRadioButton.value = 'High';

	translateTodoActions(EN);
});

function translateTodoActions(laguage) {
	const btnCompleteTxt = document.querySelectorAll('#btnCompleteTxt');
	const btnEditTxt = document.querySelectorAll('#btnEditTxt');
	const btnDeleteTxt = document.querySelectorAll('#btnDeleteTxt');

	const actionsArr = [ btnCompleteTxt, btnEditTxt, btnDeleteTxt ];

	if (laguage === RUS) {
		translateActions(RusActions, actionsArr);
	} else {
		translateActions(EnActions, actionsArr);
	}
}

function translateActions(languageEctions, actionsArr) {
	actionsArr.map((actions, index) => {
		actions.forEach((btn) => {
			btn.innerHTML = languageEctions[index];
		});
	});
}

function translateTodoPriority(firstLang, secondLang) {
	todoList.map((todo) => {
		firstLang.forEach((langPriority, index) => {
			if (todo.priority === langPriority) {
				todo.priority = secondLang[index];
			}
		});
	});

	addEventsForItems();
	dragAndDrop();
}

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		EN_BTN.click();
	}, 0);
});
