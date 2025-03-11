// document.addEventListener("DOMContentLoaded", function() {

//     let form = document.querySelector(".form");
//     let selectedRating = document.querySelector(".rating");
//     let card = document.querySelector(".container");
//     let thankYouCard = document.querySelector(".thank-you");

//     form.addEventListener("submit", function(e) { 
//         e.preventDefault();
//         let selectedRating = form.querySelector('input[name="rating"]:checked');

//         if (selectedRating) selectedRating.textContent = selectedRating.value; 
//         else selectedRating.textContent = 0;

//         card.style.display = "none";
//         thankYouCard.style.display = "block";

//         });
// });

//     // console.log("You selected ${rating} out of 5")

// // stop it defaulting on a choice for you 
// // thank you card is still visible by default 

// document.addEventListener("DOMContentLoaded", function() {
//     let form = document.querySelector(".form");
//     let card = document.querySelector(".container");
//     let thankYouCard = document.querySelector(".thank-you");
//     let ratingOutput = document.querySelector(".rating-output"); // Added this line

//     form.addEventListener("submit", function(e) {
//         e.preventDefault();
//         let selectedRating = form.querySelector('input[name="rating"]:checked');

//         if (selectedRating) {
//             ratingOutput.textContent = `You chose ${selectedRating.value} out of 5`; // Update the rating output
//         } else {
//             ratingOutput.textContent = "You chose 0 out of 5"; // Handle the case where no rating is selected
//         }

//         card.style.display = "none";
//         thankYouCard.style.display = "block";
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector(".form");
    let card = document.querySelector(".container");
    let thankYouCard = document.querySelector(".thank-you");
    let ratingOutput = document.querySelector(".rating-output");
    let pleaseSubmit = document.querySelector(".please-submit"); // Added this line

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let selectedRating = form.querySelector('input[name="rating"]:checked');

        if (selectedRating) {
            ratingOutput.textContent = selectedRating.value;
            card.style.display = "none";
            thankYouCard.style.display = "block";
            pleaseSubmit.style.display = "none"; // Hide the "Please submit a rating" message
        } else {
            pleaseSubmit.style.display = "block"; // Show the "Please submit a rating" message
            card.style.display = "block";
            thankYouCard.style.display = "none";
        }
    });
});


