const todoObj = [
  {
    text: 'Conquer the world',
    completed: true,
  },
  {
    text: 'Visit aliens',
    completed: true,
  },
  {
    text: 'Pick up flowers',
    completed: false,
  },
  {
    text: 'Cream hands',
    completed: true,
  },
  {
    text: 'Stop talking so much',
    completed: false,
  },
];

const filters = {
  searchText: '',
  hideCompleted: false,
};

// we store the creation of p element to not repeat ourselves
const createNewTodo = (todo) => {
  const todoElement = document.createElement('p');
  todoElement.textContent = todo.text;
  document.querySelector('#todos').appendChild(todoElement);
};

// rendering function that updates the list
const renderTodos = (todos, filters) => {
  // filtering through the array to match search input
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  // we empty the div of todos to update it later
  document.querySelector('#todos').innerHTML = '';

  // set up of the filtered todos that haven't been completed yet
  const todosLeft = filteredTodos.filter((todo) => {
    return todo.completed === false;
  });

  // creating an element that counts remaining todos
  const todosLeftElement = document.createElement('h2');
  todosLeftElement.textContent = `You have ${todosLeft.length} todos left`;
  document.querySelector('#todos').appendChild(todosLeftElement);

  // condition to render a list or the other depending on if hideCompleted is checked or not
  if (filters.hideCompleted) {
    todosLeft.forEach((todo) => {
      createNewTodo(todo);
    });
  } else {
    filteredTodos.forEach((todo) => {
      createNewTodo(todo);
    });
  }
};

// we launche the function
renderTodos(todoObj, filters);

// listening on filter input for searching through list
document.querySelector('#filterTodos').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todoObj, filters);
});

// listening to the form button to create a new note
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();

  newTodo = e.target.elements.newTodo.value;

  todoObj.push({
    text: newTodo,
    completed: false,
  });

  // rerender to update the list
  renderTodos(todoObj, filters);

  e.target.elements.newTodo.value = '';
});

// lsitening to the checkbox to update the list depending on whether hideCompleted is checked or not
document.querySelector('#hideCompleted').addEventListener('change', (e) => {
  if (e.target.checked) {
    filters.hideCompleted = true;
  } else {
    filters.hideCompleted = false;
  }

  renderTodos(todoObj, filters);
});
