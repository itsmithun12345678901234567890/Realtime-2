function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    video = creatCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1rzBmt3bM/model.json',modelLoaded);
}

function draw(){
    image(video,0,0,300,300)
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function gotResult(error,results) {
    if(error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("results_object_name").innerHTML=results[0].label;
        document.getElementById("result_onject_accuracy").innerHTML =results[0].confidence.toFixed(3);
    }
}