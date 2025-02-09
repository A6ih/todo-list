export default function saveToLocalStorage(array) {
    localStorage.setItem("localApp", JSON.stringify(array));
}

export function getFromLocalStorage() {
    if(localStorage.length === 0) {
        saveToLocalStorage([{"title":"My Projects","description":"The default project.","tasks":[{"title":"Complete the Todo App","description":"Complete the Todo App from the odin project","dueDate":"2025-02-10","priority":"High","note":"Learn from your mistakes","id":0,"projectId":0}],"id":0}]);
    }
    return JSON.parse(localStorage.getItem("localApp"));
}