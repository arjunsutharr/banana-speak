var userInput = document.querySelector("#user-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function clickHandler() {
    var inputText = userInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
};

btnTranslate.addEventListener("click", clickHandler);

