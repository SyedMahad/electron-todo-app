document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task';

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        tasksList.appendChild(li);
    }

});
