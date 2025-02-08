import "./styles.css";
import { eventListeners } from "./dom";

const app = [];

class Task {
    constructor(title, description, dueDate, priority, note) {
        this.title = title;
        this.description = description || "No Description";
        this.dueDate = dueDate;
        this.priority = priority;
        this.note = note || "No note";
    }
}

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

function createId(array) {
    array.forEach((item, index) => item.id = index);
}

function addTask(array, title, description, dueDate, priority, note) {
    array.push(new Task(title, description, dueDate, priority, note))
    createId(array);
    updateApp();
}

function addProject(title, description) {
    app.push(new Project(title, description));
    createId(app);
    updateApp();
}

function deleteProject(id) {
    app.splice(id, 1);
    createId(app);
    updateApp();
}

function deleteTask(projectId, taskId) {
    app[projectId].tasks.splice(taskId, 1);
    createId(app[projectId].tasks);
}

function editTask(projectId, taskId, title, description, dueDate, priority, note) {
    app[projectId].tasks[taskId].title = title;
    app[projectId].tasks[taskId].description = description;
    app[projectId].tasks[taskId].dueDate = dueDate;
    app[projectId].tasks[taskId].priority = priority;
    app[projectId].tasks[taskId]. note =  note;
}

function updateApp() {
    for (let i = 0; i < app.length; i++) {
        for (let j = 0; j < app[i].tasks.length; j++) {
            app[i].tasks[j].projectId = i;
        }
    }
}

addProject("Default", "The Default Tasks");
addTask(app[0].tasks, "Todo List", "Complete the Todo list project from the Odin project", "2025-02-10", "Low", "Take a water bottle");
console.log(app);

eventListeners(addProject, deleteProject, addTask, deleteTask, app, editTask);