let audio = document.getElementById("audio");
let cover = document.querySelector(".cover");
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        audio.pause();
        cover.classList.remove("playing");
        isPlaying = false;
    } else {
        audio.play();
        cover.classList.add("playing");
        isPlaying = true;
    }
}