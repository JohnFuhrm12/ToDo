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
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadInbox: () => (/* binding */ loadInbox)
/* harmony export */ });
const loadInbox = (allProjects) => {
    const todoContainer = document.getElementById('todoContainer');
    const sideBar = document.getElementById('sideBar');
    
    // Create Title
    const titleCheck = document.getElementById('inboxTitle');

    if (!titleCheck) {
        const inboxTitle = document.createElement('h1'); 
        inboxTitle.innerText = 'Inbox';
        inboxTitle.className = 'contentTitle';
        inboxTitle.id = 'inboxTitle';
        todoContainer.appendChild(inboxTitle);
    };

    // Create All Todos (Title-Duedate-Priority)
    console.log(allProjects);
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
                console.log('openedProject');
            });
        });
    };
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ib3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5ib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBsb2FkSW5ib3ggPSAoYWxsUHJvamVjdHMpID0+IHtcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NvbnRhaW5lcicpO1xyXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlQmFyJyk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSBUaXRsZVxyXG4gICAgY29uc3QgdGl0bGVDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmJveFRpdGxlJyk7XHJcblxyXG4gICAgaWYgKCF0aXRsZUNoZWNrKSB7XHJcbiAgICAgICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IFxyXG4gICAgICAgIGluYm94VGl0bGUuaW5uZXJUZXh0ID0gJ0luYm94JztcclxuICAgICAgICBpbmJveFRpdGxlLmNsYXNzTmFtZSA9ICdjb250ZW50VGl0bGUnO1xyXG4gICAgICAgIGluYm94VGl0bGUuaWQgPSAnaW5ib3hUaXRsZSc7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveFRpdGxlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIEFsbCBUb2RvcyAoVGl0bGUtRHVlZGF0ZS1Qcmlvcml0eSlcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0TGlzdGluZycpO1xyXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0cykge1xyXG4gICAgICAgIHdoaWxlKGN1cnJlbnRQcm9qZWN0c1swXSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyZW50UHJvamVjdHNbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgaWYgKGFsbFByb2plY3RzKSB7XHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IFxyXG4gICAgICAgICAgICBwcm9qZWN0T2JqZWN0LmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIHByb2plY3RPYmplY3QuY2xhc3NOYW1lID0gJ3Byb2plY3RMaXN0aW5nJztcclxuICAgICAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0T2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcGVuZWRQcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7bG9hZEluYm94fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=