export default function saveToLocalStorage(array) {
    localStorage.setItem("localApp", JSON.stringify(array));
}

export function getFromLocalStorage() {
    if(localStorage.length === 0) {
        saveToLocalStorage([]);
    }
    return JSON.parse(localStorage.getItem("localApp"));
}