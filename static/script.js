//Frontend
//Web Music Player
const btnEl = document.querySelector('.btn')
const audio = document.getElementById("audioPlayer");
const currentTimeElement = document.getElementById("currentTime");
const totalTimeElement = document.getElementById("totalTime");
    
    audio.addEventListener("loadmetadata", function(){
        var duration = audio.duration;
        progressBar.max = duration
        updateTimeDisplay();
    });

    audio.addEventListener("timeupdate", function(){
        var currentTime = audio.currentTime;
        progressBar.value = currentTime;
        updateTimeDisplay();
    })

    function updateTimeDisplay(){
        currentTimeElement.textContent = formatTime(audio.currentTime);
        totalTimeElement.textContent = formatTime(audio.duration);
    }

    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

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

    btnEl.addEventListener('click', play)
    btnEl.addEventListener('click', pause)
    btnEl.addEventListener('click', stop)
