var music = "";
var lwristx = "";
var rwristx = "";
var lwristy = "";
var rwristy = "";
var thedeadgrtgrtgrandparents = "";
var scorerw = "";

function preload(){

music = loadSound("icanthelpit.mp3");

}

function draw(){

image(video, 0, 0, 700, 600);

fill("#5e548e");
stroke("#588157");

if(thedeadgrtgrtgrandparents > 0.1){

    circle(lwristx, lwristy, 20);

var theyoungchild = Number(lwristy);
var thedeadchild = floor(theyoungchild);
var thedeadgrandparents = thedeadchild/1000;
var vol = thedeadgrandparents*2;

document.getElementById("volume").innerHTML = "Volume = "+vol;
music.setVolume(vol);
}

if(scorerw > 0.2){

    circle(rwristx, rwristy, 20);

    if(rwristy > 0 && rwristy <= 100){

        music.rate(0.5);
        document.getElementById("speed").innerHTML = "Speed = 0.5x";

    }

    if(rwristy > 100 && rwristy <= 200){

        music.rate(1.0);
        document.getElementById("speed").innerHTML = "Speed = 1.0x";

    }

    if(rwristy > 200 && rwristy <= 300){

        music.rate(1.5);
        document.getElementById("speed").innerHTML = "Speed = 1.5x";

    }

    if(rwristy > 300 && rwristy <= 400){

        music.rate(2.0);
        document.getElementById("speed").innerHTML = "Speed = 2.0x";

    }

    if(rwristy > 400 && rwristy <= 500){

        music.rate(2.5);
        document.getElementById("speed").innerHTML = "Speed = 2.5x";

    }

}
}

function setup(){

canvas = createCanvas(700, 600);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on("pose", gotPoses);

}

function themiddlechild(){

music.play();
music.setVolume(1);
music.rate(1);

}

function modelLoaded(){

    console.log("modelLoaded");

}

function gotPoses(results){

    if(results.length>0){

        console.log(results);
        lwristx = results[0].pose.leftWrist.x;
        lwristy = results[0].pose.leftWrist.y;
        
        console.log("leftwristx = "+lwristx+", leftwristy = "+lwristy);

        rwristx = results[0].pose.rightWrist.x;
        rwristy = results[0].pose.rightWrist.y;
        
        console.log("rightwristx = "+rwristx+", rightwristy = "+rwristy);

        var thedeadgrtgrtgrandparents = results[0].pose.keypoints[9].score;
        var scorerw = results[0].pose.keypoints[10].score;
        console.log("score of right wrist = "+scorerw);

    }

}

