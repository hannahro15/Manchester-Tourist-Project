// Memory Game

// Initialize classes and ID's
const cards = document.querySelectorAll(".card-item");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const gameTimer = document.getElementById("game-timer");
//const easylevel = document.getElementById("easy-level");
//const mediumLevel = document.getElementById("medium-level");
//const difficultLevel = document.getElementById("difficult-level");
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
        card.classList.remove("flip-card", "matched-cards");
    });
}

//Lock game board before game starting
//function lockgameBoard() {
// firstCard.removeEventListener('click', flipCard);
// secondCard.removeEventListener('click', flipCard);
//}


// Start Game
function startGame() {
    clearInterval(timer);
    shuffleCards();
    matchedCardsCount = 0;
    startGameTimer();
    cards.forEach(card => {
        card.addEventListener("click", () => {
            flipCard(card);
            // Invoke the matching cards function - (please see below for function)
            checkMatchingCards();
        });
    });
}

//Function to flip cards
function flipCard(card) {
    card.classList.add("flip-card");
}


function startGameTimer() {
    let seconds = 120;
    // Set difficulty levels
    //if (easyLevel) {
    //  seconds = 120;
    //  } else if (mediumLevel) {
    // seconds = 90;
    //   } else if (difficultLevel) {
    //   seconds = 60;
    // } else {
    //   alert("This is not a level!");
    //  return;
    //  };

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


// Reset Game
function resetGame() {
    startGame();
}

// Function to unflip non-matching cards
function unflipCards(cards) {
    setTimeout(() => {
        cards.forEach(card => {
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
        // Call the function of unflipping non-matching cards //
        unflipCards([firstCard, secondCard]);
    }

    // To end game if successful
    if (matchedCardsCount === cards.length / 2) {
        clearInterval(timer);
        gameTimer.textContent = "Congratulations for completing the Manchester Memory Game!";
    }
}