let audio = document.getElementById("audio");
let cover = document.getElementById("cover");

let isPlaying = false;

function togglePlay(){

    if(isPlaying){
        audio.pause();
        cover.classList.remove("playing");
        cover.src = "imagen1.png"; // vuelve a la primera
        isPlaying = false;

    } else {
        audio.play();
        cover.src = "imagen2.png"; // cambia a la segunda
        cover.classList.add("playing");
        isPlaying = true;
    }
}