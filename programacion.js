function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("modooscuro")
}

var audio = document.getElementById('audio');
var reproducir = document.getElementById("reproducir");
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        reproducir.innerHTML = "Pausar";
    }else{
        count = 0;
        audio.pause();
        reproducir.innerHTML = "Reproducir";
    }
}

function stop(){
    playPause();
    audio.pause();
    audio.currentTime = 0;
    reproducir.innerHTML = "Reproducir";
}