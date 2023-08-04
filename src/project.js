const loadProject = (projectName) => {
    const allTodos = [];

    class Todo{
        constructor(title, description, dueDate, priority, status, project) {
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.status = status,
            this.project = project
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
    if (allTodos) {
        allTodos.forEach((todo) => {
            if (todo.project === projectName) {
                const todo = document.createElement('h2'); 
                todo.innerText = todo.title;
                todo.className = 'todo';
                todoContainer.appendChild(todo);
            };
        });
    };

    // Create Todos

    // Open Todo Modal
    const addTodosBtn = document.createElement('button'); 
    addTodosBtn.innerText = 'Add Task';
    addTodosBtn.className = 'AddTodosBtn';
    todoContainer.appendChild(addTodosBtn);

    const modal = document.getElementById("todoModal");

    addTodosBtn.addEventListener('click', function() {
        console.log('Open Add Todo Modal');
        modal.style.display = "block";
    });

    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.onclick = function(e){
        if(e.target == modal){
          modal.style.display = "none";
        };
    };

};

export {loadProject};