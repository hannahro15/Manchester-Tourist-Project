// Memory Game

// Initialize variables, classes and ID's
const cards = document.querySelectorAll(".card-item");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const gameTimer = document.getElementById("game-timer");
let timer;
let matchedCardsCount = 0;

// Start button click event using an event listener
startButton.addEventListener("click", function () {
    startGame();
});

// Reset button click event using an event listener
resetButton.addEventListener("click", function () {
    resetGame();
});

// Shuffle Cards
/* Shuffling code function taken from the
 Marina Ferreira tutorial https://youtu.be/NGtx3EBlpNE?feature=shared 
 and customized to make it work for 24 cards. */
function shuffleCards() {
    cards.forEach((card) => {
        let randomCardOrder = Math.floor(Math.random() * 24);
        card.style.order = randomCardOrder;
        // Unflip all cards the startGame and resetGame buttons are clicked
        card.classList.remove("flip-card", "matched-cards");
    });
}

// Start Game function
function startGame() {
    clearInterval(timer);
    shuffleCards();
    matchedCardsCount = 0;
    startGameTimer();
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            flipCard(card);
            checkMatchingCards();
        });
    });
}

// Function to flip cards
function flipCard(card) {
    card.classList.add("flip-card");
}

// Funcion for the game timer
function startGameTimer() {
    let seconds = 120;
    timer = setInterval(() => {
        if (seconds > 0) {
            gameTimer.textContent = "You have " + seconds + " seconds remaining!";
            seconds--;
        } else {
            clearInterval(timer);
            gameTimer.textContent = "Game Over! Please click the reset button to try again!";
        }
    }, 1000);
}

// Reset Game function
function resetGame() {
    startGame();
}

// Function to unflip non-matching cards
function unflipCards(cards) {
    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.remove("flip-card");
        });
        if (!cards[0].classList.contains("matched-cards") || !cards[1].classList.contains("matched-cards")) {
            gameTimer.textContent = "I am sorry but this isn't a match. Please try again!";
        }
    }, 600);
}

// Check matching cards
function checkMatchingCards() {
    const flippedCards = document.querySelectorAll(".flip-card");

    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;

        // Match cards comparison
        if (firstCard.dataset.name === secondCard.dataset.name) {
            firstCard.classList.add("matched-cards");
            secondCard.classList.add("matched-cards");
            matchedCardsCount++;
            gameTimer.textContent = "Well done! You have correctly matched a pair!";
        }
        // Call the function of unflipping non-matching cards
        unflipCards([firstCard, secondCard]);
    }

    // To end game if successful with message
    if (matchedCardsCount === cards.length / 2) {
        clearInterval(timer);
        gameTimer.textContent = "Congratulations for completing the Manchester Memory Game!";
    }
}