import createElement from "./createElement";

export default function createHomePage() {
    const content = createElement("div", "id", "home-content", "");
    const logoContainer = createElement("div", "id", "logo-container", "");
    const logoHeaderOne = createElement("h1", "class", "logo-header", "Tikka");
    const logoHeaderTwo = createElement("h1", "class", "logo-header", "Tale");
    const logoUnderText = createElement("h4", "id", "logo-under-text", "Bar & Restaurant");
    const logoArr = [logoHeaderOne, logoHeaderTwo, logoUnderText ];
    const aboutText = `Welcome to Tikka Tale an Indian Restaurant established in Kuopio.
    In India, the best way to win hearts is through the stomach,
    and that is what our goal is with Tikka Tale we serve authentic 
    Indian food with best service in the town!`
    const about = createElement("p", "id", "about-text", aboutText);
    const hoursContainer = createElement("div", "class", "hours-location-container", "");
    const hoursHeader = createElement("h4", "class", "hours-location-headers", "Hours");
    const hoursParaOne = createElement("p", "class", "hours-location-para", "Monday - Friday: 10am - 7pm");
    const hoursParaTwo = createElement("p", "class", "hours-location-para", "Saturday - Sunday: 12pm - 10pm");
    const hoursArr = [hoursHeader, hoursParaOne, hoursParaTwo];
    for(let i = 0; i < logoArr.length; i++) {
        logoContainer.appendChild(logoArr[i]);
        hoursContainer.appendChild(hoursArr[i]);
    }
    const locationContainer = createElement("div", "class", "hours-location-container", "");
    const locationheader = createElement("h4", "class", "hours-location-headers", "Location");
    const locationPara = createElement("p", "class", "hours-location.para", "Keskuta 1 Kuopio Finland");
    locationContainer.appendChild(locationheader);
    locationContainer.appendChild(locationPara);
    content.appendChild(logoContainer);
    content.appendChild(about);
    content.appendChild(hoursContainer);
    content.appendChild(locationContainer);
    return content;
}