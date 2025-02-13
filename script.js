let noClickCount = 0;
const noButtonTexts = ["Are you sure?", "Please?? 😢", "Think again? 🥺", "Last chance! 💔"];
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

function sayYes() {
    window.location.href = "yes.html"; // Redirect to love confession page
}

function sayNo() {
    if (noClickCount < noButtonTexts.length) {
        noButton.innerText = noButtonTexts[noClickCount]; // Change button text
    } 
    
    noClickCount++;

    // Increase "Yes" button size smoothly
    let newSize = 20 + noClickCount * 5; 
    yesButton.style.fontSize = newSize + "px";
    yesButton.style.padding = "15px " + (newSize * 1.5) + "px";

    // After 5 clicks, hide "No" but keep Yes button in the same place
    if (noClickCount >= 5) {
        noButton.style.display = "none"; // Hide No button
    }
}

