class UI {

  constructor(player){
    this.player = player;
    this.pontos = new Pontos();
    this.life = this.player.lifeC;

  }


  // mostraVida(){
  //   this.tamanhoTexto = 100;
  //   fill('white');
  //   textSize(this.tamanhoTexto);
  //   textAlign(LEFT);
  //   text(this.player.life, 0, 0 + this.tamanhoTexto);
  // }

  GameModeNormal(){
    this.pontos.mostraPontos();
    this.life.draw();
  }

  waitingMenu(){
    fill('white');
    textSize(25);
    textAlign(CENTER);
    text('Pressione qualquer tecla para começar', width/2 , height/2 );
  }

  GameModePause(){
    this.pontos.justShowPoints();
    this.life.draw();
  }

  GameModeGameOver(){
    this.life.draw();
    image(imagemGameOver, width/2 - 412 * scale, height/2 * scale)
    fill('white');
    textSize(25);
    textAlign(CENTER);
    text('Pressione "ENTER" para reiniciar', width/2 , height/2 );
    textSize(25);
    text('Sua pontuação foi de ' + parseInt(this.pontos.pontos), width/2 , height/4 * 2.5 )
  }
}
