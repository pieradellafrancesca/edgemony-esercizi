import { todos } from './mocks.js';
import { qS, cE} from './utils.js';

//Esercizio 1

todos.forEach((todo) => console.log(todo.id));

const allUserId = todos.map((todo) => todo.userId);
console.log(allUserId);

const filteredId = todos.filter((todo) => todo.id >= 4);
console.log(filteredId);


//Avanzato

const bodyEl = qS('body');
const todoListEl = cE('div');
const todoListTitleEl = cE('h1');

todoListEl.className = 'todo-list';
todoListTitleEl.textContent = 'To-do List';

bodyEl.append(todoListTitleEl, todoListEl);

function todoGen(todoId, isCompleted, todoTodo) {
   const todoEl = cE('div');
   const isCompletedEl = cE('div');
   const todoTodoEl = cE('p');

   todoEl.setAttribute('id', todoId); //ogni singolo elemento ha un identificativo
   todoEl.className = 'todo';
   todoTodoEl.textContent = todoTodo;
   isCompletedEl.className = 'circle-check';
   isCompleted ? isCompletedEl.classList.add('completed') : null;
   
   todoEl.append(isCompletedEl, todoTodoEl);
   todoListEl.appendChild(todoEl);

   isCompletedEl.addEventListener('click', () => {
    isCompletedEl.classList.toggle('completed');
   });
};

todos.forEach((todo) => todoGen(todo.id, todo.completed, todo.todo));



