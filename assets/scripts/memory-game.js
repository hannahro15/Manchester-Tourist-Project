// Memory Game

// Cards Array
document.addEventListener('DOMContentLoaded', () => {
    let cardsArr = [{
        name: "manc-city",
        img: "assets/images/manc-city.png"
    }, {
        name: "manc-united",
        img: "assets/images/manc-united.png"
    }, {
        name: "tram",
        img: "assets/images/tram.png"
    }, {
        name: "market-stall",
        img: "assets/images/market-stall.png"
    }, {
        name: "rain",
        img: "assets/images/rain.png"
    }, {
        name: "restaurant",
        img: "assets/images/restaurant.png"
    }, {
        name: "violin",
        img: "assets/images/violin.png"
    }, {
        name: "park",
        img: "assets/images/park.png"
    }, {
        name: "bee",
        img: "assets/images/bee.png"
    }, {
        name: "art-gallery",
        img: "assets/images/art-gallery.png"
    }, {
        name: "theatre",
        img: "assets/images/theatre.png"
    }, {
        name: "river",
        img: "assets/images/river.png"
    }, {
        name: "manc-city",
        img: "assets/images/manc-city.png"
    }, {
        name: "manc-united",
        img: "assets/images/manc-united.png"
    }, {
        name: "tram",
        img: "assets/images/tram.png"
    }, {
        name: "market-stall",
        img: "assets/images/market-stall.png"
    }, {
        name: "rain",
        img: "assets/images/rain.png"
    }, {
        name: "restaurant",
        img: "assets/images/restaurant.png"
    }, {
        name: "violin",
        img: "assets/images/violin.png"
    }, {
        name: "park",
        img: "assets/images/park.png"
    }, {
        name: "bee",
        img: "assets/images/bee.png"
    }, {
        name: "art-gallery",
        img: "assets/images/art-gallery.png"
    }, {
        name: "theatre",
        img: "assets/images/theatre.png"
    }, {
        name: "river",
        img: "assets/images/river.png"
    }]
})

// Initialize classes annd ID's
const cards = document.querySelectorAll(".card-item")
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')

// Function to Flip Card
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add('flip-item');
    })
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


// Shuffle Cards
// Shuffling code function taken from the Marina Ferreira tutorial https://youtu.be/NGtx3EBlpNE?feature=shared and customized to make it work for 24 cards.
function shuffleCards() {
    card.forEach(card => {
        let randomCardOrder = Math.floor(Math.random() * 24);
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


// Timer in the game function
// function startGameTimer() {}

// Ending game when timer is up
// function endGame() {}