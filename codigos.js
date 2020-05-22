function alteraCor(){
    var texto = document.getElementById("titulo1");
    var player = document.getElementById("musicplayer");

    var percorrido = Math.round((player.currentTime / player.duration)*100);//obtendo a porcentagem de musica que ja foi tocada
    texto.style.backgroundImage = "linear-gradient(to right, blue "+ percorrido + "%, red 0)";
    console.log(percorrido);
}

function setPlayer(){
    var player = document.getElementById("musicplayer");
    player.onplaying = function(){intervalo = setInterval(alteraCor,100);};
    player.onpause = function(){clearInterval(intervalo);};
    player.onended = function(){
        clearInterval(intervalo);
        ;
    };
    player.onwaiting = function(){
        clearInterval(intervalo);
        document.getElementById("titulo1").style.backgroundImage = "linear-gradient(to right, blue 100%, red 0)";
    };
}
var intervalo;
setPlayer();

