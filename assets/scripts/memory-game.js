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
// When clicking 2 consecutive cards in the right order, if matching it stays flipped over, if not it flips back.
const cards = document.querySelectorAll(".card-item")
const cardFront = document.querySelectorAll('.card-front')
const cardBack = document.querySelectorAll('.card-back')
let cardOne;
let cardTwo;

// flipping function
//cards.forEach(card => {
//  card.addEventListener("click", () => {
//     card.classList.toggle('flip-item');
// });
//});

cards.forEach(card => {
    card.addEventListener("click", (event) => {
        card.classList.add('flip-item')

        if (cardOne) {
            cardOne = event.currentTarget;
        } else {
            cardTwo = event.currentTarget;
        }
        console.log(cardOne)
        console.log(cardTwo)
        if (cardOne.dataset.name === cardTwo.dataset.name) {
            console.log(cardOne.dataset.name)
            console.log(cardTwo.dataset.name)
            cardOne.classList.add('flip-item')
            cardTwo.classList.add('flip-item')
        } else {
            cardOne.classList.remove('flip-item')
            cardTwo.classList.remove('flip-item')
        }
    })
})


// Timer in the game function
// function startGameTimer() {}

// Ending game when timer is up
// function endGame() {}

// Restart game or play again
// function restartGame() {}