// Memory Game

// Initialize classes annd ID's
const cards = document.querySelectorAll(".card-item")
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')

startButton.addEventListener("click", shuffleCards);
resetButton.addEventListener("click", shuffleCards);

// Shuffle Cards
// Shuffling code function taken from the Marina Ferreira tutorial https://youtu.be/NGtx3EBlpNE?feature=shared and customized to make it work for 24 cards.
function shuffleCards() {
    cards.forEach(card => {
        let randomCardOrder = Math.floor(Math.random() * cards.length);
        card.style.order = randomCardOrder;
    })
}

// Start Game
function startGame() {
    shuffleCards();
}

// Restart/reset game and play again
function resetGame() {
    shuffleCards();
}

// Flip Card
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add('flip-item');
    })
    // Check two matching cards
    card.addEventListener("click", () => {
        const flipItems = document.querySelectorAll('.flip-item');
        if (flipItems.length === 2) {
            const firstCard = flipItems[0];
            const secondCard = flipItems[1];
            // Matched card
            if (firstCard.dataset.name === secondCard.dataset.name) {
                firstCard.classList.add('matched-cards');
                secondCard.classList.add('matched-cards');
            }
            //Unflip no matching cards
            setTimeout(() => {
                flipItems.forEach(card => {
                    card.classList.remove('flip-item');
                });
            }, 1000);
        }
    })
});

// Ending game when timer is up
// function endGame() {}

// Timer in the game function
// function startGameTimer() {}