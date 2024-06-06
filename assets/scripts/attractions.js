// Add in dropdown (hide and show functionality) for buttons on attractions page //
let attractionsButtons = document.getElementsByClassName("attractions-button")
let attractionsDivs = document.getElementsByClassName("attractions-container")

for (let i = 0; i < attractionsButtons.length; i++) {
    attractionsButtons[i].addEventListener('click', function () {
        if (attractionsDivs[i].style.display === "none") {
            attractionsDivs[i].style.display = "block";
        } else {
            attractionsDivs[i].style.display = "none";
        }
    })
}