import "./styles.css";

const app = [];

class Task {
    constructor(title, description, dueDate, priority, note) {
        this.title = title;
        this.description = description;
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
}

function addProject(title, description) {
    app.push(new Project(title, description));
    createId(app);
}

function deleteProject(id) {
    app.splice(id, 1);
    createId(app);
}

function deleteTask(projectId, taskId) {
    app[projectId].tasks.splice(taskId, 1);
    createId(app[projectId].tasks);
}

addProject("Defualt", "All default projects");
addProject("Defualtss", "All defaultss projects");
addTask(app[0].tasks, "Walk", "Go for a walk", new Date(), "Low", "");
console.log(app);
deleteProject(1);
deleteTask(0,0);