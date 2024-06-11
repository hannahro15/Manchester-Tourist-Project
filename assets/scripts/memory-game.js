// Memory Game
// Initialize classes annd ID's
const cards = document.querySelectorAll(".card-item")
let cardOne = document.querySelectorAll('.card-one');
let cardTwo = document.querySelectorAll('.card-two');
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')

// Function to Flip Card
function flipCard() {
    this.classList.add('flip-item');
}
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

// Function to Match cards
function matchCards(cardOne, cardTwo) {
    if (cardOne.dataset.name === cardTwo.dataset.name) {
        cardOne.removeEventListener('click', flipCard)
        cardTwo.removeEventListener('click', flipCard)
    } else {
        setTimeout(() => {
            cardOne.classList.remove('flip-item')
            cardTwo.classList.remove('flip-item')
        }, 1500);
    }
}

// Shuffle Cards
function shuffleCards() {
    card.forEach(card => {
        let randomCardOrder = Math.floor(Math.random() * 24);
        card.style.order = randomCardOrder;
    })
}

// Start Game
function startGame() {
    startButton.addEventListener('click', shuffleCards)
}

// Restart/reset game and play again
function resetGame() {
    resetButton.addEventListener('click', shuffleCards)
}


// Timer in the game function
// function startGameTimer() {}

// Ending game when timer is up
// function endGame() {}