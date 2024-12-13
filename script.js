document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const suggestTaskBtn = document.getElementById('suggest-task-btn');
    const taskList = document.getElementById('task-list');
    const datetime = document.getElementById('datetime');

    setInterval(() => {
        const now = new Date();
        datetime.textContent = now.toLocaleString();
    }, 1000);

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    suggestTaskBtn.addEventListener('click', () => {
        const suggestions = [
            "Organize your workspace",
            "Plan your meals for the week",
            "Complete pending emails",
            "Take a 10-minute mindfulness break",
            "Prepare for tomorrow's meeting",
            "Water your plants"
        ];
        const randomTask = suggestions[Math.floor(Math.random() * suggestions.length)];
        addTask(randomTask);
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn" title="Complete Task"><i class="fas fa-check"></i></button>
                <button class="delete-btn" title="Delete Task"><i class="fas fa-trash"></i></button>
            </div>
        `;
        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
