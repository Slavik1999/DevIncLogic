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
                <small class="mr-2" id="todoPriority">${todo.priority}</small>
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
