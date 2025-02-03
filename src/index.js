import "./styles.css"
import createHomePage from "./home"
import createMenu from "./menu";
import createContactPage from "./contact"

const bodyContent = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
const buttons = [homeBtn, menuBtn, contactBtn];
buttons.forEach(buttons => buttons.addEventListener("click", switchMainContent));

function toggleAnimation(button) {
    for (let i = 0; i < buttons.length; i++) {
        if(button === buttons[i].id) {
            buttons[i].style.animation = "flicker 1.5s infinite alternate";
        }
        else {
            buttons[i].style.animation = "none";
        }
    }
}

function switchMainContent(event) {
    const target = event.target.id;
    toggleAnimation(target)
    switch(target){
        case "home-btn":
            bodyContent.textContent = "";
            bodyContent.appendChild(createHomePage());
        break;
        case "menu-btn":
            bodyContent.textContent = "";
            bodyContent.appendChild(createMenu());
        break;
        case "contact-btn":
            bodyContent.textContent = "";
            bodyContent.appendChild(createContactPage());
        break;
    }
}

homeBtn.style.animation = "flicker 1.5s infinite alternate";
bodyContent.appendChild(createHomePage());