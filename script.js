//Frontend
//Web Music Player

function play(){
    var audio = document.getElementByID("audioPlayer");
    audio.play();
}

function pause(){
    var audio = document.getElementByID("audioPlayer");
    audio.pause();
}

function stop(){
    var audio = document.getElementByID("audioPlayer");
    audio.pause();
    audio.currentTime = 0;
}