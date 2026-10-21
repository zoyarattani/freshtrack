const themeButton = document.getElementById("theme-button");
const highlightButton = document.getElementById("highlight-button");
const messageButton = document.getElementById("message-button");

const message = document.getElementById("interactive-message");
const featureItems = document.querySelectorAll(".feature-item");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "Light Mode";
        document.body.style.letterSpacing = "0.2px";
    } else {
        themeButton.innerHTML = "Dark Mode";
        document.body.style.letterSpacing = "0px";
    }
});

highlightButton.addEventListener("click", function () {
    featureItems.forEach(function (item) {
        item.classList.toggle("highlight-feature");
    });

    if (highlightButton.innerHTML === "Highlight Features") {
        highlightButton.innerHTML = "Remove Highlight";
    } else {
        highlightButton.innerHTML = "Highlight Features";
    }
});

messageButton.addEventListener("click", function () {
    if (message.classList.contains("special-message")) {
        message.innerHTML =
            "Use the buttons below to change a few things on the page.";

        message.classList.remove("special-message");
        message.style.fontSize = "1rem";
        message.style.fontStyle = "normal";

        messageButton.innerHTML = "Change Message";
    } else {
        message.innerHTML =
            "Remember to check which groceries need to be used soon!";

        message.classList.add("special-message");
        message.style.fontSize = "1.2rem";
        message.style.fontStyle = "italic";

        messageButton.innerHTML = "Reset Message";
    }
});