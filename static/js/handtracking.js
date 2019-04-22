const video = document.getElementById("myvideo");
const canvas = document.getElementById("videocanvas");
const context = canvas.getContext("2d");

let isVideo = false;
let model = null;

alert("Please wait for model to load before clicking accessibility.");

// video.width = 500;
// video.height = 400;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video
    scoreThreshold: 0.6,
    maxNumBoxes: 20,
    iouThreshold: 0.5,
};

function loadModel() {
     handTrack.load(modelParams).then(lmodel => {
        model = lmodel;
        console.log("Model loaded.");
        alert("Model loaded. You may now use accessibility features.");
    });
}

function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            isVideo = true;
            runDetection();
        } else {
            console.log("Please enable video");
        }
    });
}

function handControl(predictions) {
    window.game.accessibleControl(predictions)
}

function toggleVideo() {
    if (!isVideo) {
        console.log("Starting video");
        startVideo();
    } else {
        console.log("Stopping video.");
        handTrack.stopVideo(video);
        isVideo = false;
        console.log("Video stopped.")
    }
}

function runDetection() {
    model.detect(video).then(predictions => {
        // console.log("Predictions: ", predictions);
        // get the middle x value of the bounding box and map to paddle location
        model.renderPredictions(predictions, canvas, context, video);
        handControl(predictions);
        if (isVideo) {
            runDetection(video)
        }
    });
}
