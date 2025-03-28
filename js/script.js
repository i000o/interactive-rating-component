document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector(".form");
    let card = document.querySelector(".container");
    let thankYouCard = document.querySelector(".thank-you");
    let ratingOutput = document.querySelector(".rating-output");
    // let pleaseSubmit = document.querySelector(".please-submit"); // Added this line

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let selectedRating = form.querySelector('input[name="rating"]:checked');

        console.log("Selected rating:", selectedRating); 

        if (selectedRating) {
            ratingOutput.textContent = selectedRating.value;
            card.style.display = "none";
            thankYouCard.style.display = "block";
            // pleaseSubmit.style.display = "none"; // Hide the "Please submit a rating" message
        } else {
            // pleaseSubmit.style.display = "block"; // Show the "Please submit a rating" message
            card.style.display = "block";
            thankYouCard.style.display = "none";
        }
    });

    // Clear radio button selection on page load
    window.addEventListener('load', () => {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radio) => {
        radio.checked = false; // Uncheck all radio buttons
        });
    });
});


