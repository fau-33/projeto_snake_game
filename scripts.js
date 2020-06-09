let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG(){
  // cor de fundo do jogo
  context.fillStyle = "lightgreen";
  // desenhar retângulo do jogo
  context.fillRect(0, 0, 16 * box, 16 * box);

}

criarBG();