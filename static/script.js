//Frontend
//Web Music Player
const btnEl = document.querySelector('.btn')

function play(){
    console.log()
    var audio = document.getElementById("audioPlayer");
    audio.play();
}

function pause(){
    console.log()
    var audio = document.getElementById("audioPlayer");
    audio.pause();
}

function stop(){
    console.log()
    var audio = document.getElementById("audioPlayer");
    audio.pause();
    audio.currentTime = 0;
}

btnEl.addEventListener('click', play)
btnEl.addEventListener('click', pause)
btnEl.addEventListener('click', stop)
