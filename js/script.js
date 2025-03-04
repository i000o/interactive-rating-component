document.addEventListener("DOMContentLoaded", function() {

    let form = document.querySelector(".form");
    let selectedRating = document.querySelector(".rating");
    let card = document.querySelector(".container");
    let thankYouCard = document.querySelector(".thank-you");

    form.addEventListener("submit", function(e) { 
        e.preventDefault();
        let selectedRating = form.querySelector('input[name="rating"]:checked');

        if (selectedRating) selectedRating.textContent = selectedRating.value; 
        else selectedRating.textContent = 0;

        card.style.display = "none";
        thankYouCard.style.display = "block";
        });
});

//     console.log("You selected ${rating} out of 5")

// stop it defaulting on a choice for you 
// thank you card is still visible by default 
