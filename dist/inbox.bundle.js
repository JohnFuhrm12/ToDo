/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadInbox: () => (/* binding */ loadInbox)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const loadInbox = (allProjects) => {
    const todoContainer = document.getElementById('todoContainer');
    const sideBar = document.getElementById('sideBar');
    
    // Create Title
    const titleCheck = document.getElementById('inboxTitle');
    const projectCheck = document.getElementById('projectTitle');

    if (!titleCheck && !projectCheck) {
        const inboxTitle = document.createElement('h1'); 
        inboxTitle.innerText = 'Inbox';
        inboxTitle.className = 'contentTitle';
        inboxTitle.id = 'inboxTitle';
        todoContainer.appendChild(inboxTitle);
    };

    // Create All Todos (Title-Duedate-Priority)
    let currentProjects = document.getElementsByClassName('projectListing');
    if (currentProjects) {
        while(currentProjects[0]) {
            currentProjects[0].parentNode.removeChild(currentProjects[0]);
        };
    };
    if (allProjects) {
        allProjects.forEach((project) => {
            let projectObject = document.createElement('h2'); 
            projectObject.innerText = project.title;
            projectObject.className = 'projectListing';
            sideBar.appendChild(projectObject);

            projectObject.addEventListener('click', function() {
                (0,_project__WEBPACK_IMPORTED_MODULE_0__.loadProject)(project.title);
            });
        });
    };
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ib3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVc7QUFDM0IsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5ib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxsVG9kb3MgPSBbXTtcclxuXHJcbmNvbnN0IGxvYWRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcblxyXG4gICAgY2xhc3MgVG9kb3tcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUsXHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSxcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXMsXHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Db250YWluZXInKTtcclxuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIFRpdGxlXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcclxuICAgICAgICBjb25zdCB0aXRsZUNoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xyXG5cclxuICAgICAgICBpZiAoIXRpdGxlQ2hlY2spIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgXHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdjb250ZW50VGl0bGUnO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdFRpdGxlJztcclxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZVRpdGxlKCk7XHJcblxyXG4gICAgLy8gTG9hZCBBbGwgVG9kb3MgRm9yIFRoaXMgUHJvamVjdFxyXG4gICAgZnVuY3Rpb24gbG9hZFRvZG9zKCkge1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY3JlYXRlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgaWYgKGFsbFRvZG9zKSB7XHJcbiAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvVGV4dCA9IHRvZG8udGl0bGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb0Rlc2MgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IHRvZG8ucHJpb3JpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRvZG8ucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9XcmFwcGVyLmNsYXNzTmFtZSA9ICd0b2RvV3JhcHBlcicgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1dyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NOYW1lID0gJ3RvZG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvZG8pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRDb250YWluZXIuY2xhc3NOYW1lID0gJ2xlZnRDb250YWluZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gJ3RvZG9DaGVja2JveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guaWQgPSB0b2RvVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IGNoZWNrYm94LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYWxsVG9kb3MuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IHRvZG9UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc05hbWUgPSAndG9kb1RpdGxlJztcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlVGV4dC5pbm5lclRleHQgPSB0b2RvRHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZVRleHQuY2xhc3NOYW1lID0gJ3RvZG9EYXRlJztcclxuICAgICAgICAgICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlVGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5jbGFzc05hbWUgPSAnZGlzcGxheUJveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKGRpc3BsYXlCb3gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGlzcGxheS5pbm5lclRleHQgPSAnVGl0bGU6ICcgKyB0b2RvVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvRGlzcGxheUl0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guYXBwZW5kQ2hpbGQodG9kb1RpdGxlRGlzcGxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGlzcGxheS5pbm5lclRleHQgPSAnRHVlIERhdGU6ICcgKyB0b2RvRHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpc3BsYXkuY2xhc3NOYW1lID0gJ3RvZG9EaXNwbGF5SXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5hcHBlbmRDaGlsZCh0b2RvRGF0ZURpc3BsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpc3BsYXkuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnICsgdG9kb0Rlc2M7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvRGlzcGxheUl0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCb3guYXBwZW5kQ2hpbGQodG9kb0Rlc2NEaXNwbGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eURpc3BsYXkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnICsgdG9kb1ByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eURpc3BsYXkuY2xhc3NOYW1lID0gJ3RvZG9EaXNwbGF5SXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlEaXNwbGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheUVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVkaXRCdG4uaW5uZXJUZXh0ID0gJ0VkaXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFZGl0QnRuLmNsYXNzTmFtZSA9ICdlZGl0QnRuJztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LmFwcGVuZENoaWxkKGRpc3BsYXlFZGl0QnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Nb2RhbEVkaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT0gZWRpdE1vZGFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlSW5wdXRFZGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYUVkaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlSW5wdXRFZGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Bpb3JpdHlJbnB1dEVkaXQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY0lucHV0LnZhbHVlID0gdG9kb0Rlc2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRvZG9EdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdG9kb1ByaW9yaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb2RvQnRuRWRpdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gY2hlY2tib3guaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYWxsVG9kb3MuaW5kZXhPZihpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZUlucHV0RWRpdCcpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb25UZXh0YXJlYUVkaXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZUlucHV0RWRpdCcpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUGlvcml0eUlucHV0RWRpdCcpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3NbaW5kZXhdLnRpdGxlID0gdGl0bGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3NbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvZG9zW2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb01vZGFsRWRpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3BsYXllZCA9IGRpc3BsYXlCb3guc3R5bGUuZGlzcGxheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQgPT09ICdub25lJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxvYWRUb2RvcygpO1xyXG5cclxuICAgIC8vIE9wZW4gVG9kbyBNb2RhbFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3Blbk1vZGFsQnRuKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxyXG4gICAgICAgIGFkZFRvZG9zQnRuLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XHJcbiAgICAgICAgYWRkVG9kb3NCdG4uY2xhc3NOYW1lID0gJ0FkZFRvZG9zQnRuJztcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9zQnRuKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvTW9kYWxcIik7XHJcbiAgICBcclxuICAgICAgICBhZGRUb2Rvc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT3BlbiBBZGQgVG9kbyBNb2RhbCcpO1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldCA9PSBtb2RhbCl7XHJcbiAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZU9wZW5Nb2RhbEJ0bigpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBUb2Rvc1xyXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZG8gY3JlYXRlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9QaW9yaXR5SW5wdXQnKS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpO1xyXG4gICAgICAgIGFsbFRvZG9zLnB1c2gobmV3VG9kbyk7XHJcbiAgICAgICAgbG9hZFRvZG9zKCk7XHJcbiAgICAgICAgY3JlYXRlT3Blbk1vZGFsQnRuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9kb0J0bicpO1xyXG5cclxuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Bpb3JpdHlJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZVZhbHVlICE9PSAnJyAmJiBkZXNjcmlwdGlvblZhbHVlICE9PSAnJyAmJiBkdWVEYXRlVmFsdWUgIT09ICcnICYmIHByaW9yaXR5VmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGFkZFRvZG8odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBwcm9qZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kb0J0bigpIHtcclxuICAgICAgICBjb25zdCBhZGRUb2RvQnRuT2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvZG9CdG4nKTtcclxuICAgICAgICBpZiAoYWRkVG9kb0J0bk9sZCkge1xyXG4gICAgICAgICAgICBhZGRUb2RvQnRuT2xkLnJlbW92ZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uaWQgPSAnYWRkVG9kb0J0bic7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5jbGFzc05hbWUgPSAnYWRkQnRuJztcclxuICAgICAgICBhZGRUb2RvQnRuLmlubmVyVGV4dCA9ICdBZGQgVG9kbydcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xyXG5cclxuICAgICAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvblRleHRhcmVhJykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUGlvcml0eUlucHV0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGl0bGVWYWx1ZSAhPT0gJycgJiYgZGVzY3JpcHRpb25WYWx1ZSAhPT0gJycgJiYgZHVlRGF0ZVZhbHVlICE9PSAnJyAmJiBwcmlvcml0eVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9kbyh0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkdWVEYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIHByb2plY3QpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVUb2RvQnRuKCk7XHJcblxyXG4gICAgLy8gRWRpdCBNb2RhbFxyXG4gICAgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Nb2RhbEVkaXQnKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0bkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlRWRpdFwiKTtcclxuICAgIGNsb3NlQnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbn07XHJcblxyXG5leHBvcnQge2xvYWRQcm9qZWN0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuY29uc3QgbG9hZEluYm94ID0gKGFsbFByb2plY3RzKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Db250YWluZXInKTtcclxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZUJhcicpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgVGl0bGVcclxuICAgIGNvbnN0IHRpdGxlQ2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3hUaXRsZScpO1xyXG4gICAgY29uc3QgcHJvamVjdENoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xyXG5cclxuICAgIGlmICghdGl0bGVDaGVjayAmJiAhcHJvamVjdENoZWNrKSB7XHJcbiAgICAgICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IFxyXG4gICAgICAgIGluYm94VGl0bGUuaW5uZXJUZXh0ID0gJ0luYm94JztcclxuICAgICAgICBpbmJveFRpdGxlLmNsYXNzTmFtZSA9ICdjb250ZW50VGl0bGUnO1xyXG4gICAgICAgIGluYm94VGl0bGUuaWQgPSAnaW5ib3hUaXRsZSc7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveFRpdGxlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIEFsbCBUb2RvcyAoVGl0bGUtRHVlZGF0ZS1Qcmlvcml0eSlcclxuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0TGlzdGluZycpO1xyXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0cykge1xyXG4gICAgICAgIHdoaWxlKGN1cnJlbnRQcm9qZWN0c1swXSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyZW50UHJvamVjdHNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgaWYgKGFsbFByb2plY3RzKSB7XHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICBwcm9qZWN0T2JqZWN0LmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIHByb2plY3RPYmplY3QuY2xhc3NOYW1lID0gJ3Byb2plY3RMaXN0aW5nJztcclxuICAgICAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0T2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQge2xvYWRJbmJveH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9