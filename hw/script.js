const themeButton = document.getElementById("theme-button");
const highlightButton = document.getElementById("highlight-button");
const messageButton = document.getElementById("message-button");

const message = document.getElementById("interactive-message");

const featureCards = document.querySelectorAll("#features .info-card");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "Switch to Light Mode";
    } else {
        themeButton.innerHTML = "Switch to Dark Mode";
    }
});

highlightButton.addEventListener("click", function () {
    featureCards.forEach(function (card) {
        card.classList.toggle("highlight-card");
    });

    if (highlightButton.innerHTML === "Highlight Features") {
        highlightButton.innerHTML = "Remove Highlights";
    } else {
        highlightButton.innerHTML = "Highlight Features";
    }
});

messageButton.addEventListener("click", function () {

    if (message.classList.contains("special-message")) {

        message.innerHTML =
            "Try the buttons below to customize the FreshTrack page.";

        message.classList.remove("special-message");
        message.style.fontSize = "1rem";

        messageButton.innerHTML = "Change Message";

    } else {

        message.innerHTML =
            "FreshTrack helps you stay organized, save money, and waste less food!";

        message.classList.add("special-message");
        message.style.fontSize = "1.2rem";

        messageButton.innerHTML = "Reset Message";
    }
});