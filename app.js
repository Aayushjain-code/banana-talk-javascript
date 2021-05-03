// var userName = prompt("Give me username");
// var welcomeMessage = "Welcome to Banana " + userName;
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.aayushjaincode.repl.co/translate/yoda.json";

function getTranslationURL(input) {
	return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
	console.log("error occured", error);
	alert("something wrong with server! try again after some time")
}


function clickHandler() {
	var inputtxt = txtInput.value;

	fetch(getTranslationURL(inputtxt))
		.then(response => response.json())
		.then(json => {
			var translatedText = json.contents.translated;
			outputDiv.innerHTML = translatedText;
		})
		.catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);
