const speech = new SpeechSynthesisUtterance();
speech.lang = "en";



function start(){
    speech.text = document.getElementById("textEntered").value;
    window.speechSynthesis.speak(speech);
}

