import createElement from "./createElement";

export default function createContactPage() {
    const content = createElement("div", "id", "contact-content", "");
    const contactHeader = createElement("h1", "id", "contact-header", "Contact Us");
    const reservationContainer = createElement("div", "class", "contact-container", "");
    const reservationHeader = createElement("h4", "class", "contact-sub-header", "Book a Reservation");
    const reservationNumber = createElement("p", "class", "contact-para", "Phone: +358123456789");
    const reservationEmail = createElement("p", "class", "contact-para", "Email: reserve@tikkatale.com");
    const reservationArr = [reservationHeader, reservationNumber, reservationEmail];
    const cateringContainer = createElement("div", "class", "contact-container", "");
    const cateringHeader = createElement("h4", "class", "contact-sub-header", "Catering services");
    const cateringNumber = createElement("p", "class", "contact-para", "Phone: +358123412345");
    const cateringEmail = createElement("p", "class", "contact-para", "Email: catering@tikkatale.com");
    const cateringArr = [cateringHeader, cateringNumber, cateringEmail];
    const otherContainer = createElement("div", "class", "contact-container", "");
    const otherHeader = createElement("h4", "class", "contact-sub-header", "Other services");
    const otherNumber = createElement("p", "class", "contact-para", "Phone: +358987654321");
    const otherEmail = createElement("p", "class", "contact-para", "Email: info@tikkatale.com");
    const otherArr = [otherHeader, otherNumber, otherEmail];
    for(let i = 0; i < reservationArr.length; i++) {
        reservationContainer.appendChild(reservationArr[i]);
        cateringContainer.appendChild(cateringArr[i]);
        otherContainer.appendChild(otherArr[i]);
    }
    content.appendChild(contactHeader);
    content.appendChild(reservationContainer);
    content.appendChild(cateringContainer);
    content.appendChild(otherContainer);
    return content;
}