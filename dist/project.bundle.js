/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProject: () => (/* binding */ loadProject)
/* harmony export */ });
const loadProject = (projectName, todos) => {

    let allTodos = todos;

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

        sessionStorage.setItem('todos', JSON.stringify(allTodos));
        const localTodos = JSON.parse(sessionStorage.getItem('todos'));
        console.log(localTodos);

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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgdG9kb3MpID0+IHtcclxuXHJcbiAgICBsZXQgYWxsVG9kb3MgPSB0b2RvcztcclxuXHJcbiAgICBjbGFzcyBUb2Rve1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cyxcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NvbnRhaW5lcicpO1xyXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyBDcmVhdGUgVGl0bGVcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlQ2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XHJcblxyXG4gICAgICAgIGlmICghdGl0bGVDaGVjaykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyBcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ2NvbnRlbnRUaXRsZSc7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlVGl0bGUoKTtcclxuXHJcbiAgICAvLyBMb2FkIEFsbCBUb2RvcyBGb3IgVGhpcyBQcm9qZWN0XHJcbiAgICBmdW5jdGlvbiBsb2FkVG9kb3MoKSB7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjcmVhdGVUaXRsZSgpO1xyXG5cclxuICAgICAgICBpZiAoYWxsVG9kb3MpIHtcclxuICAgICAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9UZXh0ID0gdG9kby50aXRsZTtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvRHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvRGVzYyA9IHRvZG8uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodG9kby5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1dyYXBwZXIuY2xhc3NOYW1lID0gJ3RvZG9XcmFwcGVyJyA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvV3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc05hbWUgPSAndG9kbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdENvbnRhaW5lci5jbGFzc05hbWUgPSAnbGVmdENvbnRhaW5lcic7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc05hbWUgPSAndG9kb0NoZWNrYm94JztcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5pZCA9IHRvZG9UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gY2hlY2tib3guaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhbGxUb2Rvcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kb1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTmFtZSA9ICd0b2RvVGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0R1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGVUZXh0LmlubmVyVGV4dCA9IHRvZG9EdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlVGV4dC5jbGFzc05hbWUgPSAndG9kb0RhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVUZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LmNsYXNzTmFtZSA9ICdkaXNwbGF5Qm94JztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUJveCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXNwbGF5LmlubmVyVGV4dCA9ICdUaXRsZTogJyArIHRvZG9UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpc3BsYXkuY2xhc3NOYW1lID0gJ3RvZG9EaXNwbGF5SXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXNwbGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXNwbGF5LmlubmVyVGV4dCA9ICdEdWUgRGF0ZTogJyArIHRvZG9EdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGlzcGxheS5jbGFzc05hbWUgPSAndG9kb0Rpc3BsYXlJdGVtJztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LmFwcGVuZENoaWxkKHRvZG9EYXRlRGlzcGxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGlzcGxheS5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICcgKyB0b2RvRGVzYztcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpc3BsYXkuY2xhc3NOYW1lID0gJ3RvZG9EaXNwbGF5SXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5hcHBlbmRDaGlsZCh0b2RvRGVzY0Rpc3BsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5RGlzcGxheS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICcgKyB0b2RvUHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5RGlzcGxheS5jbGFzc05hbWUgPSAndG9kb0Rpc3BsYXlJdGVtJztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eURpc3BsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWRpdEJ0bi5pbm5lclRleHQgPSAnRWRpdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVkaXRCdG4uY2xhc3NOYW1lID0gJ2VkaXRCdG4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guYXBwZW5kQ2hpbGQoZGlzcGxheUVkaXRCdG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb01vZGFsRWRpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCA9PSBlZGl0TW9kYWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dEVkaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhRWRpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dEVkaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUGlvcml0eUlucHV0RWRpdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG9UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjSW5wdXQudmFsdWUgPSB0b2RvRGVzYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdG9kb0R1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0b2RvUHJpb3JpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdG5FZGl0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRpdGxlID09PSBjaGVja2JveC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhbGxUb2Rvcy5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlSW5wdXRFZGl0JykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhRWRpdCcpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlSW5wdXRFZGl0JykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9QaW9yaXR5SW5wdXRFZGl0JykudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvc1tpbmRleF0udGl0bGUgPSB0aXRsZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvc1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvc1tpbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3NbaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHlWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTW9kYWxFZGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUb2RvcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlzcGxheWVkID0gZGlzcGxheUJveC5zdHlsZS5kaXNwbGF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3BsYXllZCA9PT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbG9hZFRvZG9zKCk7XHJcblxyXG4gICAgLy8gT3BlbiBUb2RvIE1vZGFsXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPcGVuTW9kYWxCdG4oKSB7XHJcbiAgICAgICAgY29uc3QgYWRkVG9kb3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXHJcbiAgICAgICAgYWRkVG9kb3NCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJztcclxuICAgICAgICBhZGRUb2Rvc0J0bi5jbGFzc05hbWUgPSAnQWRkVG9kb3NCdG4nO1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb3NCdG4pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Nb2RhbFwiKTtcclxuICAgIFxyXG4gICAgICAgIGFkZFRvZG9zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPcGVuIEFkZCBUb2RvIE1vZGFsJyk7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0ID09IG1vZGFsKXtcclxuICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlT3Blbk1vZGFsQnRuKCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIFRvZG9zXHJcbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndG9kbyBjcmVhdGVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZUlucHV0JykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uVGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZUlucHV0JykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Bpb3JpdHlJbnB1dCcpLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCk7XHJcbiAgICAgICAgYWxsVG9kb3MucHVzaChuZXdUb2RvKTtcclxuXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShhbGxUb2RvcykpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsVG9kb3MgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsVG9kb3MpO1xyXG5cclxuICAgICAgICBsb2FkVG9kb3MoKTtcclxuICAgICAgICBjcmVhdGVPcGVuTW9kYWxCdG4oKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb2RvQnRuJyk7XHJcblxyXG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uVGV4dGFyZWEnKS52YWx1ZTtcclxuICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUGlvcml0eUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHRpdGxlVmFsdWUgIT09ICcnICYmIGRlc2NyaXB0aW9uVmFsdWUgIT09ICcnICYmIGR1ZURhdGVWYWx1ZSAhPT0gJycgJiYgcHJpb3JpdHlWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgYWRkVG9kbyh0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkdWVEYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIHByb2plY3QpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvQnRuKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG5PbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9kb0J0bicpO1xyXG4gICAgICAgIGlmIChhZGRUb2RvQnRuT2xkKSB7XHJcbiAgICAgICAgICAgIGFkZFRvZG9CdG5PbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5pZCA9ICdhZGRUb2RvQnRuJztcclxuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTmFtZSA9ICdhZGRCdG4nO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJ1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XHJcblxyXG4gICAgICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uVGV4dGFyZWEnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9QaW9yaXR5SW5wdXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aXRsZVZhbHVlICE9PSAnJyAmJiBkZXNjcmlwdGlvblZhbHVlICE9PSAnJyAmJiBkdWVEYXRlVmFsdWUgIT09ICcnICYmIHByaW9yaXR5VmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2RvKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgcHJvamVjdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZVRvZG9CdG4oKTtcclxuXHJcbiAgICAvLyBFZGl0IE1vZGFsXHJcbiAgICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb01vZGFsRWRpdCcpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnRuRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VFZGl0XCIpO1xyXG4gICAgY2xvc2VCdG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7bG9hZFByb2plY3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==