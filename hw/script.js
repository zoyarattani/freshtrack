const themeButton = document.getElementById("theme-button");
const highlightButton = document.getElementById("highlight-button");
const messageButton = document.getElementById("message-button");

const message = document.getElementById("interactive-message");
const featureCards = document.querySelectorAll(".info-card");
const header = document.querySelector("header");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    themeButton.innerHTML = document.body.classList.contains("dark-mode")
        ? "Switch to Light Mode"
        : "Toggle Dark Mode";
});

highlightButton.addEventListener("click", function () {
    featureCards.forEach(function (card) {
        card.classList.toggle("highlight-card");
    });

    header.style.borderBottom = "6px solid #b8e6bd";
});

messageButton.addEventListener("click", function () {
    message.innerHTML =
        "FreshTrack helps you stay organized, save money, and waste less food!";

    message.classList.add("special-message");

    message.style.fontSize = "1.2rem";
});