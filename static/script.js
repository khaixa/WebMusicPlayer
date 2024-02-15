//Frontend
//Web Music Player

function play(){
    var audio = document.getElementById("audioPlayer");
    audio.play();
}

function pause(){
    var audio = document.getElementById("audioPlayer");
    audio.pause();
}

function stop(){
    var audio = document.getElementById("audioPlayer");
    audio.pause();
    audio.currentTime = 0;
}