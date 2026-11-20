// SCRIPT.JS: changes the word in "We are ..." on the home page.
// This effect is called a "text rotator" (changing text). It is used only in index.html.

var words = ["Programmers", "Students", "Learners", "Team HSN"];  // words to show, edit here
var number = 0;                                   // which word is showing now
var word = document.getElementById("word");       // finds <span id="word"> in index.html

// Shows the next word, and goes back to the first word after the last one
function changeWord() {
  number = (number + 1) % words.length;
  word.textContent = words[number];
}

// Runs changeWord every 2000 milliseconds (2 seconds)
setInterval(changeWord, 2000);
