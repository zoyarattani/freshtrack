const themeButton = document.getElementById("theme-button");
const highlightButton = document.getElementById("highlight-button");
const messageButton = document.getElementById("message-button");

const message = document.getElementById("interactive-message");
const features = document.getElementById("features");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

highlightButton.addEventListener("click", function () {
    features.classList.toggle("highlight");

    if (features.classList.contains("highlight")) {
        highlightButton.textContent = "Remove Highlight";
    } else {
        highlightButton.textContent = "Highlight Features";
    }
});

messageButton.addEventListener("click", function () {
    if (message.classList.contains("special-message")) {
        message.textContent = "Use the buttons below to change a few things on the page.";
        message.classList.remove("special-message");
        messageButton.textContent = "Change Message";
    } else {
        message.textContent = "Don't forget to check which groceries need to be used soon!";
        message.classList.add("special-message");
        messageButton.textContent = "Reset Message";
    }
});