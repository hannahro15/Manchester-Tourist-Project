// Memory Game

// Initialize classes and ID's
const cards = document.querySelectorAll(".card-item");
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const gameTimer = document.getElementById("game-timer");
let timer;
let matchedCardsCount = 0;

startButton.addEventListener("click", function () {
    startGame();
});

resetButton.addEventListener("click", function () {
    resetGame();
});

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
    clearInterval(timer);
    matchedCardsCount = 0;
    shuffleCards();
    startGameTimer();
}


function startGameTimer() {
    let seconds = 120;
    timer = setTimeout(() => {
        if (seconds > 0) {
            gameTimer.textContent = "You have " + seconds + " seconds remaining!";
            seconds--;
        } else {
            clearInterval(timer);
            gameTimer.textContent = "Game Over! Please click the reset button to try again!";
        }
    }, 1000);
}


// Reset Game
function resetGame() {
    startGame();
}

//Function to flip cards
function flipCard(card) {
    card.classList.add('flip-item');
}

// Game structure
cards.forEach(card => {
    card.addEventListener("click", () => {
        flipCard(card);
        // Invoke the matching cards function - (please see below for function)
        checkMatchingCards();
    })
});

// Check matching cards
function checkMatchingCards() {

    const flippedCards = document.querySelectorAll('.flip-item');
    const matchedCards = document.querySelectorAll(".matched-cards");

    console.log("Flipped Cards:", flippedCards.length);

    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;

        // Match cards comparison
        if (firstCard.dataset.name === secondCard.dataset.name) {
            firstCard.classList.add('matched-cards');
            secondCard.classList.add('matched-cards');
            matchedCardsCount += 2;
            console.log("Matched Cards:", matchedCards.length);

            gameTimer.textContent = "Well done! You have correctly matched a pair!";
        }
        // Unflip non-matching cards after a short delay
        setTimeout(() => {
            flippedCards.forEach(card => {
                card.classList.remove('flip-item');
            });
            gameTimer.textContent = "I am sorry but this isn't a match. Please try again!";
        }, 600);
    }


    // To end game if successful
    if (matchedCardsCount === cards.length) {
        clearInterval(timer);
        gameTimer.textContent = "Congratulations for completing the Manchester Memory Game!";
    }
}