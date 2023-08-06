const allTodos = [];

const loadProject = (projectName) => {

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
    function createTitle() {
        const titleCheck = document.getElementById('projectTitle');

        if (!titleCheck) {
            const projectTitle = document.createElement('h1'); 
            projectTitle.innerText = projectName;
            projectTitle.className = 'contentTitle';
            projectTitle.id = 'projectTitle';
            todoContainer.appendChild(projectTitle);
        };
    };

    createTitle();

    // Load All Todos For This Project
    function loadTodos() {
        todoContainer.innerHTML = '';
        createTitle();

        if (allTodos) {
            allTodos.forEach((todo) => {
                let todoText = todo.title;
                let todoDueDate = todo.dueDate;
                let todoDesc = todo.description;
                let todoPriority = todo.priority;

                if (todo.project === projectName) {
                    const todoWrapper = document.createElement('div');
                    todoWrapper.className = 'todoWrapper' ;
                    todoContainer.appendChild(todoWrapper);

                    const todo = document.createElement('div'); 
                    todo.className = 'todo';
                    todoWrapper.appendChild(todo);

                    const leftContainer = document.createElement('div'); 
                    leftContainer.className = 'leftContainer';
                    todo.appendChild(leftContainer);

                    const checkbox = document.createElement('input'); 
                    checkbox.className = 'todoCheckbox';
                    checkbox.type = 'checkbox';
                    checkbox.id = todoText;
                    leftContainer.appendChild(checkbox);

                    checkbox.addEventListener('click', function() {
                        allTodos.forEach((item) => {
                            if (item.title === checkbox.id) {
                                let index = allTodos.indexOf(item);
                                allTodos.splice(index, 1);
                                todo.remove();
                            };
                        });
                    });

                    const todoTitle = document.createElement('h2'); 
                    todoTitle.innerText = todoText;
                    todoTitle.className = 'todoTitle';
                    leftContainer.appendChild(todoTitle);

                    const todoDueDateText = document.createElement('h2'); 
                    todoDueDateText.innerText = todoDueDate;
                    todoDueDateText.className = 'todoDate';
                    todo.appendChild(todoDueDateText);

                    const displayBox = document.createElement('div'); 
                    displayBox.className = 'displayBox';
                    displayBox.style.display = 'none';
                    todoWrapper.appendChild(displayBox);

                    const todoTitleDisplay = document.createElement('h2'); 
                    todoTitleDisplay.innerText = 'Title: ' + todoText;
                    todoTitleDisplay.className = 'todoDisplayItem';
                    displayBox.appendChild(todoTitleDisplay);

                    const todoDateDisplay = document.createElement('h2'); 
                    todoDateDisplay.innerText = 'Due Date: ' + todoDueDate;
                    todoDateDisplay.className = 'todoDisplayItem';
                    displayBox.appendChild(todoDateDisplay);

                    const todoDescDisplay = document.createElement('h2'); 
                    todoDescDisplay.innerText = 'Description: ' + todoDesc;
                    todoDescDisplay.className = 'todoDisplayItem';
                    displayBox.appendChild(todoDescDisplay);

                    const todoPriorityDisplay = document.createElement('h2'); 
                    todoPriorityDisplay.innerText = 'Priority: ' + todoPriority;
                    todoPriorityDisplay.className = 'todoDisplayItem';
                    displayBox.appendChild(todoPriorityDisplay);

                    const displayEditBtn = document.createElement('button'); 
                    displayEditBtn.innerText = 'Edit';
                    displayEditBtn.className = 'editBtn';
                    displayBox.appendChild(displayEditBtn);

                    displayEditBtn.addEventListener('click', function() {
                        const editModal = document.getElementById('todoModalEdit');
                        editModal.style.display = "block";

                        window.onclick = function(e){
                            if(e.target == editModal){
                                editModal.style.display = "none";
                            };
                        };

                        const titleInput = document.getElementById('todoTitleInputEdit');
                        const descInput = document.getElementById('todoDescriptionTextareaEdit');
                        const dateInput = document.getElementById('todoDueDateInputEdit');
                        const priorityInput = document.getElementById('todoPiorityInputEdit');

                        titleInput.value = todoText;
                        descInput.value = todoDesc;
                        dateInput.value = todoDueDate;
                        priorityInput.value = todoPriority;

                        const editBtn = document.getElementById('addTodoBtnEdit');

                        editBtn.addEventListener('click', function() {
                            event.preventDefault();
                            allTodos.forEach((item) => {
                                if (item.title === checkbox.id) {
                                    let index = allTodos.indexOf(item);

                                    let titleValue = document.getElementById('todoTitleInputEdit').value;
                                    let descriptionValue = document.getElementById('todoDescriptionTextareaEdit').value;
                                    let dueDateValue = document.getElementById('todoDueDateInputEdit').value;
                                    let priorityValue = document.getElementById('todoPiorityInputEdit').value;

                                    allTodos[index].title = titleValue;
                                    allTodos[index].description = descriptionValue;
                                    allTodos[index].dueDate = dueDateValue;
                                    allTodos[index].priority = priorityValue;

                                    const editModal = document.getElementById('todoModalEdit');
                                    editModal.style.display = "none";
                                    loadTodos();
                                };
                            });
                        });

                    });

                    todo.addEventListener('click' , function() {
                        let displayed = displayBox.style.display;

                        if (displayed === 'none'){
                            displayBox.style.display = 'block';
                        } else {
                            displayBox.style.display = 'none';
                        };
                    });
                };
            });
        };
    };
    
    loadTodos();

    // Open Todo Modal
    function createOpenModalBtn() {
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

    createOpenModalBtn();

    // Create Todos
    function addTodo(title, description, dueDate, priority, project) {
        console.log('todo created');
        document.getElementById('todoTitleInput').value = '';
        document.getElementById('todoDescriptionTextarea').value = '';
        document.getElementById('todoDueDateInput').value = '';
        document.getElementById('todoPiorityInput').value = '';

        let status = false;
        let newTodo = new Todo(title, description, dueDate, priority, status, project);
        allTodos.push(newTodo);
        loadTodos();
        createOpenModalBtn();
    };

    const addTodoBtn = document.getElementById('addTodoBtn');

    addTodoBtn.addEventListener('click', function() {
        let titleValue = document.getElementById('todoTitleInput').value;
        let descriptionValue = document.getElementById('todoDescriptionTextarea').value;
        let dueDateValue = document.getElementById('todoDueDateInput').value;
        let priorityValue = document.getElementById('todoPiorityInput').value;
        let project = projectName;

        if (titleValue !== '' && descriptionValue !== '' && dueDateValue !== '' && priorityValue !== '') {
            addTodo(titleValue, descriptionValue, dueDateValue, priorityValue, project);
        };
    });

    function createTodoBtn() {
        const addTodoBtnOld = document.getElementById('addTodoBtn');
        if (addTodoBtnOld) {
            addTodoBtnOld.remove();
        };

        const form = document.getElementById('todoForm');

        const addTodoBtn = document.createElement('button');
        addTodoBtn.id = 'addTodoBtn';
        addTodoBtn.className = 'addBtn';
        addTodoBtn.innerText = 'Add Todo'
        form.appendChild(addTodoBtn);

        addTodoBtn.addEventListener('click', function() {
            let titleValue = document.getElementById('todoTitleInput').value;
            let descriptionValue = document.getElementById('todoDescriptionTextarea').value;
            let dueDateValue = document.getElementById('todoDueDateInput').value;
            let priorityValue = document.getElementById('todoPiorityInput').value;
            let project = projectName;

            if (titleValue !== '' && descriptionValue !== '' && dueDateValue !== '' && priorityValue !== '') {
                addTodo(titleValue, descriptionValue, dueDateValue, priorityValue, project);
            };
        });
    };

    createTodoBtn();

    // Edit Modal
    const editModal = document.getElementById('todoModalEdit');

    const closeBtnEdit = document.getElementById("closeEdit");
    closeBtnEdit.addEventListener('click', function() {
            editModal.style.display = "none";
        });


};

export {loadProject};