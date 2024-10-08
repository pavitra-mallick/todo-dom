// script.js

// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim(); // Get input value and trim whitespace

    if (taskText !== "") {
        // Create new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            todoList.removeChild(li); // Remove task when delete button is clicked
        };

        // Add the delete button to the li
        li.appendChild(deleteBtn);

        // Append the li to the todo list
        todoList.appendChild(li);

        // Clear the input field
        todoInput.value = "";
    }
}

// Event listener for the Add Task button
addBtn.addEventListener('click', addTask);

// Optional: Add task on pressing "Enter" key
todoInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
