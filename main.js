//https://teachablemachine.withgoogle.com/models/a5dNiqovY/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/a5dNiqovY/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
    console.log("model is ready!");
}