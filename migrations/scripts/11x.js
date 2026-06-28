
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'are u hungry??', 
  dueDate: '2022-01-01'
}, {
  name: 'wash the dishes',
  dueDate: '2022-01-01'
}];

renderTodoList();

function renderTodoList(){
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name =todoObject.name
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = ` 
    <div>${name}</div>
    <div>${dueDate}</div>    
    <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList(); 


        saveToStorage();
    " class="delete-button">Delete</button>
  `;
    todoListHtml += html;
  }  

  document.querySelector('.js-todo-list').
  innerHTML = todoListHtml;
}

function addTodo(){
  const inputElement = document.querySelector('.js-todo');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;
  
  todoList.push({ 
   // name: name,
    //dueDate: dueDate,  
    name,
    dueDate,
  }); 

  inputElement.value = '';
  renderTodoList();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));  
}