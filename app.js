//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listeners
todoButton.addEventListener('click', addTodo);

//functions

function addTodo(event) {
    //Prevent form from submitting so it doesn't refresh the page
    //when you submit
    event.preventDefault();
    //Todo Div --> creates the box for the text to go into after submitting.
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI --> Allows you to type your message 
    //and for it to be stored on the list
    const newTodo = document.createElement('li');
    // You can enter whatever you like for it to be displayed on the page
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //applies the info to the to parent todoDiv.
    todoDiv.appendChild(newTodo);

    //clear Todo text box so you can input something different
    todoInput.value = "";
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    //Check delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);

}
