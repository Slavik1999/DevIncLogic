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

	numberOfNotCompletedTusks.innerHTML = `(${counterNotCompleted})`;
	numberOfCompletedTusks.innerHTML = `(${counterCompleted})`;
};
