// SCRIPT.JS
// 1. Menu button for mobile screens (works on every page)
// 2. Text changer on the home page (works only in index.html)

// ===== 1. MENU BUTTON (NEW) =====
var menuBtn = document.getElementById("menuBtn");     // finds the button
var navLinks = document.getElementById("navLinks");   // finds the menu list

// When the button is clicked, add or remove the class "open" (style.css shows the menu when it has "open")
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// ===== 2. TEXT CHANGER =====
// This effect is called a "text rotator" (changing text). It is used only in index.html.

var words = ["Students", "Programmers", "Learners", "Team HSN"];  // words to show, edit here
var number = 0;                                   // which word is showing now
var word = document.getElementById("word");       // finds <span id="word"> in index.html

// Shows the next word, and goes back to the first word after the last one
function changeWord() {
  number = (number + 1) % words.length;
  word.textContent = words[number];
}

// Runs changeWord every 2000 milliseconds (2 seconds)
// NEW: only runs if the page has the word (other pages do not), so no errors on them
if (word) {
  setInterval(changeWord, 2000);
}
