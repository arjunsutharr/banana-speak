var userInput = document.querySelector("#user-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input) {

    var uri= serverURL + "?" + "text=" + input;
    var uriEncoded = encodeURI(uri);
    return uriEncoded;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with the server! please try again after some time")
}

function clickHandler() {
    var inputText = userInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);

