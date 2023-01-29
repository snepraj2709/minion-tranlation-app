//input as click event on the button
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

//process that the click happened
btnTranslate.addEventListener("click", clickhandler);

//output based on that Click input and the above processing
function clickhandler() {
  console.log("Clicked");
  console.log("input", txtInput.value);
}
