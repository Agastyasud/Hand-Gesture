var prediction1= ""
var prediction2= ""
Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality:100
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function capture(){
    Webcam.snap(function(datauri){
     document.getElementById("captured") .innerHTML="<img id='imageclicked' src= "+datauri + ">" 
    })
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/e32MJQf79/model.json",modelloaded)
function modelloaded(){
    console.log("model loaded successfully")
}
function speaker(){
    var speech=window.speechSynthesis
    data1="The first prediction is"+prediction1
    data2="The second prediction is"+prediction2
    var texttospeech=new speechSynthesis(data1+data2)
    speech.speak(texttospeech)
}