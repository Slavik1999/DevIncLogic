let createNewTask = document.getElementById("createNewTask");
let inputTitle = document.getElementById("inputTitle");
let inputText = document.getElementById("inputText");
let low = document.getElementById("Low");
let medium = document.getElementById("Medium");
let high = document.getElementById("High");
let addTaskForm = document.getElementById("addTaskForm");
let currentTasks = document.getElementById("currentTasks");
let closeButton = document.querySelector(".close");
let addButton = document.getElementById("addTask");
let completedTasks = document.getElementById("completedTasks");
let fromGreat = document.getElementById("fromGreat");
let fromSmall = document.getElementById("fromSmall");
let numberOfNotCompletedTusks = document.getElementById(
  "numberOfNotCompletedTusks"
);
let numberOfCompletedTusks = document.getElementById("numberOfCompletedTusks");

let styles = document.getElementById("styles");

let light = document.getElementById("optionLight");
let dark = document.getElementById("optionDark");

let todoColor = document.getElementById("todoColor");

light.addEventListener("click", () => {
  let href = "./css/light.css";
  styles.href = href;
  localStorage.setItem("style", JSON.stringify(href));
});
dark.addEventListener("click", () => {
  let href = "./css/black.css";
  styles.href = href;
  localStorage.setItem("style", JSON.stringify(href));
});

let id = 0;
let edit = false;
let editId;
let todoList = [];
let priority = "";

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

document.addEventListener("DOMContentLoaded", () => {
  let href = JSON.parse(localStorage.getItem("style"));
  styles.href = href;
  if (href.includes("black")) {
    dark.setAttribute("checked", "true");
  } else {
    light.setAttribute("checked", "true");
  }

  if (localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"));
  }

  fromGreat.addEventListener("click", () => {
    todoList.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    printTasks();
    printColor();
    printCompletedTasks();
    editItem();
    deletItem();
    completeItem();
    fromGreat.setAttribute("disabled", true);
    fromSmall.removeAttribute("disabled");
  });
  fromSmall.addEventListener("click", () => {
    todoList.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    printTasks();
    printColor();
    printCompletedTasks();
    editItem();
    deletItem();
    completeItem();
    fromSmall.setAttribute("disabled", true);
    fromGreat.removeAttribute("disabled");
  });

  printTasks();
  printColor();
  printCompletedTasks();
  setEventToRadio(low);
  setEventToRadio(high);
  setEventToRadio(medium);
  editItem();
  deletItem();
  completeItem();
  getCounter();
});

addTaskForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  if (edit) {
    todoList.map((todo) => {
      if (todo.id === editId) {
        todo.title = inputTitle.value;
        todo.body = inputText.value;
        todo.completed = false;
        todo.priority = priority ? priority : todo.priority;
        todo.date = formatDate(new Date());
        todo.id = editId;
        todo.color = todoColor.value;
      }
      return todo;
    });
    printTasks();
    printColor();
    printCompletedTasks();
    editItem();
    deletItem();
    completeItem();
    edit = false;
    localStorage.setItem("todo", JSON.stringify(todoList));
  } else {
    let newTodo = {
      title: inputTitle.value,
      body: inputText.value,
      color: todoColor.value,
      completed: false,
      priority,
      date: formatDate(new Date()),
      id,
    };

    writingTodo(newTodo);
    printTasks();
    printColor();
    printCompletedTasks();
    editItem();
    deletItem();
    completeItem();
    localStorage.setItem("todo", JSON.stringify(todoList));
  }
  getCounter();
});

const formatDate = (date) => {
  let hours = date.getHours();
  let minutes =
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  let month =
    date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  let year = date.getFullYear();
  return `${hours}:${minutes} ${day}.${month}.${year}`;
};

const setEventToRadio = (radio) => {
  radio.addEventListener("click", () => {
    priority = radio.value;
  });
};

const writingTodo = (todo) => {
  todoList.push(todo);
};

const printTasks = () => {
  let printTasks = "";

  todoList.map((todo, index) => {
    if (!todo.completed) {
      printTasks += `
      <li class="list-group-item d-flex w-100 mb-2" id=${todo.id}>
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
                    <button type="button" class="btn btn-success w-100" id="completeButton${todo.id}">
                      Complete
                    </button>
                    <button type="button"  class="btn btn-info w-100 my-2" id="editButton${todo.id}">
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger w-100" id="deleteButton${todo.id}" >
                      Delete
                    </button>
                  </div>
                </div>
              </li>`;
    }
    currentTasks.innerHTML = printTasks;

    id = index + 1;
  });

  deleteInputsValue();
  closeButton.click();
};

const printCompletedTasks = () => {
  let printCompletedTasks = "";
  todoList.map((todo, index) => {
    if (todo.completed) {
      printCompletedTasks += `
      <li class="list-group-item d-flex w-100 mb-2 completed" id=${todo.id}>
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
                <button type="button" class="btn btn-success w-100 " id="completeButton${todo.id}" disabled>
                Complete
              </button>
              <button type="button"  class="btn btn-info w-100 my-2" id="editButton${todo.id}" disabled>
                Edit
              </button>
              <button type="button" class="btn btn-danger w-100" id="deleteButton${todo.id}" >
                Delete
              </button>
                </div>
              </div>
            </li>`;
    }
    completedTasks.innerHTML = printCompletedTasks;

    id = index + 1;
  });
  deleteInputsValue();
  closeButton.click();
};

const deleteInputsValue = () => {
  inputTitle.value = "";
  inputText.value = "";
  low.checked = false;
  medium.checked = false;
  high.checked = false;
};

const printColor = () => {
  todoList.map((todo) => {
    if (!todo.completed) {
      document.getElementById(todo.id).style.backgroundColor = todo.color;
    }
  });
};

const deletItem = () => {
  todoList.map((todo) => {
    getDeleteEvent(todo.id);
  });
};

const editItem = () => {
  todoList.map((todo) => {
    getEditEvent(todo);
  });
};

const completeItem = () => {
  todoList.map((todo) => {
    getCompleteEvent(todo);
  });
};

const getCompleteEvent = (todos) => {
  document
    .getElementById(`completeButton${todos.id}`)
    .addEventListener("click", () => {
      document.getElementById(todos.id).classList.add("active");
      todoList.map((todo) => {
        if (todo.id === todos.id) {
          todo.completed = true;
        }

        return todo;
      });
      document.getElementById(todos.id).remove();
      printCompletedTasks();
      deletItem();
      getCounter();
      localStorage.setItem("todo", JSON.stringify(todoList));
    });
};

const getDeleteEvent = (idItem) => {
  document
    .getElementById(`deleteButton${idItem}`)
    .addEventListener("click", () => {
      document.getElementById(idItem).remove();
      let newTodoList = todoList.filter((todo) => todo.id !== idItem);
      todoList = newTodoList;
      localStorage.setItem("todo", JSON.stringify(todoList));
      getCounter();
    });
};
const getEditEvent = (todo) => {
  document
    .getElementById(`editButton${todo.id}`)
    .addEventListener("click", () => {
      createNewTask.click();

      inputTitle.value = todo.title;
      inputText.value = todo.body;
      low.checked = todo.priority === "Low" ? true : false;
      medium.checked = todo.priority === "Medium" ? true : false;
      high.checked = todo.priority === "High" ? true : false;
      todoColor.value = todo.color;
      editId = todo.id;
      edit = true;
    });
};
