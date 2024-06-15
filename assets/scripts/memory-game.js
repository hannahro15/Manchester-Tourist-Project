// Memory Game

// Initialize classes annd ID's
const cards = document.querySelectorAll(".card-item")
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')

startButton.addEventListener("click", function () {
    shuffleCards();
    startGameTimer();
});
resetButton.addEventListener("click", shuffleCards);

// Shuffle Cards
// Shuffling code function taken from the Marina Ferreira tutorial https://youtu.be/NGtx3EBlpNE?feature=shared and customized to make it work for 24 cards.
function shuffleCards() {
    cards.forEach(card => {
        let randomCardOrder = Math.floor(Math.random() * 24);
        card.style.order = randomCardOrder;
        // Unflip all cards when both the startGame and resetGame buttons are clicked the same time as shuffling
        card.classList.remove('flip-item', 'matched-cards');
    })
}

// Start Game
function startGame() {
    shuffleCards();
    startGameTimer();
}



// Reset Game
function resetGame() {
    shuffleCards();
}

// Game structure
cards.forEach(card => {
    card.addEventListener("click", () => {
        // Flip Item
        card.classList.add('flip-item');
        // Invoke the matching cards function - (please see below for function)
        checkMatchingCards();
    })
});

// Check matching cards
function checkMatchingCards() {
    const flippedCards = document.querySelectorAll('.flip-item');

    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;

        // Match cards comparison
        if (firstCard.dataset.name === secondCard.dataset.name) {
            firstCard.classList.add('matched-cards');
            secondCard.classList.add('matched-cards');
        }
        // Unflip non-matching cards after a short delay
        setTimeout(() => {
            flippedCards.forEach(card => {
                card.classList.remove('flip-item');
            });
        }, 500);
    }
}

// Function to end game 
function endGame() {
    // Reset to original game state with the cards turned back over again
    setTimeout(() => {
        resetGame();
    }, 1000);
};

endGame();