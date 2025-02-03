import createElement from "./createElement";

export default function createMenu() {
    const content = createElement("div", "id", "menu-content", "")
    const foodHeader = createElement("h2", "class", "menu-header", "Food");
    const drinkHeader = createElement("h2", "class", "menu-header", "Beverages");
    const foodContainerOne = createElement("div", "class", "menu-container", "");
    const foodContainerTwo = createElement("div", "class", "menu-container", "");
    const foodContainerThree = createElement("div", "class", "menu-container", "");
    const foodContainerFour = createElement("div", "class", "menu-container", "");
    const foodItemOne = createElement("h4", "class", "item-header", "Biryani");
    const foodItemTwo = createElement("h4", "class", "item-header", "Butter Chicken");
    const foodItemThree = createElement("h4", "class", "item-header", "Chicken Tikka Masala");
    const foodItemFour = createElement("h4", "class", "item-header", "Prawns Pakoda (12pcs)");
    const foodPriceOne = createElement("h5", "class", "menu-price", "15,00€");
    const foodPriceTwo = createElement("h5", "class", "menu-price", "18,00€");
    const foodPriceThree = createElement("h5", "class", "menu-price", "18,00€");
    const foodPriceFour = createElement("h5", "class", "menu-price", "20,00€");
    const foodDescOne = createElement("p", "class", "menu-para", "Chicken, Spices and Rice");
    const foodDescTwo = createElement("p", "class", "menu-para", "Chicken in cream and Naan");
    const foodDescThree = createElement("p", "class", "menu-para", "Spicy Tandoori chicken and Naan");
    const foodDescFour = createElement("p", "class", "menu-para", "Prawns fried in spicy batter");
    const drinkContainerOne = createElement("div", "class", "menu-container", "");
    const drinkContainerTwo = createElement("div", "class", "menu-container", "");
    const drinkItemOne = createElement("h4", "class", "item-header", "Mango Lassi");
    const drinkItemTwo = createElement("h4", "class", "item-header", "Jaljeera Mojito");
    const drinkPriceOne = createElement("h5", "class", "menu-price", "5,00€");
    const drinkPriceTwo = createElement("h5", "class", "menu-price", "8,00€");
    const drinkDescOne = createElement("p", "class", "menu-para", "Creamy mango yogurt");
    const drinkDescTwo = createElement("p", "class", "menu-para", "Vodka and lemon mixed in Jaljeera water");
    const foodOneArr =  [foodItemOne, foodPriceOne, foodDescOne];
    const foodTwoArr =  [foodItemTwo, foodPriceTwo, foodDescTwo];
    const foodThreeArr =  [foodItemThree, foodPriceThree, foodDescThree];
    const foodFourArr =  [foodItemFour, foodPriceFour, foodDescFour];
    const drinksOne = [drinkItemOne, drinkPriceOne, drinkDescOne];
    const drinksTwo = [drinkItemTwo, drinkPriceTwo, drinkDescTwo];
    for (let i = 0; i < foodOneArr.length; i++) {
        foodContainerOne.appendChild(foodOneArr[i]);
        foodContainerTwo.appendChild(foodTwoArr[i]);
        foodContainerThree.appendChild(foodThreeArr[i]);
        foodContainerFour.appendChild(foodFourArr[i]);
        drinkContainerOne.appendChild(drinksOne[i]);
        drinkContainerTwo.appendChild(drinksTwo[i]);
    }
    content.appendChild(foodHeader);
    content.appendChild(foodContainerOne);
    content.appendChild(foodContainerTwo);
    content.appendChild(foodContainerThree);
    content.appendChild(foodContainerFour);
    content.appendChild(drinkHeader);
    content.appendChild(drinkContainerOne);
    content.appendChild(drinkContainerTwo);
    return content;
}