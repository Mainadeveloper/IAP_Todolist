// Query the elements from the DOM
const submit = document.getElementById('submit-button'); // Submit button
const newTask = document.getElementById('task-input'); // Input task field
const taskList = document.getElementById('task-list'); // Unordered list element
const form = document.getElementById('todo-form'); // Form element

// Disable the submit button by default
submit.disabled = true;

// Enable or disable the button based on input field content
newTask.addEventListener('input', () => {
    if (newTask.value.trim() !== '') {
        submit.disabled = false; // Enable the button
    } else {
        submit.disabled = true; // Disable the button
    }
});

// Prevent default form submission and add the task
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    addTask(newTask.value); // Call the function to add the task
    newTask.value = ''; // Clear the input field
    submit.disabled = true; // Disable the button again
    return false; // Explicitly return false
});

// Function to add a new task
function addTask(task) {
    // Create a new list item using createElement
    const listItem = document.createElement('li');
    listItem.textContent = task; // Add task text to the list item

    // Append the new list item to the unordered list
    taskList.appendChild(listItem);
}
