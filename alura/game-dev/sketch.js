
function setup() {
  createCanvas(1920 * scale , 1080 * scale);
  imagemInvertedButtonPlay.filter(INVERT);
  imagemInvertedButtonHelp.filter(INVERT);
  imagemInvertedButtonCredits.filter(INVERT);
  imagemInvertedButtonBack.filter(INVERT);
  manager = new Manager();
  frameRate(60);


  window.addEventListener("keydown", function(e) {
      // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);
  }

function keyPressed() {
  if(key == 'ArrowUp' || keyCode == 32)
    personagem.pula();
  if(gameState == 'GAME-OVER' && key == 'Enter'){
    manager = new Manager();
  }
  if(gameState == 'WAITING'){
    levelSelector.unPause();
  }
  if((gameState == 'FASE1' || gameState == 'FASE2' || gameState == 'FASE3' || gameState == 'FASE4') && keyCode == 27 ){
    gameState = 'WAITING';
  }
}

function mousePressed(){
    if(gameState == "HOMESCREEN"){
      levelSelector.click();
    }
    if(gameState == "CREDITS"){
      levelSelector.creditsClass.click();
    }
    if(gameState == "HELP"){
      levelSelector.helpClass.click();
    }
}

function draw() {
  manager.draw();
}
