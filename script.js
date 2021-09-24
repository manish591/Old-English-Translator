const initiateTranslationButton = document.querySelector('.translate');
const userInput = document.querySelector('.your-input-text-here');
const outputText = document.querySelector('.output-response-section');


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

initiateTranslationButton.addEventListener('click', () => {
    recognition.start();
})

recognition.onresult = function(event) {
    var index = event.resultIndex;
    console.log(index);
    var transcript = event.results[index][0].transcript;
    userInput.innerText = transcript;
    console.log(typeof transcript)

    getTranslation(transcript);
}


function getTranslation(input) {
    fetch(`https://api.funtranslations.com/translate/shakespeare.json?text=${input}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let translatedText = data.contents.translated;
        outputText.innerHTML = translatedText;
    })
}