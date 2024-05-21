// Add in dropdown (hide and show functionality) for buttons on attractions page //
let attractionsButtons = document.getElementsByClassName("attractions-button")
let attractionsDivs = document.getElementsByClassName("attractions-container")

for (let i = 0; i < attractionsButtons.length; i++) {
    attractionsButtons[i].addEventListener('click', function () {
        if (attractionsDivs[i].style.display === "none") {
            attractionsDivs[i].style.display = "block";
        } else {
            attractionsDivs[i].style.display = "none";
        }
    })
}

// Add in dropdown (hide and show functionality) for buttons for the food and drinks sections on the food, hotels and tranaport page //
let foodDrinksButtons = document.getElementsByClassName("food-drinks-button")
let foodDrinksDivs = document.getElementsByClassName("food-drinks-container")

for (let i = 0; i < foodDrinksButtons.length; i++) {
    foodDrinksButtons[i].addEventListener('click', function () {
        if (foodDrinksDivs[i].style.display === "none") {
            foodDrinksDivs[i].style.display = "block";
        } else {
            foodDrinksDivs[i].style.display = "none";
        }
    })
}

// Add in dropdown (hide and show functionality) for buttons for hotels and transport sections on the food,hotels and transport page //
let hotelsTransportButtons = document.getElementsByClassName("hotels-transport-button")
let hotelsTransportDivs = document.getElementsByClassName("hotels-transport-container")

for (let i = 0; i < hotelsTransportButtons.length; i++) {
    hotelsTransportButtons[i].addEventListener('click', function () {
        if (hotelsTransportDivs[i].style.display === "none") {
            hotelsTransportDivs[i].style.display = "block";
        } else {
            hotelsTransportDivs[i].style.display = "none";
        }
    })
}