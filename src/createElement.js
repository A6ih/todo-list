export default function createElement(type, attribute, attributeName, text) {
    const element = document.createElement(type);
    element.setAttribute(attribute, attributeName);
    element.textContent = text;
    return element;
}

export function createElements (type, attribute, attributeName, amount) {
    const elements = [];
    for (let i = 0; i < amount; i++) {
        elements[i] = document.createElement(type);
        elements[i].setAttribute(attribute, attributeName);
    }
    return elements;
}