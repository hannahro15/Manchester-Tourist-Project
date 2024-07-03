// Add in dropdown toggle function for buttons for the food and drinks sections 
let foodDrinksButtons = document.getElementsByClassName("food-drinks-button");
let foodDrinksDivs = document.getElementsByClassName("food-drinks-container");

for (let i = 0; i < foodDrinksButtons.length; i++) {
    foodDrinksButtons[i].addEventListener("click", function () {
        foodDrinksDivs[i].classList.toggle("hidden");
    });
}

// Add in dropdown toggle function for buttons for hotels and transport sections
let hotelsTransportButtons = document.getElementsByClassName("hotels-transport-button");
let hotelsTransportDivs = document.getElementsByClassName("hotels-transport-container");

for (let i = 0; i < hotelsTransportButtons.length; i++) {
    hotelsTransportButtons[i].addEventListener("click", function () {
        hotelsTransportDivs[i].classList.toggle("hidden");
    });
}