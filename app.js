//input as click event on the button
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorhandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server! try agaian after some time");
}

function clickhandler() {
  // outputDiv.innerText = "random text" + txtInput.value;

  // taking input
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
      //   console.log(json.contents.translated);
    })
    .catch(errorhandler);
}
//process the click
btnTranslate.addEventListener("click", clickhandler);
