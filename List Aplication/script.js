
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // prevent adding empty tasks
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}
// Add event listener to the add task button
addTaskButton.addEventListener('click', addTask);

// Add event listener to the input field to allow adding tasks with the Enter key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});