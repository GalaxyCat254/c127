song1 = "";
song2 = "";

function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function preload(){
    song1 = loadSound("jealous.mp3");
    song2 = loadSound("bloody_mary.mp3");
}

function draw(){
    image(video,0,0,600,500);
}