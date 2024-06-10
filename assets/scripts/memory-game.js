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
let cardOne = null;
let cardTwo = null;


cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add('flip-item')

        if (!cardOne) {
            cardOne = card;
        } else if (cardOne !== card) {
            cardTwo = card;
        }
        if (cardOne.dataset.name === cardTwo.dataset.name) {
            cardOne.removeEventListener('click')
            cardTwo.removeEventListener('click')
        } else {
            setTimeout(() => {
                cardOne.classList.remove('flip-item')
                cardTwo.classList.remove('flip-item')
            }, 1500);
        }
    })
})

function shuffle() {
    card.forEach(card => {
        let randomCardOrder = Math.floor(Math.random() * 24);
        card.style.order = randomCardOrder;
    })
}






// Timer in the game function
// function startGameTimer() {}

// Ending game when timer is up
// function endGame() {}

// Restart game or play again
// function restartGame() {}