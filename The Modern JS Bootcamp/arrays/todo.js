const todo = ['todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5', 'todo 6'];

// 1. Convert an array into array of objects => text, completed
/* const todoObj = [];

todo.forEach((item) => {
  todoObj.push({ text: item, completed: false });
});

console.log(todoObj); */
const todoObj = [
  {
    text: 'todo 1',
    completed: true,
  },
  {
    text: 'todo 2',
    completed: true,
  },
  {
    text: 'todo 3',
    completed: false,
  },
  {
    text: 'todo 4',
    completed: true,
  },
  {
    text: 'todo 5',
    completed: false,
  },
  {
    text: 'todo 6',
    completed: false,
  },
];
console.log(todoObj);

// 2. Create function to remove a todo by text value
/* const removeTodo = (todoObj, textValue) => {
  todoObj.splice(
    todoObj.findIndex((todo) => {
      return todo.text.toLowerCase() === textValue.toLowerCase();
    }),
    1
  );
};
removeTodo(todoObj, 'todo 1');
console.log(todoObj); */

// 3. Create a function that returns the list of remaining todos
const getThingsToDo = (todos) => {
  return todos.filter((todo) => {
    return !todo.completed;
  });
};

console.log(getThingsToDo(todoObj));

const sortTodos = (todos) => {
  return todos.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1; // should'nt come first
    } else if (!a.completed && b.completed) {
      return -1; // should come first if false
    } else {
      return 0;
    }
  });
};
console.log(sortTodos(todoObj));

//////////////////////////////////////////////////////////////////////////////////////////

/* console.log(`You have ${todo.length} things to do`);

console.log(
  `First and last things to do: ${todo[0]} and ${todo[todo.length - 1]}`
); */

/* todo.push('todo 4'); // adds an tiem at the end
console.log(todo);
todo.pop(); // removes last item
console.log(todo);
todo.unshift('todo 0'); // adds item before the first one
console.log(todo);
todo.shift();
console.log(todo); // removes first item

todo.splice(1, 1); // first argument is the index where to start, second argument is index where to end
console.log(todo);
todo.splice(1, 0, 'new todo 2'); // this says: start at index 1, delete 0 item, add new todo 2
console.log(todo);

todo[2] = 'this is new note 3'; // simply changes the item of a crtain index
console.log(todo); */

/* console.log(todo);
todo.splice(2, 1); // removes 3rd item. Should return all todo except for todo 3
console.log(todo);
todo.push('last todo'); // adds item to the end. should return todo 1, todo 2, todo 4, todo 5, todo 6, last todo
console.log(todo);
todo.shift(); // removes first item. should return todo 2, todo 4, todo 5, todo 6, last todo
console.log(todo); */

/* todo.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});
 */
/* for (let i = 0; i < todo.length; i++) {
  console.log(`${i + 1}. ${todo[i]}`);
} */
