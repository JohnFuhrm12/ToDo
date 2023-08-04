const loadProject = (projectName) => {
    const allTodos = [];

    class Todo{
        constructor(title, description, dueDate, priority, status) {
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.status = status
        };
    };

    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = '';

    // Create Title
    const titleCheck = document.getElementById('projectTitle');

    if (!titleCheck) {
        const projectTitle = document.createElement('h1'); 
        projectTitle.innerText = projectName;
        projectTitle.className = 'contentTitle';
        projectTitle.id = 'projectTitle';
        todoContainer.appendChild(projectTitle);
    };

    // Load All Todos For This Project
};

export {loadProject};