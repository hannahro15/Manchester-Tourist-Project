// Hamburger Menu //
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function hamburgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};




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

// Add in dropdown (hide and show functionality) for buttons for the food and drinks sections on the food, hotels and transport page //
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

// Add in dropdown (hide and show functionality) for buttons for hotels and transport sections on the food, hotels and transport page //
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

// Memory Game

// let gameContainer = document.getElementById('game-container')



// Load game when entering page
// function loadGame() {}

// When clicking start, the game begins
// function startGame() {
// }

// Shuffle cards before game starts
// function shuffleCards() {}

// When click on cards it shows the pictures after clicking and button
// Flip cards
const cards = document.querySelectorAll(".card-item")
const cardFront = document.querySelectorAll('.card-front')
const cardBack = document.querySelectorAll('.card-back')

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle('flip-item');
    });
});


// When clicking 2 consecutive cards in the right order, if matching it stays flipped over, if not it flips back.
// function matchingCards() {}

// Timer in the game function
// function startGameTimer() {}

// Ending game when timer is up
// function endGame() {}

// Restart game or play again
// function restartGame() {}