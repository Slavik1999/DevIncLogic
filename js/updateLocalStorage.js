function updateLocalStorage(todoList) {
	user.todos = todoList;

	allUsers.map((item) => {
		if (item.email === user.email) {
			item.todos = user.todos;
		}
	});

	localStorage.setItem('allUsers', JSON.stringify(allUsers));
	localStorage.setItem('user', JSON.stringify(user));
}
