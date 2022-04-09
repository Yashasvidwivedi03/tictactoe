window.addEventListener("load", bindEvents);
// Buttons Attach Event Listener
function bindEvents() {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", printXorZero);
  }
}
var isXorZero = true;
function printXorZero() {
  // print on Button, On Which Button
  console.log(this); // this is a reserved keyword and it hold the current calling object reference
  this.innerText = isXorZero ? "X" : "0";
  isXorZero = !isXorZero;
}

