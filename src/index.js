import { loadInbox } from './inbox';
import './styles.css';

const allTodos = [];
const allProjects = [];

class Todo{
    constructor(title, description, dueDate, priority, status) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.status = status
    };
};

class Project{
    constructor(title) {
        this.title = title
    };
};

function addProject(title) {
    document.getElementById('projectNameInput').value = '';
    event.preventDefault();
    let newProject = new Project(title);
    allProjects.push(newProject);
    loadInbox(allProjects);
};

window.onload = function() {
    loadInbox(allProjects);

    // Sidebar Event Listeners
    const todoContainer = document.getElementById('todoContainer');

    const inboxTab = document.getElementById('inboxBtn');
    inboxTab.addEventListener('click', function() {
        todoContainer.innerHTML = '';
        loadInbox(allProjects);
    });

    // Open Modal
    const modal = document.getElementById("projectModal");

    const openAddProjectsModalBtn = document.getElementById('openAddProjectsModalBtn');
    openAddProjectsModalBtn.addEventListener('click', function() {
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

    // Add Projects
    const addProjectsBtn = document.getElementById('addProjectsBtn');
    addProjectsBtn.addEventListener('click', function() {
        let nameValue = document.getElementById('projectNameInput').value;
        if (nameValue !== '') {
            addProject(nameValue);
        };
    });
};