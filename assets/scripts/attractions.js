// Add in dropdown toggle for buttons on attractions page //
let attractionsButtons = document.getElementsByClassName("attractions-button");
let attractionsDivs = document.getElementsByClassName("attractions-container");

for (let i = 0; i < attractionsButtons.length; i++) {
    attractionsButtons[i].addEventListener("click", function () {
        attractionsDivs[i].classList.toggle("hidden");
    });
}