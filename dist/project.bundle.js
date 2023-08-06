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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGFsbFRvZG9zID0gW107XHJcblxyXG5jb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG5cclxuICAgIGNsYXNzIFRvZG97XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLFxyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzLFxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ29udGFpbmVyJyk7XHJcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIC8vIENyZWF0ZSBUaXRsZVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGVDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aXRsZUNoZWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IFxyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAnY29udGVudFRpdGxlJztcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVUaXRsZSgpO1xyXG5cclxuICAgIC8vIExvYWQgQWxsIFRvZG9zIEZvciBUaGlzIFByb2plY3RcclxuICAgIGZ1bmN0aW9uIGxvYWRUb2RvcygpIHtcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNyZWF0ZVRpdGxlKCk7XHJcblxyXG4gICAgICAgIGlmIChhbGxUb2Rvcykge1xyXG4gICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb1RleHQgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9EdWVEYXRlID0gdG9kby5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9EZXNjID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b2RvLnByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvV3JhcHBlci5jbGFzc05hbWUgPSAndG9kb1dyYXBwZXInIDtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9XcmFwcGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTmFtZSA9ICd0b2RvJztcclxuICAgICAgICAgICAgICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdsZWZ0Q29udGFpbmVyJztcclxuICAgICAgICAgICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICd0b2RvQ2hlY2tib3gnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmlkID0gdG9kb1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRpdGxlID09PSBjaGVja2JveC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFsbFRvZG9zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5pbm5lclRleHQgPSB0b2RvVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGUuY2xhc3NOYW1lID0gJ3RvZG9UaXRsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZVRleHQuaW5uZXJUZXh0ID0gdG9kb0R1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGVUZXh0LmNsYXNzTmFtZSA9ICd0b2RvRGF0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZVRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guY2xhc3NOYW1lID0gJ2Rpc3BsYXlCb3gnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5Qm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpc3BsYXkuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnICsgdG9kb1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGlzcGxheS5jbGFzc05hbWUgPSAndG9kb0Rpc3BsYXlJdGVtJztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LmFwcGVuZENoaWxkKHRvZG9UaXRsZURpc3BsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpc3BsYXkuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOiAnICsgdG9kb0R1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvRGlzcGxheUl0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guYXBwZW5kQ2hpbGQodG9kb0RhdGVEaXNwbGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXNwbGF5LmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjogJyArIHRvZG9EZXNjO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGlzcGxheS5jbGFzc05hbWUgPSAndG9kb0Rpc3BsYXlJdGVtJztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LmFwcGVuZENoaWxkKHRvZG9EZXNjRGlzcGxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlEaXNwbGF5LmlubmVyVGV4dCA9ICdQcmlvcml0eTogJyArIHRvZG9Qcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlEaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvRGlzcGxheUl0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5RGlzcGxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFZGl0QnRuLmlubmVyVGV4dCA9ICdFZGl0JztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWRpdEJ0bi5jbGFzc05hbWUgPSAnZWRpdEJ0bic7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5hcHBlbmRDaGlsZChkaXNwbGF5RWRpdEJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTW9kYWxFZGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0ID09IGVkaXRNb2RhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZUlucHV0RWRpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uVGV4dGFyZWFFZGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZUlucHV0RWRpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9QaW9yaXR5SW5wdXRFZGl0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kb1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NJbnB1dC52YWx1ZSA9IHRvZG9EZXNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0b2RvRHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRvZG9Qcmlvcml0eTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9kb0J0bkVkaXQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IGNoZWNrYm94LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFsbFRvZG9zLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dEVkaXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uVGV4dGFyZWFFZGl0JykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dEVkaXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Bpb3JpdHlJbnB1dEVkaXQnKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zW2luZGV4XS50aXRsZSA9IHRpdGxlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zW2luZGV4XS5kdWVEYXRlID0gZHVlRGF0ZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvc1tpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eVZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Nb2RhbEVkaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRvZG9zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBkaXNwbGF5Qm94LnN0eWxlLmRpc3BsYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheWVkID09PSAnbm9uZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBsb2FkVG9kb3MoKTtcclxuXHJcbiAgICAvLyBPcGVuIFRvZG8gTW9kYWxcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9wZW5Nb2RhbEJ0bigpIHtcclxuICAgICAgICBjb25zdCBhZGRUb2Rvc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcclxuICAgICAgICBhZGRUb2Rvc0J0bi5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xyXG4gICAgICAgIGFkZFRvZG9zQnRuLmNsYXNzTmFtZSA9ICdBZGRUb2Rvc0J0bic7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2Rvc0J0bik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb01vZGFsXCIpO1xyXG4gICAgXHJcbiAgICAgICAgYWRkVG9kb3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09wZW4gQWRkIFRvZG8gTW9kYWwnKTtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT0gbW9kYWwpe1xyXG4gICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVPcGVuTW9kYWxCdG4oKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgVG9kb3NcclxuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2RvIGNyZWF0ZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlSW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlSW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUGlvcml0eUlucHV0JykudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KTtcclxuICAgICAgICBhbGxUb2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgICAgIGxvYWRUb2RvcygpO1xyXG4gICAgICAgIGNyZWF0ZU9wZW5Nb2RhbEJ0bigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdG4nKTtcclxuXHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9QaW9yaXR5SW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgICAgICBpZiAodGl0bGVWYWx1ZSAhPT0gJycgJiYgZGVzY3JpcHRpb25WYWx1ZSAhPT0gJycgJiYgZHVlRGF0ZVZhbHVlICE9PSAnJyAmJiBwcmlvcml0eVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICBhZGRUb2RvKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgcHJvamVjdCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG9CdG4oKSB7XHJcbiAgICAgICAgY29uc3QgYWRkVG9kb0J0bk9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb2RvQnRuJyk7XHJcbiAgICAgICAgaWYgKGFkZFRvZG9CdG5PbGQpIHtcclxuICAgICAgICAgICAgYWRkVG9kb0J0bk9sZC5yZW1vdmUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBhZGRUb2RvQnRuLmlkID0gJ2FkZFRvZG9CdG4nO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uY2xhc3NOYW1lID0gJ2FkZEJ0bic7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcclxuXHJcbiAgICAgICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Bpb3JpdHlJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRpdGxlVmFsdWUgIT09ICcnICYmIGRlc2NyaXB0aW9uVmFsdWUgIT09ICcnICYmIGR1ZURhdGVWYWx1ZSAhPT0gJycgJiYgcHJpb3JpdHlWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvZG8odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlVG9kb0J0bigpO1xyXG5cclxuICAgIC8vIEVkaXQgTW9kYWxcclxuICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTW9kYWxFZGl0Jyk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdG5FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZUVkaXRcIik7XHJcbiAgICBjbG9zZUJ0bkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHtsb2FkUHJvamVjdH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9