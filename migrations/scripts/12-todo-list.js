const todoList = [{
  name: 'are u hungry??', 
  dueDate: '2022-01-01'
}, {
  name: 'wash the dishes',
  dueDate: '2022-01-01'
}];

renderTodoList();

function renderTodoList(){
  let todoListHtml = '';

  todoList.forEach( (todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = ` 
    <div>${name}</div>
    <div>${dueDate}</div>    
    <button class="delete-button js-delete-todo-button">Delete</button>
  `;   
    todoListHtml += html;
  });

  document.querySelector('.js-todo-list').
  innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', () => {        
        todoList.splice(index, 1);
        renderTodoList();        
      });
    });

}

document.querySelector('.js-add-todo-app-list-button')
  .addEventListener('click', () => {
    addTodo();
  });


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

}