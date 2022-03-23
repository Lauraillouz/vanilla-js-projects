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
};

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#todos').innerHTML = '';

  const todosLeft = filteredTodos.filter((todo) => {
    return todo.completed === false;
  });

  const todosLeftElement = document.createElement('h2');
  todosLeftElement.textContent = `You have ${todosLeft.length} todos left`;
  document.querySelector('#todos').appendChild(todosLeftElement);

  filteredTodos.forEach((todo) => {
    const todoElement = document.createElement('p');

    todoElement.textContent = todo.text;

    document.querySelector('#todos').appendChild(todoElement);
  });
};

renderTodos(todoObj, filters);

let todoText;

document.querySelector('#addNewTodo').addEventListener('input', (e) => {
  return (todoText = e.target.value);
});

document.querySelector('#addTodoButton').addEventListener('click', () => {
  const newTodo = document.createElement('p');
  newTodo.textContent = todoText;
  document.querySelector('body').appendChild(newTodo);
});

document.querySelector('#filterTodos').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todoObj, filters);
});
