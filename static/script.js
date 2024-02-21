//Frontend
//Web Music Player
const btnEl = document.querySelector('.btn')

function playPause() {
    var audio = document.getElementById("audioPlayer");
    var button = document.getElementById("playPauseButton");
    
    if (audio.paused) {
        audio.play();
        button.innerHTML = "Pause";
    } else {
        audio.pause();
        button.innerHTML = "Play";
    }
}


function stop(){
    console.log()
    var audio = document.getElementById("audioPlayer");
    audio.pause();
    audio.currentTime = 0;
}

//document.addEventListener("DOMContentLoaded", function () {
//    var progressBar = document.getElementById("progressBar");

//}

btnEl.addEventListener('click', play)
btnEl.addEventListener('click', pause)
btnEl.addEventListener('click', stop)
