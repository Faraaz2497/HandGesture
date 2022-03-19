prediction1 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera")

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>"
    });
}

console.log("ml5 version=" + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-sTJmR-_9/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Is Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speakData1 = "The prediction is " + prediction1;
    var utterThis = new SpeechSynthesisUtterance(speakData1);
    synth.speak(utterThis)
}
function check(){
    speak()
}